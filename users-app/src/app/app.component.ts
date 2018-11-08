import { Component, OnInit } from '@angular/core';
import {Load, UsersService} from "./services/users.service";
import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loaded$: Observable<boolean>;

  ngOnInit(): void {
    this.getAppDelay();
    console.log(this.usersService.getcookies());
  }

  getAppDelay(){
    //if(this.usersService.getAuthState() != 'true') {
      this.loaded$ = this.usersService.getAppDelay();
    //}
  }


  constructor(private usersService: UsersService) {}

}
