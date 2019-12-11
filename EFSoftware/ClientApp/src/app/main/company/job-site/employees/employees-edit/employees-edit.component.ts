import { EmployeesService } from '../employees.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../../../libs/notification';
import { DataStorage } from '../../../../../providers/data/data';
import { BasicService } from '../../../basic/basic.service';
import { SystemConstants } from "../../../../../libs/SystemConstant";
import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../../../providers/date-service';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.scss']
})
export class EmployeesEditComponent implements OnInit {
  employeesForm: FormGroup;
  errorMessage: any;

  currentCompany: any = {};
  currentJobSite: any = {};
  currentEmployee: any = {};
  fileToUpload: File;
  baseUrl: string = '';
  currentEmployeeId: number = 0;

  dateResigned: Date = new Date();

  employeeValid: any = {
    name: true,
    userId: true,
    nric: true,
    dateJoined: true,
    gender: true,
    nationality: true
  };

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  currentEmployeeDate: any = {};

  constructor(
    private _avRoute: ActivatedRoute,
    private _employeesService: EmployeesService,
    private _notificationService: NotificationService,
    private _basicService: BasicService,
    private _router: Router,
    private _dateService: DateService) {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    if (this._avRoute.snapshot.params['id']) {
      this.currentEmployeeId = this._avRoute.snapshot.params['id'];
    }
    this.baseUrl = SystemConstants.BASE_API;
  }

  ngOnInit() {
    this._employeesService.getEmployeesById(this.currentEmployeeId)
      .subscribe(res => {
        this.currentEmployee = res.data;

        if (res.data.dateJoined != undefined) {
          this.currentEmployeeDate.dateJoined = this._dateService.strToObjDDMMYYYY(this.currentEmployee.dateJoined);
        }
        if (res.data.dateMedicalDue != undefined) {
          this.currentEmployeeDate.dateMedicalDue = this._dateService.strToObjDDMMYYYY(this.currentEmployee.dateMedicalDue);
        }
        if (res.data.dateResigned != undefined) {
          this.currentEmployeeDate.dateResigned = this._dateService.strToObjDDMMYYYY(this.currentEmployee.dateResigned);
        }
        if (res.data.dateWorkPermitExpiry != undefined) {
          this.currentEmployeeDate.dateWorkPermitExpiry = this._dateService.strToObjDDMMYYYY(this.currentEmployee.dateWorkPermitExpiry);
        }
        if (res.data.dateWorkPermitStart != undefined) {
          this.currentEmployeeDate.dateWorkPermitStart = this._dateService.strToObjDDMMYYYY(this.currentEmployee.dateWorkPermitStart);
        }
        if (res.data.dob != undefined) {
          this.currentEmployeeDate.dob = this._dateService.strToObjDDMMYYYY(this.currentEmployee.dob);
        }
        if (res.data.ojtExpiryDate != undefined) {
          this.currentEmployeeDate.ojtExpiryDate = this._dateService.strToObjDDMMYYYY(this.currentEmployee.ojtExpiryDate);
        }
        if (res.data.plrdLicenceExpiryDate != undefined) {
          this.currentEmployeeDate.plrdLicenceExpiryDate = this._dateService.strToObjDDMMYYYY(this.currentEmployee.plrdLicenceExpiryDate);
        }

        if (res.data.workPermitDate != undefined) {
          this.currentEmployeeDate.dateWorkPermitExpiry = this._dateService.strToObjDDMMYYYY(this.currentEmployee.dateWorkPermitExpiry);
        }

      }
        , error => this.errorMessage = error);
  }

  showHidePersonal() {
    $('.info-personal').slideToggle('slow');
  }

  showHideLoginCredential() {
    $('.login-credential').slideToggle('slow');
  }

  showHideIdentity() {
    $('.div-indentity').slideToggle('slow');
  }

  showHideWorkingInformation() {
    $('.working-information').slideToggle('slow');
  }

  showHideWorkPermit() {
    $('.work-permit').slideToggle('slow');
  }

  createEmployee() {

    var haveError = false;
    if (!this.currentEmployee.name) {
      haveError = true;
      this.employeeValid.name = false;
    }
    if (!this.currentEmployee.userId) {
      haveError = true;
      this.employeeValid.userId = false;
    }
    if (!this.currentEmployee.nric) {
      haveError = true;
      this.employeeValid.nric = false;
    }
    if (!this.currentEmployee.dateJoined) {
      haveError = true;
      this.employeeValid.dateJoined = false;
    }

    if (!this.currentEmployee.gender) {
      haveError = true;
      this.employeeValid.gender = false;
    }
    if (!this.currentEmployee.nationality) {
      haveError = true;
      this.employeeValid.nationality = false;
    }

    if (haveError) {
      return;
    }

    this._employeesService.createEmployees(this.currentEmployee)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['company/job-site/detail/employee']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
        });
  }

  updateEmployee() {
    var haveError = false;
    if (!this.currentEmployee.name) {
      haveError = true;
      this.employeeValid.name = false;
    }
    if (!this.currentEmployee.userId) {
      haveError = true;
      this.employeeValid.userId = false;
    }
    if (!this.currentEmployee.nric) {
      haveError = true;
      this.employeeValid.nric = false;
    }
    if (!this.currentEmployee.dateJoined) {
      haveError = true;
      this.employeeValid.dateJoined = false;
    }
    if (!this.currentEmployee.gender) {
      haveError = true;
      this.employeeValid.gender = false;
    }
    if (!this.currentEmployee.nationality) {
      haveError = true;
      this.employeeValid.nationality = false;
    }

    if (haveError) {
      return;
    }

    this._employeesService.updateEmployees(this.currentEmployee)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Update Successfully');
        setTimeout(() => {
          this._router.navigate(['company/job-site/detail/employee']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Update Failure. Try again!');
        });
  }

  deleteEmployee() {
    this._employeesService.deleteEmployees(this.currentEmployee.id)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Delete Successfully');
        setTimeout(() => {
          this._router.navigate(['company/job-site/detail/employee']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
        });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this._basicService.uploadFile(this.fileToUpload).subscribe(data => {
      this.currentEmployee.photo = data.message;
    }, error => {
      this._notificationService.ErrorNotification('Upload Error. Try again!');
    });
  }
}
