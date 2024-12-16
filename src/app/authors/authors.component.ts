import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../models/author.model";
import {FormsModule} from "@angular/forms";
import {AuthorService} from "../services/author/author.service";
import {RouterLink} from "@angular/router";
import {AuthorButtonDirective} from "../directives/author-button.directive";

@Component({
  selector: 'app-authors',
  // imports: [
  //   RouterLink
  // ],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit{

  constructor(private authorService: AuthorService) {}

  authors!: Author[];

  ngOnInit(): void {
    this.initAuthors();
  }

  private initAuthors() {
    this.authorService.getAuthors()
      .subscribe(authors => this.authors = authors);
  }
}
