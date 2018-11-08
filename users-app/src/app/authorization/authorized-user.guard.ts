import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from "../services/users.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizedUserGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    return this.checkAuth();
  }

  checkAuth(): boolean {

    if (this.usersService.getAuthState()) {
      console.log('state ' + this.usersService.getAuthState())
      this.router.navigate(['/profile']);
      return false;
    }

    return true;
  }

  constructor(
    private router: Router,
    private usersService: UsersService) {}
}
