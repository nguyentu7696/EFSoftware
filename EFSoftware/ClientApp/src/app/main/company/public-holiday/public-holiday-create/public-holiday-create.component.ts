import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PublicHolidayService } from '../public-holiday.service';
import { DataStorage } from '../../../../providers/data/data';
import { NotificationService } from '../../../../libs/notification';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-public-holiday-create',
  templateUrl: './public-holiday-create.component.html',
  styleUrls: ['./public-holiday-create.component.scss']
})
export class PublicHolidayCreateComponent implements OnInit {

  listYears: any [] = [];
  listCountry: any [] = [];
  currentCountry = 'SG';
  currentPublicHoliday: any = {};
  iscreate = false;
  periodStartDate: Date = new Date();
  periodEndDate: Date = new Date();
  dateMin: Date = new Date();
  dateMax: Date = new Date();
  publicHolidayValid: any = {};
  currentCompany: any = {};

  options: DatepickerOptions = {
    displayFormat: 'DD MMM YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd'
  };

  constructor(
    private _publicHolidayService: PublicHolidayService,
    private _dataStorage: DataStorage,
    private _notificationService: NotificationService,
    private _router: Router) {

    this.currentCompany = DataStorage.currentCompany;
    this.publicHolidayValid = {
      event: true
    }

    if (DataStorage.currentPublicHoliday == undefined && DataStorage.currentPublicHoliday.id == undefined) {
      this.currentPublicHoliday = {
        id: 0
    }
    } else {
      this.currentPublicHoliday = DataStorage.currentPublicHoliday;
    }

    if (this.currentPublicHoliday.id == 0 || this.currentPublicHoliday.id == undefined ) {
      this.iscreate = true;
      this.currentPublicHoliday = {
        id: 0,
        country: 'SG',
        year: new Date().getFullYear(),
        periodStartDate: new Date(),
        periodEndDate: new Date(),
        companyId: this.currentCompany.id
      }
    } else {
      this.iscreate = false;
    }

    this.periodStartDate = this.currentPublicHoliday.periodStartDate;
    this.periodEndDate = this.currentPublicHoliday.periodEndDate;

    var yearstart = 2019;
    for ( var i = 0; i < 100; i ++) {
      this.listYears.push(yearstart + i);
    }

    this._publicHolidayService.getJsonCountry().subscribe(
      result => {
        this.listCountry =  result.json();
      }
    )

    this.periodStartDate = new Date(this.periodStartDate);
    this.periodEndDate = new Date(this.periodEndDate);

    this.dateMax = new Date('12/31/' +  this.periodStartDate.getFullYear());
    this.dateMin = new Date('01/01/' + this.periodEndDate.getFullYear());
  }

  ngOnInit() {
  }

  selectYears(yearValue) {
    this.dateMax = new Date(Date.UTC( yearValue, 12, 31));
    this.dateMin = new Date(Date.UTC( yearValue, 1, 1));
    this.periodStartDate = new Date(this.periodStartDate);
    this.periodEndDate = new Date(this.periodEndDate);
    this.periodStartDate = new Date( ( this.periodStartDate.getMonth() + 1 ) +  '/' +  this.periodStartDate.getDate() + '/' + yearValue + ' 12:00:00');
    this.periodEndDate = new Date( ( this.periodEndDate.getMonth() + 1 ) +  '/' +  this.periodEndDate.getDate() + '/' + yearValue + '  12:00:00');
  }

  createPublicHoliday() {
    if(!this.currentPublicHoliday.event) {
      this.publicHolidayValid.event = false;
      return;
    }
    this.currentPublicHoliday.periodStartDate = this.periodStartDate;
    this.currentPublicHoliday.periodEndDate = this.periodEndDate;
    this._publicHolidayService.createPublicHoliday(this.currentPublicHoliday)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/public-holiday/list/']);
        }, 2000);
      }
      , error => {
        this._notificationService.ErrorNotification('Create Failure. Try again!');
      });
  }

  updatePublicHoliday() {

    if(!this.currentPublicHoliday.event) {
      this.publicHolidayValid.event = false;
      return;
    }
    this.currentPublicHoliday.periodStartDate = new Date(( this.periodStartDate.getMonth() + 1 ) +  '/' +  this.periodStartDate.getDate() + '/' + this.periodStartDate.getFullYear() + ' 12:00:00');
    this.currentPublicHoliday.periodEndDate = new Date(( this.periodEndDate.getMonth() + 1 ) +  '/' +  this.periodEndDate.getDate() + '/' + this.periodEndDate.getFullYear() + '  12:00:00');
    this._publicHolidayService.updatePublicHoliday(this.currentPublicHoliday)
      .subscribe((res) => {
          this._notificationService.SuccessNotification('Update Successfully');
          setTimeout(() => {
            this._router.navigate(['/company/public-holiday/list/']);
          }, 2000);
        }
      , error => {
        this._notificationService.ErrorNotification('Update Failure. Try again!');
      } )
  }

  deletePublicHoliday() {
    this._publicHolidayService.deletePublicHoliday(this.currentPublicHoliday.id)
    .subscribe((res) => {
        this._notificationService.SuccessNotification('Delete Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/public-holiday/list/']);
        }, 2000);
      }
    , error => {
      this._notificationService.ErrorNotification('Delete Failure. Try again!');
    } )
  }

}
