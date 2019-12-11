import { Component, OnInit } from '@angular/core';
import { AttendancesService } from '../attendances.service';
import { NotificationService } from '../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.component.html',
  styleUrls: ['./attendance-edit.component.scss']
})
export class AttendanceEditComponent implements OnInit {
  departmentList: Object[];
  attendanceForm: FormGroup;
  errorMessage: any;
  attendanceId: number = 0;
  attendanceCurrent:any = {};
  listCompanyId: any = [];
  constructor(private _avRoute: ActivatedRoute, private _attendanceService: AttendancesService, private _notificationService: NotificationService, private _fb: FormBuilder, private _router: Router) {
    if(this._avRoute.snapshot.params["id"]) {
        this.attendanceId = this._avRoute.snapshot.params["id"];
      };

    this.attendanceForm = this._fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      value: ['', [Validators.required]],
      status: "1",
      id: '',
    });
  }

  ngOnInit() {
    if(this.attendanceId > 0) {
        this._attendanceService.getAttendanceById(this.attendanceId)
          .subscribe(res => {
            this.attendanceCurrent = res.data;
            this.attendanceForm.patchValue({
            name: res.data.name,
            code: res.data.code,
            value: res.data.value,
            status: res.data.status,
            id: res.data.id
          });
        }
          , error => this.errorMessage = error);
      }
      this.getListCompnay();

    //this.getDepartmentList();
  }

  getListCompnay() {
    this._attendanceService.getListCompnay().subscribe(
      result => {
        this.listCompanyId = result.data.map(item => {
          return item.id;
        });
      }
    )
  }

  // getDepartmentList() {
  //   this._attendanceService.getDepartmentList().subscribe(
  //     result => {
  //       this.departmentList = result.data;
  //     }
  //   )
  // }

  update() {
    if (!this.attendanceForm.valid) {
      return;
    }

    var formData = this.attendanceForm.value;
    this.attendanceCurrent.name = formData.name;
    this.attendanceCurrent.code = formData.code;
    this.attendanceCurrent.value = formData.value;
    this.attendanceCurrent.status = formData.status;
    this._attendanceService.updateAttendance(this.attendanceCurrent)
      .subscribe((res) => {
        
          this._notificationService.SuccessNotification("Update Successfully");
          setTimeout(() => {
            this._router.navigate(['/global/attendance/list/']);
          }, 3000);
        }
        
      , error => {
        this._notificationService.ErrorNotification("Update Failure. Try again!");
        this.errorMessage = error;
      } )
  }

  delete() {

    if (this.attendanceCurrent.companyUsed && this.attendanceCurrent.companyUsed.length > 0) {
      var listCompnayUsed = this.attendanceCurrent.companyUsed.split(';');
      var isused = false;
      listCompnayUsed.map(item => {
        if (this.listCompanyId.indexOf(Number(item)) >= 0) {
          isused = true;
        }
      });
      if (isused) {
        this._notificationService.ErrorNotification("Delete Failure. This code is being used.");
        return;
      }
    }

    this._attendanceService.deleteAttendance(this.attendanceId)
    .subscribe((res) => {
      
        this._notificationService.SuccessNotification("Delete Successfully");
        setTimeout(() => {
          this._router.navigate(['/global/attendance/list/']);
        }, 3000);
      }
      
    , error => {
      this._notificationService.ErrorNotification("Delete Failure. Try again!");
      this.errorMessage = error;
    } )
  }

  get name() { return this.attendanceForm.get('name'); }
  get code() { return this.attendanceForm.get('code'); }
  get value() { return this.attendanceForm.get('value'); }
  get status() { return this.attendanceForm.get('status'); }

}
