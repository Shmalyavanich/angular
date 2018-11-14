import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from "./user-list-routing.module";
import { UserChooseButtonComponent } from './user-choose-button/user-choose-button.component';
import { UserChosenComponent } from './user-chosen/user-chosen.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserSearchResultsComponent } from './user-search-results/user-search-results.component';
import { UserSearchInputComponent } from './user-search/user-search-input/user-search-input.component';
import { UserSearchButtonComponent } from './user-search/user-search-button/user-search-button.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import {UserDropdownItemComponent} from "./user-dropdown/user-dropdown-item/user-dropdown-item.component";

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule
  ],
  declarations: [
    UserListComponent,
    UserChooseButtonComponent,
    UserChosenComponent,
    UserSearchComponent,
    UserSearchResultsComponent,
    UserSearchInputComponent,
    UserSearchButtonComponent,
    UserDropdownComponent,
    UserDropdownItemComponent
  ]
})
export class UserListModule { }
