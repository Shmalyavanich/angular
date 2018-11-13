import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { UserListService } from "../user-list.service";
import { Observable } from "rxjs/internal/Observable";

import { User } from "../../user";

@Component({
  selector: 'app-user-choose-list',
  templateUrl: './user-choose-list.component.html',
  styleUrls: ['./user-choose-list.component.scss']
})
export class UserChooseListComponent implements OnInit {

  userList$: Observable<User[]>;
  @Output() chooseUser: EventEmitter<User> = new EventEmitter();


  ngOnInit() {
    this.userList$ = this.userListService.getUsers();
  }

  chooseUserEmit(user: User){
    this.chooseUser.emit(user);
  }

  constructor(private userListService: UserListService) {}
}
