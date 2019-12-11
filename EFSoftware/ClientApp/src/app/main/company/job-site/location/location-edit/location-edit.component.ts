import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DataStorage } from '../../../../../providers/data/data';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.scss']
})
export class LocationEditComponent implements OnInit {
  locationForm: FormGroup;
  errorMessage: any;
  locationId: number = 0;

  currentCompany: any = {};
  currentJobSite: any = {};
  currentZoneLocation: any = {};

  constructor(
    private _avRoute: ActivatedRoute,
    private _locationService: LocationService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router
  ) {
    if (this._avRoute.snapshot.params['id']) {
      this.locationId = this._avRoute.snapshot.params['id'];
  };
  this.currentCompany = DataStorage.getCurrentCompany();
  this.currentJobSite = DataStorage.getCurrentJobSite();
  this.currentZoneLocation = DataStorage.currentZoneLocation;

  this.locationForm = this._fb.group({
      name: ['', [Validators.required]],
      status: ['1', [Validators.required]],
      zoneLocationId: this.currentZoneLocation.id,
  });
   }

  ngOnInit() {
    this._locationService.getLocationById(this.locationId)
        .subscribe(res => {
          this.locationForm.patchValue({
            name: res.data.name,
            status: res.data.status,
            id: this.locationId,
            zoneLocationId: res.data.zoneLocationId,
        });
        }
        , error => this.errorMessage = error);
  }

  update() {
    if (!this.locationForm.valid) {
        return;
    }
    var objectForm = this.locationForm.value;
    objectForm.id = this.locationId;
    this._locationService.updateLocation(objectForm)
        .subscribe((res) => {

            this._notificationService.SuccessNotification('Update Successfully');
            setTimeout(() => {
                this._router.navigate(['/company/job-site/detail/location/list']);
            }, 3000);
        }

            , error => {
                this._notificationService.ErrorNotification('Update Failure. Try again!');
                this.errorMessage = error;
            })
    }

delete() {
  this._locationService.deleteLocation(this.locationId)
      .subscribe((res) => {
          this._notificationService.SuccessNotification('Delete Successfully');
          setTimeout(() => {
              this._router.navigate(['/company/job-site/detail/location/list']);
          }, 3000);
      }
          , error => {
              this._notificationService.ErrorNotification('Delete Failure. Try again!');
              this.errorMessage = error;
          })
  }

get name() { return this.locationForm.get('name'); }
get status() { return this.locationForm.get('status'); }

}
