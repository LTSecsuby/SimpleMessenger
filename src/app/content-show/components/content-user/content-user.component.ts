import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-user',
  templateUrl: './content-user.component.html',
  styleUrls: ['./content-user.component.css']
})
export class ContentUserComponent implements OnInit {
  @Input() user: any;
  public defaultImage = '../../../../assets/login-img.png';
  constructor() { }

  ngOnInit(): void {}

}
