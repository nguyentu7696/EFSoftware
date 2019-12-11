import { DataStorage } from '../../providers/data/data';
import { Component, OnInit } from '@angular/core';
import { JobsiteService } from './jobsite.service';
import { NotificationService } from '../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobsite',
  templateUrl: './jobsite.component.html',
  styleUrls: ['./jobsite.component.scss']
})
export class JobsiteComponent implements OnInit {
  public jobsites: JobSite[] = [];
  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName: string = '';
  listCompany: any = [];
  listDepartment: any = [];
  listSite: any = [];

  currentCompany: any = {};
  currentDepartment: any = {};
  currentSite: any = {};

  currentCompanyIdSelect: any = '';
  currentDepartmentIdSelect: any = 0;
  currentSiteIdSelect: any = 0;
  constructor(private _jobsiteService: JobsiteService, private _notificationService: NotificationService, private _router: Router) {

  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    const result = await this.getListCompany();
    this.listCompany = result.data;
    this.currentCompanyIdSelect = result.data[0].id;
    this.getDataCombobox();
    this.getCount();
    this.getJobSiteList();
  }

  loadPage(page: number) {
    this.page = page;
    this.getJobSiteList();
    this.getCount();
  }
  Search() {
    this.loadPage(1);
  }
  getCount() {
    this._jobsiteService.getCount(this.currentCompanyIdSelect, this.currentDepartmentIdSelect,
       this.currentSiteIdSelect, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    );
  }

  async getListCompany() {
    return this._jobsiteService.getListCompany().toPromise();
  }

  getListDepartment() {
    this._jobsiteService.getListDepartment(this.currentCompanyIdSelect).subscribe(
      result => {
        this.listDepartment = result.data;
      }
    );
  }

  getDataCombobox() {
    this.getListDepartment();
    this.getListSite();
  }

  getListSite() {
    this._jobsiteService.getListSite(this.currentCompanyIdSelect, this.currentDepartmentIdSelect).subscribe(
      result => {
        this.listSite = result.data;
      }
    );
  }

  delete(id) {
    this._jobsiteService.deleteJobSite(id)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this.getJobSiteList();
        this.getCount();
        this._notificationService.SuccessNotification('Delete Successfully');
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        });
  }

  getJobSiteList() {
    this._jobsiteService.getJobSiteList(this.page, this.size, this.currentCompanyIdSelect,
      this.currentDepartmentIdSelect, this.currentSiteIdSelect, this.filterByName).subscribe(
        result => {
          this.jobsites = result.data.results;
          this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
        }
      );
  }

  onSelectCompany() {
    this.currentDepartmentIdSelect = 0;
    this.currentSiteIdSelect = 0;
    this.getListDepartment();
    this.getListSite();
    this.loadPage(1);
  }

  onSelectDepartment() {
    this.currentSiteIdSelect = 0;
    this.getListSite();
    this.loadPage(1);
  }

  onSelectSite() {
    this.loadPage(1);
  }

  gotoJobSiteEdit(jobsiteitem) {
    DataStorage.setCurrentJobSite(jobsiteitem);
    var siteItem = this.listSite.find(item => item.id == jobsiteitem.siteId);
    DataStorage.setCurrentSite(siteItem);
    var departmentItem = this.listDepartment.find(item => item.id == siteItem.departmentId);
    DataStorage.setCurrentDepartment(departmentItem);
    var companyItem = this.listCompany.find(item => item.id == departmentItem.companyId);
    DataStorage.setCurrentCompany(companyItem);
    this._router.navigate(['company/job-site/detail/edit/']);
  }

}

interface JobSite {
  id: number;
  name: string;
  site: number;
  department: number;
}
