import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {authGuard} from "./auth/auth.guard";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {BooksComponent} from "./books/books.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: "full"
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: "items",
    canActivate: [authGuard],
    loadChildren:  () =>
      import('./items/items.component').then(
        m => m.ItemsComponent
      )
  },
  {
    path: "homepage",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./homepage/homepage.component").then(
        m => m.HomepageComponent
      )
  },
  {
    path: '**', component: PageNotFoundComponent
  }

];
