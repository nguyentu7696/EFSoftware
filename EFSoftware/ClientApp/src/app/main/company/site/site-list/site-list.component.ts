import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../libs/notification';
import { SiteService } from '../site.service';
import { Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';
import { CustomRequest } from '../../../../libs/request';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {
  listSite: any[] = [];
  listDepartment: any = [];
  currentSite: any = {};
  public page: number = 1;
  public size: number = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName: string = '';
  errorMessage: any;

  public currentCompany: any = {};
  public currentDepartment: any = {};
  departmentIdSelect: any;

  constructor(
    private _siteService: SiteService,
    private _notificationService: NotificationService,
    private customRequest: CustomRequest,
    private dataStorage: DataStorage,
    private router: Router,
  ) {
    this.currentDepartment = DataStorage.getCurrentDepartment();
    if (this.currentDepartment == undefined || this.currentDepartment.id == undefined) {
      this.currentDepartment = {
        id: 0
      };
    }
    this.departmentIdSelect = this.currentDepartment.id;
    this.currentCompany = DataStorage.currentCompany;
    this.currentSite = {};
    this.getListDepartment();
    this.getCount();
    this.getSiteList();
  }

  ngOnInit() {
  }

  getListDepartment() {
    this._siteService.getListDepartment(this.currentCompany.id)
      .subscribe((res) => {
        this.listDepartment = res.data;
        if (this.listSite.length > 0) {
          this.listSite = this.listSite.map(item => {
            var itemdepartmentfind = this.listDepartment.find(itemdepartement => item.departmentId == itemdepartement.id);
            if (itemdepartmentfind != undefined) {
              item.department = itemdepartmentfind.name;
            }
            return item;
          });
        }
      }
        , error => {
          this.errorMessage = error;
        });
  }

  getCount() {
    this._siteService.getCount(this.currentCompany.id, this.departmentIdSelect, this.filterByName).subscribe(
      result => {
        console.log('rrrrrrrrrr', result);
        this.totalItems = result.data.length;
      }
    );
  }

  loadPage(page: number) {
    this.page = page;
    this.getSiteList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }

  getSiteList() {
    this._siteService.getListSiteWithCompany(this.page, this.size, this.currentCompany.id,
      this.departmentIdSelect, this.filterByName).subscribe(
      result => {
        console.log('ttttttttttt', result);
        var resultList = [];
        if (this.departmentIdSelect == 0) {
          resultList = result.data.results.filter(item => {
            var itemdepartmentfind = this.listDepartment.find(itemdepartement => item.departmentId == itemdepartement.id);
            if (itemdepartmentfind == undefined || itemdepartmentfind.id == undefined) {
              return false;
            } else {
              return true;
            }
          });
        } else {
          resultList = result.data.results;
        }

        if (this.listDepartment.length > 0) {
          resultList = resultList.map(item => {
            var itemdepartmentfind = this.listDepartment.find(itemdepartement => item.departmentId == itemdepartement.id);
            if (itemdepartmentfind != undefined) {
              item.department = itemdepartmentfind.name;
            }
            return item;
          });
        }
        this.listSite = resultList;
        console.log('nnnnnnnnnn', this.listSite);
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    )
  }

  onSelectDepartment(departmentId) {
    this.departmentIdSelect = departmentId;
    DataStorage.setCurrentDepartment(this.listDepartment.find(item => item.id == departmentId));
    this.loadPage(1);
  }

  createSite() {
    this.router.navigate(['company/site/create/']);
  }

  delete(id) {
    this._siteService.deleteSite(id)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this.getSiteList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        });
  }

  goToJobSites(itemsite) {
    DataStorage.setCurrentSite(itemsite);
    this.router.navigate(['company/job-site/list/']);
  }

}
