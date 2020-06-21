import {Injectable} from '@angular/core';

export interface User {
  id: number;
  username: string;
  password: string;
  dateCreate: Date;
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
  public checkNewUser = true;
  public arrayUser: User[] = [];
  public id = 0;
  private user: any;
  public idChecked: number = null;

  getCheckNewUser(): boolean {
    return this.checkNewUser;
  }
  setCheckNewUser(): void {
    this.checkNewUser = !this.checkNewUser;
  }
  createNewUser(usernameNew: string, passwordNew: string): void {
    this.id++;
    this.arrayUser.push({id: this.id, username: usernameNew, password: passwordNew, dateCreate: new Date()});
  }
  getAllUser() {
    return this.arrayUser;
  }

  setCheckedNote(id: number) {
    this.idChecked = id;
  }

  getOneUserByIdChecked() {
    this.user = Object.create(null);
    this.arrayUser.forEach(element => {
      if (element.id === this.idChecked) {
        this.user = element;
      }
    });
    return this.user;
  }

  getOneUserById(idNote: number) {
    this.user = Object.create(null);
    this.arrayUser.forEach(element => {
      if (element.id === idNote) {
        this.user = element;
      }
    });
    return this.user;
  }

  loginUser(username: string, password: string) {
    let res: any = {error: `${username} not founded..`};
    this.arrayUser.forEach(user => {
      if (user.username === username && user.password === password) {
        res = user;
        return res;
      }
    });
    return res;
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
