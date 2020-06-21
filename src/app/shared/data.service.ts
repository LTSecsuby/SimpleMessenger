import {Injectable} from '@angular/core';

export interface User {
  id: number;
  username: string;
  password: string;
  dateCreate: Date;
}

@Injectable({providedIn: 'root'})
export class DataService{

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
}
