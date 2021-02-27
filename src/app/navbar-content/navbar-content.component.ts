import {Component, OnInit} from '@angular/core';
import {DataService, navbarContentElement} from '../shared/data.service';


@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.css']
})
export class NavbarContentComponent implements OnInit {

  navbarContentTrigger: navbarContentElement;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.navbarContent.subscribe(navbarContentTrigger => {
      this.navbarContentTrigger = navbarContentTrigger;
    });
  }

}
