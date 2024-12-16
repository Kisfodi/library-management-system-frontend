import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../models/books.model";
import {BookService} from "../services/book/book.service";
import {RouterLink} from "@angular/router";
import {BooksComponent} from "../books/books.component";
import {BooksModule} from "../books/books.module";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    BooksModule,
    ReactiveFormsModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

  selectedBooks: Book[] = [];
  keywords: string[] = [
    "none",
    "title",
    "genre"
  ];

  simpleSearchForm: FormGroup;
  constructor(private bookService: BookService, private formBuilder: FormBuilder) {
    this.simpleSearchForm = this.formBuilder.group({
      value: [''],
      keyword: ['']
    });
  }

  ngOnInit(): void {
    this.initBooks();
  }

  initBooks() {
    // this.bookService.getBooksFiltered(5,
    //   0,
    //   "asc",
    //   "title",
    //   ["title"],
    //   ["Harry"],
    //   undefined)
    this.bookService.getBooks()
      .subscribe((books) => {
        this.selectedBooks = books;
      });
  }

  onSubmit() {
    console.log(this.simpleSearchForm.value)
    if (this.simpleSearchForm.get("keyword")?.value === "none") {
      console.log("Empty");
      this.bookService.getBooks()
        .subscribe(books => {
          this.selectedBooks = books;
        })
    } else {
      this.bookService.getBooksFiltered(20,
        0,
        "asc",
        "id",
        [this.simpleSearchForm.get("keyword")?.value],
        [this.simpleSearchForm.get("value")?.value],
        undefined
        ).subscribe(books => {
          this.selectedBooks = books;
      })
    }
  }

}
