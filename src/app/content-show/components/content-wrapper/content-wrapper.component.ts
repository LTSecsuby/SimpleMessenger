import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subject, Subscription, timer} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

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
  public isNotExist = false;
  private currentUser: User = null;
  public notification: Object[] = [];

  @ViewChild('contact') contact: ElementRef;

  constructor(private dataService: DataService,
              private searchUsersService: SearchUsersService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  ngAfterViewInit() {
    if (this.getActions(TRIGGER_FETCH_FRIENDS)) {
      const searchContact$ = fromEvent<any>(this.contact.nativeElement, 'keyup').pipe(
        map(event => event.target.value),
        debounceTime(1000),
        distinctUntilChanged()
      );

      searchContact$.subscribe(res => {
        console.log(res);
        this.isLoading = true;
        this.searchContacts(res);
        this.isNotExist = false;
      });
    }
  }

  ngOnDestroy() { }

  searchContacts(textContact: string) {
    this.searchUsersService.getContactList(textContact);
    const source = timer(1000);
    source.subscribe(() => {
      this.contentItem = this.dataService.getContacts();
      this.loadUser();
      this.isLoading = false;
    });
    source.subscribe(() => {
      if (this.contentItem.length === 0) {
        this.isNotExist = true;
      }
    });
  }

  onSendToAddContact(textContact: string) {
    this.searchUsersService.sendRequestForContact(textContact);
    const source = timer(500);
    source.subscribe(() => {
      this.loadUser();
    });
  }

  onAddContact(textContact: string) {
    this.searchUsersService.addNewContact(textContact);
    const source = timer(500);
    source.subscribe(() => {
      this.loadUser();
    });
  }

  onSkipContact(textContact: string) {
    this.searchUsersService.skipNewContact(textContact);
    const source = timer(500);
    source.subscribe(() => {
      this.loadUser();
    });
  }

  getDisabledButton(loginContacts: string): boolean {
    let bool = false;
    this.currentUser.addedFriends.forEach(friends => {
      if (friends.login === loginContacts) {
        bool = true;
      }
    });
    return bool;
  }

  loadUser() {
    this.currentUser = this.dataService.getUser();
    this.notification = this.currentUser.friendRequest;
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
