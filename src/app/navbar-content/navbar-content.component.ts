import { Component, OnInit } from '@angular/core';
import {DataService, User} from '../shared/data.service';

import { TRIGGER_FETCH_FRIENDS } from '../shared/data.service';
import { TRIGGER_CHAT } from '../shared/data.service';
import { TRIGGER_CONTACTS } from '../shared/data.service';
import { TRIGGER_NOTIFICATION } from '../shared/data.service';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.css']
})
export class NavbarContentComponent implements OnInit {
  TRIGGER_FETCH_FRIENDS = TRIGGER_FETCH_FRIENDS;
  TRIGGER_CHAT = TRIGGER_CHAT;
  TRIGGER_CONTACTS = TRIGGER_CONTACTS;
  TRIGGER_NOTIFICATION = TRIGGER_NOTIFICATION;
  public arrayItems: Object[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.arrayItems.push({id: '1', login: 'Evgen'});
    this.arrayItems.push({id: '2', login: 'Evgeniy', img: '../../assets/login-img.png'});
    this.arrayItems.push({id: '3', login: 'Eugene', img: '../../assets/login-img.png'});
  }

  getActions(action: string): boolean {
    if (action === 'TRIGGER_FETCH_FRIENDS') {
      return this.dataService.onFetchFriends;
    }
    if (action === 'TRIGGER_CHAT') {
      return this.dataService.onChat;
    }
    if (action === 'TRIGGER_CONTACTS') {
      return this.dataService.onContacts;
    }
    if (action === 'TRIGGER_NOTIFICATION') {
      return this.dataService.onNotification;
    }
  }
}
