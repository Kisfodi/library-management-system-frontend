import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = "api/users"

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(this.userUrl + "/" + username);
  }

}
