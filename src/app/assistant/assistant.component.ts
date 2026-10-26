import { Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { LOCALE_ID } from "@angular/core";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import { AssistantService, AssistantSource, ChatTurn } from "./assistant.service";

type ErrorCode = "rate_limit" | "unconfigured" | "upstream" | "invalid" | null;

@Component({
  selector: "app-assistant",
  templateUrl: "./assistant.component.html",
  styleUrls: ["./assistant.component.scss"]
})
export class AssistantComponent implements OnInit, OnDestroy {
  open = false;
  visible = true;
  loading = false;
  errorCode: ErrorCode = null;
  messages: ChatTurn[] = [];
  readonly localeCode: string;

  @ViewChild("questionInput") questionInput?: ElementRef<HTMLInputElement>;
  @ViewChild("thread") thread?: ElementRef<HTMLOListElement>;

  private navigationSubscription?: Subscription;

  constructor(
    private router: Router,
    private assistantService: AssistantService,
    @Inject(LOCALE_ID) locale: string
  ) {
    this.localeCode = locale.split("-")[0] === "fr" ? "fr" : "en";
  }

  ngOnInit(): void {
    this.visible = !this.isNotFound(this.router.url);
    this.navigationSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.visible = !this.isNotFound(this.router.url);
      });
  }

  ngOnDestroy(): void {
    this.navigationSubscription?.unsubscribe();
  }

  @HostListener("document:keydown.escape")
  close(): void {
    this.open = false;
  }

  toggle(): void {
    this.open = !this.open;
    if (this.open) {
      setTimeout(() => this.questionInput?.nativeElement.focus(), 0);
    }
  }

  ask(event: Event): void {
    const text = (event.currentTarget as HTMLButtonElement).textContent || "";
    this.send(text);
  }

  submit(event: Event): void {
    event.preventDefault();
    const input = this.questionInput?.nativeElement;
    if (!input) return;
    const value = input.value;
    input.value = "";
    this.send(value);
  }

  async send(raw: string): Promise<void> {
    const content = raw.trim();
    if (!content || this.loading) return;

    this.errorCode = null;
    this.messages = [...this.messages, { role: "user", content }];
    this.loading = true;
    this.scrollThread();

    const history = this.messages.slice(-6).map((message) => ({
      role: message.role,
      content: message.content
    }));

    try {
      const result = await this.assistantService.ask(this.localeCode, history);
      if (result.error) {
        this.errorCode = result.error;
        return;
      }
      if (!result.answer) {
        this.errorCode = "upstream";
        return;
      }
      this.messages = [...this.messages, {
        role: "assistant",
        content: result.answer,
        sources: result.sources
      }];
      this.scrollThread();
    } catch {
      this.errorCode = "upstream";
    } finally {
      this.loading = false;
    }
  }

  goToSource(source: AssistantSource): void {
    if (source.type === "post") {
      void this.router.navigate(["/posts", source.id]);
      return;
    }

    const fragment = source.type === "about" ? "about" : "experience";
    const scroll = () => document.getElementById(fragment)?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (this.onResumePage()) {
      scroll();
      return;
    }
    void this.router.navigate(["/"]).then(() => setTimeout(scroll, 50));
  }

  private onResumePage(): boolean {
    const path = this.router.url.split("?")[0].split("#")[0];
    return path === "/" || path === "";
  }

  private isNotFound(url: string): boolean {
    return url.includes("page-not-found");
  }

  private scrollThread(): void {
    setTimeout(() => {
      const element = this.thread?.nativeElement;
      if (element) element.scrollTop = element.scrollHeight;
    }, 0);
  }
}
