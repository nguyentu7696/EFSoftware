import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';
import { AllowanceJobsiteService } from '../allowance-jobsite.service';
import { Utils } from '../../../../../libs/Utils';

import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../../providers/date-service';

@Component({
    selector: 'app-allowance-jobsite-edit',
    templateUrl: './allowance-jobsite-edit.component.html',
    styleUrls: ['./allowance-jobsite-edit.component.scss']
})
export class AllowanceJobsiteEditComponent implements OnInit {
    allowanceJobsiteForm: FormGroup;

    errorMessage: any;
    allowanceJobsiteId = 0;

    currentCompany: any = {};
    currentJobsite: any = {};

    //   startDateTime: Date = new Date();
    //   endDateTime: Date = new Date();

    startDateTime: any = null;
    endDateTime: any = null;

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd mmm yyyy',
        editableDateField: false,
        openSelectorOnInputClick: true
    };
    allowanceJobsiteCurrent: any = {};

    constructor(
        private _avRoute: ActivatedRoute,
        private _allowanceJobsiteService: AllowanceJobsiteService,
        private _notificationService: NotificationService,
        private _fb: FormBuilder, private _router: Router,
        private _dateService: DateService
    ) {
        if (this._avRoute.snapshot.params['id']) {
            this.allowanceJobsiteId = this._avRoute.snapshot.params['id'];
        }
        this.currentCompany = DataStorage.getCurrentCompany();
        this.currentJobsite = DataStorage.getCurrentJobSite();

        this.allowanceJobsiteForm = this._fb.group({
            name: ['', [Validators.required]],
            code: ['', [Validators.required]],
            remarks: ['', [Validators.required]],
            startdate: ['', []],
            enddate: ['', []],
            amount: ['', [Validators.required]],
            companyid: this.currentCompany.id,
            jobsiteid: this.currentJobsite.id,
        });
    }

    ngOnInit() {
        this._allowanceJobsiteService.getAllowanceJobsiteById(this.allowanceJobsiteId)
            .subscribe(res => {
                this.allowanceJobsiteForm.patchValue({
                    name: res.data.name,
                    companyId: res.data.companyId,
                    code: res.data.code,
                    remarks: res.data.remarks,
                    id: this.allowanceJobsiteId,
                    amount: res.data.amount,
                });
                this.allowanceJobsiteCurrent = res.data;

                // if (res.data.startDate.indexOf('0001-01-01') < 0) {
                //     this.allowanceJobsiteForm.patchValue({
                //         startdate: moment(res.data.startDate).format('YYYY-MM-DD'),
                //     });
                // }
                // if (res.data.endDate.indexOf('0001-01-01') < 0) {
                //     this.allowanceJobsiteForm.patchValue({
                //         enddate: moment(res.data.endDate).format('YYYY-MM-DD'),
                //     });
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
        if (!this.allowanceJobsiteForm.valid) {
            return;
        }
        var objectForm = this.allowanceJobsiteForm.value;
        objectForm.id = this.allowanceJobsiteId;

        this.allowanceJobsiteCurrent.name = objectForm.name;
        this.allowanceJobsiteCurrent.code = objectForm.code;
        this.allowanceJobsiteCurrent.remarks = objectForm.remarks;
        this.allowanceJobsiteCurrent.amount = objectForm.amount;
        this.allowanceJobsiteCurrent.companyid = this.currentCompany.id;
        this.allowanceJobsiteCurrent.jobsiteid = this.currentJobsite.id;

        // if (objectForm.startdate) {
        //     this.allowanceJobsiteCurrent.startdate = Utils.convertDate(objectForm.startdate);
        // }
        // if (objectForm.enddate) {
        //     this.allowanceJobsiteCurrent.enddate = Utils.convertDate(objectForm.enddate);
        // }

        if (objectForm.startdate && objectForm.startdate.jsdate) {
            this.allowanceJobsiteCurrent.startdate = this._dateService.dateTo1200(objectForm.startdate.jsdate);
        }
        if (objectForm.enddate && objectForm.enddate.jsdate) {
            this.allowanceJobsiteCurrent.enddate = this._dateService.dateTo1200(objectForm.enddate.jsdate);
        }

        this._allowanceJobsiteService.updateAllowanceJobsite(this.allowanceJobsiteCurrent)
            .subscribe((res) => {
                if (!res.success) {
                    this._notificationService.ErrorNotification(res.message);
                    return;
                }

                this._notificationService.SuccessNotification('Update Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/job-site/detail/allowance']);
                }, 3000);
            }

                , error => {
                    this._notificationService.ErrorNotification('Update Failure. Try again!');
                    this.errorMessage = error;
                });
    }

    delete() {
        this._allowanceJobsiteService.deleteAllowacneJobsite(this.allowanceJobsiteId)
            .subscribe((res) => {
                if (!res.success) {
                    this._notificationService.ErrorNotification(res.message);
                    return;
                }
                this._notificationService.SuccessNotification('Delete Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/job-site/detail/allowance']);
                }, 3000);
            }
                , error => {
                    this._notificationService.ErrorNotification('Delete Failure. Try again!');
                    this.errorMessage = error;
                });
    }

    get name() { return this.allowanceJobsiteForm.get('name'); }
    get code() { return this.allowanceJobsiteForm.get('code'); }
    get remarks() { return this.allowanceJobsiteForm.get('remarks'); }
    get startdate() { return this.allowanceJobsiteForm.get('startdate'); }
    get enddate() { return this.allowanceJobsiteForm.get('enddate'); }
    get amount() { return this.allowanceJobsiteForm.get('amount'); }

}
