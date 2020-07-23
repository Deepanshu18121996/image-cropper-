import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ImageComponent } from "./pages/image/image.component";

const routes: Routes = [
  // { path: "about", component: AboutComponent },
  // { path: "contact", component: ContactComponent },
  { path: "img", component: ImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
