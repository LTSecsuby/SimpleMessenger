import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  @Input() contentItem: Object[];
  public defaultImage = '../../../../assets/login-img.png';
  constructor() { }

  ngOnInit(): void {}

  getUser(user: any) {
    console.log(user);
  }
}
