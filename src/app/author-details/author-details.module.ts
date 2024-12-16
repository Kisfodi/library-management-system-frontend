import {NgModule} from "@angular/core";
import {AuthorDetailsComponent} from "./author-details.component";
import {JsonPipe, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthorDetailsRoutingModule} from "./author-details-routing.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [AuthorDetailsComponent],
  imports: [
    UpperCasePipe, FormsModule, JsonPipe, AuthorDetailsRoutingModule,
    RouterModule
  ]
})

export class AuthorDetailsModule {}
