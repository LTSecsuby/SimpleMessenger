import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {

  constructor(private dataService: DataService,
              private http: HttpClient) { }

  getContactList(textLogin: string) {
    const token = localStorage.token;

    const url = `http://localhost:8000/user/search/contacts?q=${textLogin}`;

    this.http.get(url, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      data => {
        this.dataService.setContacts(data.contacts);
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }

  addNewContact(loginFriend: string) {

    const token = localStorage.token;

    const url = `http://localhost:8000/user/friend/add`;

    const body = {
      friend: loginFriend
    };

    this.http.post(url, body, { headers: {"Authorization" : `Bearer ${token}`} } ).subscribe(
      data => {
        //this.dataService.setUser(data.user[0]);
        this.dataService.setError(null);
        console.log(data);
      },
      error => {
        this.dataService.setError(error);
        console.log(error);
      }
    );
  }
}
