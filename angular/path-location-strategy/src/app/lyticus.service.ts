import { Injectable } from "@angular/core";

import Lyticus from "lyticus";

@Injectable({
  providedIn: "root"
})
export class LyticusService {
  lyticus;

  init() {
    // Create Lyticus instance
    this.lyticus = new Lyticus("your-website-id");
    // Track the navigator
    this.lyticus.trackNavigator();
    // Start history mode to automatically track page views
    this.lyticus.startHistoryMode();
  }

  // Expose instance method to track clicks
  trackClick(value) {
    this.lyticus.trackClick(value);
  }
}
