import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { NotificationService } from '../../../../libs/notification';
import { DataStorage } from '../../../../providers/data/data';
import { Router, NavigationExtras } from "@angular/router";
@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent implements OnInit {
  public attendances: Attendance[] = [];
  public page: number = 1;
  public size: number = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName: string = '';
  currentCompany: any = {};
  atttendanceGlobal: any = [];
  atttendanceGlobalAll: any = [];
  attendanceGlobalSelect: any = {};

  constructor(private _attendanceService: AttendanceService, private _notificationService: NotificationService,
    private _router: Router) {
    this.currentCompany = DataStorage.currentCompany;
    this.getData();
  }

  ngOnInit() {
  }

  async getAttendanceGlobalList() {
    await new Promise(resolve => {
      this._attendanceService.getAttendaceGlobal().subscribe(
        result => {
          this.atttendanceGlobalAll = result.data;
          resolve('done');
        }
      )
    });
  }

  async getData() {
    await this.getAttendanceGlobalList();
    this.getCount();
    this.getAttendanceList();
  }

  addAttendance() {
    if (!this.attendanceGlobalSelect.id) {
      this._notificationService.ErrorNotification('Please select a attendance code.');
      return;
    }

    this._attendanceService.createAttendance({
      name: this.attendanceGlobalSelect.name,
      code: this.attendanceGlobalSelect.code,
      value: this.attendanceGlobalSelect.value,
      status: 1,
      companyId: this.currentCompany.id,
      attendanceId: this.attendanceGlobalSelect.id,
    })
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Add Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/attendance/edit/', res.data.id]);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
        });

  }

  onSelectAttendanceGlobal(itemvalue) {
    if (!itemvalue) {
      this.attendanceGlobalSelect = {};
      return;
    }
    this.attendanceGlobalSelect = this.atttendanceGlobal.find(item => item.id == itemvalue);
  }

  loadPage(page: number) {
    this.page = page;
    this.getAttendanceList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }
  getCount() {
    this._attendanceService.getCount(this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
        var listIdUsed = result.data.map(item => {
          return item.attendanceId;
        });
        this.atttendanceGlobal = this.atttendanceGlobalAll.filter(item => {
          if (listIdUsed.indexOf(item.id) >= 0) {
            return false;
          } else {
            return true;
          }
        });
      }
    )
  }

  delete(id) {
    this._attendanceService.deleteAttendance(id)
      .subscribe((res) => {
        this.getAttendanceList();
        this.getCount();
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Delete Successfully');
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        })
  }

  getAttendanceList() {
    this._attendanceService.getAttendanceList(this.page, this.size, this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.attendances = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    )
  }
}

interface Attendance {
  id: number;
  name: string;
  code: string;
  value: string;
  remarks: string;
  startDate: Date;
  endDate: Date;
}
