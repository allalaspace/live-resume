import { NgModule } from "@angular/core";
import { ExperienceComponent } from "./experience.component";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";

@NgModule({
    imports: [ CommonModule, CoreModule ],
    declarations: [ ExperienceComponent ],
    exports: [ ExperienceComponent ]
})

export class ExperienceModule { }
