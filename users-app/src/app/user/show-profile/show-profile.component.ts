import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.scss']
})
export class ShowProfileComponent implements OnInit {

  ngOnInit() {

  }

  getUser(){
    //this.usersService.getUser();
  }

  constructor(private usersService: UsersService) { }
}
