import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ZoneService } from '../zone.service';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';

@Component({
    selector: 'app-zone-edit',
    templateUrl: './zone-edit.component.html',
    styleUrls: ['./zone-edit.component.scss']
})
export class ZoneEditComponent implements OnInit {
    zoneForm: FormGroup;
    errorMessage: any;
    zoneId: number = 0;

    listZoneLocation: any;

    currentCompany: any = {};
    currentJobSite: any = {};

    constructor(
        private _avRoute: ActivatedRoute,
        private _zoneService: ZoneService,
        private _notificationService: NotificationService,
        private _fb: FormBuilder, private _router: Router
    ) {
        if (this._avRoute.snapshot.params['id']) {
            this.zoneId = this._avRoute.snapshot.params['id'];
        };
        this.currentCompany = DataStorage.getCurrentCompany();
        this.currentJobSite = DataStorage.getCurrentJobSite();

        this.zoneForm = this._fb.group({
            name: ['', [Validators.required]],
            status: ['1', [Validators.required]],
            zoneLocationId: ['', [Validators.required]],
        });
    }

    ngOnInit() {
        this.getData();
    }

    async getData() {
        await this.getListZoneLocation();
        this._zoneService.getZoneById(this.zoneId)
            .subscribe(res => {
                this.zoneForm.patchValue({
                    name: res.data.name,
                    status: res.data.status,
                    id: this.zoneId,
                    zoneLocationId: res.data.zoneLocationId,
                });
                console.log('33333333333', this.zoneForm.value.zoneLocationId);
                console.log('4444444444444',this.listZoneLocation );
            }
                , error => this.errorMessage = error);
    }

    getListZoneLocation() {
        return new Promise(resolve => {
            this._zoneService.getListZoneLocation(this.currentJobSite.id)
                .subscribe((res) => {
                    this.listZoneLocation = res.data;
                    resolve();
                }
                    , error => {
                        this.errorMessage = error;
                        resolve();
                    });
        });
    }

    update() {
        if (!this.zoneForm.valid) {
            return;
        }
        var objectForm = this.zoneForm.value;
        objectForm.id = this.zoneId;
        this._zoneService.updateZone(objectForm)
            .subscribe((res) => {

                this._notificationService.SuccessNotification('Update Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/job-site/detail/zone/list']);
                }, 3000);
            }

                , error => {
                    this._notificationService.ErrorNotification('Update Failure. Try again!');
                    this.errorMessage = error;
                })
    }

    delete() {
        this._zoneService.deleteZone(this.zoneId)
            .subscribe((res) => {
                this._notificationService.SuccessNotification('Delete Successfully');
                setTimeout(() => {
                    this._router.navigate(['/company/job-site/detail/zone/list']);
                }, 3000);
            }
                , error => {
                    this._notificationService.ErrorNotification('Delete Failure. Try again!');
                    this.errorMessage = error;
                })
    }

    get name() { return this.zoneForm.get('name'); }
    get status() { return this.zoneForm.get('status'); }
    get zoneLocationId() { return this.zoneForm.get('zoneLocationId'); }

}
