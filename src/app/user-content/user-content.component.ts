import { Component, OnInit } from '@angular/core';
import {DataService, User} from '../shared/data.service';
import {AuthService} from '../shared/auth/auth.service';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {

  currentUser: User;
  constructor(private dataService: DataService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile();
    this.dataService.currentUser.subscribe(user => this.currentUser = user);
  }
}
