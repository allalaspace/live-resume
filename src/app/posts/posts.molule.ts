import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PostsComponent } from "./posts.component";
import { PostsCarouselComponent } from "./posts-carousel/posts-carousel.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";

@NgModule({
    imports: [ CommonModule, FontAwesomeModule, CoreModule, BrowserAnimationsModule, RouterModule ],
    declarations: [ PostsComponent, PostsCarouselComponent, PostDetailComponent ],
    exports: [ PostsComponent, PostDetailComponent ]
})

export class PostsModule { }