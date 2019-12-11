import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataStorage } from '../../../../providers/data/data';
import { shiftService } from '../shift.service';


@Component({
  selector: 'app-shift-edit',
  templateUrl: './shift-edit.component.html',
  styleUrls: ['./shift-edit.component.scss']
})
export class shiftEditComponent implements OnInit {
    shiftForm: FormGroup;
    errorMessage: any;

    shiftId: number = 0;
    currentCompany: any = {};

    isshowstatus: boolean = true;
    shiftCurrent: any = {};

  constructor(
    private _avRoute: ActivatedRoute,
    private _shiftService: shiftService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router
  ) {
    if (this._avRoute.snapshot.params['id']) {
      this.shiftId = this._avRoute.snapshot.params['id'];
    }
    this.currentCompany = DataStorage.currentCompany;
    this.shiftForm = this._fb.group({
      mainCode: ['', [Validators.required]],
      status: ['1', [Validators.required]],
      companyid: this.currentCompany.id,
  });
   }

  ngOnInit() {
    this._shiftService.getshiftById(this.shiftId)
            .subscribe(res => {
              console.log("demo", res);
              
                this.shiftForm.patchValue({
                    mainCode: res.data.mainCode,
                    id: this.shiftId,
                    status: res.data.status,
                });
                this.shiftCurrent = res.data;
            }
                , error => this.errorMessage = error);
  }

  update() {
    if (!this.shiftForm.valid) {
        return;
    }
    var objectForm = this.shiftForm.value;
    objectForm.id = this.shiftId;

    this.shiftCurrent.mainCode =  objectForm.mainCode;
    this.shiftCurrent.status =  objectForm.status;
    this.shiftCurrent.companyid =  this.currentCompany.id;

    this._shiftService.updateshift(this.shiftCurrent)
        .subscribe((res) => {

            this._notificationService.SuccessNotification('Update Successfully');
            setTimeout(() => {
                this._router.navigate(['/company/shift/list/']);
            }, 3000);
        }

            , error => {
                this._notificationService.ErrorNotification('Update Failure. Try again!');
                this.errorMessage = error;
            })
}

delete() {
    this._shiftService.deleteshift(this.shiftId)
        .subscribe((res) => {
            if (!res.success) {
                this._notificationService.ErrorNotification(res.message);
                return;
              }

            this._notificationService.SuccessNotification('Delete Successfully');
            setTimeout(() => {
                this._router.navigate(['/company/shift/list/']);
            }, 3000);
        }

            , error => {
                this._notificationService.ErrorNotification('Delete Failure. Try again!');
                this.errorMessage = error;
            })
}

    get mainCode() { return this.shiftForm.get('mainCode'); }
    
    get status() { return this.shiftForm.get('status'); }

}
