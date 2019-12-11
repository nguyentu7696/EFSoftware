import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RaceService } from '../race.service';
import { DataStorage } from '../../../../providers/data/data';
import * as moment from 'moment';

@Component({
  selector: 'app-race-edit',
  templateUrl: './race-edit.component.html',
  styleUrls: ['./race-edit.component.scss']
})
export class RaceEditComponent implements OnInit {
  raceForm: FormGroup;
  errorMessage: any;
  raceId: number = 0;
  currentCompany: any = {};

  constructor(
    private _avRoute: ActivatedRoute,
    private _raceService: RaceService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router
  ) {
    if (this._avRoute.snapshot.params['id']) {
      this.raceId = this._avRoute.snapshot.params['id'];
  };
  this.currentCompany = DataStorage.currentCompany;
  this.raceForm = this._fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      companyid: this.currentCompany.id,
  });
   }

  ngOnInit() {
    this._raceService.getRaceById(this.raceId)
        .subscribe(res => {
          this.raceForm.patchValue({
            name: res.data.name,
            value: res.data.value,
            id: this.raceId,
            companyId: res.data.companyId,
        });
        }
        , error => this.errorMessage = error);
  }

  update() {
    if (!this.raceForm.valid) {
        return;
    }
    var objectForm = this.raceForm.value;
    objectForm.id = this.raceId;
    this._raceService.updateRace(objectForm)
        .subscribe((res) => {

            this._notificationService.SuccessNotification('Update Successfully');
            setTimeout(() => {
                this._router.navigate(['/company/race/list/']);
            }, 3000);
        }

            , error => {
                this._notificationService.ErrorNotification('Update Failure. Try again!');
                this.errorMessage = error;
            })
}
get name() { return this.raceForm.get('name'); }
get value() { return this.raceForm.get('value'); }
}
