import { EmployeesService } from '../employees.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../../../libs/notification';
import { DataStorage } from '../../../../../providers/data/data';
import * as $ from 'jquery';
import { BasicService } from '../../../basic/basic.service';
import { SystemConstants } from '../../../../../libs/SystemConstant';
import {IMyDpOptions} from 'mydatepicker';
import { DateService } from '../../../../../providers/date-service';
@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.scss']
})
export class EmployeesCreateComponent implements OnInit {
  employeesForm: FormGroup;
  errorMessage: any;

  currentCompany: any = {};
  currentJobSite: any = {};
  currentEmployee: any = {};
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

  fileToUpload: File;
  baseUrl : string = '';
  iscreate = true;

  constructor(
    private _employeesService: EmployeesService,
    private _basicService: BasicService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder,
    private _router: Router,
    private _dateService: DateService) {

    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();

    if (!this.currentJobSite) {
      this.currentJobSite = {
        id: 0
      };
    }
    this.baseUrl = SystemConstants.BASE_API;

  }

  ngOnInit() {
    this.currentEmployee.status = 1;
    this.currentEmployee.jobsiteId = this.currentJobSite.id;
    this.currentEmployee.deleteFlg = 0;
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

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this._basicService.uploadFile(this.fileToUpload).subscribe(data => {
      this.currentEmployee.photo = data.message;
    }, error => {
      this._notificationService.ErrorNotification('Upload Error. Try again!');
    });
  }

}
