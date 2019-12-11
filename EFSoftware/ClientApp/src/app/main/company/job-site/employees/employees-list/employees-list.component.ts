import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../../../../../providers/data/data';
import { EmployeesService } from '../employees.service';
import { NotificationService } from '../../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  public employees: any[] = [];
  public page: number = 1;
  public size: number = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName: string = '';
  listCompany: any = [];
  listDepartment: any = [];
  listSite: any = [];
  listJobsite: any = [];

  currentCompany: any = {};
  currentDepartment: any = {};
  currentSite: any = {};
  currentJobsite: any = {};

  currentCompanyIdSelect: any = '';
  currentDepartmentIdSelect: any = '';
  currentSiteIdSelect: any = '';
  currentJobsiteIdSelect: any = '';

  constructor(
    private _employeesService: EmployeesService,
    private _notificationService: NotificationService,
    private _router: Router) {

    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentSite = DataStorage.getCurrentSite();
    this.currentJobsite = DataStorage.getCurrentJobSite();

    if (!this.currentDepartment) {
      this.currentDepartment = {
        id: 0
      };
    }

    if (!this.currentSite) {
      this.currentSite = {
        id: 0
      };
    }

    if (!this.currentJobsite) {
      this.currentJobsite = {
        id: 0
      };
    }

    if (!this.currentDepartment.id) {
      this.currentDepartment.id = 0;
    }

    if (!this.currentSite.id) {
      this.currentSite.id = 0;
    }

    if (!this.currentJobsite.id) {
      this.currentJobsite.id = 0;
    }

    this.currentCompanyIdSelect = this.currentCompany.id;
    this.currentDepartmentIdSelect = 0;
    this.currentSiteIdSelect = 0;

    if (this.currentJobsite.id > 0) {
      this.currentJobsiteIdSelect = this.currentJobsite.id;
    }
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.getListCompany();
    this.getDataCombobox(false);
    this.getCount();
    this.getEmployeesList();
  }

  loadPage(page: number) {
    this.page = page;
    this.getEmployeesList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }
  getCount() {
    this._employeesService.getCount(this.currentCompany.id, this.currentDepartmentIdSelect, this.currentSiteIdSelect,
       this.currentJobsiteIdSelect, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    )
  }
  getListCompany() {
    this._employeesService.getListCompany().subscribe(
      result => {
        this.listCompany = result.data;
      }
    )
  }

  getDataCombobox(resetJobsiteId = true) {
    this.getListDepartment();
    this.getListSite();
    this.getListJobSite(resetJobsiteId);
  }

  getListDepartment() {
    this._employeesService.getListDepartment(this.currentCompany.id).subscribe(
      result => {
        this.listDepartment = result.data;
        //this.currentDepartmentIdSelect = 0;
      }
    );
  }

  getListSite() {
    this._employeesService.getListSite(this.currentCompany.id, this.currentDepartment.id).subscribe(
      result => {
        this.listSite = result.data;
        //this.currentSiteIdSelect = 0;
      }
    );
  }

  getListJobSite(resetJobsiteId = true) {
    this._employeesService.getListJobsite(this.currentCompany.id, this.currentDepartmentIdSelect,
      this.currentSiteIdSelect).subscribe(
        result => {
          this.listJobsite = result.data;
          if (resetJobsiteId) {
            //this.currentJobsiteIdSelect = 0;
          }
        }
      );
  }

  delete(id) {
    this._employeesService.deleteEmployees(id)
      .subscribe((res) => {
        this.getEmployeesList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }, error => {
        this._notificationService.ErrorNotification('Delete Failure. Try again!');
      });
  }

  getEmployeesList() {
    this.employees = [];
    this._employeesService.getEmployeesList(this.page, this.size, this.currentCompany.id,
      this.currentDepartmentIdSelect, this.currentSiteIdSelect, this.currentJobsiteIdSelect, this.filterByName).subscribe(
        result => {
          this.employees = result.data.results;
          console.log(this.employees);
          this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
        }
      );
  }

  onSelectCompany(companyid) {
    this.currentCompany = this.listCompany.find(item => item.id == companyid);
    this.currentCompanyIdSelect = companyid;
    this.currentDepartmentIdSelect = 0;
    this.currentSiteIdSelect = 0;
    this.currentJobsiteIdSelect = 0;
    this.getDataCombobox();
    this.loadPage(1);
  }

  onSelectDepartment(departmentid) {
    this.currentDepartmentIdSelect = departmentid;
    this.currentSiteIdSelect = 0;
    this.currentJobsiteIdSelect = 0;
    this.getListSite();
    this.getListJobSite();
    this.loadPage(1);
  }

  // onSelectDepartment(departmentid) {
  //   this.currentDepartment = this.listDepartment.find(item => item.id == departmentid);
  //   if (!this.currentDepartment) {
  //     this.currentDepartment = {
  //       id: 0
  //     };
  //   }
  //   DataStorage.setCurrentDepartment(this.currentDepartment);
  //   this.getListSite();
  //   this.getListJobSite();
  //   this.loadPage(1);
  // }

  onSelectSite(siteid) {
    this.currentSiteIdSelect = siteid;
    this.currentJobsiteIdSelect = 0;
    this.getListJobSite();
    this.loadPage(1);
  }

  // onSelectSite(siteid) {
  //   this.currentSite = this.listSite.find(item => item.id == siteid);
  //   if (!this.currentSite) {
  //     this.currentSite = {
  //       id: 0
  //     };
  //   }
  //   DataStorage.currentSite = this.currentSite;
  //   this.getListJobSite();
  //   this.loadPage(1);
  // }

  onSelectJobSite(jobsiteid) {
    this.currentJobsiteIdSelect = jobsiteid;
    this.loadPage(1);
  }

  // onSelectJobSite(jobsiteid) {
  //   this.currentJobsite = this.listJobsite.find(item => item.id == jobsiteid);
  //   if (!this.currentJobsite) {
  //     this.currentJobsite = {
  //       id: 0
  //     };
  //   }
  //   DataStorage.currentJobSite = this.currentJobsite;
  //   this.loadPage(1);
  // }

  createPublicHoliday() {
    DataStorage.currentEmployee = {};
    this._router.navigate(['company/job-site/detail/roster/list']);
  }

  gotoEmployeesEdit(employee) {
    DataStorage.currentEmployee = employee;
    this._router.navigate(['company/job-site/detail/employee/edit/', employee.id]);
  }

  getRosterOfEmployee(employee) {
    DataStorage.currentEmployee = employee;
    this._router.navigate(['company/job-site/detail/roster/list/', employee.id]);
  }

  getEvent(employee) {
    DataStorage.currentEmployee = employee;
    this._router.navigate(['company/job-site/detail/employee/event/', employee.id]);
  }
}
