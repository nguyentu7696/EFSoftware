import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../../../providers/data/data';
import { UserService } from '../user.service';
import { NotificationService } from '../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public employees: Employee[] = [];
  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName = '';
  listCompany: any = [];
  listDepartment: any = [];
  listSite: any = [];
  listJobsite: any = [];

  currentCompanyIdSelect: any = '';
  currentDepartmentIdSelect: any = '';
  currentSiteIdSelect: any = '';
  currentJobsiteIdSelect: any = '';


  constructor(
    private _employeesService: UserService,
    private _notificationService: NotificationService,
    private _router: Router) {

    this.currentCompanyIdSelect = 0;
    this.currentDepartmentIdSelect = 0;
    this.currentSiteIdSelect = 0;
    this.currentJobsiteIdSelect = 0;
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    await this.getListCompany();
    this.getDataCombobox();
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
    this._employeesService.getCount(this.currentCompanyIdSelect, this.currentDepartmentIdSelect, this.currentSiteIdSelect
      , this.currentJobsiteIdSelect, this.filterByName).subscribe(
        result => {
          this.totalItems = result.data.length;
        }
      );
  }

  async getListCompany() {
    return new Promise(resolve => {
      this._employeesService.getListCompany().subscribe(
        result => {
          this.listCompany = result.data;
          if (this.listCompany && this.listCompany.length > 0) {
            this.currentCompanyIdSelect = result.data[0].id;
          }
          resolve();
        }
      );
    });
  }

  getDataCombobox() {
    this.getListDepartment();
    this.getListSite();
    this.getListJobSite();
  }

  getListDepartment() {
    this._employeesService.getListDepartment(this.currentCompanyIdSelect).subscribe(
      result => {
        this.listDepartment = result.data;
      }
    );
  }

  getListSite() {
    this._employeesService.getListSite(this.currentCompanyIdSelect, this.currentDepartmentIdSelect).subscribe(
      result => {
        this.listSite = result.data;
      }
    );
  }

  getListJobSite() {
    this._employeesService.getListJobsite(this.currentCompanyIdSelect, this.currentDepartmentIdSelect, this.currentSiteIdSelect).subscribe(
      result => {
        this.listJobsite = result.data;
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
    this._employeesService.getEmployeesList(this.page, this.size, this.currentCompanyIdSelect,
      this.currentDepartmentIdSelect, this.currentSiteIdSelect, this.currentJobsiteIdSelect, this.filterByName).subscribe(
        result => {
          this.employees = result.data.results;
          this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
        }
      );
  }

  onSelectCompany(companyid) {
    this.currentDepartmentIdSelect = 0;
    this.currentSiteIdSelect = 0;
    this.currentJobsiteIdSelect = 0;
    this.getDataCombobox();
    this.loadPage(1);
  }

  onSelectDepartment(departmentid) {
    this.currentSiteIdSelect = 0;
    this.currentJobsiteIdSelect = 0;
    this.getListSite();
    this.getListJobSite();
    this.loadPage(1);
  }

  onSelectSite(siteid) {
    this.currentJobsiteIdSelect = 0;
    this.getListJobSite();
    this.loadPage(1);
  }

  onSelectJobSite(jobsiteid) {
    this.loadPage(1);
  }

  gotoEmployeesEdit(employee) {
    DataStorage.currentEmployee = employee;
    let jobsiteItem = this.listJobsite.find(item => item.id == employee.jobsiteId);
    DataStorage.setCurrentJobSite(jobsiteItem);
    let siteItem = this.listSite.find(item => item.id == jobsiteItem.siteId);
    DataStorage.setCurrentSite(siteItem);
    let departmentItem = this.listDepartment.find(item => item.id == siteItem.departmentId);
    DataStorage.setCurrentDepartment(departmentItem);
    let companyItem = this.listCompany.find(item => item.id == departmentItem.companyId);
    DataStorage.setCurrentCompany(companyItem);
    this._router.navigate(['company/job-site/detail/employee/edit/', employee.id]);
  }
  getRosterOfEmployee(employee) {
    DataStorage.currentEmployee = employee;
    this._router.navigate(['company/job-site/detail/roster/list/', employee.id]);
  }

  getEvent(employee) {
    DataStorage.currentEmployee = employee;
    let jobsiteItem = this.listJobsite.find(item => item.id == employee.jobsiteId);
    DataStorage.setCurrentJobSite(jobsiteItem);
    let siteItem = this.listSite.find(item => item.id == jobsiteItem.siteId);
    DataStorage.setCurrentSite(siteItem);
    let departmentItem = this.listDepartment.find(item => item.id == siteItem.departmentId);
    DataStorage.setCurrentDepartment(departmentItem);
    let companyItem = this.listCompany.find(item => item.id == departmentItem.companyId);
    DataStorage.setCurrentCompany(companyItem);
    this._router.navigate(['company/job-site/detail/employee/event/', employee.id]);
  }

}
interface Employee {
  id: number;
  company: string;
  code: string;
  name: string;
  jobsite: string;

}
