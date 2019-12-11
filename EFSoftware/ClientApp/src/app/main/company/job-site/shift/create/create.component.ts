import { Component, OnInit, Input } from '@angular/core';
import { DataStorage } from '../../../../../providers/data/data';
import { ShiftService } from '../shift.service';
import { NotificationService } from '../../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemConstants } from '../../../../../libs/SystemConstant';
import {IMyDpOptions} from 'mydatepicker';
import { DateService } from '../../../../../providers/date-service';

@Component({
  selector: 'app-job-site-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  shift: any = {};
  errorMessage: any;
  jobSiteId: number;
  listShiftCode: any = [];
  currentJobSite: any = {};
  currentCompany: any = {};
  shiftValid: any = {
    mainCode: true,
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

  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd MMM yyyy',
    defaultOpen: false
  };

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  constructor(
    private dataStorage: DataStorage,
    private _shiftService: ShiftService,
    private _notificationService: NotificationService,
    private _router: Router,
    private _dateService: DateService
  ) {
    this.shift.shiftId = 0;
  }

  ngOnInit() {
    this.shift.status = 1;
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    if (this.currentJobSite == undefined && this.currentJobSite.id == undefined) {
      this.jobSiteId = 0;
    } else {
      this.jobSiteId = this.currentJobSite.id;
    }
    this.getListShiftCode();
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
    var isvalid = false;
    this.shiftValid = {
      mainCode: this.shift.mainCode ? true : false,
      subCode: this.shift.subCode ? true : false,
      startHours: this.shift.startHours ? true : false,
      endHours: this.shift.endHours ? true : false,
      startMinutes: this.shift.startMinutes ? true : false,
      endMinutes: this.shift.endMinutes ? true : false,
      value: this.shift.value ? true : false,
      minutes: this.shift.minutes ? true : false
    }
    if (this.shift.mainCode && this.shift.subCode && this.shift.startHours && this.shift.endHours && this.shift.startMinutes
       && this.shift.endMinutes && this.shift.value) {
      isvalid = true;
    }
    return isvalid;
  }

  checkValidDate() {
    var start = this.shift.startMinutes.split(':');
    var end = this.shift.endMinutes.split(':');
    var hours = end[0] - start[0];
    var minutes = end[1] - start[1];
    var result = hours * 60 + minutes;

    var starts = this.shift.startHours.split(':');
    var ends = this.shift.endHours.split(':');
    var hour = ends[0] - starts[0];
    var minute = ends[1] - starts[1];
    var results = hour * 60 + minute;


    if (result < 0 || results < 0) {
      this._notificationService.ErrorNotification("Start Time and End Time invalid. Try again!");
      return;
    }
  }

  createShift() {
    if (!this.checkValid()) {
      return;
    }

    this.checkValidDate();
    this.shift.jobSiteId = this.jobSiteId;
    this._shiftService.createShift(this.shift)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification("Create Successfully");
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/job-site-shift']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification("Create Failure. Try again!");
          this.errorMessage = error;
        });
  }
}
