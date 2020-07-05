import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {
  @Input() userMsg: Object[];
  @Input() friendMsg: Object[];
  @Input() userName: string;
  result: any;

  constructor() { }

  ngOnInit(): void {
    this.result = this.userMsg.concat(this.friendMsg);
    this.result.sort(this.sortByField('created'));
  }

  sortByField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }
}
