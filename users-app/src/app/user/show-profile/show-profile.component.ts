import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Observable} from "rxjs/internal/Observable";
import {map, tap} from "rxjs/operators";
import * as moment from 'moment';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.scss']
})
export class ShowProfileComponent implements OnInit {

  user$: Observable<object>;
  readonly dateFormat = 'YYYY/MM/DD';
  loaded = false;

  ngOnInit() {
    const userId = this.usersService.getUserId();
    this.getUser(userId);
  }

  getUser(userId){
    this.user$ = this.usersService.getUser(userId).pipe(
      map(user => {
        this.loaded = true;
        return[{
          name: user.name,
          date_of_birth: moment(user.date_of_birth, moment.ISO_8601).format(this.dateFormat),
          date_of_first_login: moment(user.date_of_first_login, moment.ISO_8601).format(this.dateFormat),
          date_of_next_notification: moment(user.date_of_next_notification, moment.ISO_8601).format(this.dateFormat),
          information: user.information
        }]
      })
    );

  }

  constructor(private usersService: UsersService) { }
}
