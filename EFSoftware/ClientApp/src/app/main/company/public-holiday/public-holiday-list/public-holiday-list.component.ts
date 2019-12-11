import { Component, OnInit } from '@angular/core';
import { PublicHolidayService } from '../public-holiday.service';
import { NotificationService } from '../../../../libs/notification';
import { DataStorage } from '../../../../providers/data/data';
import { Router, NavigationExtras } from '@angular/router';
import { count } from 'rxjs/operator/count';

@Component({
  selector: 'app-public-holiday-list',
  templateUrl: './public-holiday-list.component.html',
  styleUrls: ['./public-holiday-list.component.scss']
})
export class PublicHolidayListComponent implements OnInit {
  atttendanceGlobal: any = [];
  attendanceGlobalSelect: any = {};
  currentCompany: any = {};
  publicHolidayGlobal: any = [];
  publicHolidayGlobalAll: any = [];
  publicHolidayGlobalSelect: any = {};
  public publicHoliday: any[] = [];
  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  public listYears: any[] = [];
  public listCountry: any[] = [];
  public country = 'SG';
  public year = new Date().getFullYear();
  private filterByName: string = '';


  constructor(
    private _publicHolidayService: PublicHolidayService,
    private _notificationService: NotificationService,
    private _dataStorage: DataStorage,
    private _router: Router) {

    this.currentCompany = DataStorage.currentCompany;

    for (let i = 0; i < 100; i++) {
      this.listYears.push(this.year + i);
    }

    this._publicHolidayService.getJsonCountry().subscribe(
      result => {
        this.listCountry = result.json();
      }
    );

    this.getData();
  }

  onSelectCountry(value) {
    this.country = value;
    this.loadPage(1);
    this.getData();
  }

  onSelectYear(value) {
    this.year = value;
    this.loadPage(1);
    this.getData();
  }

  loadPage(page: number) {
    this.page = page;
    this.getPublicHolidayList();
    this.getCount();
  }

  async getData() {
    await this.getPublicHolidayGlobalList();
    this.getPublicHolidayList();
    this.getCount();
  }
  Search()
  {
    this.loadPage(1);
  }

  getCount() {
    this._publicHolidayService.getCount(this.country, this.year, this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    );

    this._publicHolidayService.getCount('', 0, this.currentCompany.id, this.filterByName).subscribe(
      result => {
        let listIdUsed = result.data.map(item => {
          return item.publicHolidayId;
        });
        this.publicHolidayGlobal = this.publicHolidayGlobalAll.filter(item => {
          if (listIdUsed.indexOf(item.id) >= 0) {
            return false;
          } else {
            return true;
          }
        });
      }
    );
  }

  getPublicHolidayList() {
    this._publicHolidayService.getPublicHolidayList(this.page, this.size, this.country, this.year,
      this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.publicHoliday = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

  ngOnInit() {
  }

  async getPublicHolidayGlobalList() {
    await new Promise(resolve => {
      this._publicHolidayService.getPublicHolidayGlobalAll().subscribe(
        result => {
          this.publicHolidayGlobalAll = result.data;
          resolve('done');
        }
      );
    });
  }

  onSelectPublicHolidayGlobal(itemvalue) {
    if (!itemvalue) {
      this.publicHolidayGlobalSelect = {};
      return;
    }
    this.publicHolidayGlobalSelect = this.publicHolidayGlobal.find(item => item.id == itemvalue);
  }

  addPublicHoliday() {
    if (!this.publicHolidayGlobalSelect.id) {
      this._notificationService.ErrorNotification('Please select a attendance code.');
      return;
    }

    var periodStartDate = new Date(this.publicHolidayGlobalSelect.periodStartDate);
    var periodEndDate = new Date(this.publicHolidayGlobalSelect.periodEndDate);
    this._publicHolidayService.createPublicHoliday({
      year: this.publicHolidayGlobalSelect.year,
      country: this.publicHolidayGlobalSelect.country,
      event: this.publicHolidayGlobalSelect.event,
      publicHolidayId: this.publicHolidayGlobalSelect.id,
      companyId: this.currentCompany.id,
      periodStartDate: new Date( ( periodStartDate.getMonth() + 1 ) +  '/' +  periodStartDate.getDate() + '/' + periodStartDate.getFullYear() + ' 12:00:00'),
      periodEndDate: new Date( ( periodEndDate.getMonth() + 1 ) +  '/' +  periodEndDate.getDate() + '/' + periodEndDate.getFullYear() + '  12:00:00')
    })
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Add Successfully');
        setTimeout(() => {
          DataStorage.currentPublicHoliday = res.data;
          this._router.navigate(['/company/public-holiday/create']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
        });

  }

  editPublicHoliday(idcompay: string) {

    let itemPulicHoliday = this.publicHoliday.find(item => {
      return item.id == idcompay;
    });
    if (itemPulicHoliday) {
      DataStorage.currentPublicHoliday = itemPulicHoliday;
      this._router.navigate(['/company/public-holiday/create']);
    }
  }

  createPublicHoliday() {
    DataStorage.currentPublicHoliday = {};
    this._router.navigate(['company/public-holiday/create']);
  }

  deletePublicHoliday(id) {

    let itemPublicHoliday = this.publicHoliday.find(item => {
      return item.id == id;
    });
    if (itemPublicHoliday.companyUsed && itemPublicHoliday.companyUsed.length > 0) {
      this._notificationService.ErrorNotification('Attendance can\'t removed because it has been used');
      return;
    }

    this._publicHolidayService.deletePublicHoliday(id)
      .subscribe((res) => {
        this.getData();
        this._notificationService.SuccessNotification('Delete Successfully');
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        });
  }

}
