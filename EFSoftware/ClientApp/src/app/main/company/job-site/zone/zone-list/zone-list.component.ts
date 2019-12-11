import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { ZoneService } from '../zone.service';
import { DataStorage } from '../../../../../providers/data/data';
@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.scss']
})
export class ZoneListComponent implements OnInit {
  public zoneList: Zone[] = [];
  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName: string = '';
  errorMessage: any;
  listZoneLocation: any;
  zoneLocationIdSelect = 0;

  public currentCompany: any = {};
  public currentJobSite: any = {};

  constructor(
    private _notificationService: NotificationService,
    private router: Router,
    private _zoneService: ZoneService) { }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();

    this.getCount();
    this.getZoneList();
    this.getListZoneLocation();
  }

  loadPage(page: number) {
    this.page = page;
    this.getZoneList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }
  onSelectZoneLocation() {
    this.loadPage(1);
  }

  getListZoneLocation() {
    this._zoneService.getListZoneLocation(this.currentJobSite.id)
      .subscribe((res) => {
        this.listZoneLocation = res.data;
      }
        , error => {
          this.errorMessage = error;
        });
  }

  getCount() {

    this._zoneService.getCount(this.zoneLocationIdSelect, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    );
  }

  getZoneList() {
    this._zoneService.getZoneList(this.page, this.size, this.zoneLocationIdSelect, this.filterByName).subscribe(
      result => {
        this.zoneList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

  delete(id) {
    this._zoneService.deleteZone(id)
      .subscribe((res) => {
        this.getZoneList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        })
  }

  createZone() {
    this.router.navigate(['company/job-site/detail/zone/create']);
  }

}

interface Zone {
  id: number;
  name: string;
  status: string;
  zoneLocation: string;
}
