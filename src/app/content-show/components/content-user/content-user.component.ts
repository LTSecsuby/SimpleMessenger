import {Component, Input, OnInit} from '@angular/core';
import {DataService, User} from '../../../shared/data.service';

@Component({
  selector: 'app-content-user',
  templateUrl: './content-user.component.html',
  styleUrls: ['./content-user.component.css']
})
export class ContentUserComponent implements OnInit {
  @Input() currentUser: User = null;
  public defaultImage = '../../../../assets/login-img.png';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.currentUser = this.dataService.getUser();
  }

}
