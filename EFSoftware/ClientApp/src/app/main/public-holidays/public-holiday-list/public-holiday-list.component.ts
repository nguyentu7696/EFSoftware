import { Component, OnInit } from '@angular/core';
import { PublicHolidaysService } from '../public-holidays.service';
import { NotificationService } from '../../../libs/notification';
import { DataStorage } from '../../../providers/data/data';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-public-holiday-list',
  templateUrl: './public-holiday-list.component.html',
  styleUrls: ['./public-holiday-list.component.scss']
})
export class PublicHolidayListComponent implements OnInit {

  public publicHolidays: any[] = [];
  public page: number = 1;
  public size: number = 10;
  public totalItems = 0;
  public show = 0;
  public listYears: any[] = [];
  public listCountry: any[] = [];
  public country = "SG";
  public year = new Date().getFullYear();
  listCompanyId: any = [];
  public keySearch = "";
  private orderByEvent: number = 0;
  private orderByFrom: number = -1;
  private orderByTo: number = 0;
  constructor(private _publicHolidayService: PublicHolidaysService, private _notificationService: NotificationService,
    private _dataStorage: DataStorage, private _router: Router) {
    for (var i = 0; i < 100; i++) {
      this.listYears.push(this.year + i);
    }

    this._publicHolidayService.getJsonCountry().subscribe(
      result => {
        this.listCountry = result.json();
      }
    )

    this.getCount();
    this.getPublicHolidayList();
    this.getListCompnay();
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

  onSearch() {
    this.loadPage(1);
  }

  filterbyEvent() {
    if (this.orderByEvent == 1) {
      this.orderByEvent = -1;
    }
    else {
      this.orderByEvent += 1;
    }

    if (this.orderByEvent == 1 || this.orderByEvent == -1) {
      this.orderByFrom = 0;
      this.orderByTo = 0;
    }
    this.loadPage(this.page);
  }
  filterbyFrom() {
    if (this.orderByFrom == 1) {
      this.orderByFrom = -1;
    }
    else {
      this.orderByFrom += 1;
    }
    if (this.orderByFrom == 1 || this.orderByFrom == -1) {
      this.orderByEvent = 0;
      this.orderByTo = 0;
    }
    this.loadPage(this.page);
  }
  filterbyTo() {
    if (this.orderByTo == 1) {
      this.orderByTo = -1;
    }
    else {
      this.orderByTo += 1;
    }
    if (this.orderByTo == 1 || this.orderByTo == 1) {
      this.orderByEvent = 0;
      this.orderByFrom = 0;
    }
    this.loadPage(this.page);
  }

  onSelectCountry(value) {
    this.country = value;
    this.loadPage(1);
  }

  onSelectYear(value) {
    this.year = value;
    this.getPublicHolidayList();
    this.getCount();
  }

  loadPage(page: number) {
    this.page = page;
    this.getPublicHolidayList();
    this.getCount();
  }

  getCount() {
    this._publicHolidayService.getCount(this.country, this.year, this.keySearch).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    )
  }

  getPublicHolidayList() {
    this._publicHolidayService.getPublicHolidayList(this.page, this.size, this.country, this.year, this.keySearch, this.orderByEvent, this.orderByFrom, this.orderByTo).subscribe(
      result => {
        this.publicHolidays = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    )
  }

  SelectSizePage() {
    this.loadPage(1);
  }

  ngOnInit() {
  }


  editPublicHoliday(idcompay: string) {

    var itemPulicHoliday = this.publicHolidays.find(item => {
      return item.id == idcompay;
    });
    if (itemPulicHoliday) {
      DataStorage.currentPublicHoliday = itemPulicHoliday;
      this._router.navigate(["global/holiday/createupdate"]);
    }
  }

  createPublicHoliday() {
    DataStorage.currentPublicHoliday = {};
    this._router.navigate(["global/holiday/createupdate"]);
  }

  deletePublicHoliday(id) {

    var itemPulicHoliday = this.publicHolidays.find(item => {
      return item.id == id;
    });

    if (itemPulicHoliday.companyUsed && itemPulicHoliday.companyUsed.length > 0) {
      var listCompnayUsed = itemPulicHoliday.companyUsed.split(';');
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

    this._publicHolidayService.deletePublicHoliday(id)
      .subscribe((res) => {
        this.getPublicHolidayList();
        this.getCount();
        this._notificationService.SuccessNotification("Delete Successfully");
      }
        , error => {
          this._notificationService.ErrorNotification("Delete Failure. Try again!");
        })
  }

}
