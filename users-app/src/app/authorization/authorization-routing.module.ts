import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})
export class AuthorizationRoutingModule { }
