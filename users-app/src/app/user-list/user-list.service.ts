import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';

import { User} from "../user";


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  readonly serverPath = 'http://localhost:3000';
  readonly dateFormat = 'YYYY/MM/DD';
  readonly searchType = 'browser';

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(`${this.serverPath}/users`)
      .pipe(
        map(users => {
          users.map(user => {
            user.date_of_birth = this.dateFromIsoToFormat(user.date_of_birth, this.dateFormat);
          });

          return users;
        })
      );
  }

  findUsers(users: User[] = null, searchString: string){
    switch (this.searchType){
      case 'browser':
        return users.filter((fields) => fields.name.indexOf(searchString) > -1);

      default:
        return users.filter((fields) => fields.name.indexOf(searchString) > -1);
    }

  }


  dateFromIsoToFormat (date: string, dateFormat: string) {
    return moment(date, moment.ISO_8601).format(dateFormat);
  }


  constructor(
    private http: HttpClient
    ) { }
}
