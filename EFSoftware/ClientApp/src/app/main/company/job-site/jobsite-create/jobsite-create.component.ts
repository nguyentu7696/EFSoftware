import { Component, OnInit } from '@angular/core';
import { JobSiteService } from '../jobsite.service';
import { NotificationService } from '../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../../site/site.service';
import { DataStorage } from '../../../../providers/data/data';
@Component({
  selector: 'app-jobsite-create',
  templateUrl: './jobsite-create.component.html',
  styleUrls: ['./jobsite-create.component.scss']
})
export class JobSiteCreateComponent implements OnInit {
  jobsiteForm: FormGroup;
  errorMessage: any;

  listCompany: any = [];
  listDepartment: any = [];
  listSite: any = [];
  listSiteAll: any = [];

  currentCompany: any = {};
  currentDepartment: any = {};
  currentSite: any = {};

  currentCompanyIdSelect: any ='';
  currentDepartmentIdSelect: any = '';
  currentSiteIdSelect: any = '';

  constructor(private _siteService: SiteService,
    private _jobsiteService: JobSiteService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router) {

    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentDepartment = DataStorage.getCurrentDepartment();
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
    this.currentDepartmentIdSelect = this.currentDepartment.id;
    this.currentSiteIdSelect = this.currentSite.id;

    this.jobsiteForm = this._fb.group({
      name: ['', [Validators.required]],
      companyId: [this.currentCompany? this.currentCompany.id: '', [Validators.required]],
      departmentId: [this.currentDepartment? this.currentDepartment.id: '', [Validators.required]],
      siteId: [this.currentSite.id? this.currentSite.id: '', [Validators.required]]
    });

    this.getListCompany();
    this.getDataCombobox();

  }

  ngOnInit() {
    
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
      }
    )
  }

  getDataCombobox() {
    this.getListDepartment();
    this.getListSite();
  }

  getListSite() {
    this._jobsiteService.getListSite(this.currentCompany.id, this.currentDepartment.id).subscribe(
      result => {
        this.listSite = result.data;
        if(this.jobsiteForm.value.departmentId != 0) {
          if (this.listSite.length > 0) {
            this.jobsiteForm.patchValue({
              siteId: this.listSite[0].id
            });
          }
        }
      }
    )
  }

  onSelectCompany(companyid) {
    DataStorage.currentCompany = this.listCompany.find(item => item.id == companyid);
    this.currentCompany = DataStorage.currentCompany;
    this.getDataCombobox();
  }

  onSelectDepartment(departmentid) {
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

  create() {
    if (!this.jobsiteForm.valid) {
      return;
    }
    this._jobsiteService.createJobSite(this.jobsiteForm.value)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['company/job-site/list']);
        }, 3000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get name() { return this.jobsiteForm.get('name'); }
  get companyId() { return this.jobsiteForm.get('companyId'); }
  get departmentId() { return this.jobsiteForm.get('departmentId'); }
  get siteId() { return this.jobsiteForm.get('siteId'); }
}
