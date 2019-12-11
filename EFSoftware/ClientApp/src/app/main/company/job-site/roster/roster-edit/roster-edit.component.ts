import { Component, OnInit } from '@angular/core';
import { RosterService } from '../roster.service';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';

@Component({
  selector: 'app-roster-edit',
  templateUrl: './roster-edit.component.html',
  styleUrls: ['./roster-edit.component.scss']
})
export class RosterEditComponent implements OnInit {
  currentCompany: any = {};
  currentJobSite: any = {};
  currentZoneLocation: any = {};
  currentEmployeeId: number = 0;
  errorMessage: any;

  settings = {
		bigBanner: false,
		timePicker: false,
		format: 'dd MMM yyyy',
		defaultOpen: false
  };

  settingsHour = {
		bigBanner: false,
		timePicker: false,
		format: 'MMM yyyy HH:mm A',
		defaultOpen: false
  };

  public entity: any;
  rosterDate: Date = new Date();
  startTime: Date = new Date();
  endTime: Date = new Date();

  listShiftCode: any = [];
  listAttendence: any = [];
  listOTSettingCode: any = [];
  EmployeeInfo: any = {};
  listTypeCode: any = [
    { name: "--" , id: 0 },
    { name: "Planned OT" , id: 1 },
    { name: "Vaccination" , id: 2 },
    { name: "Training" , id: 3 },
  ];

  constructor(
    private _avRoute: ActivatedRoute,
    private _rosterService: RosterService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router) { 
    if (this._avRoute.snapshot.params['id']) {
      this.currentEmployeeId = this._avRoute.snapshot.params['id'];
    }
  }

  ngOnInit() {
    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentZoneLocation = DataStorage.currentZoneLocation;
    
    this.getListShiftCode();
    this.getListAttendenceCode();
    this.getListOTSettingCode();
    this.getEmployeeInfoByEmployeeId();

    this.entity = {};
    this.entity.Id = 0;
    this.entity.EmployeeId = this.currentEmployeeId;
    this.entity.RosterDate = "";
    this.entity.TypeCode = 0;
    this.entity.StartTime = "";
    this.entity.EndTime = "";
    this.entity.ShiftCode = 0;
    this.entity.AttendanceCode = 0;
    this.entity.OTCode = "";
    this.entity.Remark = "";
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

  getEmployeeInfoByEmployeeId(){
    this._rosterService.getEmployeeById(this.currentEmployeeId).subscribe(result => {
      this.EmployeeInfo = result.data;
    });
  }

  changeDateSelect(event) {
    this.rosterDate = new Date(event);

    var date = moment(this.rosterDate).format('YYYY-MM-DD');
    //re-bind data
    this._rosterService.GetDetailRoster(this.currentEmployeeId, date).subscribe(result => {
      if(result.data){
        this.entity = result.data;
        this.entity.Id = result.data.id;
        this.entity.TypeCode = result.data.type;
        this.entity.ShiftCode = result.data.shiftId;
        this.entity.AttendanceCode = result.data.attendanceId;
        this.entity.OTCode = result.data.otCodeId;
        this.entity.Remark = result.data.remarks;
  
        if(result.data.startTime){
          this.startTime = new Date(result.data.startTime);
        }
        if(result.data.endTime){
          this.endTime = new Date(result.data.endTime);
        }
      }else{
        this._notificationService.ErrorNotification('Not Find match data');
        //reset data
        this.entity.Id = 0;
        this.entity.EmployeeId = this.currentEmployeeId;
        this.entity.RosterDate = "";
        this.entity.TypeCode = 0;
        this.entity.StartTime = "";
        this.entity.EndTime = "";
        this.entity.ShiftCode = 0;
        this.entity.AttendanceCode = 0;
        this.entity.OTCode = "";
        this.entity.Remark = "";
      }
    });
  }

  changeDateStartSelect(event){
    this.startTime = new Date(event);
  }

  changeDateEndSelect(event){
    this.endTime = new Date(event);
  }

  SaveUpdate(){
    this.entity.RosterDate = moment(this.rosterDate).format('YYYY-MM-DD');
    this.entity.StartTime = moment(this.startTime).format('YYYY-MM-DD HH:mm');
    this.entity.EndTime = moment(this.endTime).format('YYYY-MM-DD HH:mm');

    var model = {
      "Id": this.entity.Id,
      "EmployeeId": this.currentEmployeeId,
      "Date": this.entity.RosterDate,
      "OtCodeId": this.entity.OTCode,
      "Remarks": this.entity.Remark,
      "AttendanceId": this.entity.AttendanceCode,
      "ShiftId": this.entity.ShiftCode,
      "StartTime": this.entity.StartTime,
      "EndTime": this.entity.EndTime,
      "Type": this.entity.TypeCode
    };

    this._rosterService.updateRoster(model).subscribe((response) => {
      this._notificationService.SuccessNotification('Save Successfully');
    }, error => {
        this._notificationService.ErrorNotification('Save Failure. Try again!');
        this.errorMessage = error;
      });
  }

  CancelUpdate(){
    this._router.navigate(['company/job-site/detail/roster/list/', this.currentEmployeeId]);
  }

}
