import { Component, OnInit } from '@angular/core';
import { AttendancesService } from '../attendances.service';
import { NotificationService } from '../../../libs/notification';
import { Router, NavigationExtras } from "@angular/router";
@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent implements OnInit {
  public attendances: any[] = [];
  public page: number = 1;
  public size: number = 10;
  public totalItems = 0;
  public show = 0;
  public listCompanyId: any = [];
  private orderByName: number = 1;
  private orderByValue: number = 0;
  private orderByCode: number = 0;
  private filterByName: string = '';


  constructor(private _attendanceService: AttendancesService, private _notificationService: NotificationService,
    private _router: Router) { }

  ngOnInit() {
    this.getListCompnay();
    this.getCount();
    this.getAttendanceList();
  }

  loadPage(page: number) {
    this.page = page;
    this.getAttendanceList();
    this.getCount();
  }

  SelectSizePage()
  {
    this.loadPage(1);
  }

  Search()
  {
    this.loadPage(1);
  }

  filterbyName()
  {
    if(this.orderByName == 1)
    {
      this.orderByName = -1;
    }
    else
    {
      this.orderByName += 1;
    }

    if(this.orderByName == 1)
    {
      this.orderByCode = 0;
      this.orderByValue = 0;
    }
    this.loadPage(this.page);
  }
  filterbyCode()
  {
    if(this.orderByCode == 1)
    {
      this.orderByCode = -1;
    }
    else
    {
      this.orderByCode += 1;
    }
    if(this.orderByCode == 1)
    {
      this.orderByValue = 0;
      this.orderByName = 0;
    }
    this.loadPage(this.page);
  }
  filterbyValue()
  {
    if(this.orderByValue == 1)
    {
      this.orderByValue = -1;
    }
    else
    {
      this.orderByValue += 1;
    }
    if(this.orderByValue == 1)
    {
      this.orderByCode = 0;
      this.orderByName = 0;
    }
    this.loadPage(this.page);
  }

  getListCompnay() {
    this._attendanceService.getListCompnay().subscribe(
      result => {
        this.listCompanyId = result.data.map(item => {
          return item.id;
        });
      }
    )
  }

  getCount() {
    this._attendanceService.getCount(this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    )
  }

  getAttendanceList() {
    this._attendanceService.getAttendanceList(this.page, this.size, this.filterByName, this.orderByName, this.orderByCode, this.orderByValue)
    .subscribe(
      result => {
        this.attendances = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    )
  }

  delete(id) {

    var itemAtttendance = this.attendances.find(item => {
      return item.id == id;
    });

    if (itemAtttendance.companyUsed && itemAtttendance.companyUsed.length > 0) {
      var listCompnayUsed = itemAtttendance.companyUsed.split(';');
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

    this._attendanceService.deleteAttendance(id)
      .subscribe((res) => {
        this.getAttendanceList();
        this.getCount();
        this._notificationService.SuccessNotification("Delete Successfully");
      }

        , error => {
          this._notificationService.ErrorNotification("Delete Failure. Try again!");
        })
  }

  createAttendance() {
    this._router.navigate(["global/attendance/create"]);
  }

}

interface Attendance {
  id: number;
  name: string;
  code: string;
  value: string;
}
