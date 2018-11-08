import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs/index";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  loaded = true;
  form: FormGroup;
  userFound$: Observable<boolean>;


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
    this.passRecovery(this.form.value);
  }

  passRecovery({name, password}){
    this.loaded = false;
    this.userFound$ = this.usersService.updatePass(this.form.value).pipe(
      map(user => {
        this.loaded = true;
        return user['found'];
      })
    );
  }

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService) {}

}
