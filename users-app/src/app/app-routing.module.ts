import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { LoginComponent } from "./authorization/login/login.component";
import { ForgotPasswordComponent } from "./authorization/forgot-password/forgot-password.component";
import { AuthorizationGuard } from './authorization/authorization.guard';
import { AuthorizedUserGuard } from './authorization/authorized-user.guard';
import { ShowProfileComponent } from "./user/show-profile/show-profile.component";
import { EditProfileComponent } from "./user/edit-profile/edit-profile.component";
import { UserListComponent } from "./user-list/user-list.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[AuthorizedUserGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate:[AuthorizedUserGuard]
  },
  {
    path: 'reactive',
    component: ReactiveFormsComponent,
    canActivate:[AuthorizationGuard]
  },
  {
    path: 'profile',
    component: ShowProfileComponent,
    canActivate:[AuthorizationGuard]
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate:[AuthorizationGuard]
  },
  {
    path: 'user-list',
    loadChildren: './user-list/user-list.module#UserListModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
