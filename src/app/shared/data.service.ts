import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export enum navbarContentElement {
  TRIGGER_FETCH_FRIENDS,
  TRIGGER_CONTACTS,
  TRIGGER_NOTIFICATION
}

export class User {
  // tslint:disable-next-line:variable-name
  _id: string;
  login: string;
  name: string;
  password: string;
  addedFriends: string[] = [];
  friendRequest: string[] = [];
  profilePicture: null;
}

export class Message {
  // tslint:disable-next-line:variable-name
  _id = '';
  text = '';
  owner = '';
  recipient = '';
  created: Date;
  markRead: boolean;
}

@Injectable({providedIn: 'root'})
export class DataService{

  private navbarContentSource = new BehaviorSubject<navbarContentElement>(0);
  navbarContent = this.navbarContentSource.asObservable();

  private contactsSearchSource = new BehaviorSubject<User[]>([]);
  contactsSearch = this.contactsSearchSource.asObservable();

  private userSource = new BehaviorSubject<User>(new User());
  currentUser = this.userSource.asObservable();

  private userContactsSource = new BehaviorSubject<User[]>([]);
  currentUserContacts = this.userContactsSource.asObservable();

  private userNotificationsSource = new BehaviorSubject<User[]>([]);
  currentUserNotificationsSources = this.userNotificationsSource.asObservable();

  private contactSource = new BehaviorSubject<User>(new User());
  currentContact = this.contactSource.asObservable();

  private contactMessagesSource = new BehaviorSubject<Message[]>([]);
  currentContactMessages = this.contactMessagesSource.asObservable();

  private currentError: any = null;

  constructor() { }

  //SEARCH CONTACTS
  updateSearchContacts(contacts: []) {
    this.contactsSearchSource.next(contacts);
  }

  //USER
  updatedUser(user: User) {
    this.userSource.next(user);
  }

  updateCurrentUserContactsList(contacts: []) {
    this.userContactsSource.next(contacts);
  }

  updateCurrentUserNotifications(notifications: []) {
    this.userNotificationsSource.next(notifications);
  }
  //CURRENT CONTACT
  updateCurrentContact(contact: User) {
    this.contactSource.next(contact);
  }

  updateCurrentContactMessageList(messages: []) {
    this.contactMessagesSource.next(messages);
  }

  getUser() {
    // return this.currentUser.source._value.user;
  }

  setError(currentError: any) {
    this.currentError = currentError;
  }

  getError() {
    return this.currentError;
  }

  setUserNavbarContent(trigger: navbarContentElement) {
    this.navbarContentSource.next(trigger);
  }
}
