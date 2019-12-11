import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';
import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';
import * as moment from 'moment';
@Component({
    selector: 'app-attendance-edit',
    templateUrl: './attendance-edit.component.html',
    styleUrls: ['./attendance-edit.component.scss']
})
export class AttendanceEditComponent implements OnInit {
    siteList: Object[];
    attendanceForm: FormGroup;
    errorMessage: any;
    attendanceId = 0;
    // startDateTime: Date = new Date();
    // endDateTime: Date = new Date();
    startDateTime: any = null;
    endDateTime: any = null;

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd mmm yyyy',
        editableDateField: false,
        openSelectorOnInputClick: true
    };

    currentCompany: any = {};
    currentAttendance: any = {};
    isshowstatus: boolean = true;
    constructor(
        private _avRoute: ActivatedRoute,
        private _attendanceService: AttendanceService,
        private _notificationService: NotificationService,
        private _fb: FormBuilder, private _router: Router,
        private _dateService: DateService) {

        this.currentCompany = DataStorage.currentCompany;
        if (this._avRoute.snapshot.params['id']) {
            this.attendanceId = this._avRoute.snapshot.params['id'];
        }
        // this.attendanceForm = this._fb.group({
        //     name: ['', [Validators.required]],
        //     code: ['', [Validators.required]],
        //     value: ['', [Validators.required]],
        //     remarks: ['', [Validators.required]],
        //     startdate: ['', [Validators.required]],
        //     enddate: ['', [Validators.required]],
        //     status: ['1', [Validators.required]],
        // });
        this.attendanceForm = this._fb.group({
            name: ['', [Validators.required]],
            code: ['', [Validators.required]],
            value: ['', [Validators.required]],
            remarks: ['', []],
            startdate: ['', []],
            enddate: ['', []],
            status: ['1', [Validators.required]],
        });
    }

    ngOnInit() {
        this._attendanceService.getAttendanceById(this.attendanceId)
            .subscribe(res => {
                this.currentAttendance = res.data;
                this.attendanceForm.patchValue({
                    name: res.data.name,
                    code: res.data.code,
                    value: res.data.value,
                    remarks: res.data.remarks,
                    id: this.attendanceId,
                    status: res.data.status,
                });

                // if (res.data.startDate.indexOf('0001-01-01') < 0) {
                //     this.attendanceForm.patchValue({
                //         startdate: moment(res.data.startDate).format('YYYY-MM-DD'),
                //     });
                // }

                // if (res.data.endDate.indexOf('0001-01-01') < 0) {
                //     this.attendanceForm.patchValue({
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
        if (!this.attendanceForm.valid) {
            return;
        }
        let objectForm = this.attendanceForm.value;
        // this.currentAttendance.startdate = new Date(objectForm.startdate);
        // this.currentAttendance.enddate = new Date(objectForm.enddate);
        this.currentAttendance.name = objectForm.name;
        this.currentAttendance.code = objectForm.code;
        this.currentAttendance.value = objectForm.value;
        this.currentAttendance.remarks = objectForm.remarks;
        this.currentAttendance.status = objectForm.status;

        if (objectForm.startdate && objectForm.startdate.jsdate) {
            this.currentAttendance.startdate = this._dateService.dateTo1200(objectForm.startdate.jsdate);
        }
        if (objectForm.enddate && objectForm.enddate.jsdate) {
            this.currentAttendance.enddate = this._dateService.dateTo1200(objectForm.enddate.jsdate);
        }

        this._attendanceService.updateAttendance(this.currentAttendance)
            .subscribe((res) => {
                if (!res.success) {
                    this._notificationService.ErrorNotification(res.message);
                    return;
                }
                this._notificationService.SuccessNotification('Update Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/attendance/list/']);
                }, 2000);
            }
                , error => {
                    this._notificationService.ErrorNotification('Update Failure. Try again!');
                    this.errorMessage = error;
                })
    }

    delete() {
        if (this.currentAttendance.companyUsed && this.currentAttendance.companyUsed.length > 0) {
            this._notificationService.ErrorNotification('Delete Failure. This code is being used.');
            return;
        }
        this._attendanceService.deleteAttendance(this.attendanceId)
            .subscribe((res) => {
                if (!res.success) {
                    this._notificationService.ErrorNotification(res.message);
                    return;
                }
                this._notificationService.SuccessNotification('Delete Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/attendance/list/']);
                }, 2000);
            }

                , error => {
                    this._notificationService.ErrorNotification('Delete Failure. Try again!');
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
