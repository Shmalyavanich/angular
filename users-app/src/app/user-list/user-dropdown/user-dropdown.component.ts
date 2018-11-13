import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {UserListService} from "../user-list.service";
import {User} from "../../user";

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {

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
