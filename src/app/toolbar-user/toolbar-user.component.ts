import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.css']
})
export class ToolbarUserComponent implements OnInit {
  public user: any;
  constructor() { }

  ngOnInit(): void {
    this.user = {id: '1', login: 'Evgen'};
  }

}
