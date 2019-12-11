import { PublicHolidayService } from '../public-holiday.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NotificationService } from '../../../../libs/notification';
import { DataStorage } from '../../../../providers/data/data';
import * as moment from 'moment';

@Component({
    selector: 'app-public-holiday-edit',
    templateUrl: './public-holiday-edit.component.html',
    styleUrls: ['./public-holiday-edit.component.scss']
})
export class PublicHolidayEditComponent implements OnInit {
    publicholidayForm: FormGroup;
    errorMessage: any;
    publicholidayId = 0;
    startDateTime: Date = new Date();
    endDateTime: Date = new Date();
    currentCompany: any = {};
    publicHolidayCurrent: any = {};

    constructor(
        private _avRoute: ActivatedRoute,
        private _fb: FormBuilder,
        private _router: Router,
        private _notificationService: NotificationService,
        private _publicholidayService: PublicHolidayService
    ) {
        this.currentCompany = DataStorage.currentCompany;
        if (this._avRoute.snapshot.params['id']) {
            this.publicholidayId = this._avRoute.snapshot.params['id'];
        }
        this.publicholidayForm = this._fb.group({
            year: ['', [Validators.required]],
            country: ['', [Validators.required]],
            event: ['', [Validators.required]],
            periodStartDate: ['', []],
            periodEndDate: ['', []]
        });
    }

    ngOnInit() {
        this._publicholidayService.getPublicHolidayById(this.publicholidayId)
            .subscribe(res => {
                this.publicHolidayCurrent = res.data;
                this.publicholidayForm.patchValue({
                    year: res.data.year,
                    country: res.data.country,
                    event: res.data.event,
                    id: this.publicholidayId,
                });

                if (res.data.startDate.indexOf('0001-01-01') < 0) {
                    this.publicholidayForm.patchValue({
                        periodStartDate: moment(res.data.startDate).format('YYYY-MM-DD'),
                    });
                }

                if (res.data.endDate.indexOf('0001-01-01') < 0) {
                    this.publicholidayForm.patchValue({
                        periodEndDate: moment(res.data.endDate).format('YYYY-MM-DD'),
                    });
                }

                this.startDateTime = new Date(res.data.startDate);
                this.endDateTime = new Date(res.data.endDate);
            },
                error => this.errorMessage = error);
    }

    update() {
        if (!this.publicholidayForm.valid) {
            return;
        }
        let objectForm = this.publicholidayForm.value;
        this.publicHolidayCurrent.startdate = new Date(objectForm.startdate);
        this.publicHolidayCurrent.enddate = new Date(objectForm.enddate);
        this.publicHolidayCurrent.year = objectForm.year;
        this.publicHolidayCurrent.country = objectForm.country;
        this.publicHolidayCurrent.event = objectForm.event;
        this._publicholidayService.updatePublicHoliday(this.publicHolidayCurrent)
            .subscribe((res) => {
                this._notificationService.SuccessNotification('Update Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/public-holiday/list/']);
                }, 2000);
            }
                , error => {
                    this._notificationService.ErrorNotification('Update Failure. Try again!');
                    this.errorMessage = error;
                });
    }
    delete() {

        if (this.publicHolidayCurrent.companyUsed && this.publicHolidayCurrent.companyUsed.length > 0) {
            this._notificationService.ErrorNotification("Attendance can't removed because it has been used");
            return;
        }

        this._publicholidayService.deletePublicHoliday(this.publicholidayId)
            .subscribe((res) => {
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
    get year() { return this.publicholidayForm.get('year'); }
    get country() { return this.publicholidayForm.get('country'); }
    get event() { return this.publicholidayForm.get('event'); }
    get periodStartDate() { return this.publicholidayForm.get('startdate'); }
    get periodEndDate() { return this.publicholidayForm.get('periodEndDate'); }
}
