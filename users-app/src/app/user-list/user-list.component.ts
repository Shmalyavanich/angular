import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";

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

  ngOnInit() {

  }

  toggleDropdown(visible: boolean){
    this.showDropdown = visible;
  }

  chooseUser(user: User){
    this.chosenUser = user;
  }

  constructor() { }

}
