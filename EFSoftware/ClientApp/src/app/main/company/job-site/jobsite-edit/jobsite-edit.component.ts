import { Component, OnInit } from '@angular/core';
import { JobSiteService } from '../jobsite.service';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../../site/site.service';
import { DataStorage } from '../../../../providers/data/data';
@Component({
  selector: 'app-jobsite-edit',
  templateUrl: './jobsite-edit.component.html',
  styleUrls: ['./jobsite-edit.component.scss']
})
export class JobSiteEditComponent implements OnInit {

  siteList: Object[];
  jobsiteForm: FormGroup;
  errorMessage: any;
  jobsiteId = 0;

  listCompany: any = [];
  listDepartment: any = [];
  listSite: any = [];
  listSiteAll: any = [];

  currentCompany: any = {};
  currentDepartment: any = {};
  currentSite: any = {};

  currentJobSite: any = {};

  currentCompanyIdSelect: any = '';
  currentDepartmentIdSelect: any = '';
  currentSiteIdSelect: any = '';

  constructor(
    private _siteService: SiteService,
    private _avRoute: ActivatedRoute,
    private _jobsiteService: JobSiteService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router) {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
  }

  ngOnInit() {
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

    this.jobsiteForm = this._fb.group({
      name: ['', [Validators.required]],
      companyId: ['', [Validators.required]],
      departmentId: ['', [Validators.required]],
      siteId: ['', [Validators.required]]
    });

    this.jobsiteForm.patchValue({
      name: this.currentJobSite.name,
      companyId: this.currentJobSite.companyId,
      departmentId: this.currentJobSite.departmentId,
      siteId: this.currentJobSite.siteId,
      id: this.currentJobSite.id,
    });
    this.currentCompanyIdSelect = this.currentCompany.id;
    this.currentDepartmentIdSelect = this.currentJobSite.departmentId;
    this.currentSiteIdSelect = this.currentJobSite.siteId;

    this.getListCompany();
    this.getDataCombobox();
  }

  getListCompany() {
    this._jobsiteService.getListCompany().subscribe(
      result => {
        this.listCompany = result.data;
      }
    )
  }

  getListDepartment() {
    this._jobsiteService.getListDepartment(this.currentCompany.id).subscribe(
      result => {
        this.listDepartment = result.data;
        if (this.currentDepartmentIdSelect > 0) {
          var department = this.listDepartment.find(x => x.id == this.currentDepartmentIdSelect);
          if (department != null) {
            this.currentDepartment = department;

          }
        }
      }
    )
  }

  getDataCombobox() {
    this.getListDepartment();
    this.getListSite();
  }

  getListSite() {
    this._jobsiteService.getListSite(this.currentCompany.id, this.currentDepartmentIdSelect).subscribe(
      result => {
        this.listSite = result.data;
        if (this.currentSiteIdSelect > 0) {
          var site = this.listSite.find(x => x.id == this.currentSiteIdSelect);
          if (site != null) {
            this.currentDepartment = site;
          }
        }
      }
    )
  }

  onSelectCompany(companyid) {
    if (!companyid) {
      return;
    }
    if (this.listCompany.length == 0) {
      return;
    }
    DataStorage.currentCompany = this.listCompany.find(item => item.id == companyid);
    this.currentCompany = DataStorage.currentCompany;
    this.getDataCombobox();
  }

  onSelectDepartment(departmentid) {
    this.currentDepartmentIdSelect = departmentid;
    this.currentDepartment = this.listDepartment.find(item => item.id == departmentid);
    if (!this.currentDepartment) {
      this.currentDepartment = {
        id: 0
      };
    }
    this.getListSite();
  }

  onSelectSite(siteid) {
    this.currentSite = this.listSite.find(item => item.id == siteid);
    if (!this.currentSite) {
      this.currentSite = {
        id: 0
      };
    }
  }

  update() {

    if (!this.jobsiteForm.valid) {
      return;
    }

    let objectForm = this.jobsiteForm.value;
    this.currentJobSite.name = objectForm.name;
    this.currentJobSite.companyId = objectForm.companyId;
    this.currentJobSite.departmentId = objectForm.departmentId;
    this.currentJobSite.siteId = objectForm.siteId;

    this._jobsiteService.updateJobSite(this.currentJobSite)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Update Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/list/']);
        }, 3000);
      }
        , error => {
          this._notificationService.ErrorNotification('Update Failure. Try again!');
          this.errorMessage = error;
        });
  }

  delete() {
    this._jobsiteService.deleteJobSite(this.jobsiteId)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Delete Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/list/']);
        }, 3000);
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get name() { return this.jobsiteForm.get('name'); }
  get companyId() { return this.jobsiteForm.get('companyId'); }
  get departmentId() { return this.jobsiteForm.get('departmentId'); }
  get siteId() { return this.jobsiteForm.get('siteId'); }
}
