import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-search-input',
  templateUrl: './user-search-input.component.html',
  styleUrls: ['./user-search-input.component.scss']
})
export class UserSearchInputComponent implements OnInit {

  @Output() searchValue: EventEmitter<string> = new EventEmitter();


  ngOnInit() {
  }

  onChange(searchString: string){
    this.searchValue.emit(searchString);
  }

  constructor() { }
}
