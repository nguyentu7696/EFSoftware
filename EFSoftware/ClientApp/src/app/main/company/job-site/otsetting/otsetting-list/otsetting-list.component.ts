import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { DataStorage } from '../../../../../providers/data/data';
import { Router, NavigationExtras } from '@angular/router';
import { OtsettingService } from '../otsetting.service';
import { Utils } from '../../../../../libs/Utils';

@Component({
  selector: 'app-otsetting-list',
  templateUrl: './otsetting-list.component.html',
  styleUrls: ['./otsetting-list.component.scss']
})
export class OtsettingListComponent implements OnInit {
  public otSettingList: any[] = [];

  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName: string = '';
  currentCompany: any = {};
  currentJobsite: any = {};

  otCode: any = [];
  otCodeAll: any = [];
  otCodeSelect: any = {};
  otMaxSetting: any = {};

  constructor(
    private _otsettingService: OtsettingService,
    private _notificationService: NotificationService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobsite = DataStorage.getCurrentJobSite();
    this.getData();
    this.getOTMaxSetting();

    this.otMaxSetting.jobsiteId = this.currentJobsite.id;
  }

  async getOtCodeActiveList() {
    await new Promise(resolve => {
      this._otsettingService.getOtCodeActiveList(this.currentCompany.id).subscribe(
        result => {
          this.otCodeAll = result.data;
          resolve('done');
        }
      );
    });
  }

  async getData() {
    await this.getOtCodeActiveList();
    this.getCount();
    this.getOtSettingList();
  }

  getOTMaxSetting() {
    this._otsettingService.getOTMaxSetting(this.currentJobsite.id).subscribe(
      result => {
        if (result.data) {
          this.otMaxSetting = result.data;
        }
      });
  }

  UpdateOrCreateOtMaxtime() {
    this._otsettingService.updateOTMaxSetting(this.otMaxSetting).subscribe(
      result => {
        if (result.data) {
          this.otMaxSetting = result.data;
        }
        this._notificationService.SuccessNotification('Update OT Max Time Successfully');
      });
  }

  addOtSetting() {
    if (!this.otCodeSelect.id) {
      this._notificationService.ErrorNotification('Please choose a payroll code.');
      return;
    }
    let otSettingCode: any = {
      payrollcode: this.otCodeSelect.payrollCode,
      payroll: this.otCodeSelect.payroll,
      type: this.otCodeSelect.type,
      remarks: this.otCodeSelect.remarks,
      rate: this.otCodeSelect.rate,
      companyId: this.currentCompany.id,
      jobsiteId: this.currentJobsite.id,
      otCodeId: this.otCodeSelect.id
    };

    if (this.otCodeSelect.startDate.indexOf('0001-01-01') < 0) {
      otSettingCode.startdate = Utils.convertDate(this.otCodeSelect.startDate);
    }

    if (this.otCodeSelect.endDate.indexOf('0001-01-01') < 0) {
      otSettingCode.enddate = Utils.convertDate(this.otCodeSelect.endDate);
    }

    this._otsettingService.createOtSetting(otSettingCode)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Add Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/otsetting/edit/', res.data.id]);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
        });
  }

  onSelectOTCodeCompany(itemvalue) {
    if (!itemvalue) {
      this.otCodeSelect = {};
      return;
    }
    this.otCodeSelect = this.otCode.find(item => item.id == itemvalue);
  }

  loadPage(page: number) {
    this.page = page;
    this.getOtSettingList();
    this.getCount();
  }

  Search() {
    this.loadPage(1);
  }
  getCount() {
    this._otsettingService.getCount(this.currentCompany.id, this.currentJobsite.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
        let listIdUsed = result.data.map(item => {
          return item.otcodeId;
        });
        this.otCode = this.otCodeAll.filter(item => {
          if (listIdUsed.indexOf(item.id) >= 0) {
            return false;
          } else {
            return true;
          }
        });
      });
  }

  delete(id) {
    this._otsettingService.deleteOtSetting(id)
      .subscribe((res) => {
        this.getOtSettingList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        });
  }

  getOtSettingList() {
    this._otsettingService.getOtSettingList(this.page, this.size, this.currentCompany.id, this.currentJobsite.id,
       this.filterByName).subscribe(
      result => {
        this.otSettingList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

}
