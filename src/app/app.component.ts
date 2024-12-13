import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";

//TODO
// Homepage
// Register Page
// Login Page
// User Page
// Books Page (Search Results)
// Books Page (Single Item)
// Rents Page (Admin Only)
// Items Page (Admin Only)
// Help Page

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Library Management System';
}
