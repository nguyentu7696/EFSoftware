import { Component, OnInit } from '@angular/core';
import { OtcodeService } from '../otcode.service';
import { NotificationService } from '../../../../libs/notification';
import { Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';

@Component({
  selector: 'app-otcode-list',
  templateUrl: './otcode-list.component.html',
  styleUrls: ['./otcode-list.component.scss']
})
export class OtcodeListComponent implements OnInit {
  // public otcodeList: OtCode[] = [];
  public otcodeList: any[] = [];
  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  currentCompany: any = {};
  private filterByName: string = '';

  constructor(
    private _otcodeService: OtcodeService,
    private _notificationService: NotificationService,
    private _router: Router
  ) {
    this.currentCompany = DataStorage.getCurrentCompany();
  }

  ngOnInit() {
    this.getCount();
    this.getOtCodeList();
  }

  loadPage(page: number) {
    this.page = page;
    this.getOtCodeList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }

  getCount() {
    this._otcodeService.getCount(this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      });
  }

  delete(id) {
    this._otcodeService.deleteOtCode(id)
      .subscribe((res) => {
        this.getOtCodeList();
        this.getCount();
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Delete Successfully');
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        });
  }

  getOtCodeList() {
    this._otcodeService.getOtCodeList(this.page, this.size, this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.otcodeList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      });
  }

}

// interface OtCode {
//   id: number;
//   payrollcode: string;
//   payroll: string;
//   type: number;
//   rate: number;
//   remarks: number;
//   startDate: Date;
//   endDate: Date;
//   remark: string;
// }
