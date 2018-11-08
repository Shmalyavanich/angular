import { Component, OnInit } from '@angular/core';
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {ShowProfileComponent} from "./show-profile/show-profile.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
