import { Component, OnInit } from '@angular/core';
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import * as moment from 'moment';
import {UsersService} from "../../services/users.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user$: Observable<object>;
  readonly dateFormat = 'YYYY/MM/DD';
  form: FormGroup;
  loaded = false;


  ngOnInit() {
    const userId = this.usersService.getUserId();
    this.getUser(userId);
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
      password: [''],
      date_of_birth: [''],
      date_of_first_login: [''],
      date_of_next_notification: [''],
      information: ['']
    });
  }

  onSubmit() {
    const updatedUser = this.form.value;
    updatedUser.id = this.usersService.getUserId();
    this.loaded = false;
    this.user$ = this.usersService.updateUser(updatedUser).pipe(
      tap(()=> this.loaded = true)
    );

  }

  getUser(userId){
    this.user$ = this.usersService.getUser(userId).pipe(
      map(user => {
        this.loaded = true;
        return[{
          name: user.name,
          password: user.password,
          date_of_birth: moment(user.date_of_birth, moment.ISO_8601).format(this.dateFormat),
          date_of_first_login: moment(user.date_of_first_login, moment.ISO_8601).format(this.dateFormat),
          date_of_next_notification: moment(user.date_of_next_notification, moment.ISO_8601).format(this.dateFormat),
          information: user.information
        }]
      })
    );

  }

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService) { }
}
