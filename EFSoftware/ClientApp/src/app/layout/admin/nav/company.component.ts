import { Component, OnInit } from '@angular/core';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Router, NavigationExtras, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { DataStorage } from '../../../providers/data/data';
import { SystemConstants } from "../../../libs/SystemConstant";
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  hiddenMenu: boolean = false;
  currentCompany: any = {};
  currentJobSite: any = {};
  tabSelect: number = 1;
  baseUrl : string = '';
  jobsitedetail: boolean = false;

  constructor(private router: Router, private dataStorage: DataStorage) {
    this.baseUrl = SystemConstants.BASE_API;
    router.events.subscribe((val) => {
      console.log('kkkk1111111111111111111');
      if (val instanceof NavigationEnd) {
        console.log('kkkk222222222222222222222222');
        if (val.urlAfterRedirects.indexOf('/global/') >= 0 || val.urlAfterRedirects.indexOf('/global/') >= 0) {
          return;
        }
        if (val.urlAfterRedirects.indexOf('/company/basic/list') >= 0 || val.urlAfterRedirects.indexOf('/company/basic/create') >= 0) {
          this.hiddenMenu = true;
        } else {
          this.hiddenMenu = false;

          if (val.urlAfterRedirects.indexOf('/company/job-site/detail/') >= 0 || val.urlAfterRedirects.indexOf('/company/job-site/detail/') >= 0) {
            this.jobsitedetail = true;
          } else {
            this.jobsitedetail = false;
          }
          this.currentCompany = DataStorage.currentCompany;
          this.currentJobSite = DataStorage.currentJobSite;
          if (this.currentCompany == undefined) {
            this.currentCompany = {
              id: 0,
              department: 0,
              site: 0,
              jobsite: 0,
              zone: 0,
              level: 0,
              area: 0,
              location: 0,
              status: 1,
            };
          }
          console.log('AAAAAAAAAAAAAAAAAAA', val.urlAfterRedirects);
          if (val.urlAfterRedirects.indexOf('/basic/') >= 0) {
            this.tabSelect = 1;
          } else if (val.urlAfterRedirects.indexOf('/department/') >= 0) {
            this.tabSelect = 2;
          } 
          else if (val.urlAfterRedirects.indexOf('/site/') >= 0) {
            this.tabSelect = 3;
          }
          else if (val.urlAfterRedirects.indexOf('/job-site/list') >= 0) {
            this.tabSelect = 4;
          }
          else if (val.urlAfterRedirects.indexOf('/job-site/create') >= 0) {
            this.tabSelect = 4;
          }
          else if (val.urlAfterRedirects.indexOf('/attendance/') >= 0) {
            this.tabSelect = 5;
          }
          else if (val.urlAfterRedirects.indexOf('/resign-reason/') >= 0) {
            this.tabSelect = 6;
          }
          else if (val.urlAfterRedirects.indexOf('/public-holiday/') >= 0) {
            this.tabSelect = 7;
          }
          else if (val.urlAfterRedirects.indexOf('/race/') >= 0) {
            this.tabSelect = 8;
          }
          else if (val.urlAfterRedirects.indexOf('/otcode/') >= 0) {
            this.tabSelect = 9;
          }
          else if (val.urlAfterRedirects.indexOf('/job-site/detail/allowance') >= 0) {
            this.tabSelect = 16;
          }
          else if (val.urlAfterRedirects.indexOf('/allowance/') >= 0) {
            this.tabSelect = 10;
          }
          else if (val.urlAfterRedirects.indexOf('/shift/') >= 0) {
            this.tabSelect = 17;
          }
          else if (val.urlAfterRedirects.indexOf('/job-site/detail/edit') >= 0) {
            this.tabSelect = 11;
          }
          else if (val.urlAfterRedirects.indexOf('/job-site/detail/zone-location') >= 0) {
            this.tabSelect = 12;
          }
          else if (val.urlAfterRedirects.indexOf('/level/') >= 0) {
            this.tabSelect = 12;
          }
          else if (val.urlAfterRedirects.indexOf('/area/') >= 0) {
            this.tabSelect = 12;
          }
          else if (val.urlAfterRedirects.indexOf('/location/') >= 0) {
            this.tabSelect = 12;
          }
          else if ( val.urlAfterRedirects.indexOf('job-site/detail/zone') >= 0) {
            this.tabSelect = 13;
          }
          else if (val.urlAfterRedirects.indexOf('/job-site/detail/employee') >= 0) {
            this.tabSelect = 14;
          }
          else if (val.urlAfterRedirects.indexOf('/job-site/detail/otsetting') >= 0) {
            this.tabSelect = 15;
          }
          else if (val.urlAfterRedirects.indexOf('/job-site/detail/job-site-shift') >= 0) {
            this.tabSelect = 18;
          }
          else {
            this.tabSelect = 1;
          }
          if(this.tabSelect != 1 && ( DataStorage.currentCompany.id == undefined || !DataStorage.currentCompany.id)){
            this.router.navigate(['company/basic/list']);
          }
        }
      }
    });
  }

  gotoSiteList() {
    DataStorage.currentDepartment = {};
    //this.router.navigate(['company/site/list']);
    setTimeout(() => this.router.navigate(['company/site/list']), 10);
  }

  gotoJobSiteList() {
    DataStorage.currentDepartment = {};
    DataStorage.currentSite = {};
    console.log('333333333333333333333333333');
    //this.router.navigate(['company/job-site/list']);
    setTimeout(() => this.router.navigate(['company/job-site/list']), 10);
  }

  ngOnInit() {
  }

}
