import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import { NotificationService } from '../../../../../libs/notification';
import { ZoneLocationService } from '../zone-location.service';
import { JobSiteService } from '../../jobsite.service';

@Component({
  selector: 'app-zone-location-create',
  templateUrl: './zone-location-create.component.html',
  styleUrls: ['./zone-location-create.component.scss']
})
export class ZoneLocationCreateComponent implements OnInit {
  zonelocationForm: FormGroup;

  errorMessage: any;

  listCompany: any = [];
  listDepartment: any = [];
  listSite: any = [];
  listSiteAll: any = [];
  listJobSite: any = [];
  listJobSiteAll: any = [];

  currentCompany: any = {};
  currentDepartment: any = {};
  currentSite: any = {};
  currentJobSite: any = {};

  // currentCompanyIdSelect: any ='';
  currentDepartmentIdSelect: any = '';
  currentSiteIdSelect: any = '';
  currentJobSiteIdSelect: any = '';

  zonelocationCurrent: any = {};

  private filterByName = '';

  constructor(
    private _jobsiteService: JobSiteService,
    private _zonelocationService: ZoneLocationService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router
  ) {

    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentDepartment = DataStorage.getCurrentDepartment();
    this.currentSite = DataStorage.getCurrentSite();
    this.currentJobSite = DataStorage.getCurrentJobSite();

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

    if (!this.currentJobSite) {
      this.currentJobSite = {
        id: 0
      };
    }

    if (!this.currentDepartment.id) {
      this.currentDepartment.id = 0;
    }

    if (!this.currentSite.id) {
      this.currentSite.id = 0;
    }

    if (!this.currentJobSite.id) {
      this.currentJobSite.id = 0;
    }

    // this.currentCompanyIdSelect = this.currentCompany.id;
    this.currentDepartmentIdSelect = this.currentDepartment.id;
    this.currentSiteIdSelect = this.currentSite.id;
    this.currentJobSiteIdSelect = this.currentJobSite.id;

    this.zonelocationForm = this._fb.group({
      name: ['', [Validators.required]],
      status: ['1', [Validators.required]],
      levelId: ['0'],
      areaId: ['0'],
      locationId: ['0'],
      departmentId: [this.currentDepartment ? this.currentDepartment.id : '', [Validators.required]],
      siteId: [this.currentSite.id ? this.currentSite.id : '', [Validators.required]],
      jobSiteId: [this.currentJobSiteIdSelect ? this.currentJobSiteIdSelect : '', [Validators.required]]
    });

    this.getDataCombobox();
   }

  ngOnInit() {
  }

  getDataCombobox() {
    this.getListDepartment();
    this.getListSite();
    this.getListJobSite();
  }

  getListDepartment() {
    this._jobsiteService.getListDepartment(this.currentCompany.id).subscribe(
      result => {
        this.listDepartment = result.data;
      }
    );
  }

  getListSite() {
    this._jobsiteService.getListSite(this.currentCompany.id, this.currentDepartment.id).subscribe(
      result => {
        this.listSite = result.data;
      }
    );
  }

  getListJobSite() {
    this._jobsiteService.getCount(this.currentCompany.id, this.currentDepartment.id, this.currentSite.id, this.filterByName).subscribe(
      result => {
        this.listJobSite = result.data;
      }
    );
  }

  onSelectDepartment(departmentid) {
    this.currentDepartment = this.listDepartment.find(item => item.id == departmentid);
    if (!this.currentDepartment) {
      this.currentDepartment = {
        id: 0
      };
    }
    // this.getListSite();
  }

  onSelectSite(siteid) {
    this.currentSite = this.listSite.find(item => item.id == siteid);
    if (!this.currentSite) {
      this.currentSite = {
        id: 0
      };
    }

  }

  create() {
    if (!this.zonelocationForm.valid) {
      return;
    }
    this._zonelocationService.createZoneLocation(this.zonelocationForm.value)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['company/job-site/detail/zone-location']);
        }, 3000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get name() { return this.zonelocationForm.get('name'); }
  get status() { return this.zonelocationForm.get('status'); }
  get levelId() { return this.zonelocationForm.get('levelId'); }
  get areaId() { return this.zonelocationForm.get('areaId'); }
  get locationId() { return this.zonelocationForm.get('locationId'); }
  get departmentId() { return this.zonelocationForm.get('departmentId'); }
  get siteId() { return this.zonelocationForm.get('siteId'); }
  get jobSiteId() { return this.zonelocationForm.get('jobSiteId'); }

}
