import { Component, OnInit } from '@angular/core';
import { AttendancesService } from '../attendances.service';
import { NotificationService } from '../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attendance-create',
  templateUrl: './attendance-create.component.html',
  styleUrls: ['./attendance-create.component.scss']
})
export class AttendanceCreateComponent implements OnInit {
  departmentList: Object[];
  attendanceForm: FormGroup;
  errorMessage: any;

  constructor(
    private _attendanceService: AttendancesService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder,
    private _router: Router) {
    this.attendanceForm = this._fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      value: ['', [Validators.required]],
      status: '1'
    });
  }

  ngOnInit() {
    this.getDepartmentList();
  }

  getDepartmentList() {
    this._attendanceService.getDepartmentList().subscribe(
      result => {
        this.departmentList = result.data;
      }
    );
  }

  create() {
    if (!this.attendanceForm.valid) {
      return;
    }
    this._attendanceService.createAttendance(this.attendanceForm.value)
      .subscribe((res) => {

        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/global/attendance/list/']);
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
  get status() { return this.attendanceForm.get('status'); }

}
