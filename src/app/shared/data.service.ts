import {Injectable} from '@angular/core';

export interface User {
  _id: string;
  login: string;
  password: string;
  addedFriends: Object[];
  friendRequest: Object[];
}

export const TRIGGER_FETCH_FRIENDS = 'fetch_friend';
export const TRIGGER_CHAT = 'chat';
export const TRIGGER_CONTACTS = 'contacts';
export const TRIGGER_NOTIFICATION = 'notifications';

@Injectable({providedIn: 'root'})
export class DataService{

  public onFetchFriends = false;
  public onChat = false;
  public onContacts = false;
  public onNotification = false;

  private currentUser: User = null;
  private currentError: any = null;
  private arrayContacts: User[] = null;

  constructor() { }

  getCheckNewUser() {
    //return this.checkNewUser;
  }

  setContacts(contacts) {
    this.arrayContacts = contacts;
  }

  getContacts(): User[] {
    return this.arrayContacts;
  }

  setUser(currentUser: User) {
    this.currentUser = currentUser;
  }

  getUser() {
    return this.currentUser;
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
