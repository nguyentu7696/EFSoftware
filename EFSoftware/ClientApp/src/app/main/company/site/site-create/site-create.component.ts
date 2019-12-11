import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../../../../providers/data/data';
import { SiteService } from '../site.service';
import { NotificationService } from '../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.scss']
})
export class SiteCreateComponent implements OnInit {
  public listCompany: any;
  listDepartment: any;
  currentSite: any = {};
  currentDepartment: any = {};
  currentCompany: any = {};
  iscreate: boolean = false;
  errorMessage: any;
  siteForm: FormGroup;

  constructor(
    private _siteService: SiteService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder,
    private _router: Router) {
    this.currentDepartment = DataStorage.getCurrentDepartment();
    if (this.currentDepartment == undefined || this.currentDepartment.id == undefined) {
      this.currentDepartment = {
        id: 0
      };
    }
    this.currentCompany = DataStorage.currentCompany;
    this.getListDepartment(this.currentCompany.id);
    this.getListCompany();

    this.siteForm = this._fb.group({
      name: ['', [Validators.required]],
      companyId: [this.currentCompany.id, [Validators.required]],
      departmentId: [this.currentDepartment.id, [Validators.required]]
    });
  }

  ngOnInit() {

  }


  getListCompany() {
    this._siteService.getListCompany()
      .subscribe((res) => {
        this.listCompany = res.data;
      }
        , error => {
          this.errorMessage = error;
        });
  }

  getListDepartment(companyId) {
    this._siteService.getListDepartment(companyId)
      .subscribe((res) => {
        this.listDepartment = res.data;
        if (!this.currentDepartment.id && this.listDepartment.length > 0) {
          this.currentDepartment = this.listDepartment[0];
          this.siteForm.patchValue({
            departmentId: this.currentDepartment.id
          });
        }
      }
        , error => {
          this.errorMessage = error;
        });
  }

  onSelect(value) {
    this._siteService.getListDepartment(value)
      .subscribe((res) => {
        this.listDepartment = res.data;
        if (this.listDepartment.length > 0) {
          this.currentDepartment = this.listDepartment[0];
          this.siteForm.patchValue({
            departmentId: this.currentDepartment.id
          });
        } else {
          this.siteForm.patchValue({
            departmentId: ''
          });
        }
      }
        , error => {
          this.errorMessage = error;
        });
  }

  createSite() {
    if (!this.siteForm.valid) {
      return;
    }
    this._siteService.createSite(this.siteForm.value)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/site/list/']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  updateSite() {
    this._siteService.updateSite(this.currentSite)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Update Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/site/list/']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Update Failure. Try again!');
          this.errorMessage = error;
        });
  }

  deleteSite() {
    this._siteService.deleteSite(this.currentSite.id)
      .subscribe((res) => {
        if(!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Delete Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/site/list/']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
          this.errorMessage = error;
        });
  }

  get name() { return this.siteForm.get('name'); }
  get companyId() { return this.siteForm.get('companyId'); }
  get departmentId() { return this.siteForm.get('departmentId'); }
}
