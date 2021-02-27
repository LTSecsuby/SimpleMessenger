import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataService, User} from '../../../../shared/data.service';
import {SearchUsersService} from '../../../../shared/search-users/search-users.service';
import {ChatServiceService} from '../../../../shared/chat-service/chat-service.service';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.css']
})
export class UserNotificationsComponent implements OnInit, OnDestroy {
  public defaultImage = '../../../../assets/login-img.png';
  public notifications: User[] = [];
  currentUser: User;

  constructor(private dataService: DataService,
              private searchUsersService: SearchUsersService,
              private chatServiceService: ChatServiceService) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.chatServiceService.getCurrentUserNotifications();
    });
    this.dataService.currentUserNotificationsSources.subscribe(notifications => this.notifications = notifications);
  }

  ngOnDestroy() { }

  onAddContact(friendId: string) {
    this.searchUsersService.addNewContact(friendId);
  }

  onSkipContact(friendId: string) {
    this.searchUsersService.skipNewContact(friendId);
  }

}
