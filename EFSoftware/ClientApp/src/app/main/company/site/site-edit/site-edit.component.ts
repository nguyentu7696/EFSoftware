import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../../../../providers/data/data';
import { SiteService } from '../site.service';
import { NotificationService } from '../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site-edit',
  templateUrl: './site-edit.component.html',
  styleUrls: ['./site-edit.component.scss'],
  providers: [SiteService]
})
export class SiteEditComponent implements OnInit {
  public listCompany: any;
  listDepartment: any;
  currentSite: any = {};
  currentDepartment: any = {};
  currentCompany: any = {};
  iscreate: boolean = false;
  errorMessage: any;
  siteForm: FormGroup;
  siteId: number = 0;

  constructor(
    private _siteService: SiteService,
    private _avRoute: ActivatedRoute,
    private _notificationService: NotificationService,
    private _fb: FormBuilder,
    private _router: Router) {
    if (this._avRoute.snapshot.params['id']) {
      this.siteId = this._avRoute.snapshot.params['id'];
    }
    this.currentDepartment = DataStorage.getCurrentDepartment();
    if (this.currentDepartment == undefined || this.currentDepartment.id == undefined) {
      this.currentDepartment = {
        id: 0
      };
    }
    this.currentCompany = DataStorage.getCurrentCompany();
    this.getListDepartment(this.currentCompany.id);
    this.getListCompany();

    this.siteForm = this._fb.group({
      name: ['', [Validators.required]],
      companyId: [this.currentCompany.id, [Validators.required]],
      departmentId: [this.currentDepartment.id, [Validators.required]]
    });

  }

  ngOnInit() {
    this.getListCompany();
    if (this.siteId > 0) {
      this._siteService.getSiteById(this.siteId)
        .subscribe(res => {
          this.siteForm.patchValue({
            name: res.data.name,
            companyId: res.data.companyId,
            departmentId: res.data.departmentId,
          });
        }
          , error => this.errorMessage = error);
    }
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

  update() {
    if (!this.siteForm.valid) {
      return;
    }
    var objectForm = this.siteForm.value;
    objectForm.id = this.siteId;
    this._siteService.updateSite(objectForm)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Update Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/site/list/']);
        }, 3000);
      }
        , error => {
          this._notificationService.ErrorNotification('Update Failure. Try again!');
          this.errorMessage = error;
        });
  }

  delete() {
    this._siteService.deleteSite(this.siteId)
      .subscribe((res) => {
        if(!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Delete Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/site/list/']);
        }, 3000);
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
