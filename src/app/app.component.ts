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
  }
}
