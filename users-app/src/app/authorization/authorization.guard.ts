import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    return this.checkAuth();
  }

  checkAuth(): boolean {

    if (this.usersService.getAuthState()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

  constructor(
    private router: Router,
    private usersService: UsersService) {}
}
