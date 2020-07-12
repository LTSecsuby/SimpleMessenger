import {Component, Input, OnInit} from '@angular/core';
import {DataService, User} from '../shared/data.service';

@Component({
  selector: 'app-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.css']
})
export class ToolbarUserComponent implements OnInit {
  currentUser: User;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => this.currentUser = user);
  }
}
