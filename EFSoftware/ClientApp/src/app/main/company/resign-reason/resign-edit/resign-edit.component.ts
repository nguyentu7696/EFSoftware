import { Component, OnInit } from '@angular/core';
import { ResignService } from '../resign.service';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataStorage } from '../../../../providers/data/data';
import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';
import * as moment from 'moment';
import { isNumber } from 'util';
@Component({
    selector: 'app-resign-edit',
    templateUrl: './resign-edit.component.html',
    styleUrls: ['./resign-edit.component.scss']
})
export class ResignEditComponent implements OnInit {
    resignForm: FormGroup;
    errorMessage: any;
    resignId: number = 0;
    currentCompany: any = {};
    // startDateTime: Date = new Date();
    // endDateTime: Date = new Date();
    startDateTime: any = null;
    endDateTime: any = null;

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd mmm yyyy',
        editableDateField: false,
        openSelectorOnInputClick: true
    };

    isshowstatus: boolean = true;
    resignReasonCurrent: any = {};
    constructor(
        private _avRoute: ActivatedRoute,
        private _resignService: ResignService,
        private _notificationService: NotificationService,
        private _fb: FormBuilder, private _router: Router,
        private _dateService: DateService) {
        if (this._avRoute.snapshot.params['id']) {
            this.resignId = this._avRoute.snapshot.params['id'];
        }
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
        this._resignService.getResignReasoneById(this.resignId)
            .subscribe(res => {
                this.resignForm.patchValue({
                    name: res.data.name,
                    companyId: res.data.companyId,
                    code: res.data.code,
                    remarks: res.data.remarks,
                    id: this.resignId,
                    status: res.data.status,
                });
                this.resignReasonCurrent = res.data;

                // if (res.data.startDate.indexOf('0001-01-01') < 0) {
                //     this.resignForm.patchValue({
                //         startdate: moment(res.data.startDate).format('YYYY-MM-DD'),
                //     });
                // }

                // if (res.data.endDate.indexOf('0001-01-01') < 0) {
                //     this.resignForm.patchValue({
                //         enddate: moment(res.data.endDate).format('YYYY-MM-DD'),
                //     });
                // }

                this.startDateTime = this._dateService.strToObjDDMMYYYY(res.data.startDate);
                this.endDateTime = this._dateService.strToObjDDMMYYYY(res.data.endDate);

                // var enddate = moment(res.data.endDate).format('YYYYMMDD');
                // var datenow = moment(new Date()).format('YYYYMMDD');
                // if (!isNaN(Number(enddate)) && datenow > enddate && enddate != '00010101') {

                //     this.isshowstatus = false;
                // } else {
                //     this.isshowstatus = true;
                // }
            }
                , error => this.errorMessage = error);
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

    update() {
        if (!this.resignForm.valid) {
            return;
        }
        var objectForm = this.resignForm.value;
        objectForm.id = this.resignId;

        this.resignReasonCurrent.name = objectForm.name;
        this.resignReasonCurrent.code = objectForm.code;
        this.resignReasonCurrent.remarks = objectForm.remarks;
        this.resignReasonCurrent.status = objectForm.status;
        this.resignReasonCurrent.companyid = this.currentCompany.id;
        // if (objectForm.startdate) {
        //     this.resignReasonCurrent.startdate = new Date(objectForm.startdate);
        // }
        // if (objectForm.enddate) {
        //     this.resignReasonCurrent.enddate = new Date(objectForm.enddate);
        // }

        if (objectForm.startdate && objectForm.startdate.jsdate) {
            this.resignReasonCurrent.startdate = this._dateService.dateTo1200(objectForm.startdate.jsdate);
        }
        if (objectForm.enddate && objectForm.enddate.jsdate) {
            this.resignReasonCurrent.enddate = this._dateService.dateTo1200(objectForm.enddate.jsdate);
        }

        this._resignService.updateResignReason(this.resignReasonCurrent)
            .subscribe((res) => {
                if (!res.success) {
                    this._notificationService.ErrorNotification(res.message);
                    return;
                }

                this._notificationService.SuccessNotification('Update Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/resign-reason/list/']);
                }, 3000);
            }

                , error => {
                    this._notificationService.ErrorNotification('Update Failure. Try again!');
                    this.errorMessage = error;
                });
    }

    delete() {
        this._resignService.deleteResignReason(this.resignId)
            .subscribe((res) => {
                if (!res.success) {
                    this._notificationService.ErrorNotification(res.message);
                    return;
                }

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

    get name() { return this.resignForm.get('name'); }
    get code() { return this.resignForm.get('code'); }
    get remarks() { return this.resignForm.get('remarks'); }
    get startdate() { return this.resignForm.get('startdate'); }
    get enddate() { return this.resignForm.get('enddate'); }
    get status() { return this.resignForm.get('status'); }
}
