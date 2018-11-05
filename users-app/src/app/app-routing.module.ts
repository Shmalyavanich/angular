import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./authorization/login/login.component";
import {ForgotPasswordComponent} from "./authorization/forgot-password/forgot-password.component";
import {ReactiveFormsComponent} from "./reactive-forms/reactive-forms.component";


const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reactive', component: ReactiveFormsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
