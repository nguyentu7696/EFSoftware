import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AreaService } from '../area.service';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';
@Component({
  selector: 'app-area-edit',
  templateUrl: './area-edit.component.html',
  styleUrls: ['./area-edit.component.scss']
})
export class AreaEditComponent implements OnInit {
  areaForm: FormGroup;
  errorMessage: any;
  areaId: number = 0;

  currentCompany: any = {};
  currentJobSite: any = {};
  currentZoneLocation: any = {};

  constructor(
    private _avRoute: ActivatedRoute,
    private _areaService: AreaService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router
  ) {
    if (this._avRoute.snapshot.params['id']) {
      this.areaId = this._avRoute.snapshot.params['id'];
  };
  this.currentCompany = DataStorage.getCurrentCompany();
  this.currentJobSite = DataStorage.getCurrentJobSite();
  this.currentZoneLocation = DataStorage.currentZoneLocation;

  this.areaForm = this._fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      zoneLocationId: this.currentZoneLocation.id,
  });
   }

  ngOnInit() {
    this._areaService.getAreaById(this.areaId)
        .subscribe(res => {
          this.areaForm.patchValue({
            name: res.data.name,
            value: res.data.value,
            id: this.areaId,
            zoneLocationId: res.data.zoneLocationId,
        });
        }
        , error => this.errorMessage = error);
  }

  update() {
    if (!this.areaForm.valid) {
        return;
    }
    var objectForm = this.areaForm.value;
    objectForm.id = this.areaId;
    this._areaService.updateArea(objectForm)
        .subscribe((res) => {

            this._notificationService.SuccessNotification('Update Successfully');
            setTimeout(() => {
                this._router.navigate(['/company/job-site/detail/area/list']);
            }, 3000);
        }

            , error => {
                this._notificationService.ErrorNotification('Update Failure. Try again!');
                this.errorMessage = error;
            })
  }

  delete() {
    this._areaService.deleteArea(this.areaId)
        .subscribe((res) => {
            this._notificationService.SuccessNotification('Delete Successfully');
            setTimeout(() => {
                this._router.navigate(['/company/job-site/detail/area/list']);
            }, 3000);
        }
            , error => {
                this._notificationService.ErrorNotification('Delete Failure. Try again!');
                this.errorMessage = error;
            })
    }

get name() { return this.areaForm.get('name'); }
get value() { return this.areaForm.get('value'); }


}
