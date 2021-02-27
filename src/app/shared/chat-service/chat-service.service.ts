import { Injectable } from '@angular/core';
import {DataService, Message, User} from '../data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ChatServiceService {

  constructor(private dataService: DataService,
              private http: HttpClient) { }

  getCurrentContactMessageList(contactId: string) {
    const token = localStorage.token;
    const url = `http://localhost:8000/user/friend/messages`;
    const body = {
      friend_id: contactId
    };

    this.http.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      (messages: []) => {
        this.dataService.updateCurrentContactMessageList(messages);
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }

  getCurrentUserNotifications() {
    const token = localStorage.token;
    const url = `http://localhost:8000/user/friend/requests`;

    this.http.get(url, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      (notifications: []) => {
        console.log('GET_NOTIFY', notifications);
        this.dataService.updateCurrentUserNotifications(notifications);
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }

  getCurrentUserContacts() {
    const token = localStorage.token;
    const url = `http://localhost:8000/user/friends`;

    this.http.get(url, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      (contacts: []) => {
        console.log('USER_CONTACTS', contacts);
        this.dataService.updateCurrentUserContactsList(contacts);
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }

  addNewPostToContact(textMessage: string, contactId: string) {
    const token = localStorage.token;
    const url = `http://localhost:8000/user/friend/message`;
    const body = {
      friend_id: contactId,
      message: textMessage
    };

    this.http.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      (data: []) => {
        console.log('ADD_POST', data);
        //this.dataService.updatedUser(data);
        this.dataService.updateCurrentContactMessageList(data);
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }

  deleteContact(contactId: string) {
    const token = localStorage.token;
    const url = `http://localhost:8000/user/friend/delete`;
    const body = {
      friend_id: contactId
    };

    this.http.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      (user: User) => {
        console.log('DELETE_FRIEND', user);
        this.dataService.updatedUser(user);
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }

}
