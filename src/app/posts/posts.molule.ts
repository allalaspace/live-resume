import { NgModule } from "@angular/core";
import { PostsComponent } from "./posts.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";

@NgModule({
    imports: [ CommonModule, FontAwesomeModule, CoreModule, RouterModule ],
    declarations: [ PostsComponent, PostDetailComponent ],
    exports: [ PostsComponent, PostDetailComponent ]
})

export class PostsModule { }
