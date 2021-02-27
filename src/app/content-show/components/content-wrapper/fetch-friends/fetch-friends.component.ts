import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subject, Subscription, timer} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, scan, switchMap, tap} from 'rxjs/operators';

import {SearchUsersService} from '../../../../shared/search-users/search-users.service';
import {DataService, User} from '../../../../shared/data.service';

@Component({
  selector: 'app-fetch-friends',
  templateUrl: './fetch-friends.component.html',
  styleUrls: ['./fetch-friends.component.css']
})
export class FetchFriendsComponent implements OnInit, OnDestroy, AfterViewInit {
  public contentItem: User[] = [];
  public defaultImage = '../../../../assets/login-img.png';
  public isLoading = false;

  currentUser: User;
  @ViewChild('contact') contact: ElementRef;

  constructor(private dataService: DataService,
              private searchUsersService: SearchUsersService) { }

  ngOnInit(): void {
    this.dataService.contactsSearch.subscribe(searchContacts => {
      this.isLoading = false;
      this.contentItem = searchContacts;
    });
    this.dataService.currentUser.subscribe(user => this.currentUser = user);
  }

  ngAfterViewInit() {
      const searchContact$ = fromEvent<any>(this.contact.nativeElement, 'keyup').pipe(
        map(event => event.target.value),
        debounceTime(1000),
        distinctUntilChanged(),
        tap((value) => {
          if (value !== '') {
            this.isLoading = true;
            this.searchUsersService.getContactList(value);
          }
        })
      );
      searchContact$.subscribe();
  }

  ngOnDestroy() { }

  onSendToAddContact(idContact: string) {
    this.searchUsersService.sendRequestForContact(idContact);
  }

  getDisabledButton(idContacts: string): boolean {
    let bool = false;
    if (this.currentUser === undefined) { return bool; }
    this.currentUser.addedFriends.forEach(id => {
      if (id === idContacts) {
        bool = true;
      }
    });
    this.currentUser.friendRequest.forEach(id => {
      if (id === idContacts) {
        bool = true;
      }
    });
    return bool;
  }

}
