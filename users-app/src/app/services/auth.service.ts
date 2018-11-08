import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { tap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import {User} from "../user";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      //delay(1000),
      tap(val => this.isLoggedIn = true)
    );

    // return this.http.get<User[]>(`${this.serverPath}/users`)
    //   .pipe(
    //     tap(_ => console.log('fetched users'))
    //     // catchError(this.handleError('getHeroes', []))
    //   );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  constructor(private http: HttpClient) { }
}
