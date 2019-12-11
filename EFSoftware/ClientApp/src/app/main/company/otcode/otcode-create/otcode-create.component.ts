import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OtcodeService } from '../otcode.service';
import { NotificationService } from '../../../../libs/notification';
import { Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';
import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';

@Component({
  selector: 'app-otcode-create',
  templateUrl: './otcode-create.component.html',
  styleUrls: ['./otcode-create.component.scss']
})
export class OtcodeCreateComponent implements OnInit {
  otcodeForm: FormGroup;
  types: Type[];

  remarkList: Remarks[];

  modifedtext: string;

  errorMessage: any;
  currentCompany: any = {};
  // dateMin: Date;
  // dateMax: Date;

  otCodeCurrent: any = {};

  startDateTime: any = null;
  endDateTime: any = null;

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  constructor(
    private _otcodeService: OtcodeService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder,
    private _router: Router,
    private _dateService: DateService
  ) {
    this.currentCompany = DataStorage.currentCompany;
    this.otcodeForm = this._fb.group({
      payrollcode: ['', [Validators.required]],
      payroll: [''],
      type: [''],
      rate: ['', [Validators.required]],
      remarks: ['2'],
      startdate: ['', []],
      enddate: ['', []],
      companyid: this.currentCompany.id,
    });
  }

  ngOnInit() {
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

  onTypeSelected(name) {
    var formValue = this.otcodeForm.value;
    var rate = formValue.rate;
    for (var i = 0; i < this.types.length; i++) {
      if (this.types[i].id == name) {
        this.otcodeForm.patchValue({
          payroll: this.types[i].name + rate
        });
      }
    }
  }

  // changeStartDate(event) {
  //   this.dateMin = new Date(event);
  // }

  // changeEndDate(event) {
  //   this.dateMax = new Date(event);
  // }

  onRateSelected(value) {
    var formValue = this.otcodeForm.value;
    var type = formValue.type;
    for (var i = 0; i < this.types.length; i++) {
      if (this.types[i].id == type) {
        this.otcodeForm.patchValue({
          payroll: this.types[i].name + value
        });
      }
    }
    console.log(type);
  }

  create() {
    if (!this.otcodeForm.valid) {
      return;
    }
    var currentForm = this.otcodeForm.value;
    this.otCodeCurrent.payrollcode = currentForm.payrollcode;
    this.otCodeCurrent.payroll = currentForm.payroll;
    this.otCodeCurrent.type = currentForm.type;
    this.otCodeCurrent.rate = currentForm.rate;
    this.otCodeCurrent.remarks = currentForm.remarks;
    this.otCodeCurrent.companyid = this.currentCompany.id;

    if (currentForm.startdate) {
      this.otCodeCurrent.startdate = this._dateService.dateTo1200(currentForm.startdate.jsdate);
    }
    if (currentForm.enddate) {
      this.otCodeCurrent.enddate = this._dateService.dateTo1200(currentForm.enddate.jsdate);
    }

    this._otcodeService.createOtCode(this.otCodeCurrent)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/otcode/list/']);
        }, 3000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get payrollcode() { return this.otcodeForm.get('payrollcode'); }
  get payroll() { return this.otcodeForm.get('payroll'); }
  get type() { return this.otcodeForm.get('type'); }
  get rate() { return this.otcodeForm.get('rate'); }
  get remarks() { return this.otcodeForm.get('remarks'); }
  get startdate() { return this.otcodeForm.get('startdate'); }
  get enddate() { return this.otcodeForm.get('enddate'); }

}

interface Type {
  id: number;
  name: string;
}

interface Remarks {
  id: number;
  name: string;
}
