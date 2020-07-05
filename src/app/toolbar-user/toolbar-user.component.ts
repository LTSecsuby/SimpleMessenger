import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.css']
})
export class ToolbarUserComponent implements OnInit {
  @Input() currentUser = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.currentUser = this.dataService.getUser();
  }
}
