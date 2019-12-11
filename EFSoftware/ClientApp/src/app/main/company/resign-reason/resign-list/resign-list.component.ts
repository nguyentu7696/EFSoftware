import { Component, OnInit } from '@angular/core';
import { ResignService } from '../resign.service';
import { NotificationService } from '../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';
@Component({
  selector: 'app-resign-list',
  templateUrl: './resign-list.component.html',
  styleUrls: ['./resign-list.component.scss']
})
export class ResignListComponent implements OnInit {
  public resigns: Resign[] = [];
  public page: number = 1;
  public size: number = 10;
  public totalItems = 0;
  public show = 0;
  public currentCompany: any = {};
  private filterByName: string = '';

  constructor(private _resignService: ResignService, private _notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this.currentCompany = DataStorage.currentCompany;
    this.getCount();
    this.getResignList();
  }

  loadPage(page: number) {
    this.page = page;
    this.getResignList();
    this.getCount();
  }
  Search(){
    this.loadPage(1);
  }

  getCount() {
    this._resignService.getCount(this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    )
  }

  delete(id) {
    this._resignService.deleteResignReason(id)
      .subscribe((res) => {
        this.getResignList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        })
  }

  getResignList() {
    this._resignService.getResignReasonList(this.page, this.size, this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.resigns = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    )
  }

  createResignReason() {
    this.router.navigate(['company/resign-reason/create']);
  }

}

interface Resign {
  id: number;
  name: string;
  code: string;
  value: string;
  remarks: string;
  startDate: Date;
  endDate: Date;
  status: number;
}
