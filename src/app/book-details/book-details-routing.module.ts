import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookDetailsComponent} from "./book-details.component";

const routes: Routes = [
  {
    path: ':id', component: BookDetailsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookDetailsRoutingModule { }
