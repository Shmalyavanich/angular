import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-choose-button',
  templateUrl: './user-choose-button.component.html',
  styleUrls: ['./user-choose-button.component.scss']
})
export class UserChooseButtonComponent implements OnInit {

  @Output() dropdownToggle: EventEmitter<boolean> = new EventEmitter();
  dropdownVisible = false;

  ngOnInit() {
  }

  toggleDropdown(){
    this.dropdownVisible = !this.dropdownVisible;
    this.dropdownToggle.emit(this.dropdownVisible);
  }

  constructor() { }
}
