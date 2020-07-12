import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService, User} from '../shared/data.service';

import { TRIGGER_FETCH_FRIENDS } from '../shared/data.service';
import { TRIGGER_CHAT } from '../shared/data.service';
import { TRIGGER_CONTACTS } from '../shared/data.service';
import { TRIGGER_NOTIFICATION } from '../shared/data.service';
import {AuthService} from '../shared/auth/auth.service';


@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {
  TRIGGER_FETCH_FRIENDS = TRIGGER_FETCH_FRIENDS;
  TRIGGER_CHAT = TRIGGER_CHAT;
  TRIGGER_CONTACTS = TRIGGER_CONTACTS;
  TRIGGER_NOTIFICATION = TRIGGER_NOTIFICATION;
  currentUser: User;
  notificationsValue: number;

  constructor(private router: Router,
              private dataService: DataService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (user === null) { return; }
      this.notificationsValue = user.friendRequest.length;
    });
  }

  onLogout() {
    this.authService.logoutUser();
  }

  onChangeContent(trigger: string) {
    this.dataService.setUserNavbarContent(trigger);
  }

  getNotificationsValue(): number {
    return this.notificationsValue;
  }
}
