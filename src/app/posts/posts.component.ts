import { Component, OnInit } from "@angular/core";
import { DataService } from "../core/data.service";
import { IPost } from "./posts-interfaces";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss", "./posts.component.responsivity.scss"]
})
export class PostsComponent implements OnInit {

  posts: IPost[] = [];
  loaded = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts()
      .subscribe({
        next: (posts: IPost[]) => {
          this.posts = posts || [];
          this.loaded = true;
        },
        error: () => {
          this.posts = [];
          this.loaded = true;
        }
      });
  }
}
