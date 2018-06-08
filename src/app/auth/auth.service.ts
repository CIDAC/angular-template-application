// Angular imports
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

// Application imports
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;
  private url: string = "http://localhost:3000/users";
  private httpHeaders: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" })

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(authData: AuthData) {
    return this.http.post<User>(this.url, authData);
  }

  login(authData: AuthData) {
    const url = `${this.url}?email=${authData['email']}&password=${authData['password']}`;

    return this.http.get<User[]>(url);
  }

  logout() {
    this.user = null;

    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccesfully() {
    this.authChange.next(true);
    // This is the page to where
    // the application will send the user after login.
    this.router.navigate(['/dashboard']);
  }
}
