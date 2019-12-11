import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import { ZoneLocationService } from '../zone-location.service';
import { JobSiteService } from '../../jobsite.service';

@Component({
  selector: 'app-zone-location-list',
  templateUrl: './zone-location-list.component.html',
  styleUrls: ['./zone-location-list.component.scss']
})
export class ZoneLocationListComponent implements OnInit {
  public zoneLocationList: any[] = [];

  public page = 1;
  public size = 10;
  public totalItems = 0;
  public show = 0;

  listCompany: any = [];
  listDepartment: any = [];
  listSite: any = [];
  listSiteAll: any = [];
  listJobsite: any = [];

  currentCompany: any = {};
  currentDepartment: any = {};
  currentSite: any = {};
  currentJobsite: any = {};

  currentCompanyIdSelect: any = '';
  currentDepartmentIdSelect: any = '';
  currentSiteIdSelect: any = '';
  currentJobsiteIdSelect: any = '';

  private filterByName = '';
  private keySearch = '';

  constructor(
    private _zoneLocationService: ZoneLocationService,
    private _jobsiteService: JobSiteService,
    private _notificationService: NotificationService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentDepartment = DataStorage.getCurrentDepartment();
    this.currentSite = DataStorage.getCurrentSite();
    this.currentJobsite = DataStorage.getCurrentJobSite();
    this.currentCompanyIdSelect = this.currentCompany.id;

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

    if (this.currentJobsite.id > 0) {
      this.currentDepartmentIdSelect = this.currentJobsite.departmentId;
      this.currentSiteIdSelect = this.currentJobsite.siteId;
      this.currentJobsiteIdSelect = this.currentJobsite.id;
    } else {
      this.currentDepartmentIdSelect = 0;
      this.currentSiteIdSelect = 0;
      this.currentJobsiteIdSelect = 0;
    }


    this.getListCompany();
    this.getDataCombobox(true);
    this.loadPage(1);
    this.getListZoneLocation();
  }

  loadPage(page: number) {
    this.page = page;
    this.getCount();
    this.getListZoneLocation();
  }

  Search() {
    this.loadPage(1);
  }

  getListZoneLocation() {
    this._zoneLocationService.getListZoneLocation(this.page, this.size, this.currentCompanyIdSelect, this.currentDepartmentIdSelect,
      this.currentSiteIdSelect, this.currentJobsiteIdSelect, this.keySearch).subscribe(
      result => {
        this.zoneLocationList = result.data.results;
        this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
      }
    );
  }

  getCount() {
    this._zoneLocationService.getCount(this.currentCompanyIdSelect, this.currentDepartmentIdSelect,
      this.currentSiteIdSelect, this.currentJobsiteIdSelect, this.keySearch).subscribe(
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

  getDataCombobox(keepJobSite = false) {
    this.getListDepartment();
    this.getListSite();
    this.getListJobSite(keepJobSite);
  }

  getListDepartment() {
    this._jobsiteService.getListDepartment(this.currentCompanyIdSelect).subscribe(
      result => {
        this.listDepartment = result.data;
        this.currentDepartmentIdSelect = 0;
      }
    );
  }

  getListSite() {
    this._jobsiteService.getListSite(this.currentCompanyIdSelect, this.currentDepartmentIdSelect).subscribe(
      result => {
        this.listSiteAll = result.data;
        this.listSite = result.data;
        this.currentSiteIdSelect = 0;
      }
    );
  }

  getListJobSite(keepJobsite = false) {
    this._jobsiteService.getCount(this.currentCompanyIdSelect, this.currentDepartmentIdSelect,
      this.currentSiteIdSelect, this.filterByName).subscribe(
      result => {
        this.listJobsite = result.data;
        console.log('111122222', this.listJobsite );
        if (!keepJobsite) {
          this.currentJobsiteIdSelect = 0;
        }
      }
    );
  }

  delete(id) {
    this._zoneLocationService.deleteZoneLocation(id)
      .subscribe((res) => {

        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }

        this.getCount();
        this.getListZoneLocation();
        this._notificationService.SuccessNotification('Delete Successfully');
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        });
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

  gotoZoneLocationEdit(zonelocationitem) {
    DataStorage.setCurrentZoneLocation(zonelocationitem);
    // console.log('555555555555555555', zonelocationitem);
    // console.log('222222', this.listJobsite);
    // this.currentJobsite = this.listJobsite.find(item => item.id == zonelocationitem.jobSiteId);

    // DataStorage.setCurrentJobSite( this.currentJobsite);

    // console.log('1111111111', this.currentJobsite);
    // this.currentSite = this.listSite.find(item => item.id == this.currentJobsite.siteId);
    // DataStorage.setCurrentSite( this.currentSite);

    // console.log('22222222222222', this.currentSite);
    // this.currentDepartment = this.listDepartment.find(item => item.id == this.currentSite.departmentId);
    // DataStorage.setCurrentDepartment(this.currentDepartment);
    // console.log('333333333333', this.currentDepartment);
    // this.currentCompany = this.listCompany.find(item => item.id == this.currentDepartment.companyId);
    // DataStorage.setCurrentCompany(this.currentCompany);
    // console.log('4444444444444444', this.currentCompany);

    this._router.navigate(['company/job-site/detail/zone-location/edit/' + zonelocationitem.id]);
  }

  gotoLevel(zonelocationitem) {
    DataStorage.setCurrentZoneLocation(zonelocationitem);
    // this.currentJobsite = this.listJobsite.find(item => item.id == zonelocationitem.jobSiteId);
    // DataStorage.setCurrentJobSite( this.currentJobsite);
    // this.currentSite = this.listSite.find(item => item.id == this.currentJobsite.siteId);
    // DataStorage.setCurrentSite( this.currentSite);
    // this.currentDepartment = this.listDepartment.find(item => item.id == this.currentSite.departmentId);
    // DataStorage.setCurrentDepartment(this.currentDepartment);
    // this.currentCompany = this.listCompany.find(item => item.id == this.currentDepartment.companyId);
    // DataStorage.setCurrentCompany(this.currentCompany);

    this._router.navigate(['company/job-site/detail/level/list/']);
  }

  gotoArea(zonelocationitem) {
    DataStorage.setCurrentZoneLocation(zonelocationitem);
    // this.currentJobsite = this.listJobsite.find(item => item.id == zonelocationitem.jobSiteId);
    // DataStorage.setCurrentJobSite( this.currentJobsite);
    // this.currentSite = this.listSite.find(item => item.id == this.currentJobsite.siteId);
    // DataStorage.setCurrentSite( this.currentSite);
    // this.currentDepartment = this.listDepartment.find(item => item.id == this.currentSite.departmentId);
    // DataStorage.setCurrentDepartment(this.currentDepartment);
    // this.currentCompany = this.listCompany.find(item => item.id == this.currentDepartment.companyId);
    // DataStorage.setCurrentCompany(this.currentCompany);

    this._router.navigate(['company/job-site/detail/area/list/']);
  }

  gotoLocation(zonelocationitem) {
    DataStorage.setCurrentZoneLocation(zonelocationitem);
    // this.currentJobsite = this.listJobsite.find(item => item.id == zonelocationitem.jobSiteId);
    // DataStorage.setCurrentJobSite( this.currentJobsite);
    // this.currentSite = this.listSite.find(item => item.id == this.currentJobsite.siteId);
    // DataStorage.setCurrentSite( this.currentSite);
    // this.currentDepartment = this.listDepartment.find(item => item.id == this.currentSite.departmentId);
    // DataStorage.setCurrentDepartment(this.currentDepartment);
    // this.currentCompany = this.listCompany.find(item => item.id == this.currentDepartment.companyId);
    // DataStorage.setCurrentCompany(this.currentCompany);

    this._router.navigate(['company/job-site/detail/location/list/']);
  }

}
