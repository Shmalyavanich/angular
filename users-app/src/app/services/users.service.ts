import { Injectable } from '@angular/core';
import { User } from "../user";
import { Observable } from "rxjs/index";
import { map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

export interface Load{
  loaded: boolean;
}
export interface Auth{
  authorized?: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsersService {

  readonly serverPath = 'http://localhost:3000';
  private isLoggedIn = false;


  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(`${this.serverPath}/users`)
      .pipe(
        tap(_ => console.log('fetched users'))
        // catchError(this.handleError('getHeroes', []))
      );
  }

  getUser (userId): Observable<User> {
    return this.http.get<User>(`${this.serverPath}/users/${userId}`)
      .pipe(
        tap(_ => console.log('fetched user'))
        // catchError(this.handleError('getHeroes', []))
      );
  }

  userAuth(name, password): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    //return this.http.post<Auth>(`${this.serverPath}/auth`, {name, password}, httpOptions)
    return this.http.get<Auth>(`${this.serverPath}/auth?name=${name}&password=${password}`)
      .pipe(
        map(user => {
          console.log('userAuth: ' + user['authorized']);
          if(user['authorized'] === true){
            for(const userField in user){
              this.cookieService.set(userField, user[userField]);
            }
            // this.cookieService.set('user', user);
            this.router.navigate(['/profile']);
          } else {
            this.cookieService.set('authorized', 'false');
          }

          return user['authorized'];
        })
      );
  }

  getAuthState() {
    return this.cookieService.get('authorized') == 'true';
  }

  getcookies() {
    return this.cookieService.getAll();
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
