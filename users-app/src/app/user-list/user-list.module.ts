import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from "./user-list-routing.module";

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule
  ],
  declarations: [UserListComponent]
})
export class UserListModule { }
