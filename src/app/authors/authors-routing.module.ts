import {Router, RouterModule, Routes} from "@angular/router";
import {AuthorsComponent} from "./authors.component";
import {AuthorDetailsComponent} from "../author-details/author-details.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', component: AuthorsComponent
  },
  {
    path: 'author-details/:id', component: AuthorDetailsComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthorsRoutingModule {}
