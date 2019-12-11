import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService } from '../level.service';
import { DataStorage } from '../../../../../providers/data/data';
@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.scss']
})
export class LevelListComponent implements OnInit {

  public levelList: Level[] = [];
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
    private _levelService: LevelService) { }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentZoneLocation = DataStorage.getCurrentZoneLocation();

    this.getCount();
    this.getLevelListWithZoneLocationId();
  }

  loadPage(page: number) {
    this.page = page;
    this.getLevelListWithZoneLocationId();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }
  getCount() {
    console.log(this.currentZoneLocation.id);
    this._levelService.getCount(this.currentZoneLocation.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    );
  }

  getLevelListWithZoneLocationId() {
    this._levelService.getLevelListWithZoneLocationId(this.page, this.size, this.currentZoneLocation.id, this.filterByName).subscribe(
      result => {
        this.levelList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

  delete(id) {
    this._levelService.deleteLevel(id)
      .subscribe((res) => {
        this.getLevelListWithZoneLocationId();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        })
  }

  createLevel() {
    this.router.navigate(['company/job-site/detail/level/create']);
  }

}

interface Level {
  id: number;
  name: string;
  value: string;

}
