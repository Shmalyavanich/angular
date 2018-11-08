import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthorizationRoutingModule} from "./authorization-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AuthorizationRoutingModule
  ],
  declarations: []
})
export class AuthorizationModule { }
