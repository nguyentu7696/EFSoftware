import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from '../area.service';
import { DataStorage } from '../../../../../providers/data/data';
@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.scss']
})
export class AreaListComponent implements OnInit {
  public areaList: Area[] = [];
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
    private _areaService: AreaService) { }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentZoneLocation = DataStorage.currentZoneLocation;

    this.getCount();
    this.getAreaListWithZoneLocationId();
  }

  loadPage(page: number) {
    this.page = page;
    this.getAreaListWithZoneLocationId();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }
  getCount() {
    this._areaService.getCount(this.currentZoneLocation.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    );
  }

  getAreaListWithZoneLocationId() {
    this._areaService.getAreaListWithZoneLocationId(this.page, this.size, this.currentZoneLocation.id, this.filterByName).subscribe(
      result => {
        this.areaList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

  delete(id) {
    this._areaService.deleteArea(id)
      .subscribe((res) => {
        this.getAreaListWithZoneLocationId();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        })
  }

  createArea() {
    this.router.navigate(['company/job-site/detail/area/create']);
  }

}

interface Area {
  id: number;
  name: string;
  value: string;

}
