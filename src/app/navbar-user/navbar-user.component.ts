import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../shared/data.service';

import { TRIGGER_FETCH_FRIENDS } from '../shared/data.service';
import { TRIGGER_CHAT } from '../shared/data.service';
import { TRIGGER_CONTACTS } from '../shared/data.service';
import { TRIGGER_NOTIFICATION } from '../shared/data.service';


@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {
  TRIGGER_FETCH_FRIENDS = TRIGGER_FETCH_FRIENDS;
  TRIGGER_CHAT = TRIGGER_CHAT;
  TRIGGER_CONTACTS = TRIGGER_CONTACTS;
  TRIGGER_NOTIFICATION = TRIGGER_NOTIFICATION;

  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.router.navigate(['/start']);
  }

  onChangeContent(trigger: string) {
    this.dataService.setUserNavbarContent(trigger);
  }

}
