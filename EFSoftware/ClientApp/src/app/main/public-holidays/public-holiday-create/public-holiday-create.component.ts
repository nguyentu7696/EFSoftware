import { Component, OnInit } from '@angular/core';
import { PublicHolidaysService } from '../public-holidays.service';
import { NotificationService } from '../../../libs/notification';
import { DataStorage } from '../../../providers/data/data';
import { Router, NavigationExtras } from "@angular/router";
import { DatepickerOptions } from 'ng2-datepicker';


@Component({
  selector: 'app-public-holiday-create',
  templateUrl: './public-holiday-create.component.html',
  styleUrls: ['./public-holiday-create.component.scss']
})
export class PublicHolidayCreateComponent implements OnInit {

  listYears: any[] = [];
  listCountry: any[] = [];
  currentCountry = 'SG';
  currentPublicHoliday: any = {};
  iscreate = false;
  periodStartDate: Date = new Date();
  periodEndDate: Date = new Date();
  dateMin: Date = new Date();
  dateMax: Date = new Date();
  publicHolidayValid: any = {};
  listCompanyId: any = [];

  options: DatepickerOptions = {
    displayFormat: 'DD MMM YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd'
  };

  constructor(private _publicHolidayService: PublicHolidaysService, private _dataStorage: DataStorage,
    private _notificationService: NotificationService, private _router: Router) {

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

    if (this.currentPublicHoliday.id == 0 || this.currentPublicHoliday.id == undefined) {
      this.iscreate = true;
      this.currentPublicHoliday = {
        id: 0,
        country: 'SG',
        year: new Date().getFullYear(),
        periodStartDate: new Date(),
        periodEndDate: new Date(),
      }
    } else {
      this.iscreate = false;
    }

    this.periodStartDate = this.currentPublicHoliday.periodStartDate;
    this.periodEndDate = this.currentPublicHoliday.periodEndDate;

    var yearstart = 2019;
    for (var i = 0; i < 100; i++) {
      this.listYears.push(yearstart + i);
    }

    this._publicHolidayService.getJsonCountry().subscribe(
      result => {
        this.listCountry = result.json();
      }
    )

    this.periodStartDate = new Date(this.periodStartDate);
    this.periodEndDate = new Date(this.periodEndDate);
    this.periodStartDate = new Date((this.periodStartDate.getMonth() + 1) + '/' + this.periodStartDate.getDate() + '/' + this.periodStartDate.getFullYear() + ' 12:00:00');
    this.periodEndDate = new Date((this.periodEndDate.getMonth() + 1) + '/' + this.periodEndDate.getDate() + '/' + this.periodEndDate.getFullYear() + '  12:00:00');
    this.options.minYear = this.options.maxYear = this.periodStartDate.getFullYear();
    this.options.maxYear = this.options.maxYear = this.periodStartDate.getFullYear();

    this.getListCompnay();
  }

  ngOnInit() {
  }

  getListCompnay() {
    this._publicHolidayService.getListCompnay().subscribe(
      result => {
        this.listCompanyId = result.data.map(item => {
          return item.id;
        });
      }
    )
  }

  selectYears(yearValue) {
    this.options.minYear = this.options.maxYear = yearValue;
    this.periodStartDate = new Date(this.periodStartDate);
    this.periodEndDate = new Date(this.periodEndDate);
    this.periodStartDate = new Date((this.periodStartDate.getMonth() + 1) + '/' + this.periodStartDate.getDate() + '/' + yearValue + ' 12:00:00');
    this.periodEndDate = new Date((this.periodEndDate.getMonth() + 1) + '/' + this.periodEndDate.getDate() + '/' + yearValue + '  12:00:00');
  }

  createPublicHoliday() {
    if (!this.currentPublicHoliday.event) {
      this.publicHolidayValid.event = false;
      return;
    }

    this.currentPublicHoliday.periodStartDate = new Date((this.periodStartDate.getMonth() + 1) + '/' + this.periodStartDate.getDate() + '/' + this.periodStartDate.getFullYear() + ' 12:00:00');
    this.currentPublicHoliday.periodEndDate = new Date((this.periodEndDate.getMonth() + 1) + '/' + this.periodEndDate.getDate() + '/' + this.periodEndDate.getFullYear() + '  12:00:00');
    this._publicHolidayService.createPublicHoliday(this.currentPublicHoliday)
      .subscribe((res) => {
        this._notificationService.SuccessNotification("Create Successfully");
        setTimeout(() => {
          this._router.navigate(['/global/holiday/list/']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification("Create Failure. Try again!");
        });
  }

  updatePublicHoliday() {

    if (!this.currentPublicHoliday.event) {
      this.publicHolidayValid.event = false;
      return;
    }
    this.currentPublicHoliday.periodStartDate = new Date((this.periodStartDate.getMonth() + 1) + '/' + this.periodStartDate.getDate() + '/' + this.periodStartDate.getFullYear() + ' 12:00:00');
    this.currentPublicHoliday.periodEndDate = new Date((this.periodEndDate.getMonth() + 1) + '/' + this.periodEndDate.getDate() + '/' + this.periodEndDate.getFullYear() + '  12:00:00');
    this._publicHolidayService.updatePublicHoliday(this.currentPublicHoliday)
      .subscribe((res) => {

        this._notificationService.SuccessNotification("Update Successfully");
        setTimeout(() => {
          this._router.navigate(['/global/holiday/list/']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification("Update Failure. Try again!");
        })
  }

  deletePublicHoliday() {

    if (this.currentPublicHoliday.companyUsed && this.currentPublicHoliday.companyUsed.length > 0) {
      var listCompnayUsed = this.currentPublicHoliday.companyUsed.split(';');
      var isused = false;
      listCompnayUsed.map(item => {
        if (this.listCompanyId.indexOf(Number(item)) >= 0) {
          isused = true;
        }
      });
      if (isused) {
        this._notificationService.ErrorNotification("Delete Failure. This code is being used.");
        return;
      }
    }

    this._publicHolidayService.deletePublicHoliday(this.currentPublicHoliday.id)
      .subscribe((res) => {

        this._notificationService.SuccessNotification("Delete Successfully");
        setTimeout(() => {
          this._router.navigate(['/global/holiday/list/']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification("Delete Failure. Try again!");
        })
  }

}
