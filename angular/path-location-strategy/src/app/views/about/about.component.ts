import { Component } from "@angular/core";
import { LyticusService } from "../../lyticus.service";

@Component({
  selector: "about",
  template: `
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        maiores incidunt aliquid sequi expedita qui, nostrum eum minus, harum
        inventore blanditiis optio sit tempora atque voluptas quos. Ad, itaque
        voluptas.
      </p>
      <button (click)="onClick()" style="background: cyan">
        Cyan button
      </button>
    </div>
  `
})
export class AboutViewComponent {
  constructor(private lyticus: LyticusService) {}
  onClick() {
    this.lyticus.trackClick("cyan-button");
  }
}
