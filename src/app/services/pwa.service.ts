import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private deferredPromptSubject = new BehaviorSubject<BeforeInstallPromptEvent | null>(null);
  public deferredPrompt$: Observable<BeforeInstallPromptEvent | null> = this.deferredPromptSubject.asObservable();

  private isInstalledSubject = new BehaviorSubject<boolean>(false);
  public isInstalled$: Observable<boolean> = this.isInstalledSubject.asObservable();

  constructor() {
    this.checkIfInstalled();
    this.setupBeforeInstallPrompt();
    this.setupAppInstalled();
  }

  private setupBeforeInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (event: Event) => {
      event.preventDefault();
      const promptEvent = event as BeforeInstallPromptEvent;
      this.deferredPromptSubject.next(promptEvent);
      console.log('Prompt d\'installation disponible');
    });
  }

  private setupAppInstalled(): void {
    window.addEventListener('appinstalled', () => {
      console.log('Application installée avec succès');
      this.isInstalledSubject.next(true);
      this.deferredPromptSubject.next(null);
    });
  }

  private checkIfInstalled(): void {
    // Vérifier si l'app est en mode standalone (installée)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalledSubject.next(true);
      console.log('Application déjà installée');
      return;
    }

    // Vérifier sur iOS
    if ((window.navigator as any).standalone === true) {
      this.isInstalledSubject.next(true);
      console.log('Application iOS déjà installée');
      return;
    }

    this.isInstalledSubject.next(false);
  }

  async installApp(): Promise<boolean> {
    const deferredPrompt = this.deferredPromptSubject.value;
    
    if (!deferredPrompt) {
      this.showInstallInstructions();
      return false;
    }

    try {
      // Afficher le prompt d'installation
      await deferredPrompt.prompt();

      // Attendre la réponse de l'utilisateur
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('Utilisateur a accepté l\'installation');
        this.deferredPromptSubject.next(null);
        return true;
      } else {
        console.log('Utilisateur a refusé l\'installation');
        return false;
      }
    } catch (error) {
      console.error('Erreur lors de l\'installation:', error);
      this.showInstallInstructions();
      return false;
    }
  }

  private showInstallInstructions(): void {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    let message = '';

    if (isIOS) {
      message = 'Pour installer cette application sur iOS:\n\n' +
                '1. Appuyez sur le bouton de partage (□↑) en bas de l\'écran\n' +
                '2. Faites défiler et sélectionnez "Sur l\'écran d\'accueil"\n' +
                '3. Appuyez sur "Ajouter"';
    } else if (isAndroid) {
      message = 'Pour installer cette application sur Android:\n\n' +
                '1. Ouvrez le menu (⋮) en haut à droite du navigateur\n' +
                '2. Sélectionnez "Ajouter à l\'écran d\'accueil" ou "Installer l\'application"\n' +
                '3. Confirmez l\'installation';
    } else {
      message = 'Pour installer cette application:\n\n' +
                '1. Recherchez l\'icône d\'installation (➕) dans la barre d\'adresse\n' +
                '2. Cliquez sur "Installer"';
    }

    alert(message);
  }

  get canInstall(): boolean {
    return this.deferredPromptSubject.value !== null && !this.isInstalledSubject.value;
  }
}

