import { Component, OnInit, ViewChild } from '@angular/core';
import { RosterService } from '../roster.service';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PublicHolidayService } from '../../../public-holiday/public-holiday.service';
@Component({
  selector: 'app-roster-duplicate',
  templateUrl: './roster-duplicate.component.html',
  styleUrls: ['./roster-duplicate.component.scss']
})
export class RosterDuplicateComponent implements OnInit {

  rosterForm: FormGroup;
  errorMessage: any;

  currentCompany: any = {};
  currentJobSite: any = {};
  currentZoneLocation: any = {};
  currentEmployeeId: number = 0;

  //defind data
  trData: any = [];

  settings = {
		bigBanner: false,
		timePicker: false,
		format: 'MMM yyyy',
		defaultOpen: false
  };

  dateStart: Date = new Date();
  dateEnd: Date = new Date();
  toStartDate: Date = new Date();
  toEndDate: Date = new Date();

  listShiftCode: any = [];
  listAttendence: any = [];
  listOTSettingCode: any = [];
  listTypeCode: any = [
    { name: "--" , id: 0 },
    { name: "Planned OT" , id: 1 },
    { name: "Vaccination" , id: 2 },
    { name: "Training" , id: 3 },
  ];
  public entity: any;

  // defind model for Update Popup
  public modelUpdate: any;

  listPublicHoliday: any = [];

  constructor(
    private _avRoute: ActivatedRoute,
    private _rosterService: RosterService,
    private _notificationService: NotificationService,
    private _publicHolidayService: PublicHolidayService,
    private _fb: FormBuilder, private _router: Router) {
      if (this._avRoute.snapshot.params['id']) {
        this.currentEmployeeId = this._avRoute.snapshot.params['id'];
      }
  }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentZoneLocation = DataStorage.currentZoneLocation;

    this.rosterForm = this._fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      zoneLocationId: this.currentZoneLocation.id,
    });
    this.getData();
  }

  async getData() {
    await this.getListPublicHoliday();
    this.processData();
  }


  processData(){
    this.dateStart.setMonth(this.dateStart.getMonth());
    this.toStartDate.setMonth(this.toStartDate.getMonth());

    this.getRosterForMonth();
    this.getListShiftCode();
    this.getListAttendenceCode();
    this.getListOTSettingCode();

    this.entity = {};
    this.entity.ShiftCode = 0;
    this.entity.TypeCode = 0;
    this.entity.Attendence = 0;
  }

  changeDateStartSelect(event) {
    var startDate = new Date(event);
    var startMonth = startDate.getMonth();
    var endMonth = this.dateEnd.getMonth();
    var startYear = startDate.getFullYear();
    var endYear = this.dateEnd.getFullYear();

    this.dateStart = new Date(event);

    if(endYear - startYear == 0){
      if(endMonth - startMonth >= 0 && endMonth - startMonth < 12){
        this.getRosterForMonth();
      }else{
        this._notificationService.ErrorNotification('Please select the maximum period of 12 months and the minimum of 1 month');
      }
    }else if(endYear - startYear == 1){
      if(endMonth - startMonth < 0){
        this.getRosterForMonth();
      }else{
        this._notificationService.ErrorNotification('Please select the maximum period of 12 months and the minimum of 1 month');
      }
    }else{
      this._notificationService.ErrorNotification('Please select the maximum period of 12 months and the minimum of 1 month');
    }
  }

  changeDateEndSelect(event) {
    var endDate = new Date(event);
    var startMonth = this.dateStart.getMonth();
    var endMonth = endDate.getMonth();
    var startYear = this.dateStart.getFullYear();
    var endYear = endDate.getFullYear();

    this.dateEnd = new Date(event);

    if(endYear - startYear == 0){
      if(endMonth - startMonth >= 0 && endMonth - startMonth < 12){
        this.getRosterForMonth();
      }else{
        this._notificationService.ErrorNotification('Please select the maximum period of 12 months and the minimum of 1 month');
      }
    }else if(endYear - startYear == 1){
      if(endMonth - startMonth < 0){
        this.getRosterForMonth();
      }else{
        this._notificationService.ErrorNotification('Please select the maximum period of 12 months and the minimum of 1 month');
      }
    }else{
      this._notificationService.ErrorNotification('Please select the maximum period of 12 months and the minimum of 1 month');
    }
  }

  changeToStartDateSelect(event){
    this.toStartDate = new Date(event);
  }

  changeToEndDateSelect(event){
    this.toEndDate = new Date(event);
  }

  getRosterForMonth()
  {
    var startDate = moment(this.dateStart).format('YYYY-MM-DD');
    var endDate = moment(this.dateEnd).format('YYYY-MM-DD');
    this._rosterService.getRosterByForMonth(startDate, endDate, this.currentEmployeeId, this.currentCompany.id, this.currentJobSite.id).subscribe(result => {
      this.trData = result.data;
    });
  }

  getListShiftCode(){
    var jobsiteId = this.currentJobSite.id;
    this._rosterService.getListShiftCode(jobsiteId).subscribe(result => {
      this.listShiftCode = result.data;
    });
  }

  getListAttendenceCode(){
    var companyid = this.currentCompany.id;
    this._rosterService.getListAttendenceCode(companyid).subscribe(result => {
      this.listAttendence = result.data;
    });
  }

  getListOTSettingCode(){
    var companyid = this.currentCompany.id;
    var jobsiteId = this.currentJobSite.id;
    this._rosterService.getListOTSettingCode(companyid, jobsiteId).subscribe(result => {
      this.listOTSettingCode = result.data;
    });
  }

  DuplicateRoster() {
    var startDate = moment(this.dateStart).format('YYYY-MM-DD');
    var endDate = moment(this.dateEnd).format('YYYY-MM-DD');
    var toStartDate = moment(this.toStartDate).format('YYYY-MM-DD');
    var toEndDate = moment(this.toEndDate).format('YYYY-MM-DD');

    var duplicateModel = {
      "StartDate": startDate,
      "EndDate": endDate,
      "ToStartDate": toStartDate,
      "ToEndDate": toEndDate,
      "EmployeeId": this.currentEmployeeId
    }

    this._rosterService.DuplicateRoster(duplicateModel).subscribe((response) => {
      this._notificationService.SuccessNotification('Save Successfully');
      this._router.navigate(['company/job-site/detail/roster/list/', this.currentEmployeeId]);
    }, error => {
        this._notificationService.ErrorNotification('Save Failure. Try again!');
        this.errorMessage = error;
      });
  }

  checkPublicHoliday(dateCheck) {
    var isPublicHoliday = false;
    this.listPublicHoliday.forEach(item => {
    });
    return isPublicHoliday;
  }

  async getListPublicHoliday() {
    return new Promise(resolve => {
      this._publicHolidayService.getCount('', '', this.currentCompany.id, '').subscribe(result => {
        this.listPublicHoliday = result.data;
        resolve('done');
      });
    });
  }

}
