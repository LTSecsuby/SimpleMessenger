import {Component, Input, OnInit} from '@angular/core';

import {DataService, TRIGGER_FETCH_FRIENDS} from '../../../shared/data.service';
import { TRIGGER_CHAT } from '../../../shared/data.service';
import { TRIGGER_CONTACTS } from '../../../shared/data.service';
import { TRIGGER_NOTIFICATION } from '../../../shared/data.service';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {
  TRIGGER_FETCH_FRIENDS = TRIGGER_FETCH_FRIENDS;
  TRIGGER_CHAT = TRIGGER_CHAT;
  TRIGGER_CONTACTS = TRIGGER_CONTACTS;
  TRIGGER_NOTIFICATION = TRIGGER_NOTIFICATION;
  @Input() titleContent: string;
  @Input() contentItem: Object[];
  public defaultImage = '../../../../assets/login-img.png';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {}

  getUser(user: any) {
    console.log(user);
  }

  getActions(action: string): boolean {
    if (action === TRIGGER_FETCH_FRIENDS) {
      return this.dataService.onFetchFriends;
    }
    if (action === TRIGGER_CHAT) {
      return this.dataService.onChat;
    }
    if (action === TRIGGER_CONTACTS) {
      return this.dataService.onContacts;
    }
    if (action === TRIGGER_NOTIFICATION) {
      return this.dataService.onNotification;
    }
  }
}
