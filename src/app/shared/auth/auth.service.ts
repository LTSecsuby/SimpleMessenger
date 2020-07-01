import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataService: DataService,
              private http: HttpClient,
              private router: Router) { }

  loginUser(username: string, password: string) {
    const url = `http://localhost:8000/user/login`;
    const body = {
      login: username,
      password: password
    };

    this.http.post(url, body).subscribe(
      data => {
        this.dataService.setUser(data.user[0]);
        this.dataService.setError(null);
        localStorage.setItem("token", data.token);
        //console.log(data.token);
      },
      error => {
        this.dataService.setError(error);
        this.dataService.setUser(null);
        console.log(error);
      }
    );
  }

  logoutUser() {
    localStorage.removeItem("token");
    this.router.navigate(['/start']);
  }

  getProfile() {
    const url = `http://localhost:8000/user/profile`;
    const token = localStorage.token;

    this.http.get(url, { headers: {"Authorization" : `Bearer ${token}`} }).subscribe(
      data => {
        this.dataService.setUser(data.user);
        this.dataService.setError(null);
      },
      error => {
        console.log(error);
        this.dataService.setUser(null);
        this.dataService.setError(error);
        this.logoutUser();
      }
    );
  }

  createNewUser(usernameNew: string, passwordNew: string): void {
    const url = `http://localhost:8000/user/signup`;
    const userBody = {
      login: usernameNew,
      password: passwordNew
    };
    this.http.post(url, userBody).subscribe(data => {
        this.dataService.setError(null);
      },
      error => {
        this.dataService.setError(error);
      }
    );
  }
}
