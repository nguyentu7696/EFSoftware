import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  public locationList: Location[] = [];
  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName: string = '';
  public currentCompany: any = {};
  public currentJobSite: any = {};
  public currentZoneLocation: any = {};

  constructor(
    private _notificationService: NotificationService,
    private router: Router,
    private _locationService: LocationService
  ) { }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentZoneLocation = DataStorage.currentZoneLocation;

    this.getCount();
    this.getLocationListWithZoneLocationId();
  }

  loadPage(page: number) {
    this.page = page;
    this.getLocationListWithZoneLocationId();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }
  getCount() {
    this._locationService.getCount(this.currentZoneLocation.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    );
  }

  getLocationListWithZoneLocationId() {
    this._locationService.getLocationListWithZoneLocationId(this.page, this.size, this.currentZoneLocation.id, this.filterByName).subscribe(
      result => {
        this.locationList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

  delete(id) {
    this._locationService.deleteLocation(id)
      .subscribe((res) => {
        this.getLocationListWithZoneLocationId();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        })
  }

  createLocation() {
    this.router.navigate(['company/job-site/detail/location/create']);
  }

}

interface Location {
  id: number;
  name: string;
  value: string;

}
