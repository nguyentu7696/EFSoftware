import { Component, OnInit, Input } from '@angular/core';
import { DataStorage } from '../../../../providers/data/data';
import { DepartmentService } from '../department.service';
import { NotificationService } from '../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss'],
  providers: [DepartmentService]
})
export class DepartmentCreateComponent implements OnInit {

  currentDepartment: any = {};
  currentCompany : any = {};
  iscreate: boolean = false;
  errorMessage: any;
  departmentValid: any = {};
  constructor(
    private dataStorage: DataStorage,
    private _departmentService: DepartmentService,
    private _notificationService: NotificationService,
    private _router: Router) {

    this.departmentValid = {
      name: true
    }
    
    if (DataStorage.currentDepartment === undefined && DataStorage.currentDepartment.id === undefined) {
      this.currentDepartment = {
        id: 0
      }
    } else {
      this.currentDepartment = DataStorage.currentDepartment;
    }

    this.currentCompany = DataStorage.currentCompany;
    this.currentDepartment.companyid = this.currentCompany.id;

    if (this.currentCompany === undefined) {
      this.currentCompany = {
        name: 'normal'
      }
    }

    if (this.currentDepartment.id === 0) {
      this.iscreate = true;
    } else {
      this.iscreate = false;
    }
  }

  createDepartment() {

    if(!this.currentDepartment.name) {
      this.departmentValid.name = false;
      return;
    }

    this._departmentService.createDepartment(this.currentDepartment)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/department/list/']);
        }, 2000);
      }
      , error => {
        this._notificationService.ErrorNotification('Create Failure. Try again!');
        this.errorMessage = error;
      });
  }

  updateDepartment() {

    if(!this.currentDepartment.name) {
      this.departmentValid.name = false;
      return;
    }

    this._departmentService.updateDepartment(this.currentDepartment)
      .subscribe((res) => {
          this._notificationService.SuccessNotification('Update Successfully');
          setTimeout(() => {
            this._router.navigate(['/company/department/list/']);
          }, 2000);
        }
      , error => {
        this._notificationService.ErrorNotification('Update Failure. Try again!');
        this.errorMessage = error;
      } )
  }

  deleteDepartment() {
    this._departmentService.deleteDepartment(this.currentDepartment.id)
    .subscribe((res) => {
        if(!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Delete Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/department/list/']);
        }, 2000);
      }
    , error => {
      this._notificationService.ErrorNotification('Delete Failure. Try again!');
      this.errorMessage = error;
    } );
  }

  ngOnInit() {
  }
}
