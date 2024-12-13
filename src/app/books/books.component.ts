import {Component, Input} from '@angular/core';
import {Book} from "../models/books.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  @Input() books: Book[] = [];

}
