import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DataStorage } from '../../../../providers/data/data';
import * as moment from 'moment';
import { OtcodeService } from '../otcode.service';
import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';

@Component({
    selector: 'app-otcode-edit',
    templateUrl: './otcode-edit.component.html',
    styleUrls: ['./otcode-edit.component.scss']
})
export class OtcodeEditComponent implements OnInit {
    otcodeForm: FormGroup;
    types: Type[];

    remarkList: Remarks[];

    errorMessage: any;
    otcodeId: number = 0;
    currentCompany: any = {};
    // startDateTime: Date = new Date();
    // endDateTime: Date = new Date();
    otcodeCurrent: any = {};
    // dateMin: Date;
    // dateMax: Date;

    startDateTime: any = null;
    endDateTime: any = null;

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd mmm yyyy',
        editableDateField: false,
        openSelectorOnInputClick: true
    };

    constructor(
        private _avRoute: ActivatedRoute,
        private _otcodeService: OtcodeService,
        private _notificationService: NotificationService,
        private _fb: FormBuilder, private _router: Router,
        private _dateService: DateService
    ) {
        if (this._avRoute.snapshot.params['id']) {
            this.otcodeId = this._avRoute.snapshot.params['id'];
        }
        this.currentCompany = DataStorage.currentCompany;
        this.otcodeForm = this._fb.group({
            payrollcode: ['', [Validators.required]],
            payroll: [''],
            type: ['', []],
            rate: ['', [Validators.required]],
            remarks: [''],
            startdate: ['', []],
            enddate: ['', []],
            companyid: this.currentCompany.id,
        });
    }

    ngOnInit() {
        this._otcodeService.getOtCodeById(this.otcodeId)
            .subscribe(res => {
                this.otcodeForm.patchValue({
                    payrollcode: res.data.payrollCode,
                    companyId: res.data.companyId,
                    payroll: res.data.payroll,
                    type: res.data.type,
                    rate: res.data.rate,
                    remarks: res.data.remarks,
                    id: this.otcodeId,
                });
                this.otcodeCurrent = res.data;

                // if (res.data.startDate.indexOf('0001-01-01') < 0) {
                //     this.otcodeForm.patchValue({
                //         startdate: moment(res.data.startDate).format('YYYY-MM-DD'),
                //     });
                //     this.dateMin = new Date(moment(res.data.startDate).format('YYYY-MM-DD'));
                // }
                // if (res.data.endDate.indexOf('0001-01-01') < 0) {
                //     this.otcodeForm.patchValue({
                //         enddate: moment(res.data.endDate).format('YYYY-MM-DD'),
                //     });
                //     this.dateMax = new Date(moment(res.data.endDate).format('YYYY-MM-DD'));
                // }

                this.startDateTime = this._dateService.strToObjDDMMYYYY(res.data.startDate);
                this.endDateTime = this._dateService.strToObjDDMMYYYY(res.data.endDate);

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

    update() {
        if (!this.otcodeForm.valid) {
            return;
        }
        var objectForm = this.otcodeForm.value;
        objectForm.id = this.otcodeId;

        this.otcodeCurrent.payrollcode = objectForm.payrollcode;
        this.otcodeCurrent.payroll = objectForm.payroll;
        this.otcodeCurrent.type = objectForm.type;
        this.otcodeCurrent.remarks = objectForm.remarks;
        this.otcodeCurrent.companyid = this.currentCompany.id;
        this.otcodeCurrent.rate = objectForm.rate;
        // if (objectForm.startdate) {
        //     this.otcodeCurrent.startdate = new Date(objectForm.startdate);
        // }
        // if (objectForm.enddate) {
        //     this.otcodeCurrent.enddate = new Date(objectForm.enddate);
        // }

        if (objectForm.startdate && objectForm.startdate.jsdate) {
            this.otcodeCurrent.startdate = this._dateService.dateTo1200(objectForm.startdate.jsdate);
        }
        if (objectForm.enddate && objectForm.enddate.jsdate) {
            this.otcodeCurrent.enddate = this._dateService.dateTo1200(objectForm.enddate.jsdate);
        }

        this._otcodeService.updateOtCode(this.otcodeCurrent)
            .subscribe((res) => {
                if (!res.success) {
                    this._notificationService.ErrorNotification(res.message);
                    return;
                  }

                this._notificationService.SuccessNotification('Update Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/otcode/list/']);
                }, 3000);
            }

                , error => {
                    this._notificationService.ErrorNotification('Update Failure. Try again!');
                    this.errorMessage = error;
                });
    }

    delete() {
        this._otcodeService.deleteOtCode(this.otcodeId)
            .subscribe((res) => {
                if (!res.success) {
                    this._notificationService.ErrorNotification(res.message);
                    return;
                  }
                this._notificationService.SuccessNotification('Delete Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/otcode/list/']);
                }, 3000);
            }
                , error => {
                    this._notificationService.ErrorNotification('Delete Failure. Try again!');
                    this.errorMessage = error;
                });
    }

    // changeStartDate(event) {
    //     this.dateMin = new Date(event);
    // }

    // changeEndDate(event) {
    //     this.dateMax = new Date(event);
    // }

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
