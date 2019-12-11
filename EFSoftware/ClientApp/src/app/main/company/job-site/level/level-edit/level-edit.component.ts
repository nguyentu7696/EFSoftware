import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { LevelService } from '../level.service';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';
@Component({
  selector: 'app-level-edit',
  templateUrl: './level-edit.component.html',
  styleUrls: ['./level-edit.component.scss']
})
export class LevelEditComponent implements OnInit {
  levelForm: FormGroup;
  errorMessage: any;
  levelId: number = 0;

  currentCompany: any = {};
  currentJobSite: any = {};
  currentZoneLocation: any = {};

  constructor(
    private _avRoute: ActivatedRoute,
    private _levelService: LevelService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router
  ) {
    if (this._avRoute.snapshot.params['id']) {
      this.levelId = this._avRoute.snapshot.params['id'];
  };
  this.currentCompany = DataStorage.getCurrentCompany();
  this.currentJobSite = DataStorage.getCurrentJobSite();
  this.currentZoneLocation = DataStorage.currentZoneLocation;

  this.levelForm = this._fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      zoneLocationId: this.currentZoneLocation.id,
  });
   }

  ngOnInit() {
    this._levelService.getLevelById(this.levelId)
        .subscribe(res => {
          this.levelForm.patchValue({
            name: res.data.name,
            value: res.data.value,
            id: this.levelId,
            zoneLocationId: res.data.zoneLocationId,
        });
        }
        , error => this.errorMessage = error);
  }

  update() {
    if (!this.levelForm.valid) {
        return;
    }
    var objectForm = this.levelForm.value;
    objectForm.id = this.levelId;
    this._levelService.updateLevel(objectForm)
        .subscribe((res) => {

            this._notificationService.SuccessNotification('Update Successfully');
            setTimeout(() => {
                this._router.navigate(['/company/job-site/detail/level/list']);
            }, 3000);
        }

            , error => {
                this._notificationService.ErrorNotification('Update Failure. Try again!');
                this.errorMessage = error;
            })
    }

delete() {
  this._levelService.deleteLevel(this.levelId)
      .subscribe((res) => {
          this._notificationService.SuccessNotification('Delete Successfully');
          setTimeout(() => {
              this._router.navigate(['/company/job-site/detail/level/list']);
          }, 3000);
      }
          , error => {
              this._notificationService.ErrorNotification('Delete Failure. Try again!');
              this.errorMessage = error;
          })
  }

get name() { return this.levelForm.get('name'); }
get value() { return this.levelForm.get('value'); }

}
