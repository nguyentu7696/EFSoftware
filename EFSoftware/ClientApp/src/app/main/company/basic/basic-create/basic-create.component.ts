import { Component, OnInit, Input } from '@angular/core';
import { DataStorage } from '../../../../providers/data/data';
import { BasicService } from '../basic.service';
import { NotificationService } from '../../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemConstants } from '../../../../libs/SystemConstant';
@Component({
  selector: 'app-basic-create',
  templateUrl: './basic-create.component.html',
  styleUrls: ['./basic-create.component.scss'],
  providers: [BasicService]
})
export class BasicCreateComponent implements OnInit {

  currentCompany: any = {};
  iscreate = false;
  errorMessage: any;
  baseUrl = '';
  companyValid: any = {
    name: true,
    picHandphone: true,
    emailAddress: true,
    address: true,
    department: true,
    site: true,
    jobSite: true,
    zone: true,
    level: true,
    area: true,
    location: true
  };
  fileToUpload: File;
  constructor(private dataStorage: DataStorage, private _basicService: BasicService,
    private _notificationService: NotificationService, private _router: Router) {
    this.baseUrl = SystemConstants.BASE_API;

    this.currentCompany = DataStorage.getCurrentCompany();
    if (this.currentCompany == undefined && this.currentCompany.id == undefined) {
      this.currentCompany = {
        id: 0,
        department: 'Division',
        site: 'Site',
        jobSite: 'Job Site',
        zone: 'Zone',
        level: 'Level',
        area: 'Area',
        location: 'Location',
        status: 1,
      };
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

    this._basicService.createCompany(this.currentCompany)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Create Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/basic/list/']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  checkValid(): boolean {
    let isvalid = false;
    this.companyValid = {
      name: this.currentCompany.name ? true : false,
      picHandphone: this.currentCompany.picHandphone ? true : false,
      emailAddress: this.currentCompany.emailAddress ? true : false,
      address: this.currentCompany.address ? true : false,
      department: this.currentCompany.department ? true : false,
      site: this.currentCompany.site ? true : false,
      jobSite: this.currentCompany.jobSite ? true : false,
      zone: this.currentCompany.zone ? true : false,
      level: this.currentCompany.level ? true : false,
      area: this.currentCompany.area ? true : false,
      location: this.currentCompany.location ? true : false,
    };
    if (this.companyValid.name && this.companyValid.picHandphone && this.companyValid.emailAddress && this.companyValid.address
      && this.companyValid.department && this.companyValid.site && this.companyValid.jobSite && this.companyValid.zone
      && this.companyValid.level && this.companyValid.area && this.companyValid.location) {
      isvalid = true;
    }
    return isvalid;
  }

  updateCompany() {

    if (!this.checkValid()) {
      return;
    }

    this._basicService.updateCompany(this.currentCompany)
      .subscribe((res) => {

        this._notificationService.SuccessNotification('Update Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/basic/list/']);
        }, 2000);
      }
        , error => {
          this._notificationService.ErrorNotification('Update Failure. Try again!');
          this.errorMessage = error;
        });
  }

  deleteCompany() {
    this._basicService.deleteCompany(this.currentCompany.id)
      .subscribe((res) => {

        this._notificationService.SuccessNotification('Delete Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/basic/list/']);
        }, 2000);
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
          this.errorMessage = error;
        });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this._basicService.uploadFile(this.fileToUpload).subscribe(data => {
      this.currentCompany.logo = data.message;
    }, error => {
      this._notificationService.ErrorNotification('Upload Error. Try again!');
    });
  }

  ngOnInit() {
  }
}
