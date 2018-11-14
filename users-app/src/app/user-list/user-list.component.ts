import { Component, OnInit } from '@angular/core';

import { UserListService } from "./user-list.service";
import { User } from "../user";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  showDropdown = false;
  chosenUser: User;
  foundUsers: User[];
  isSearched = false;
  isFound = false;


  ngOnInit() {}

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  hideDropdown(){
    this.showDropdown = false;
  }

  chooseUser(user: User) {
    this.chosenUser = user;
    this.hideDropdown();
  }

  setSearchResult(users: User[]){
    this.foundUsers = users;
    this.isFound = users.length > 0;
    this.isSearched = true;
  }

  syncFoundUser(user) {
    this.chooseUser(user);
  }

  constructor(private userListService: UserListService) { }

}
