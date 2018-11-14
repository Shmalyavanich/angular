import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../user";

@Component({
  selector: 'app-user-search-results',
  templateUrl: './user-search-results.component.html',
  styleUrls: ['./user-search-results.component.scss']
})
export class UserSearchResultsComponent implements OnInit {

  @Input() foundUsers: User[];
  @Input() isSearched = false;
  @Input() isFound = false;
  @Output() userClick: EventEmitter<User[]> = new EventEmitter();


  ngOnInit() {
  }

  onClickUser(user){
    this.userClick.emit(user);
  }

  constructor() { }

}
