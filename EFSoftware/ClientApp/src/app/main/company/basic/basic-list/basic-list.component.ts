import { Component, OnInit } from '@angular/core';
import { CustomRequest } from '../../../../libs/request';
import { constant } from '../../../../../constant/constant';
import { RequestMethod } from '@angular/http';
import { DataStorage } from '../../../../providers/data/data';
import { Router, NavigationExtras } from '@angular/router';
import { BasicService } from '../basic.service';
import { NotificationService } from '../../../../libs/notification';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {
  listCompany: any[] = [];
  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName = '';
  constructor(private customRequest: CustomRequest, private dataStorage: DataStorage, private router: Router,
    private _basicService: BasicService, private _notificationService: NotificationService) {
    // this.customRequest.Request(constant.API_GET_LIST_COMPANY, RequestMethod.Get)
    //   .subscribe(
    //     result => {
    //       this.listCompany = result.data;
    //     }
    //   )
    this.getCount();
    this.getCompanyList();
  }

  ngOnInit() {

  }

  loadPage(page: number) {
    this.page = page;
    this.getCompanyList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }

  getCount() {
    this._basicService.getCount(this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    );
  }

  getCompanyList() {
    this._basicService.getCompanyList(this.page, this.size, this.filterByName).subscribe(
      result => {
        this.listCompany = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

  editCompany(idcompay: string) {
    let itemCompnay = this.listCompany.find(item => {
      return item.id == idcompay;
    });
    if (itemCompnay) {
      console.log(itemCompnay);
      DataStorage.currentCompany = itemCompnay;
      this.router.navigate(['company/basic/update']);
    }
  }

  createCompany() {
    let itemCompnay = {
      id: 0,
      department: 'Division',
      site: 'Site',
      jobSite: 'Job Site',
      zone: 'Zone',
      level: 'Level',
      area: 'Area',
      location: 'Locatoin',
      status: 1,
    };
    if (itemCompnay) {
      DataStorage.currentCompany = itemCompnay;
      this.router.navigate(['company/basic/create']);
    }
  }

  delete(id) {
    this._basicService.deleteCompany(id)
      .subscribe((res) => {
        this.getCompanyList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        });
  }

}
