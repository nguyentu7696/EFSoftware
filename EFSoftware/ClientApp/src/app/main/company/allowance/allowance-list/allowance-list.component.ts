import { Component, OnInit } from '@angular/core';
import { AllowanceService } from '../allowance.service';
import { NotificationService } from '../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../providers/data/data';

@Component({
  selector: 'app-allowance-list',
  templateUrl: './allowance-list.component.html',
  styleUrls: ['./allowance-list.component.scss']
})
export class AllowanceListComponent implements OnInit {
  public allowanceList: Allowance[] = [];
  public page: number = 1;
  public size: number = 10;
  public totalItems = 0;
  public show = 0;
  public currentCompany: any = {};
  private filterByName: string = '';
  constructor(
    private _allowanceService: AllowanceService,
    private _notificationService: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this.currentCompany = DataStorage.currentCompany;
    this.getCount();
    this.getAllowanceList();
  }

  loadPage(page: number) {
    this.page = page;
    this.getAllowanceList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }
  getCount() {
    this._allowanceService.getCount(this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    )
  }

  delete(id) {
    this._allowanceService.deleteAllowance(id)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this.getAllowanceList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        })
  }

  getAllowanceList() {
    this._allowanceService.getAllowanceList(this.page, this.size, this.currentCompany.id, this.filterByName).subscribe(
      result => {
        this.allowanceList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    )
  }

  createAllowance() {
    this.router.navigate(['company/allowance/create']);
  }

}

interface Allowance {
  id: number;
  description: string;
  code: string;
  amount: number;
  remarks: string;
  startDate: Date;
  endDate: Date;
}
