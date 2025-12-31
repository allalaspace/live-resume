import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Live Resume - Mohamed ali boudich";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Web Developer, Java Developer, Full-stack Java Developer, DevOps Engineer, Android Developer, Mohamed ali boudich Live Resume, Mohamed ali boudich Resume, Mohamed ali Boudich CV, Curriculum Mohamed ali boudich" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Mohamed Ali Boudich" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2020-05-12", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm a Full-stack Web Developer with 10+ years of experience designing web and mobile projects. Find out more in my live-resume!" }
    );

    // Enregistrer le service worker pour PWA
    this.registerServiceWorker();
  }

  private registerServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      // Enregistrer le service worker simple
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker enregistré avec succès:', registration.scope);
          
          // Vérifier les mises à jour
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Nouvelle version disponible
                  if (confirm('Une nouvelle version est disponible. Voulez-vous recharger la page ?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.log('Erreur lors de l\'enregistrement du Service Worker:', error);
        });

      // Écouter les messages du service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('Message du Service Worker:', event.data);
      });
    }
  }
}
