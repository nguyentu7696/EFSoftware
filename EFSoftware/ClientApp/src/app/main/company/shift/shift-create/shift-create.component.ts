import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { shiftService } from '../shift.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';
import { NotificationService } from '../../../../libs/notification';

@Component({
  selector: 'app-shift-create',
  templateUrl: './shift-create.component.html',
  styleUrls: ['./shift-create.component.scss']
})
export class shiftCreateComponent implements OnInit {
  shiftForm: FormGroup;

  errorMessage: any;
  currentCompany: any = {};

  shiftCurrent: any = {};

  constructor(
    private _shiftService: shiftService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router
  ) {
    this.currentCompany = DataStorage.currentCompany;

    this.shiftForm = this._fb.group({
      mainCode: ['', [Validators.required]],
      status: ['1', [Validators.required]],
      companyid: this.currentCompany.id,
    });
   }

  ngOnInit() {
  }

  create() {
    if (!this.shiftForm.valid) {
      return;
    }
    var currentForm = this.shiftForm.value;
    this.shiftCurrent.mainCode =  currentForm.mainCode;
    this.shiftCurrent.status =  currentForm.status;
    this.shiftCurrent.companyid =  this.currentCompany.id;

    this._shiftService.createshift(this.shiftCurrent)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/shift/list/']);
        }, 3000);
      }

        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get mainCode() { return this.shiftForm.get('mainCode'); }
  get status() { return this.shiftForm.get('status'); }

}
