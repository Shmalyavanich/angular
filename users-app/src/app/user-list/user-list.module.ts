import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from "./user-list-routing.module";
import { UserChooseButtonComponent } from './user-choose-button/user-choose-button.component';
import { UserChosenComponent } from './user-chosen/user-chosen.component';
import { UserChooseListComponent } from './user-choose-list/user-choose-list.component';

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule
  ],
  declarations: [
    UserListComponent,
    UserChooseButtonComponent,
    UserChosenComponent,
    UserChooseListComponent
  ]
})
export class UserListModule { }
