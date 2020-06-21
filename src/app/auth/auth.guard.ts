import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(username: string, password: string) {
    if (this.authService.isLoggedIn(username, password)) {
      this.router.navigate(['/user']);
    }
  }
}
