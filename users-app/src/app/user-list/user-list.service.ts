import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';

import { User } from "../user";


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  readonly serverPath:string = 'http://localhost:3000';
  readonly dateFormat:string = 'YYYY/MM/DD';
  readonly searchType:string = 'server';

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(`${this.serverPath}/users`)
      .pipe(
        map(users => {
          this.changeUserDateFormat(users);
          return users;
        })
      );
  }

  findUsers(searchString: string){
    switch (this.searchType){
      case 'browser':
        return this.browserSearch(searchString);

      case 'server':
      default:
        return this.serverSearch(searchString);
    }
  }

  browserSearch(searchString){
    return this.getUsers().pipe(
      map( users => {
        return users.filter((fields) => fields.name.indexOf(searchString) > -1);
      })
    )
  }

  serverSearch(searchString){
    return this.http.get<User[]>(`${this.serverPath}/search?name=${searchString}`)
      .pipe(
        map(users => {
          this.changeUserDateFormat(users);
          return users;
        })
      );
  }

  changeUserDateFormat(users: User[]) {
    return users.map(user => {
            user.date_of_birth = this.dateFromIsoToFormat(user.date_of_birth, this.dateFormat);
            user.date_of_first_login = this.dateFromIsoToFormat(user.date_of_first_login, this.dateFormat);
            user.date_of_next_notification = this.dateFromIsoToFormat(user.date_of_next_notification, this.dateFormat);
          });
  }

  dateFromIsoToFormat(date: string, dateFormat: string) {
    return moment(date, moment.ISO_8601).format(dateFormat);
  }

  constructor(
    private http: HttpClient
    ) { }
}
