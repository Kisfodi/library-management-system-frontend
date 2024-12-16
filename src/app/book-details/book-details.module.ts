import { NgModule } from '@angular/core';
import {CommonModule, JsonPipe, UpperCasePipe} from '@angular/common';
import {BookDetailsComponent} from "./book-details.component";
import {RouterModule} from "@angular/router";
import {BookDetailsRoutingModule} from "./book-details-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    UpperCasePipe,
    FormsModule,
    CommonModule,
    JsonPipe,
    BookDetailsRoutingModule,
    RouterModule
  ]
})
export class BookDetailsModule {}
