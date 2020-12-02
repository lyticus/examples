import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeViewComponent } from "./views/home/home.component";
import { AboutViewComponent } from "./views/about/about.component";

const routes: Routes = [
  { path: "", component: HomeViewComponent },
  { path: "about", component: AboutViewComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  declarations: [HomeViewComponent, AboutViewComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
