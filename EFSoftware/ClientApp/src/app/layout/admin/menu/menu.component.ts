import { Component, OnInit } from '@angular/core';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Router, NavigationExtras, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { DataStorage } from '../../../providers/data/data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  currentCompany: any = {};
  tabSelect: number = 1;
  currentUserLogin: any = {};
  constructor(private router: Router) {
    this.currentCompany = DataStorage.currentCompany;
    this.currentUserLogin = DataStorage.currentUserLogin;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.urlAfterRedirects.indexOf('/global/') >= 0) {
          this.tabSelect = 1;
        } else if (val.urlAfterRedirects.indexOf('/job-site/detail/employee') >= 0) {
          this.tabSelect = 4;
        } else if (val.urlAfterRedirects.indexOf('/user') >= 0) {
          this.tabSelect = 4;
        } else if (val.urlAfterRedirects.indexOf('/job-site/') >= 0) {
          this.tabSelect = 3;
        }
        else if (val.urlAfterRedirects.indexOf('/jobsite') >= 0) {
          this.tabSelect = 3;
        }
        else if (val.urlAfterRedirects.indexOf('/company/') >= 0) {
          this.tabSelect = 2;
        }
        else {
          this.tabSelect = 0;
        }
      }
    });
  }

  ngOnInit() {

  }

}
