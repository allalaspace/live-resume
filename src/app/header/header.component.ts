import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef, Renderer2, Inject, LOCALE_ID, AfterViewInit } from "@angular/core";
import { faBars, faShareAlt, faCloudDownloadAlt, faDownload, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { NgNavigatorShareService } from "ng-navigator-share";
import { PwaService } from "../services/pwa.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss", "./header.component.responsivity.scss"]
})

export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
    
  private _activeSection: any;
  private _pageXOffset: any;
  private ngNavigatorShareService: NgNavigatorShareService;
  
  hasMenuToggled: boolean;
  faBars: IconDefinition;
  faShareAlt: IconDefinition;
  faCloudDownloadAlt: IconDefinition;
  faDownload: IconDefinition;
  showInstallButton: boolean = false;
  isInstalled: boolean = false;
  private pwaSubscriptions: Subscription[] = [];

  @ViewChild("nav") nav: ElementRef;
  @ViewChild("shareBtn") shareBtn: ElementRef;
  @ViewChild("installBtn") installBtn: ElementRef;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private renderer: Renderer2,
    ngNavigatorShareService: NgNavigatorShareService,
    private pwaService: PwaService
  ) {
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  // use getter setter to define the properties
  get activeSection(): any { 
    return this._activeSection;
  }
  
  get pageXOffset(): any { 
    return this._pageXOffset;
  }

  @Input()
  set pageXOffset(value: any) {
    this._pageXOffset = value;
    this.onDetectScreenSize();
  }

  @Input()
  set activeSection(value: any) {
    this._activeSection = value;
    this.updateNavigation();
  }

  ngAfterViewInit() {    
      // Share button available only for browsers that do support it.
      if (this.ngNavigatorShareService.canShare()) {
        this.shareBtn.nativeElement.style.display = "block";
      }
  }

  ngOnInit(): void {
    this.faBars = faBars;
    this.faShareAlt = faShareAlt;
    this.faCloudDownloadAlt = faCloudDownloadAlt;
    this.faDownload = faDownload;

    // S'abonner aux changements du service PWA
    this.pwaSubscriptions.push(
      this.pwaService.deferredPrompt$.subscribe(prompt => {
        this.showInstallButton = prompt !== null && !this.isInstalled;
      })
    );

    this.pwaSubscriptions.push(
      this.pwaService.isInstalled$.subscribe(installed => {
        this.isInstalled = installed;
        this.showInstallButton = false;
      })
    );
  }

  ngOnDestroy(): void {
    // Nettoyer les abonnements
    this.pwaSubscriptions.forEach(sub => sub.unsubscribe());
  }

  private updateNavigation() {

    if(this._activeSection && this.renderer) {
      
      // Remove any selected anchor
      const activePreviousElem = this.nav.nativeElement.querySelector("a.active");
      
      if(activePreviousElem) {
        this.renderer.removeClass(activePreviousElem, "active");
      }

      const targetElem = this.nav.nativeElement.querySelector(`a[href^="#${this._activeSection}"]`);
      if(targetElem) {
        this.renderer.addClass(targetElem, "active");
      }
    }
  }

  /*
   * For media types such as tablets and mobile devices, the nav-bar navigation should be
   * collapsed by default.
  */
  private onDetectScreenSize() {
    this.hasMenuToggled = this.pageXOffset > 1024;
  }

  onToggleBar() {
    this.hasMenuToggled = !this.hasMenuToggled;
  }

  resetMenu() {
    this.hasMenuToggled = this.pageXOffset > 1024;
  }

  async share() {
    try{
      await this.ngNavigatorShareService.share({
        title: "Live Resume - Mohamed ali boudich ",
        text: "Hello, I'm a Full-stack DotNet Web Developer with 10+ years of experience designing web and mobile projects. Find out more in my live-resume!",
        url: "https://mohamedaliboudich.fr"
      });
    } catch(error) {
      console.log("You app is not shared, reason: ", error);
    }    
  }

  async installApp() {
    await this.pwaService.installApp();
  }
}