import { Component, OnInit } from '@angular/core';
import { ResignService } from '../resign.service';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';
import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';
import * as moment from 'moment';
@Component({
  selector: 'app-resign-create',
  templateUrl: './resign-create.component.html',
  styleUrls: ['./resign-create.component.scss']
})
export class ResignCreateComponent implements OnInit {
  resignForm: FormGroup;
  errorMessage: any;
  currentCompany: any = {};
  dateDefault: Date = new Date();
  resignReasonCurrent: any = {};
  isshowstatus: boolean = true;

  startDateTime: any = null;
  endDateTime: any = null;

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  constructor(
    private _resignService: ResignService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router,
    private _dateService: DateService) {
    this.currentCompany = DataStorage.currentCompany;
    this.resignForm = this._fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      remarks: ['', [Validators.required]],
      startdate: ['', []],
      enddate: ['', []],
      status: ['1', [Validators.required]],
      companyid: this.currentCompany.id,
    });
  }

  ngOnInit() {

  }

  create() {
    if (!this.resignForm.valid) {
      return;
    }
    var currentForm = this.resignForm.value;
    this.resignReasonCurrent.name = currentForm.name;
    this.resignReasonCurrent.code = currentForm.code;
    this.resignReasonCurrent.remarks = currentForm.remarks;
    this.resignReasonCurrent.status = currentForm.status;
    this.resignReasonCurrent.companyid = this.currentCompany.id;
    // if (currentForm.startdate) {
    //   this.resignReasonCurrent.startdate = new Date(currentForm.startdate);
    // }
    // if (currentForm.enddate) {
    //   this.resignReasonCurrent.enddate = new Date(currentForm.enddate);
    // }

    if (currentForm.startdate) {
      this.resignReasonCurrent.startdate = this._dateService.dateTo1200(currentForm.startdate.jsdate);
    }
    if (currentForm.enddate) {
      this.resignReasonCurrent.enddate = this._dateService.dateTo1200(currentForm.enddate.jsdate);
    }

    this._resignService.createResignReason(this.resignReasonCurrent)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/resign-reason/list/']);
        }, 3000);
      }

        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  endDateChange(value) {
    var enddate = moment(new Date(value)).format('YYYYMMDD');
    var datenow = moment(new Date()).format('YYYYMMDD');
    if (!isNaN(Number(enddate)) && datenow > enddate && enddate != '00010101') {
      this.isshowstatus = false;
    } else {
      this.isshowstatus = true;
    }
  }

  get name() { return this.resignForm.get('name'); }
  get code() { return this.resignForm.get('code'); }
  get remarks() { return this.resignForm.get('remarks'); }
  get startdate() { return this.resignForm.get('startdate'); }
  get enddate() { return this.resignForm.get('enddate'); }
  get status() { return this.resignForm.get('status'); }

}
