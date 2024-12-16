import {NgModule} from "@angular/core";
import {AuthorsComponent} from "./authors.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router, RouterLink, RouterModule} from "@angular/router";
import {AuthorButtonDirective} from "../directives/author-button.directive";
import {AuthorDetailsModule} from "../author-details/author-details.module";
import {AuthorsRoutingModule} from "./authors-routing.module";

@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    AuthorButtonDirective,
    AuthorsRoutingModule,
    RouterLink,
    AuthorDetailsModule
  ]
})

export class AuthorsModule {}
