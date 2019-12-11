import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { DataStorage } from '../../../../../providers/data/data';
import { Router, NavigationExtras } from "@angular/router";
import { ShiftService } from '../shift.service';
import { resolve } from 'url';

@Component({
  selector: 'app-job-site-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public shiftList: shift[] = [];
  public page: number = 1;
  public size: number = 10;
  public totalItems = 0;
  public show = 0;
  public currentJobSite: any = {};
  private filterByName: string = '';
  listShiftCodeCompanyAll: any = [];
  listShiftCodeCompany: any = [];

  errorMessage: any;
  shiftMainCode: number;
  currentCompany: any = {};
  constructor(
    private _notificationService: NotificationService,
    private _router: Router,
    private _ShiftService: ShiftService) {
    this.shiftMainCode = 0;
  }

  ngOnInit() {
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentCompany = DataStorage.getCurrentCompany();
    this.getData();
  }

  async getData() {
    await this.getListShiftCode();
    this.getCount();
    this.getShiftList();
  }

  async getListShiftCode() {
    return new Promise(resolve => {
      this._ShiftService.getListShiftCode()
        .subscribe((res) => {
          this.listShiftCodeCompanyAll = res.data;
          resolve();
        }
          , error => {
            this.errorMessage = error;
            resolve();
          });
    });
  }

  addShiftCode() {
    if (this.shiftMainCode > 0) {
      var shift = {
        shiftId: this.shiftMainCode,
        jobSiteId: this.currentJobSite.id,
        status: 1
      }
      this._ShiftService.createShift(shift)
        .subscribe((res) => {
          if (!res.success) {
            this._notificationService.ErrorNotification(res.message);
            return;
          }
          this._notificationService.SuccessNotification("Create Successfully");
          setTimeout(() => {
            this._router.navigate(['/company/job-site/detail/job-site-shift/edit/', res.data.id]);
          }, 2000);
        }
          , error => {
            this._notificationService.ErrorNotification("Create Failure. Try again!");
            this.errorMessage = error;
          });
    }
    else {
      this._notificationService.ErrorNotification('Please select a shift code.');
    }
  }

  loadPage(page: number) {
    this.page = page;
    this.getShiftList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }

  getCount() {
    this._ShiftService.getCount(this.currentJobSite.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
        let listIdUsed = result.data.map(item => {
          return item.shiftId;
        });
        this.listShiftCodeCompany = this.listShiftCodeCompanyAll.filter(item => {
          if (listIdUsed.indexOf(item.id) >= 0) {
            return false;
          } else {
            return true;
          }
        });
      }
    );
  }

  getShiftList() {
    this._ShiftService.getShiftList(this.page, this.size, this.currentJobSite.id, this.filterByName).subscribe(
      result => {
        this.shiftList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

  delete(id) {
    this._ShiftService.deleteShift(id)
      .subscribe((res) => {
        this.getShiftList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        })
  }

  createShift() {
    this._router.navigate(['company/job-site/detail/job-site-shift/create']);
  }

}

interface shift {
  id: number;
  mainCode: string;
  subCode: string;
  value: string;
  remarks: string;
  status: string;
}
