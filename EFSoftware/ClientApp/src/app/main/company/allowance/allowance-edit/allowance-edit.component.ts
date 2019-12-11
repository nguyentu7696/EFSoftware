import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataStorage } from '../../../../providers/data/data';
import * as moment from 'moment';
import { AllowanceService } from '../allowance.service';

import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';

@Component({
    selector: 'app-allowance-edit',
    templateUrl: './allowance-edit.component.html',
    styleUrls: ['./allowance-edit.component.scss']
})
export class AllowanceEditComponent implements OnInit {
    allowanceForm: FormGroup;
    errorMessage: any;
    allowanceId: number = 0;
    currentCompany: any = {};
    startDateTime: any = null;
    endDateTime: any = null;
    allowanceCurrent: any = {};
    dateMin: Date;
    dateMax: Date;

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd mmm yyyy',
        editableDateField: false,
        openSelectorOnInputClick: true
    };

    constructor(
        private _avRoute: ActivatedRoute,
        private _allowanceService: AllowanceService,
        private _notificationService: NotificationService,
        private _fb: FormBuilder, private _router: Router,
        private _dateService: DateService
    ) {
        if (this._avRoute.snapshot.params['id']) {
            this.allowanceId = this._avRoute.snapshot.params['id'];
        }
        this.currentCompany = DataStorage.currentCompany;
        this.allowanceForm = this._fb.group({
            description: ['', [Validators.required]],
            code: ['', [Validators.required]],
            remarks: ['', [Validators.required]],
            startdate: ['', []],
            enddate: ['', []],
            amount: ['', [Validators.required]],
            companyid: this.currentCompany.id,
        });
    }

    ngOnInit() {
        this._allowanceService.getAllowanceById(this.allowanceId)
            .subscribe(res => {
                this.allowanceForm.patchValue({
                    description: res.data.description,
                    companyId: res.data.companyId,
                    code: res.data.code,
                    remarks: res.data.remarks,
                    id: this.allowanceId,
                    amount: res.data.amount,
                });
                this.allowanceCurrent = res.data;

                // if (res.data.startDate.indexOf('0001-01-01') < 0) {
                //     this.allowanceForm.patchValue({
                //         startdate: moment(res.data.startDate).format('YYYY-MM-DD'),
                //     });
                //     this.dateMin = new Date(moment(res.data.startDate).format('YYYY-MM-DD'));
                // }
                // if (res.data.endDate.indexOf('0001-01-01') < 0) {
                //     this.allowanceForm.patchValue({
                //         enddate: moment(res.data.endDate).format('YYYY-MM-DD'),
                //     });
                //     this.dateMax = new Date(moment(res.data.endDate).format('YYYY-MM-DD'));
                // }

                this.startDateTime = this._dateService.strToObjDDMMYYYY(res.data.startDate);
                this.endDateTime = this._dateService.strToObjDDMMYYYY(res.data.endDate);

                // var endate = moment(res.data.endDate).format('YYYYMMDD');
                // var datenow = moment(new Date()).format('YYYYMMDD');
                // if(datenow > endate) {
                //     this.isshowstatus = false;
                // } else {
                //     this.isshowstatus = true;
                // }
            }
                , error => this.errorMessage = error);
    }

    update() {
        if (!this.allowanceForm.valid) {
            return;
        }
        var objectForm = this.allowanceForm.value;
        objectForm.id = this.allowanceId;

        this.allowanceCurrent.description = objectForm.description;
        this.allowanceCurrent.code = objectForm.code;
        this.allowanceCurrent.remarks = objectForm.remarks;
        this.allowanceCurrent.amount = objectForm.amount;
        this.allowanceCurrent.companyid = this.currentCompany.id;

        if (objectForm.startdate && objectForm.startdate.jsdate) {
            this.allowanceCurrent.startdate = this._dateService.dateTo1200(objectForm.startdate.jsdate);
        }
        if (objectForm.enddate && objectForm.enddate.jsdate) {
            this.allowanceCurrent.enddate = this._dateService.dateTo1200(objectForm.enddate.jsdate);
        }

        this._allowanceService.updateAllowance(this.allowanceCurrent)
            .subscribe((res) => {

                this._notificationService.SuccessNotification('Update Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/allowance/list/']);
                }, 3000);
            }

                , error => {
                    this._notificationService.ErrorNotification('Update Failure. Try again!');
                    this.errorMessage = error;
                })
    }

    delete() {
        this._allowanceService.deleteAllowance(this.allowanceId)
            .subscribe((res) => {
                this._notificationService.SuccessNotification('Delete Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/resign-reason/list/']);
                }, 3000);
            }
                , error => {
                    this._notificationService.ErrorNotification('Delete Failure. Try again!');
                    this.errorMessage = error;
                });
    }

    // changeStartDate(event) {
    //     //this.dateMin = new Date(event);
    //     this.allowanceForm.patchValue({
    //         startdateget: event
    //     });
    // }

    // changeEndDate(event) {
    //     //this.dateMax = new Date(event);
    //     this.allowanceForm.patchValue({
    //         enddateget: event
    //     });
    // }

    get description() { return this.allowanceForm.get('description'); }
    get code() { return this.allowanceForm.get('code'); }
    get remarks() { return this.allowanceForm.get('remarks'); }
    get startdate() { return this.allowanceForm.get('startdate'); }
    get enddate() { return this.allowanceForm.get('enddate'); }
    get amount() { return this.allowanceForm.get('amount'); }

}
