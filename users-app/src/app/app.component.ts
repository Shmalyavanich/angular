import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import {TranslateService} from '@ngx-translate/core';

import { UsersService } from "./services/users.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loaded$: Observable<boolean>;
  authorized: boolean;

  ngOnInit(){
    this.getAppDelay();
  }

  getAppDelay(){
    this.authorized = this.usersService.getAuthState();
    if(!this.authorized) {
      this.loaded$ = this.usersService.getAppDelay();
    }
  }

  userLogout(){
    this.usersService.userLogout();
  }

  constructor(
    private usersService: UsersService,
    public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use('en');
  }

}
