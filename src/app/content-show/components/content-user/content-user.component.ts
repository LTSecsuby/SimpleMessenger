import {Component, Input, OnInit} from '@angular/core';
import {DataService, User} from '../../../shared/data.service';

@Component({
  selector: 'app-content-user',
  templateUrl: './content-user.component.html',
  styleUrls: ['./content-user.component.css']
})
export class ContentUserComponent implements OnInit {
  currentContact: any;
  currentUser: User;
  public defaultImage = '../../../../assets/login-img.png';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentContact.subscribe(contact => this.currentContact = contact);
    this.dataService.currentUser.subscribe(user => this.currentUser = user);
  }

}
