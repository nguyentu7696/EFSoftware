import { Component, OnInit } from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';
import { Router, NavigationExtras, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  tabSelect: number = 1;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if(val.urlAfterRedirects.indexOf('/attendance/') >=0 ) {
          this.tabSelect = 1;
        } else if (val.urlAfterRedirects.indexOf('/holiday/') >=0) {
          this.tabSelect = 2;
        } else {
          this.tabSelect = 1;
        }
      }     
    });
  }
  ngOnInit() {
    
  }

}
