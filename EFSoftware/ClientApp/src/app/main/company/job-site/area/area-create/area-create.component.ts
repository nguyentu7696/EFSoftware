import { Component, OnInit } from '@angular/core';
import { AreaService } from '../area.service';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';
@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.scss']
})
export class AreaCreateComponent implements OnInit {
  areaForm: FormGroup;
  errorMessage: any;

  currentCompany: any = {};
  currentJobSite: any = {};
  currentZoneLocation: any = {};

  constructor(
    private _areaService: AreaService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router) {
  }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentZoneLocation = DataStorage.currentZoneLocation;

    this.areaForm = this._fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      zoneLocationId: this.currentZoneLocation.id,
    });
  }

  create() {
    if (!this.areaForm.valid) {
      return;
    }
    console.log(this.areaForm.value);
    this._areaService.createArea(this.areaForm.value)
      .subscribe((res) => {
        console.log(res);
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/area/list']);
        }, 3000);
      }

        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get name() { return this.areaForm.get('name'); }
  get value() { return this.areaForm.get('value'); }

}
