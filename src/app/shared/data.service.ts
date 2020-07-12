import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export const TRIGGER_FETCH_FRIENDS = 'fetch_friend_trigger';
export const TRIGGER_CHAT = 'chat_trigger';
export const TRIGGER_CONTACTS = 'contacts_trigger';
export const TRIGGER_NOTIFICATION = 'notifications_trigger';

export class User {
  _id: string = '';
  login: string = '';
  password: string = '';
  addedFriends: Object[] = [];
  friendRequest: Object[] = [];
  contacts: User[] = [];
}

export class Contact {
  _id: string = '';
  login: string = '';
}

@Injectable({providedIn: 'root'})
export class DataService{

  private userSource = new BehaviorSubject<User>(new User());
  currentUser = this.userSource.asObservable();

  private contactSource = new BehaviorSubject<Contact>(new Contact());
  currentContact = this.contactSource.asObservable();

  public onFetchFriends = false;
  public onChat = false;
  public onContacts = false;
  public onNotification = false;

  private currentError: any = null;

  constructor() { }

  updatedUser(user: User) {
    this.userSource.next(user);
  }

  updatedCurrentContact(contact: Contact) {
    this.contactSource.next(contact);
  }

  getUser() {
    return this.currentUser.source._value.user;
  }

  setError(currentError: any) {
    this.currentError = currentError;
  }

  getError() {
    return this.currentError;
  }

  setUserNavbarContent(trigger: string) {
    switch (trigger) {
      case TRIGGER_FETCH_FRIENDS:
      this.onFetchFriends = true;
      this.onChat = false;
      this.onContacts = false;
      this.onNotification = false;
        break;
      case TRIGGER_CHAT:
        this.onFetchFriends = false;
        this.onChat = true;
        this.onContacts = false;
        this.onNotification = false;
        break;
      case TRIGGER_CONTACTS:
        this.onFetchFriends = false;
        this.onChat = false;
        this.onContacts = true;
        this.onNotification = false;
        break;
      case TRIGGER_NOTIFICATION:
        this.onFetchFriends = false;
        this.onChat = false;
        this.onContacts = false;
        this.onNotification = true;
        break;
      default:
        this.onFetchFriends = false;
        this.onChat = false;
        this.onContacts = false;
        this.onNotification = false;
    }
  }
}
