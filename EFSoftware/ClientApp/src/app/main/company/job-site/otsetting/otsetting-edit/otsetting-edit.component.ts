import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';
import { OtsettingService } from '../otsetting.service';

import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../../providers/date-service';

@Component({
  selector: 'app-otsetting-edit',
  templateUrl: './otsetting-edit.component.html',
  styleUrls: ['./otsetting-edit.component.scss']
})
export class OtsettingEditComponent implements OnInit {
  otsettingForm: FormGroup;
  types: Type[];

  remarkList: Remarks[];

  errorMessage: any;
  otsettingId: number = 0;

  currentCompany: any = {};
  currentJobSite: any = {};

  // startDateTime: Date = new Date();
  // endDateTime: Date = new Date();

  startDateTime: any = null;
  endDateTime: any = null;

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  otsettingCurrent: any = {};

  constructor(
    private _avRoute: ActivatedRoute,
    private _otsettingService: OtsettingService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router,
    private _dateService: DateService
  ) {

    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.otsettingForm = this._fb.group({
      type: ['', []],
      rate: ['', [Validators.required]],
      remarks: ['2', [Validators.required]],
      startdate: ['', []],
      enddate: ['', []],
      companyid: this.currentCompany.id,
    });
    this.types = [
      { id: 1, name: '@' },
      { id: 2, name: 'X' },
      { id: 3, name: 'Day' }
    ];

    this.remarkList = [
      { id: 1, name: 'PH' },
      { id: 2, name: 'STD' },
      { id: 3, name: 'O' },
      { id: 4, name: 'RD' },
    ];
  }

  ngOnInit() {
    if (this._avRoute.snapshot.params['id']) {
      this.otsettingId = this._avRoute.snapshot.params['id'];
    }
    this._otsettingService.getOtSettingById(this.otsettingId)
      .subscribe(res => {
        this.otsettingForm.patchValue({
          companyId: res.data.companyId,
          type: res.data.type,
          rate: res.data.rate,
          remarks: res.data.remarks,
          id: this.otsettingId,
        });
        this.otsettingCurrent = res.data;

        // if (res.data.startDate.indexOf('0001-01-01') < 0) {
        //   this.otsettingForm.patchValue({
        //     startdate: moment(res.data.startDate).format('YYYY-MM-DD'),
        //   });
        // }
        // if (res.data.endDate.indexOf('0001-01-01') < 0) {
        //   this.otsettingForm.patchValue({
        //     enddate: moment(res.data.endDate).format('YYYY-MM-DD'),
        //   });
        // }

        this.startDateTime = this._dateService.strToObjDDMMYYYY(res.data.startDate);
        this.endDateTime = this._dateService.strToObjDDMMYYYY(res.data.endDate);

      }
        , error => this.errorMessage = error);
  }

  onTypeSelected(name) {
    var formValue = this.otsettingForm.value;
    var rate = formValue.rate;
    for (var i = 0; i < this.types.length; i++) {
      if (this.types[i].id == name) {
        this.otsettingCurrent.payroll = this.types[i].name + rate;
      }
    }
  }

  onRateSelected(value) {
    var formValue = this.otsettingForm.value;
    var type = formValue.type;
    for (var i = 0; i < this.types.length; i++) {
      if (this.types[i].id == type) {
        this.otsettingCurrent.payroll = this.types[i].name + value;
      }
    }
  }

  update() {
    if (!this.otsettingForm.valid) {
      return;
    }
    var objectForm = this.otsettingForm.value;
    objectForm.id = this.otsettingId;
    this.otsettingCurrent.type = objectForm.type;
    this.otsettingCurrent.rate = objectForm.rate;
    this.otsettingCurrent.remarks = objectForm.remarks;
    // if (objectForm.startdate) {
    //   this.otsettingCurrent.startdate = new Date(objectForm.startdate);
    // }
    // if (objectForm.enddate) {
    //   this.otsettingCurrent.enddate = new Date(objectForm.enddate);
    // }

    if (objectForm.startdate && objectForm.startdate.jsdate) {
      this.otsettingCurrent.startdate = this._dateService.dateTo1200(objectForm.startdate.jsdate);
    }
    if (objectForm.enddate && objectForm.enddate.jsdate) {
      this.otsettingCurrent.enddate = this._dateService.dateTo1200(objectForm.enddate.jsdate);
    }

    this._otsettingService.updateOtSetting(this.otsettingCurrent)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Update Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/otsetting']);
        }, 3000);
      }

        , error => {
          this._notificationService.ErrorNotification('Update Failure. Try again!');
          this.errorMessage = error;
        });
  }

  delete() {
    this._otsettingService.deleteOtSetting(this.otsettingId)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
      }
        this._notificationService.SuccessNotification('Delete Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/otsetting']);
        }, 3000);
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
          this.errorMessage = error;
        });
  }
  get type() { return this.otsettingForm.get('type'); }
  get rate() { return this.otsettingForm.get('rate'); }
  get remarks() { return this.otsettingForm.get('remarks'); }
  get startdate() { return this.otsettingForm.get('startdate'); }
  get enddate() { return this.otsettingForm.get('enddate'); }

}

interface Type {
  id: number;
  name: string;
}

interface Remarks {
  id: number;
  name: string;
}
