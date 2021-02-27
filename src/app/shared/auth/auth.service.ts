import { Injectable } from '@angular/core';
import {DataService, User} from '../data.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

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
      password
    };

    this.http.post(url, body).subscribe(
      (data: any) => {
        console.log('LOGIN', data.user);
        this.dataService.updatedUser(data.user);
        //this.dataService.setUser(data.user);
        this.dataService.setError(null);
        localStorage.setItem("token", data.token);
        this.router.navigate(['/user']).then(r => console.log('TO LOGIN'));
        //console.log(data.token);
      },
      error => {
        this.dataService.setError(error);
        this.dataService.updatedUser(null);
        console.log(error);
      }
    );
  }

  logoutUser() {
    this.dataService.updatedUser(null);
    localStorage.removeItem("token");
    this.router.navigate(['/']).then(r => console.log('TO START'));
  }

  getProfile() {
    const url = `http://localhost:8000/user/profile`;
    const token = localStorage.token;

    this.http.get(url, { headers: {"Authorization" : `Bearer ${token}`} }).subscribe(
      data => {
        // @ts-ignore
        const user: User = data.user;
        console.log('PROFILE', user);
        this.dataService.updatedUser(user);
        //this.dataService.setUser(data.user);
        this.dataService.setError(null);
        if (this.router.url === '/') {
          this.router.navigate(['/user']).then(r => console.log('TO LOGIN'));
        }
      },
      error => {
        console.log(error);
        this.dataService.updatedUser(null);
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
