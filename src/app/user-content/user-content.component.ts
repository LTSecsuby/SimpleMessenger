import { Component, OnInit } from '@angular/core';
import {DataService, User} from '../shared/data.service';
import {AuthService} from '../shared/auth/auth.service';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {

  private currentUser: User = null;
  constructor(private dataService: DataService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile();
    setTimeout(() => {
      if (this.dataService.getUser() !== null) {
        this.currentUser = this.dataService.getUser();
      }
    }, 200);
  }
}
