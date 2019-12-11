import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../zone.service';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';

@Component({
  selector: 'app-zone-create',
  templateUrl: './zone-create.component.html',
  styleUrls: ['./zone-create.component.scss']
})
export class ZoneCreateComponent implements OnInit {
  zoneForm: FormGroup;
  errorMessage: any;

  listZoneLocation: any;

  currentCompany: any = {};
  currentJobSite: any = {};

  constructor(
    private _zoneService: ZoneService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router) {
  }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();

    this.zoneForm = this._fb.group({
      name: ['', [Validators.required]],
      status: ['1', [Validators.required]],
      zoneLocationId: ['', [Validators.required]],
    });

    this.getListZoneLocation();

  }

  getListZoneLocation() {
    this._zoneService.getListZoneLocation(this.currentJobSite.id)
      .subscribe((res) => {
        this.listZoneLocation = res.data;
      }
        , error => {
          this.errorMessage = error;
        });
  }

  create() {
    if (!this.zoneForm.valid) {
      return;
    }
    console.log(this.zoneForm.value);
    this._zoneService.createZone(this.zoneForm.value)
      .subscribe((res) => {
        console.log(res);
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/zone/list']);
        }, 3000);
      }

        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get name() { return this.zoneForm.get('name'); }
  get status() { return this.zoneForm.get('status'); }
  get zoneLocationId() { return this.zoneForm.get('zoneLocationId'); }

}
