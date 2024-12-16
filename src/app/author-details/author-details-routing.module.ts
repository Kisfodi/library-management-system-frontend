import {Router, RouterModule, Routes} from "@angular/router";
import {AuthorDetailsComponent} from "./author-details.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: ':id', component: AuthorDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthorDetailsRoutingModule {}
