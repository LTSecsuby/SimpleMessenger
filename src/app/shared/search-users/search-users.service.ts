import { Injectable } from '@angular/core';
import {DataService, User} from '../data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SearchUsersService {

  constructor(private dataService: DataService,
              private http: HttpClient) { }

  getContactList(textLogin: string) {
    const token = localStorage.token;
    const url = `http://localhost:8000/user/search/contacts?q=${textLogin}`;

    this.http.get(url, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      (contacts: []) => {
        console.log('GET_CONTACTS_SEARCH', contacts);
        this.dataService.updateSearchContacts(contacts);
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }

  addNewContact(friendId: string) {
    const token = localStorage.token;
    const url = `http://localhost:8000/user/friend/add`;
    const body = {
      friend_id: friendId
    };

    this.http.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      (data: User) => {
        console.log('ADD_CONTACT', data);
        this.dataService.updatedUser(data);
        //this.dataService.setUser(data);
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }

  skipNewContact(friendId: string) {
    const token = localStorage.token;
    const url = `http://localhost:8000/user/friend/skip`;
    const body = {
      friend_id: friendId
    };

    this.http.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      (data: User) => {
        console.log('SEND_REQUEST', data);
        this.dataService.updatedUser(data);
        //this.dataService.setUser(data);
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }

  sendRequestForContact(idFriend: string) {
    const token = localStorage.token;
    const url = `http://localhost:8000/user/friend`;
    const body = {
      friend_id: idFriend
    };

    this.http.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      (data: User) => {
        console.log('SEND_REQUEST', data);
        this.dataService.updatedUser(data);
        //this.dataService.setUser(data);
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }

}
