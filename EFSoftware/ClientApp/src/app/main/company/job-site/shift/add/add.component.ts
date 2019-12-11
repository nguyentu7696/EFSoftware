import { Component, OnInit, Input } from '@angular/core';
import { DataStorage } from '../../../../../providers/data/data';
import { ShiftService } from '../shift.service';
import { NotificationService } from '../../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemConstants } from '../../../../../libs/SystemConstant';
import {IMyDpOptions} from 'mydatepicker';
import { DateService } from '../../../../../providers/date-service';

@Component({
  selector: 'app-job-site-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  shift: any = {};
  errorMessage: any;
  jobSiteId: number;
  listShiftCode: any = [];
  shiftMainCode: any;
  mainCode: any;
  currentJobSite: any = {};
  currentCompany: any = {};
  shiftValid: any = {
    shiftId: true,
    subCode: true,
    startHours: true,
    endHours: true,
    startMinutes: true,
    endMinutes: true,
    value: true,
    minutes: true,
    hours: true,
    periodDate: true,
    remarks: true,
  };

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };
  constructor(
    private _avRoute: ActivatedRoute,
    private dataStorage: DataStorage,
    private _shiftService: ShiftService,
    private _notificationService: NotificationService,
    private _router: Router,
    private _dateService: DateService
  ) {

  }

  ngOnInit() {
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentCompany = DataStorage.getCurrentCompany();
    if (this.currentJobSite == undefined && this.currentJobSite.id == undefined) {
      this.jobSiteId = 0;
    } else {
      this.jobSiteId = this.currentJobSite.id;
    }
    this.getListShiftCode();
    if (this._avRoute.snapshot.params['id']) {
      this.shift.shiftId = this._avRoute.snapshot.params['id'];
    }
    this.shift.status = 1;
    this._shiftService.getShiftMainCode(this.shift.shiftId).subscribe(res => {
      this.shiftMainCode = res.data.mainCode;
    });
  }
  getListShiftCode() {
    this._shiftService.getListShiftCode()
      .subscribe((res) => {
        this.listShiftCode = res.data;
      }
        , error => {
          this.errorMessage = error;
        });
  }
  checkValid(): boolean {
    let isvalid = false;
    this.shiftValid = {
      shiftId: this.shift.shiftId ? true : false,
      subCode: this.shift.subCode ? true : false,
      startHours: this.shift.startHours ? true : false,
      endHours: this.shift.endHours ? true : false,
      startMinutes: this.shift.startMinutes ? true : false,
      endMinutes: this.shift.endMinutes ? true : false,
      value: this.shift.value ? true : false,
      minutes: this.shift.minutes ? true : false
    };
    if (this.shift.shiftId && this.shift.subCode && this.shift.startHours && this.shift.endHours && this.shift.startMinutes
       && this.shift.endMinutes && this.shift.value) {
      isvalid = true;
    }
    return isvalid;
  }

  checkValidDate() {
    let start = this.shift.startMinutes.split(':');
    let end = this.shift.endMinutes.split(':');
    let hours = end[0] - start[0];
    let minutes = end[1] - start[1];
    let result = hours * 60 + minutes;

    let starts = this.shift.startHours.split(':');
    let ends = this.shift.endHours.split(':');
    let hour = ends[0] - starts[0];
    let minute = ends[1] - starts[1];
    let results = hour * 60 + minute;


    if (result < 0 || results < 0) {
      this._notificationService.ErrorNotification('Start Time and End Time invalid. Try again!');
      return;
    }
  }

  createShift() {
    if (!this.checkValid()) {
      return;
    }

    this.checkValidDate();
    this.shift.jobSiteId = this.jobSiteId;
    this._shiftService.addShift(this.shift)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/job-site-shift']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }
}
