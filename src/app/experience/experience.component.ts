import { Component, OnInit, Inject, LOCALE_ID } from "@angular/core";
import { IExperience } from "./experience-interfaces";
import { DataService } from "../core/data.service";
import { SorterService } from "../core/sorter.service";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss", "experience-component.reponsivity.scss"]
})
export class ExperienceComponent implements OnInit {

  experiencesOrdered: IExperience[] = [];
  backgroundUrl: string;
  expanded: Record<number, boolean> = {};

  constructor(
    private dataService: DataService,
    private sortService: SorterService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit(): void {
    this.dataService.getExperiences()
        .subscribe((experiences: IExperience[]) => {
          this.experiencesOrdered = [...experiences].sort(this.sortService.sort("position", "desc"));
          this.backgroundUrl = this.experiencesOrdered[0]?.backgroundUrl;
        });
  }

  isExpanded(id: number): boolean {
    return !!this.expanded[id];
  }

  toggle(id: number): void {
    this.expanded = { ...this.expanded, [id]: !this.expanded[id] };
  }

  hasCityAndCountry(exp: IExperience): boolean {
    const localized = exp.internationalizations?.find(item => item.language === (this.locale || "en"));
    return !!(localized?.city && localized?.country);
  }
}
