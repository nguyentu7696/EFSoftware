import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';
import * as moment from 'moment';
@Component({
  selector: 'app-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {
  raceForm: FormGroup;
  errorMessage: any;
  currentCompany: any = {};
  dateDefault: Date = new Date();
  constructor(
    private _raceService: RaceService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router) {
    this.currentCompany = DataStorage.currentCompany;
    this.raceForm = this._fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      companyid: this.currentCompany.id,
    });
  }

  ngOnInit() {

  }

  create() {
    if (!this.raceForm.valid) {
      return;
    }
    console.log(this.raceForm.value);
    this._raceService.createRace(this.raceForm.value)
      .subscribe((res) => {
        console.log(res);
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/race/list/']);
        }, 3000);
      }

        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get name() { return this.raceForm.get('name'); }
  get value() { return this.raceForm.get('value'); }
}
