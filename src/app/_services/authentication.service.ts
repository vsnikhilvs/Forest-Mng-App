﻿import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  private userNameSubject: BehaviorSubject<string> | null = new BehaviorSubject(
    ''
  );
  public user: Observable<User> = new Observable<User>();
  public userName: Observable<string> = new Observable<string>();

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user')!)
    );
    if (localStorage.getItem('user') != null) {
      this.user = this.userSubject.asObservable();
      this.userNameSubject = new BehaviorSubject<string>(
        JSON.parse(localStorage.getItem('user')!).name
      );
      this.userName = this.userNameSubject.asObservable();
    }
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    console.log('Authentication Service ' + email, password);
    return this.http
      .post<any>(`${environment.apiUrl}/accounts/authenticate`, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          this.userNameSubject!.next(user.name);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(new User);
    this.userNameSubject!.next('');
    this.router.navigate(['/login']);
  }
}
