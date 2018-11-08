import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import * as moment from 'moment';

import { User } from "../user";

export interface Auth{
  authorized?: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsersService {

  readonly serverPath = 'http://localhost:3000';
  readonly dateFormats = ['YYYY/MM/DD', 'DD MMMM YYYY', 'DD-MMM-YY'];
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };


  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(`${this.serverPath}/users`)
      .pipe(
        tap(_ => console.log('fetched users'))
      );
  }

  getUser (userId): Observable<User> {
    return this.http.get<User>(`${this.serverPath}/users/${userId}`).pipe();
  }

  userAuth(name, password): Observable<boolean> {
    return this.http.get<Auth>(`${this.serverPath}/auth?name=${name}&password=${password}`)
      .pipe(
        map(user => {
          if(user['authorized'] === true){
            for(const userField in user){
              this.cookieService.set(userField, user[userField]);
            }
            this.router.navigate(['/profile']);
          } else {
            this.cookieService.set('authorized', 'false');
          }

          return user['authorized'];
        })
      );
  }

  updateUser(user: User){

    const birthDate = user.date_of_birth != ''
      ? moment(user.date_of_birth, this.dateFormats).toISOString()
      : '';
    const firstLoginDate = user.date_of_first_login != ''
      ? moment(user.date_of_first_login, this.dateFormats).toISOString()
      : '';
    const nextNotificationDate = user.date_of_next_notification != ''
      ? moment(user.date_of_next_notification, this.dateFormats).toISOString()
      : '';

    const httpBody = `&id=${user.id}&name=${user.name}&password=${user.password}&date_of_birth=${birthDate}&date_of_first_login=${firstLoginDate}&date_of_next_notification=${nextNotificationDate}&information=${user.information}`;

    return this.http.put<User>(`${this.serverPath}/users/${user.id}`, httpBody, this.httpOptions)
      .pipe(
        tap(user => {

          for(const userField in user){
            this.cookieService.set(userField, user[userField]);
          }

          this.router.navigate(['/profile']);
        })
      );
  }

  updatePass({name, password}){
    const httpBody = `name=${name}&password=${password}`;

    return this.http.put<User>(`${this.serverPath}/update-pass`, httpBody, this.httpOptions)
      .pipe(
        tap(user => {
          if(user['found']) {
            this.cookieService.set('password', user['password'])
            this.router.navigate(['/login']);
          }
          return user['found'];
        })
      );
  }

  getUserId() {
    return this.cookieService.get('id');
  }

  getAuthState() {
    return this.cookieService.get('authorized') == 'true';
  }

  getcookies() {
    return this.cookieService.getAll();
  }

  userLogout() {
    this.cookieService.deleteAll();
    this.cookieService.set('authorized', 'false');
    this.router.navigate(['/login']);
  }

  getAppDelay(): Observable<boolean>{
    return this.http.get<boolean>(this.serverPath).pipe(
      map(response => response['loaded'])
    );
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) { }
}
