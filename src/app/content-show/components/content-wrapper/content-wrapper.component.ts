import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subject, Subscription, timer} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, scan, switchMap, tap} from 'rxjs/operators';

import {DataService, TRIGGER_FETCH_FRIENDS, User} from '../../../shared/data.service';
import { TRIGGER_CHAT } from '../../../shared/data.service';
import { TRIGGER_CONTACTS } from '../../../shared/data.service';
import { TRIGGER_NOTIFICATION } from '../../../shared/data.service';
import {SearchUsersService} from '../../../shared/search-users/search-users.service';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit, OnDestroy, AfterViewInit {
  TRIGGER_FETCH_FRIENDS = TRIGGER_FETCH_FRIENDS;
  TRIGGER_CHAT = TRIGGER_CHAT;
  TRIGGER_CONTACTS = TRIGGER_CONTACTS;
  TRIGGER_NOTIFICATION = TRIGGER_NOTIFICATION;
  public contentItem: User[] = [];
  public defaultImage = '../../../../assets/login-img.png';
  public isLoading = false;

  public notifications: Object[] = [];
  public contacts: Object[] = [];
  public chats: Object[] = [];
  currentUser: User;

  @ViewChild('contact') contact: ElementRef;

  constructor(private dataService: DataService,
              private searchUsersService: SearchUsersService) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => {
      this.isLoading = false;
      this.currentUser = user;
      if (user === null) { return; }
      this.contentItem = user.contacts;
      this.notifications = user.friendRequest;
      this.contacts = user.addedFriends;
    });
  }

  ngAfterViewInit() {
    if (this.getActions(TRIGGER_FETCH_FRIENDS)) {
      const searchContact$ = fromEvent<any>(this.contact.nativeElement, 'keyup').pipe(
        map(event => event.target.value),
        debounceTime(1000),
        distinctUntilChanged(),
        tap((value) => {
          this.isLoading = true;
          this.searchUsersService.getContactList(value);
        })
      );
      searchContact$.subscribe();
    }
  }

  ngOnDestroy() { }

  onSendToAddContact(textContact: string) {
    this.searchUsersService.sendRequestForContact(textContact);
  }

  onAddContact(textContact: string) {
    this.searchUsersService.addNewContact(textContact);
  }

  onSkipContact(textContact: string) {
    this.searchUsersService.skipNewContact(textContact);
  }

  getDisabledButton(loginContacts: string): boolean {
    let bool = false;
    if (this.currentUser === undefined) { return bool; }
    this.currentUser.addedFriends.forEach(friends => {
      if (friends.login === loginContacts) {
        bool = true;
      }
    });
    return bool;
  }

  onChangeContact(item) {
    this.dataService.updatedCurrentContact(item);
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
