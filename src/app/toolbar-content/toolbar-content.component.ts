import {Component, Input, OnInit} from '@angular/core';
import {DataService, User} from '../shared/data.service';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrls: ['./toolbar-content.component.css']
})
export class ToolbarContentComponent implements OnInit {

  currentUser: User;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => this.currentUser = user);
  }

}
