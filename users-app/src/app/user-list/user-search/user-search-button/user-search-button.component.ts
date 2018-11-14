import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserListService} from "../../user-list.service";
import {User} from "../../../user";

@Component({
  selector: 'app-user-search-button',
  templateUrl: './user-search-button.component.html',
  styleUrls: ['./user-search-button.component.scss']
})
export class UserSearchButtonComponent implements OnInit {

  @Output() searchButtonClick: EventEmitter<boolean> = new EventEmitter();


  ngOnInit() {
  }

  onClick(){
    this.searchButtonClick.emit(true);
  }

  constructor() { }
}
