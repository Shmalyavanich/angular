import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { User } from '../../user';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  users: User[] = [];
  users$: Observable<User[]>;
  user$: Observable<User>;
  userAuth$: Observable<boolean>;


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
      password: [''],
    });
  }

  onSubmit() {
     this.authorization(this.form.value);
  }

  authorization({name, password}){
    this.userAuth$ = this.usersService.userAuth(name, password);

  }

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService) {}

}
