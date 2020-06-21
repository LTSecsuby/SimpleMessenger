import { Injectable } from '@angular/core';
import {DataService} from '../shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataService: DataService) { }

  isLoggedIn(username: string, password: string) {
    return this.dataService.loginUser(username, password).id !== undefined;
  }
}
