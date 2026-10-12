import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../core/data.service";
import { IAbout } from "./about-interfaces";
import { IExperience } from "../experience/experience-interfaces";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Subscription } from "rxjs";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss", "./about.component.responsivity.scss"]
})
export class AboutComponent implements OnInit, OnDestroy {

  name: string;
  skills: string[] = [];

  private subscriptions = new Subscription();
  aboutData: IAbout;

  private readonly skillRules: { label: string; pattern: RegExp }[] = [
    { label: ".NET", pattern: /c#|\.net|asp\.net|ef core/i },
    { label: "Azure", pattern: /azure/i },
    { label: "AWS", pattern: /\baws\b/i },
    { label: "GCP / S3NS", pattern: /gcp|s3ns/i },
    { label: "PostgreSQL", pattern: /postgresql/i },
    { label: "RAG", pattern: /semantic kernel|azure ai search/i }
  ];

  constructor(
    private dataService: DataService,
    private library: FaIconLibrary
  ) {
    library.addIconPacks(fas, fab);
  }

  ngOnInit(): void {
    this.name = "Mohamed Ali Boudiche";

    // Fetches the About information from the Data Service (about.json file).
    this.subscriptions.add(
      this.dataService.getAbout()
        .subscribe((about: IAbout) => this.aboutData = about)
    );

    this.subscriptions.add(
      this.dataService.getExperiences()
        .subscribe((experiences: IExperience[]) => this.skills = this.deriveSkills(experiences))
    );
  }
  
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private deriveSkills(experiences: IExperience[]): string[] {
    const technologies = experiences.reduce(
      (all, experience) => all.concat(experience.technologies || []),
      [] as string[]
    );
    return this.skillRules
      .filter(rule => technologies.some(technology => rule.pattern.test(technology)))
      .map(rule => rule.label);
  }

}
