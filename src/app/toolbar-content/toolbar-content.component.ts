import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrls: ['./toolbar-content.component.css']
})
export class ToolbarContentComponent implements OnInit {
  userMsg: Object[] = [];
  friendMsg: Object[] = [];
  userName = 'User';

  constructor() { }

  ngOnInit(): void {
    const date1 = new Date('December 17, 1995 03:24:00');
    const date2 = new Date('December 18, 1995 05:24:00');
    const date3 = new Date('December 17, 1995 01:24:00');
    const date4 = new Date('December 18, 1995 03:24:00');

    this.userMsg.push({owner: 'User', msg: 'hello', date: date1});
    this.userMsg.push({owner: 'User', msg: 'im User', date: date2});

    this.friendMsg.push({owner: 'Evgen', msg: 'hi', date: date3});
    this.friendMsg.push({owner: 'Evgen', msg: 'im Evgen', date: date4});
  }

}
