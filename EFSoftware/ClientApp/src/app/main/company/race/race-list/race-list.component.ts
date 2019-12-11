import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { RaceService } from '../race.service';
import { DataStorage } from '../../../../providers/data/data';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {
  public raceList: Race[] = [];
  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  public currentCompany: any = {};
  private filterByName: string = '';

  constructor(
    private _notificationService: NotificationService,
    private router: Router,
    private _raceService: RaceService) { }

  ngOnInit() {
    this.currentCompany = DataStorage.currentCompany;
    this.getCount();
    this.getRaceListWithCompanyId();
  }

  loadPage(page: number) {
    this.page = page;
    this.getRaceListWithCompanyId();
    this.getCount();
  }
  Search()
  {
    this.loadPage(1);
  }

  getCount() {
    this._raceService.getCount(this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    );
  }

  getRaceListWithCompanyId() {
    this._raceService.getRaceListWithCompanyId(this.page, this.size, this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.raceList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

  createRace() {
    this.router.navigate(['company/race/create']);
  }

}

interface Race {
  id: number;
  name: string;
  value: string;
}
