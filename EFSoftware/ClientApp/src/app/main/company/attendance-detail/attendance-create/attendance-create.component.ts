import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';

@Component({
  selector: 'app-attendance-create',
  templateUrl: './attendance-create.component.html',
  styleUrls: ['./attendance-create.component.scss']
})
export class AttendanceCreateComponent implements OnInit {
  departmentList: Object[];
  siteList: Object[];
  attendanceForm: FormGroup;
  errorMessage: any;

  attendanceCurrent: any = {};

  startDateTime: any = null;
  endDateTime: any = null;

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  constructor(
    private _attendanceService: AttendanceService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder,
    private _router: Router,
    private _dateService: DateService) {

    this.attendanceForm = this._fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      value: ['', [Validators.required]],
      remarks: ['', [Validators.required]],
      startdate: ['', []],
      enddate: ['', [Validators.required]],
      status: ['1', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  create() {
    if (!this.attendanceForm.valid) {
      return;
    }
    var currentForm = this.attendanceForm.value;
    
    if (currentForm.startdate) {
      this.attendanceCurrent.startdate = this._dateService.dateTo1200(currentForm.startdate.jsdate);
    }
    if (currentForm.enddate) {
      this.attendanceCurrent.enddate = this._dateService.dateTo1200(currentForm.enddate.jsdate);
    }
    console.log('form value = ', this.attendanceForm.value);
    this._attendanceService.createAttendance(this.attendanceForm.value)
      .subscribe((res) => {

        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/attendance-detail/list/']);
        }, 3000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get name() { return this.attendanceForm.get('name'); }
  get code() { return this.attendanceForm.get('code'); }
  get value() { return this.attendanceForm.get('value'); }
  get remarks() { return this.attendanceForm.get('remarks'); }
  get startdate() { return this.attendanceForm.get('startdate'); }
  get enddate() { return this.attendanceForm.get('enddate'); }
  get status() { return this.attendanceForm.get('status'); }
}
