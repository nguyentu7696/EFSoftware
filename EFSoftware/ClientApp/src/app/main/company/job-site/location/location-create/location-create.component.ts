import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.scss']
})
export class LocationCreateComponent implements OnInit {
  locationForm: FormGroup;
  errorMessage: any;

  currentCompany: any = {};
  currentJobSite: any = {};
  currentZoneLocation: any = {};

  constructor(
    private _locationService: LocationService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router
  ) { }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentZoneLocation = DataStorage.currentZoneLocation;

    this.locationForm = this._fb.group({
      name: ['', [Validators.required]],
      status: ['1', [Validators.required]],
      zoneLocationId: this.currentZoneLocation.id,
    });
  }

  create() {
    if (!this.locationForm.valid) {
      return;
    }
    console.log(this.locationForm.value);
    this._locationService.createLocation(this.locationForm.value)
      .subscribe((res) => {
        console.log(res);
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/location/list']);
        }, 3000);
      }

        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get name() { return this.locationForm.get('name'); }
  get status() { return this.locationForm.get('status'); }

}
