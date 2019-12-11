import { Component, OnInit } from '@angular/core';
import { AllowanceJobsiteService } from '../allowance-jobsite.service';
import { NotificationService } from '../../../../../libs/notification';
import { DataStorage } from '../../../../../providers/data/data';
import { Router, NavigationExtras } from "@angular/router";
import { Utils } from '../../../../../libs/Utils';

@Component({
  selector: 'app-allowance-jobsite-list',
  templateUrl: './allowance-jobsite-list.component.html',
  styleUrls: ['./allowance-jobsite-list.component.scss']
})
export class AllowanceJobsiteListComponent implements OnInit {
  public allowanceJobsiteList: AllowanceJobsite[] = [];

  public page: number = 1;
  public size: number = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName: string = '';

  currentCompany: any = {};
  currentJobsite: any = {};

  allowanceCompany: any = [];
  allowanceCompanyAll: any = [];
  allowanceCompanySelect: any = {};

  constructor(
    private _allowanceJobsiteService: AllowanceJobsiteService,
    private _notificationService: NotificationService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobsite = DataStorage.getCurrentJobSite();
    this.getData();
  }

  async getAllowanceCompanyList() {
    await new Promise(resolve => {
      this._allowanceJobsiteService.getAllowanceCompany(this.currentCompany.id).subscribe(
        result => {
          this.allowanceCompanyAll = result.data;
          resolve('done');
        }
      )
    });
  }

  async getData() {
    await this.getAllowanceCompanyList();
    this.getCount();
    this.getAllowanceJobsiteList();
  }

  addAllowanceJobsite() {
    if (!this.allowanceCompanySelect.id) {
      this._notificationService.ErrorNotification('Please choose a allowance code.');
      return;
    }

    var allowanceCreate: any = {
      name: this.allowanceCompanySelect.description,
      code: this.allowanceCompanySelect.code,
      remarks: this.allowanceCompanySelect.remarks,
      amount: this.allowanceCompanySelect.amount,
      companyId: this.currentCompany.id,
      jobsiteId: this.currentJobsite.id,
      allowanceCompanyId: this.allowanceCompanySelect.id
    }

    if (this.allowanceCompanySelect.startDate.indexOf('0001-01-01') < 0) {
      allowanceCreate.startdate = Utils.convertDate(this.allowanceCompanySelect.startDate);
    }

    if (this.allowanceCompanySelect.endDate.indexOf('0001-01-01') < 0) {
      allowanceCreate.enddate = Utils.convertDate(this.allowanceCompanySelect.endDate);
    }

    this._allowanceJobsiteService.addAllowanceJobsite(allowanceCreate)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Add Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/allowance/edit/', res.data.id]);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
        });

  }

  onSelectAllowanceCompany(itemvalue) {
    if (!itemvalue) {
      this.allowanceCompanySelect = {};
      return;
    }
    this.allowanceCompanySelect = this.allowanceCompany.find(item => item.id == itemvalue);
  }

  loadPage(page: number) {
    this.page = page;
    this.getAllowanceJobsiteList();
    this.getCount();
  }

  Search() {
    this.loadPage(1);
  }
  getCount() {
    this._allowanceJobsiteService.getCount(this.currentCompany.id, this.currentJobsite.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
        var listIdUsed = result.data.map(item => {
          return item.allowanceCompanyId;
        });
        this.allowanceCompany = this.allowanceCompanyAll.filter(item => {
          if (listIdUsed.indexOf(item.id) >= 0) {
            return false;
          } else {
            return true;
          }
        });
      });
  }

  delete(id) {
    this._allowanceJobsiteService.deleteAllowacneJobsite(id)
      .subscribe((res) => {
        this.getAllowanceJobsiteList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        })
  }

  getAllowanceJobsiteList() {
    console.log('id', this.currentJobsite.id);
    this._allowanceJobsiteService.getAllowanceJobsiteList(this.page, this.size, this.currentCompany.id, this.currentJobsite.id,
       this.filterByName).subscribe(
      result => {
        this.allowanceJobsiteList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    )
  }

}

interface AllowanceJobsite {
  id: number;
  name: string;
  code: string;
  amount: string;
  remarks: string;
  startDate: Date;
  endDate: Date;
}
