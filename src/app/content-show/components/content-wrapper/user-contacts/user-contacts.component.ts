import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataService, User} from '../../../../shared/data.service';
import {SearchUsersService} from '../../../../shared/search-users/search-users.service';
import {ChatServiceService} from '../../../../shared/chat-service/chat-service.service';

@Component({
  selector: 'app-user-contents',
  templateUrl: './user-contacts.component.html',
  styleUrls: ['./user-contacts.component.css']
})
export class UserContactsComponent implements OnInit, OnDestroy {
  public defaultImage = '../../../../assets/login-img.png';
  public contacts: User[] = [];
  currentUser: User;

  constructor(private dataService: DataService,
              private searchUsersService: SearchUsersService,
              private chatServiceService: ChatServiceService) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.chatServiceService.getCurrentUserContacts();
    });
    this.dataService.currentUserContacts.subscribe(contacts => this.contacts = contacts);
  }

  ngOnDestroy() { }

  onChangeContact(item, event) {
    if (event) {
      //console.log('TARGET', event.target);
      if (event.target.id === 'contact_delete_button') { return; }
    }
    this.dataService.updateCurrentContact(item);
    this.chatServiceService.getCurrentContactMessageList(item._id);
  }

  onDeleteFriend(item) {
    this.chatServiceService.deleteContact(item._id);
  }

}
