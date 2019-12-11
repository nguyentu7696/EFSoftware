import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';
import { ShiftService } from '../shift.service';

import {IMyDpOptions} from 'mydatepicker';
import { DateService } from '../../../../../providers/date-service';

@Component({
  selector: 'app-job-site-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  shiftId = 0;
  shift: any = {};
  errorMessage: any;
  jobSiteId: number;
  listShiftCode: any = [];
  currentJobSite: any = {};
  currentCompany: any = {};
  periodDate: any = {};

  shiftValid: any = {
    shiftId: true,
    subCode: true,
    mainCode: true,
    startHours: true,
    endHours: true,
    startMinutes: true,
    endMinutes: true,
    value: true,
    minutes: true,
    hours: true,
    periodDate: true,
    remarks: true
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
    private _avRoute: ActivatedRoute,
    private _shiftService: ShiftService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder,
    private _router: Router,
    private _dateService: DateService
  ) {
  }

  ngOnInit() {
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentCompany = DataStorage.getCurrentCompany();
    if (this._avRoute.snapshot.params['id']) {
      this.shiftId = this._avRoute.snapshot.params['id'];
    }
    this.getListShiftCode();
    this._shiftService.getShiftById(this.shiftId)
      .subscribe(res => {
          this.shift.shiftId = res.data.shiftId,
          this.shift.subCode = res.data.subCode,
          this.shift.mainCode = res.data.mainCode,
          this.shift.id = res.data.id,
          this.shift.status = res.data.status,
          this.shift.startHours = res.data.startHours,
          this.shift.endHours = res.data.endHours,
          this.shift.startMinutes = res.data.startMinutes,
          this.shift.endMinutes = res.data.endMinutes,
          this.shift.value = res.data.value,
          this.shift.minutes = res.data.minutes,
          this.shift.remarks = res.data.remarks,
          this.shift.hours = res.data.hours,
          // this.shift.periodDate = res.data.periodDate.indexOf('0001-01-01') < 0 ? moment(res.data.periodDate).format('YYYY-MM-DD') : null,
          this.periodDate = this._dateService.strToObjDDMMYYYY(res.data.periodDate);
          this.shift.jobSiteId = res.data.jobSiteId;
      }
        , error => this.errorMessage = error);
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
      mainCode: this.shift.mainCode ? true : false,
      subCode: this.shift.subCode ? true : false,
      startHours: this.shift.startHours ? true : false,
      endHours: this.shift.endHours ? true : false,
      startMinutes: this.shift.startMinutes ? true : false,
      endMinutes: this.shift.endMinutes ? true : false,
      value: this.shift.value ? true : false,
      minutes: this.shift.minutes ? true : false
    };
    if ( ( this.shift.shiftId || this.shift.mainCode ) && this.shift.subCode && this.shift.startHours &&
     this.shift.endHours && this.shift.startMinutes && this.shift.endMinutes && this.shift.value) {
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
  updateShift() {
    if (!this.checkValid()) {
      return;
    }

    // this.shift.periodDate = this._dateService.dateTo1200($event.jsdate);
    this._shiftService.updateShift(this.shift)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Update Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/job-site-shift']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Update Failure. Try again!');
          this.errorMessage = error;
        });
  }

  delete() {
    this._shiftService.deleteShift(this.shiftId)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }

        this._notificationService.SuccessNotification('Delete Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/job-site-shift']);
        }, 2000);
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
          this.errorMessage = error;
        });
  }

}

