import {Component, Input, OnInit} from '@angular/core';
import {Contact, DataService, User} from '../../../shared/data.service';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {

  result: any;
  currentUser: User;
  currentContact: Contact;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //this.result = this.userMsg.concat(this.friendMsg);
    //this.result.sort(this.sortByField('created'));
    this.dataService.currentUser.subscribe(user => this.currentUser = user);
    this.dataService.currentContact.subscribe(contact => this.currentContact = contact);
  }

  sortByField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
}
