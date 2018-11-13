import {Component, Input, OnInit} from '@angular/core';

import { User } from "../../user";

@Component({
  selector: 'app-user-chosen',
  templateUrl: './user-chosen.component.html',
  styleUrls: ['./user-chosen.component.scss']
})
export class UserChosenComponent implements OnInit {

  @Input() chosenUser: User;

  ngOnInit() {
  }

  constructor() { }
}
