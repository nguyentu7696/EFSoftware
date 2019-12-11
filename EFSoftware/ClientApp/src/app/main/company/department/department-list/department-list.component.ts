import { Component, OnInit } from '@angular/core';
import { CustomRequest } from '../../../../libs/request';
import { constant } from '../../../../../constant/constant';
import { RequestMethod } from '@angular/http';
import { DataStorage } from '../../../../providers/data/data';
import { Router, NavigationExtras } from '@angular/router';
import { DepartmentService } from '../department.service';
import { NotificationService } from '../../../../libs/notification';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  listDepartment: any[] = [];
  public page: number = 1;
  public size: number = 10;
  public totalItems = 0;
  public show = 0;
  public currentCompany: any = {};
  private filterByName: string = '';
  constructor(private customRequest: CustomRequest, private dataStorage: DataStorage, private router: Router,
    private _departmentService: DepartmentService, private _notificationService: NotificationService) {
    this.currentCompany = DataStorage.currentCompany;
    this.getCount();
    this.getDepartmentList();
    DataStorage.currentDepartment = {};
  }

  ngOnInit() {

  }

  loadPage(page: number) {
    this.page = page;
    this.getDepartmentList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }
  getCount() {
    this._departmentService.getCount(this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    )
  }

  getDepartmentList() {
    this._departmentService.getDepartmentList(this.page, this.size, this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.listDepartment = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    )
  }

  editDepartment(idcompay: string) {
    var itemDepartment = this.listDepartment.find(item => {
      return item.id == idcompay;
    });
    if (itemDepartment) {
      DataStorage.currentDepartment = itemDepartment;
      this.router.navigate(['company/department/update']);
    }
  }

  createDepartment() {
    var itemDepartment = {
      id: 0,
      department: 0,
      site: 0,
      jobSite: 0,
      zone: 0,
      level: 0,
      area: 0,
      location: 0,
      status: 1,
    };
    if (itemDepartment) {
      DataStorage.currentDepartment = itemDepartment;
      this.router.navigate(['company/department/create']);
    }
  }

  delete(id) {
    this._departmentService.deleteDepartment(id)
      .subscribe((res) => {

        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }

        this.getDepartmentList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        });
  }

  toSiteList(itemDepartment) {
    DataStorage.currentDepartment = itemDepartment;
    this.router.navigate(['company/site/list']);
  }

}
