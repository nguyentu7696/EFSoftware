import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';
import { shiftService } from '../shift.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class shiftListComponent implements OnInit {
  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName: string = '';
  shiftList: any[] = [];

  public currentCompany: any = {};

  constructor(
    private _shiftService: shiftService,
    private _notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentCompany = DataStorage.currentCompany;

    this.getCount();
    this.getshiftList();
  }

  loadPage(page: number) {
    this.page = page;
    this.getshiftList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }
  getCount() {
    this._shiftService.getCount(this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    );
  }

  delete(id) {
    this._shiftService.deleteshift(id)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this.getshiftList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        });
  }

  getshiftList() {
    this._shiftService.getshiftList(this.page, this.size, this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.shiftList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

  createshift() {
    this.router.navigate(['company/shift/create']);
  }

}
