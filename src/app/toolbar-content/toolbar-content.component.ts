import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrls: ['./toolbar-content.component.css']
})
export class ToolbarContentComponent implements OnInit {
  userMsg: Object[] = [];
  friendMsg: Object[] = [];
  userName = 'User';
  @Input() currentUser = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.currentUser = this.dataService.getUser();
    const date1 = new Date('December 17, 1995 03:24:00');
    const date2 = new Date('December 18, 1995 05:24:00');
    const date3 = new Date('December 17, 1995 01:24:00');
    const date4 = new Date('December 18, 1995 03:24:00');

    this.userMsg.push({ownerLogin: 'User', text: 'hello', created: date1});
    this.userMsg.push({ownerLogin: 'User', text: 'im User', created: date2});

    this.friendMsg.push({ownerLogin: 'Evgen', text: 'hi', created: date3});
    this.friendMsg.push({ownerLogin: 'Evgen', text: 'im Evgen', created: date4});
  }

}
