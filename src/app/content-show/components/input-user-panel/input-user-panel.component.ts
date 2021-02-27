import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DataService, Message, User} from '../../../shared/data.service';
import {ChatServiceService} from '../../../shared/chat-service/chat-service.service';

@Component({
  selector: 'app-input-user-panel',
  templateUrl: './input-user-panel.component.html',
  styleUrls: ['./input-user-panel.component.css']
})
export class InputUserPanelComponent implements OnInit {

  currentContact: User;
  currentUser: User;
  currentContactMessages: Message[] = [];
  @ViewChild('message') message: ElementRef;

  constructor(private chatServiceService: ChatServiceService,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => this.currentUser = user);
    this.dataService.currentContact.subscribe(contact => {
      this.currentContact = contact;
    });
    this.dataService.currentContactMessages.subscribe(messages => {
      this.currentContactMessages = messages;
    });
  }

  onAddPostToContact(textPost: string) {
    this.chatServiceService.addNewPostToContact(textPost, this.currentContact._id);
    this.message.nativeElement.value = '';
  }

  onPressEnter(event, textPost: string) {
    if (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (textPost.length > 0) {
          this.onAddPostToContact(textPost);
        }
      }
    }
  }

  getDate(str: string) {
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    };
    const date = new Date(str);
    return date.toLocaleString('ru', options);
  }

}
