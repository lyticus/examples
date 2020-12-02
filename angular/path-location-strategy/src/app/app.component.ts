import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <div>
        <a routerLinkActive="active" routerLink="/">Home</a>
      </div>
      <div>
        <a routerLinkActive="active" routerLink="/about">About</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "path-location-strategy";
}
