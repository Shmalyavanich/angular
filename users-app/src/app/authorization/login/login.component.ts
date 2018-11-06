import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { User } from '../../user';
import { Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['',
        // Validators.required,
      ],
      password: ['',
        // Validators.required,
      ],
    });
  }

  onSubmit() {
    // this.formData = this.form.value;
    // this.form.reset();
    //  this.getHeroes()
    //    .subscribe(data => this.users = data);
    this.users$ = this.usersService.getUsers().pipe(
      tap(users => users)
    );

    // this.user$ = this.usersService.getUser(3).pipe(
    //   tap(user => user)
    // );

  }

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

}
