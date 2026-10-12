import { Component, Inject, LOCALE_ID, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Mohamed Ali Boudiche — Ingénieur data";

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    const description = this.locale === "fr"
      ? "Ingénieur data et applicatif. Pipelines, qualité de donnée et plateformes cloud. Portfolio de Mohamed Ali Boudiche."
      : "Data and application engineer. Pipelines, data quality and cloud platforms. Portfolio of Mohamed Ali Boudiche.";

    this.metaTagService.addTags([
      { name: "keywords", content: "Data Engineer, ingénieur data, .NET, Python, Azure, AWS, Kubernetes, RAG, Mohamed Ali Boudiche" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Mohamed Ali Boudiche" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: description }
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
