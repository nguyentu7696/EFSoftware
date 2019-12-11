import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../../../../providers/data/data';
import { EmployeeService } from '../employee.service';
import { NotificationService } from '../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemConstants } from "../../../../libs/SystemConstant";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeCreateComponent implements OnInit {

  currentCompany: any = {};
  iscreate: boolean = false;
  errorMessage: any;
  baseUrl : string = '';
  companyValid: any = {
    name: true,
    userId: true,
    nric: true,
    commencementDate:true,
  }
  fileToUpload: File;
  constructor(private dataStorage: DataStorage, private _employeeService: EmployeeService,
    private _notificationService: NotificationService, private _router: Router) {
    this.baseUrl = SystemConstants.BASE_API;
    if (DataStorage.currentCompany == undefined && DataStorage.currentCompany.id == undefined) {
      this.currentCompany = {
        id: 0,
        gender: 0,
        nationality: 0,
        race: 0,
        transportAgent: 0,
        emergencyRecallList: 0,
        status: 1,
      }
    } else {
      this.currentCompany = DataStorage.currentCompany;
    }
    if (this.currentCompany.id == 0) {
      this.iscreate = true;
    } else {
      this.iscreate = false;
    }
  }

  createCompany() {

    if (!this.checkValid()) {
      return;
    }

    this._employeeService.createCompany(this.currentCompany)
      .subscribe((res) => {
        this._notificationService.SuccessNotification("Create Successfully");
        setTimeout(() => {
          this._router.navigate(['/companyemployee/list/']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification("Create Failure. Try again!");
          this.errorMessage = error;
        });
  }

  checkValid(): boolean {
    var isvalid = false;
    this.companyValid = {
      name: this.currentCompany.name ? true : false,
      userId: this.currentCompany.userId ? true : false,
      nric: this.currentCompany.nric ? true : false,
      commencementDate: this.currentCompany.commencementDate ? true : false,
    }
    if (this.companyValid.name && this.companyValid.picHandphone && this.companyValid.emailAddress && this.companyValid.address) {
      isvalid = true;
    }
    return isvalid;
  }

  updateCompany() {

    if (!this.checkValid()) {
      return;
    }

    this._employeeService.updateCompany(this.currentCompany)
      .subscribe((res) => {

        this._notificationService.SuccessNotification("Update Successfully");
        setTimeout(() => {
          this._router.navigate(['/company/employee/list/']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification("Update Failure. Try again!");
          this.errorMessage = error;
        })
  }

  deleteCompany() {
    this._employeeService.deleteCompany(this.currentCompany.id)
      .subscribe((res) => {

        this._notificationService.SuccessNotification("Delete Successfully");
        setTimeout(() => {
          this._router.navigate(['/company/employee/list/']);
        }, 2000);
      }

        , error => {
          this._notificationService.ErrorNotification("Delete Failure. Try again!");
          this.errorMessage = error;
        })
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this._employeeService.uploadFile(this.fileToUpload).subscribe(data => {
      
      this.currentCompany.logo = data.message;
    }, error => {
      this._notificationService.ErrorNotification("Upload Error. Try again!");
    });
  }

  ngOnInit() {
  }

}
