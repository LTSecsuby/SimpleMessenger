import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.css']
})
export class ChatClientComponent implements OnInit {

  menuToggle = false;

  constructor() { }

  ngOnInit(): void {

  }

  onAddPostToContact(textPost: string) {
    //this.chatServiceService.addNewPostToContact(textPost, this.currentContact._id);
    //this.message.nativeElement.value = '';
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

}
