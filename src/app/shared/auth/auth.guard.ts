import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {DataService} from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService,
              private router: Router,
              private dataService: DataService) { }

  canActivateAuth(username: string, password: string) {
    this.authService.loginUser(username, password);
    setTimeout(() => {
      if (this.dataService.getUser() !== null) {
        this.router.navigate(['/user']);
      }
    }, 500);
  }

  canActivateSing(username: string, password: string) {
    this.authService.createNewUser(username, password);
    setTimeout(() => {
      if (this.dataService.getError() !== null) {
        //this.router.navigate(['/user']);
        console.log('Не создано');
      }
    }, 500);
  }
}
