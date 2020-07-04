import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription, timer} from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import {DataService, TRIGGER_FETCH_FRIENDS} from '../../../shared/data.service';
import { TRIGGER_CHAT } from '../../../shared/data.service';
import { TRIGGER_CONTACTS } from '../../../shared/data.service';
import { TRIGGER_NOTIFICATION } from '../../../shared/data.service';
import {SearchUsersService} from '../../../shared/search-users/search-users.service';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit, OnDestroy {
  TRIGGER_FETCH_FRIENDS = TRIGGER_FETCH_FRIENDS;
  TRIGGER_CHAT = TRIGGER_CHAT;
  TRIGGER_CONTACTS = TRIGGER_CONTACTS;
  TRIGGER_NOTIFICATION = TRIGGER_NOTIFICATION;
  public contentItem: Object[];
  public defaultImage = '../../../../assets/login-img.png';
  public isLoading = false;

  public inputText: string;
  private inputModelChanged: Subject<string> = new Subject<string>();
  private inputModelChangeSubscription: Subscription;

  constructor(private dataService: DataService,
              private searchUsersService: SearchUsersService) { }

  ngOnInit(): void {
    this.inputModelChangeSubscription = this.inputModelChanged
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(contactText => {
        this.inputText = contactText;
        this.isLoading = true;
        this.searchContacts(contactText);
        console.log(contactText);
      });
  }

  ngOnDestroy() {
    this.inputModelChangeSubscription.unsubscribe();
  }

  searchContacts(textContact: string) {
    this.searchUsersService.getContactList(textContact);
    //this.searchUsersService.addNewContact(textContact);
    const source = timer(1000);
    source.subscribe(() => {
      this.contentItem = this.dataService.getContacts();
      this.isLoading = false;
    });
  }

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
