import { Component, OnInit } from '@angular/core';
import {UserListService} from "../../user-list.service";
import {User} from "../../../user";

@Component({
  selector: 'app-user-search-button',
  templateUrl: './user-search-button.component.html',
  styleUrls: ['./user-search-button.component.scss']
})
export class UserSearchButtonComponent implements OnInit {

  findedUsers: User[];
  isSearched = false;
  isFinded = false;

  search(searchString){

    this.userListService.getUsers().subscribe(
      users => {
        this.findedUsers = this.userListService.findUsers(users, searchString);
        this.isFinded = this.findedUsers.length > 0;
        this.isSearched = true;
      }
    );

  }
  ngOnInit() {
  }

  constructor(private userListService: UserListService) { }
}
