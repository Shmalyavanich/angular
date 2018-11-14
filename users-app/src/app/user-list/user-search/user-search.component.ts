import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserListService} from "../user-list.service";
import {User} from "../../user";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  searchValue: string = '';
  @Output() searchResult: EventEmitter<User[]> = new EventEmitter();

  ngOnInit() {
  }

  changeSearchValue(searchString: string){
    this.searchValue = searchString;
  }

  search(){
    this.userListService.findUsers(this.searchValue).subscribe(
      users => {
        this.searchResult.emit(users);
      }
    );
  }

  constructor(private userListService: UserListService) { }

}
