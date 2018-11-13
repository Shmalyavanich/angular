import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";

import { UserListService } from "./user-list.service";
import { User } from "../user";
import { tap, finalize } from "rxjs/operators";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  showDropdown = false;
  chosenUser: User;
  findedUsers: User[];
  isSearched = false;
  isFinded = false;


  ngOnInit() {

  }

  toggleDropdown(visible: boolean){
    this.showDropdown = visible;
  }

  chooseUser(user: User){
    this.chosenUser = user;
  }

  search(searchString){

    this.userListService.getUsers().subscribe(
      users => {
        this.findedUsers = this.userListService.findUsers(users, searchString);
        this.isFinded = this.findedUsers.length > 0;
        this.isSearched = true;
      }
    );

  }

  syncFindedUser(user) {
    this.chooseUser(user);
  }

  constructor(private userListService: UserListService) { }

}
