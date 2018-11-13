import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user-list.component";


const userListRoutes: Routes = [
  {
    path: '',
    component: UserListComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userListRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class UserListRoutingModule { }
