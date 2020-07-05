import { Component, OnInit } from '@angular/core';
import {DataService, User} from '../shared/data.service';
import {AuthService} from '../shared/auth/auth.service';
import {timer} from 'rxjs';

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
    const source = timer(500);
    source.subscribe(() => {
      if (this.dataService.getUser() !== null) {
        this.currentUser = this.dataService.getUser();
      }
    });
  }
}
