import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loaded = true;
  form: FormGroup;
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
    this.loaded = false;
    this.userAuth$ = this.usersService.userAuth(name, password).pipe(
      tap(()=> this.loaded = true)
    );
  }

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService) {}

}
