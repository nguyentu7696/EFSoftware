import { Component, OnInit } from '@angular/core';
import { LevelService } from '../level.service';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';
@Component({
  selector: 'app-level-create',
  templateUrl: './level-create.component.html',
  styleUrls: ['./level-create.component.scss']
})
export class LevelCreateComponent implements OnInit {
  levelForm: FormGroup;
  errorMessage: any;

  currentCompany: any = {};
  currentJobSite: any = {};
  currentZoneLocation: any = {};

  constructor(
    private _levelService: LevelService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router) {
  }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentZoneLocation = DataStorage.currentZoneLocation;

    this.levelForm = this._fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      zoneLocationId: this.currentZoneLocation.id,
    });

  }

  create() {
    if (!this.levelForm.valid) {
      return;
    }
    console.log(this.levelForm.value);
    this._levelService.createLevel(this.levelForm.value)
      .subscribe((res) => {
        console.log(res);
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/level/list']);
        }, 3000);
      }

        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get name() { return this.levelForm.get('name'); }
  get value() { return this.levelForm.get('value'); }

}
