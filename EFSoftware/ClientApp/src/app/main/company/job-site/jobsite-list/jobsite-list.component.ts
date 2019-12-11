import { DataStorage } from '../../../../providers/data/data';
import { Component, OnInit } from '@angular/core';
import { JobSiteService } from '../jobsite.service';
import { NotificationService } from '../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-jobsite-list',
  templateUrl: './jobsite-list.component.html',
  styleUrls: ['./jobsite-list.component.scss']
})
export class JobSiteListComponent implements OnInit {
  public jobsites: JobSite[] = [];
  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;
  private filterByName: string = '';

  listCompany: any = [];
  listDepartment: any = [];
  listSite: any = [];
  listSiteAll: any = [];

  currentCompany: any = {};
  currentDepartment: any = {};
  currentSite: any = {};

  currentCompanyIdSelect: any = '';
  currentDepartmentIdSelect: any = '';
  currentSiteIdSelect: any = '';
  constructor(private _jobsiteService: JobSiteService, private _notificationService: NotificationService, private _router: Router) {

  }

  ngOnInit() {
    console.log('5555555555555666666666666666666', Date.now());
    this.initData();
  }

  async initData() {
    console.log('8888888888888888888888', Date.now());
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentSite = DataStorage.getCurrentSite();
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

    if (!this.currentDepartment.id) {
      this.currentDepartment.id = 0;
    }

    if (!this.currentSite.id) {
      this.currentSite.id = 0;
    }
    this.currentCompanyIdSelect = this.currentCompany.id;

    if (this.currentSite.id > 0) {
      this.currentDepartmentIdSelect = this.currentSite.departmentId;
      this.currentSiteIdSelect = this.currentSite.id;
    } else {
      this.currentDepartmentIdSelect = this.currentDepartment.id;
      this.currentSiteIdSelect = this.currentSite.id;
    }
    this.getListCompany();
    this.getDataCombobox();
    this.getCount();
    this.getJobSiteList();
    console.log('999999999999999999999999999999', Date.now());
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
    this._jobsiteService.getCount(this.currentCompany.id, this.currentDepartment.id, this.currentSite.id, this.filterByName).subscribe(
      result => {
        this.totalItems = result.data.length;
      }
    );
  }

  getListCompany() {
    this._jobsiteService.getListCompany().subscribe(
      result => {
        this.listCompany = result.data;
      }
    );
  }

  getListDepartment() {
    this._jobsiteService.getListDepartment(this.currentCompany.id).subscribe(
      result => {
        this.listDepartment = result.data;
        if (this.currentDepartmentIdSelect > 0) {
          let department = this.listDepartment.find(x => x.id == this.currentDepartmentIdSelect);
          if (department != null) {
            this.currentDepartment = department;
            DataStorage.setCurrentDepartment(this.currentDepartment);
          }
        }
      }
    );
  }

  getDataCombobox() {
    this.getListDepartment();
    this.getListSite();
  }

  getListSite() {
    this._jobsiteService.getListSite(this.currentCompany.id, this.currentDepartment.id).subscribe(
      result => {
        this.listSiteAll = result.data;
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
    this._jobsiteService.getJobSiteList(this.page, this.size, this.currentCompany.id,
      this.currentDepartment.id, this.currentSite.id, this.filterByName).subscribe(
        result => {
          this.jobsites = result.data.results;
          this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
        }
      );
  }

  onSelectCompany(companyid) {
    DataStorage.currentCompany = this.listCompany.find(item => item.id == companyid);
    this.currentCompany = DataStorage.currentCompany;
    this.getDataCombobox();
    this.loadPage(1);
  }

  onSelectDepartment(departmentid) {
    this.currentDepartment = this.listDepartment.find(item => item.id == departmentid);
    if (!this.currentDepartment) {
      this.currentDepartment = {
        id: 0
      };
    }
    DataStorage.setCurrentDepartment(this.currentDepartment);
    this.getListSite();
    this.loadPage(1);
  }

  onSelectSite(siteid) {
    this.currentSite = this.listSite.find(item => item.id == siteid);
    if (!this.currentSite) {
      this.currentSite = {
        id: 0
      };
    }
    DataStorage.currentSite = this.currentSite;
    this.loadPage(1);
  }

  gotoJobSiteEdit(jobsiteitem) {
    DataStorage.currentJobSite = jobsiteitem;
    DataStorage.currentCompany = this.currentCompany;
    this._router.navigate(['company/job-site/detail/edit/']);
  }
}

interface JobSite {
  id: number;
  name: string;
  site: number;
  department: number;
}
