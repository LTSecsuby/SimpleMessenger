import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';
import {AuthGuard} from '../shared/auth/auth.guard';
import {AuthService} from '../shared/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {

  valueLogin = '';
  valuePassword = '';

  singup = true;
  login = false;

  constructor(private dataService: DataService,
              private authGuard: AuthGuard,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    /*if (this.router.url !== '/') {
      this.router.navigate(['/']).then(r => console.log('TO START'));
    }*/
    //localStorage.removeItem("token");
    this.authService.getProfile();
  }

  onChangeSingup() {
    this.singup = true;
    this.login = false;
  }

  onChangeLogin() {
    this.singup = false;
    this.login = true;
  }

  onLogin() {
    this.authGuard.canActivateAuth(this.valueLogin, this.valuePassword);
  }

  onSingup() {
    this.authGuard.canActivateSing(this.valueLogin, this.valuePassword);
  }
}
