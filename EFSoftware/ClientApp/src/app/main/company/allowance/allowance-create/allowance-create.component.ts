import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';
import { AllowanceService } from '../allowance.service';
import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';

@Component({
  selector: 'app-allowance-create',
  templateUrl: './allowance-create.component.html',
  styleUrls: ['./allowance-create.component.scss']
})
export class AllowanceCreateComponent implements OnInit {
  allowanceForm: FormGroup;
  errorMessage: any;
  currentCompany: any = {};
  dateDefault: Date = new Date();
  allowanceCurrent: any = {};
  dateMin: Date;
  dateMax: Date;
  startDateTime: any = null;
  endDateTime: any = null;

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  constructor(
    private _allowanceService: AllowanceService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router,
    private _dateService: DateService
  ) {
    this.currentCompany = DataStorage.currentCompany;
    this.allowanceForm = this._fb.group({
      description: ['', [Validators.required]],
      code: ['', [Validators.required]],
      remarks: ['', [Validators.required]],
      startdate: ['', []],
      enddate: ['', []],
      startdateget: ['', []],
      enddateget: ['', []],
      amount: ['', [Validators.required]],
      companyid: this.currentCompany.id,
    });
  }

  ngOnInit() {
  }

  create() {
    if (!this.allowanceForm.valid) {
      return;
    }
    var currentForm = this.allowanceForm.value;
    this.allowanceCurrent.description = currentForm.description;
    this.allowanceCurrent.code = currentForm.code;
    this.allowanceCurrent.remarks = currentForm.remarks;
    this.allowanceCurrent.amount = currentForm.amount;
    this.allowanceCurrent.companyid = this.currentCompany.id;
    if (currentForm.startdate) {
      this.allowanceCurrent.startdate = this._dateService.dateTo1200(currentForm.startdate.jsdate);
    }
    if (currentForm.enddate) {
      this.allowanceCurrent.enddate = this._dateService.dateTo1200(currentForm.enddate.jsdate);
    }
    this._allowanceService.createAllowance(this.allowanceCurrent)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/allowance/list/']);
        }, 3000);
      }

        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  // changeStartDate(event) {
  //   this.allowanceForm.patchValue({
  //     startdateget: event
  //   });
  // }

  // changeEndDate(event) {
  //   this.allowanceForm.patchValue({
  //     enddateget: event
  //   });
  // }

  get description() { return this.allowanceForm.get('description'); }
  get code() { return this.allowanceForm.get('code'); }
  get remarks() { return this.allowanceForm.get('remarks'); }
  get startdate() { return this.allowanceForm.get('startdate'); }
  get enddate() { return this.allowanceForm.get('enddate'); }
  get amount() { return this.allowanceForm.get('amount'); }

}
