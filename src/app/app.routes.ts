import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {RentsComponent} from "./rents/rents.component";
import {ItemsComponent} from "./items/items.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: "full"
  },
  {
    path: 'authors',
    // component: AuthorsComponent,
    loadChildren: () =>
      import("./authors/authors.module")
        .then(m => m.AuthorsModule)
  },
  {
    path: 'books',
    loadChildren: () =>
      import("./books/books.module")
        .then(m => m.BooksModule)
  },
  {
    path: "homepage",
    loadComponent: () =>
      import("./homepage/homepage.component").then(
        m => m.HomepageComponent
      )
  },
  {
    path: "book-details",
    loadChildren: () =>
      import("./book-details/book-details.module")
        .then(m => m.BookDetailsModule)
  },
  {
    path: "author-details",
    loadChildren: () =>
      import("./author-details/author-details.module")
        .then(m => m.AuthorDetailsModule)
  },
  {
    path: "items",
    component: ItemsComponent
  },
  {
    path: "rents",
    component: RentsComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }

];
