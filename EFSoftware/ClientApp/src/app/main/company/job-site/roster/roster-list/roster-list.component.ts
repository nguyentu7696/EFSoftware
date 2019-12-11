import { Component, OnInit, ViewChild } from '@angular/core';
import { RosterService } from '../roster.service';
import { NotificationService } from '../../../../../libs/notification';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PublicHolidayService } from '../../../public-holiday/public-holiday.service';
import { EmployeesService } from '../../employees/employees.service';

@Component({
  selector: 'app-roster-list',
  templateUrl: './roster-list.component.html',
  styleUrls: ['./roster-list.component.scss']
})
export class RosterListComponent implements OnInit {
  @ViewChild('modalUpdate') modalUpdate: ModalDirective;

  rosterForm: FormGroup;
  errorMessage: any;

  currentCompany: any = {};
  currentJobSite: any = {};
  currentZoneLocation: any = {};
  currentEmployeeId: number = 0;
  currentEmployee: any = {};

  //defind data
  trData: any = [];
  backupData: any = [];

  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'MMM yyyy',
    defaultOpen: false
  };

  dateStart: Date = new Date();
  dateEnd: Date = new Date();
  listShiftCode: any = [];
  listAttendence: any = [];
  listOTSettingCode: any = [];
  listOTCodeValue: any = [];
  listDataChanged: any = [];
  listPublicHoliday: any = [];
  listTypeCode: any = [
    { name: "Planned OT", id: 1 },
    { name: "Vaccination", id: 2 },
    { name: "Training", id: 3 },
  ];
  public entity: any;

  // defind model for Update Popup
  public modelUpdate: any = {};
  public rosterUpdate: any = {};

  constructor(
    private _avRoute: ActivatedRoute,
    private _rosterService: RosterService,
    private _publicHolidayService: PublicHolidayService,
    private _employeesService: EmployeesService,
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

    this.rosterForm = this._fb.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      zoneLocationId: this.currentZoneLocation.id,
    });

    this.getData();
  }

  async getData() {
    await this.getListPublicHoliday();
    this.getEmployeeInfo();
    this.processData();
  }

  async getListPublicHoliday() {
    return new Promise(resolve => {
      this._publicHolidayService.getCount('', '', this.currentCompany.id, '').subscribe(result => {
        this.listPublicHoliday = result.data;
        resolve('done');
      });
    });
  }

  getEmployeeInfo() {
    this._employeesService.getEmployeesById(this.currentEmployeeId).subscribe(result => {
      this.currentEmployee = result.data;
    });
  }

  checkPublicHoliday(dateCheck) {
    var isPublicHoliday = false;
    this.listPublicHoliday.forEach(item => {
    });
    return isPublicHoliday;
  }

  processData() {
    this.getRosterForMonth();
    this.getListShiftCode();
    this.getListAttendenceCode();
    this.getListOTSettingCode();

    this.entity = {};
    this.entity.ShiftCode = 0;
    this.entity.TypeCode = 0;
    this.entity.Attendence = 0;
    this.entity.CurrentIndex = 1;
    this.entity.ChildIndex = 1;
  }

  changeDateStartSelect(event) {
    this.dateStart = new Date(event);
  }

  changeDateEndSelect(event) {
    this.dateEnd = new Date(event);
  }

  reloadRosterData() {
    var hasError = this.validateTime();
    if (hasError) {
      this._notificationService.ErrorNotification('Please select the maximum period of 12 months and the minimum of 1 month');
    } else {
      this.getRosterForMonth();
    }
  }

  validateTime() {
    var startMonth = this.dateStart.getMonth();
    var endMonth = this.dateEnd.getMonth();
    var startYear = this.dateStart.getFullYear();
    var endYear = this.dateEnd.getFullYear();
    var result = false;

    if (endYear - startYear == 0) {
      if (endMonth - startMonth < 0) {
        result = true;
      }
    } else if (endYear - startYear == 1) {
      if (endMonth - startMonth >= 0) {
        result = true;
      }
    } else {
      result = true;
    }

    return result;
  }

  getRosterForMonth() {
    var startDate = moment(this.dateStart).format('YYYY-MM-DD');
    var endDate = moment(this.dateEnd).format('YYYY-MM-DD');
    this._rosterService.getRosterByForMonth(startDate, endDate, this.currentEmployeeId, this.currentCompany.id, this.currentJobSite.id).subscribe(result => {
      this.trData = result.data;
      this.backupData = result.data;
    });
  }

  getListShiftCode() {
    this._rosterService.getListShiftCode(this.currentJobSite.id).subscribe(result => {
      this.listShiftCode = result.data;
    });
  }

  getListAttendenceCode() {
    var companyid = this.currentCompany.id;
    this._rosterService.getListAttendenceCode(companyid).subscribe(result => {
      this.listAttendence = result.data;
    });
  }

  getListOTSettingCode() {
    var companyid = this.currentCompany.id;
    var jobsiteId = this.currentJobSite.id;
    this._rosterService.getListOTSettingCode(companyid, jobsiteId).subscribe(result => {
      this.listOTSettingCode = result.data;
    });
  }

  getListOTSettingCodeByType(remark) {
    var companyid = this.currentCompany.id;
    var jobsiteId = this.currentJobSite.id;
    this._rosterService.GetAllWithJobSiteByRemark(companyid, jobsiteId, remark).subscribe(result => {
      this.listOTCodeValue = result.data;
    });
  }

  EditRoster(item, parentIndex, indexChild) {
    this.entity.CurrentIndex = parentIndex;
    this.entity.ChildIndex = indexChild;
    this.showUpdateModal(item);
  }

  DuplicateRoster() {
    this._router.navigate(['company/job-site/detail/roster/duplicate/', this.currentEmployeeId]);
  }

  showUpdateModal(item) {
    this.getListOTSettingCodeByType(item.otCodeId);
    this.rosterUpdate = {};
    this.rosterUpdate.id = item.id;
    this.rosterUpdate.startTime = item.startTime;
    this.rosterUpdate.endTime = item.endTime;

    this.rosterUpdate.startTime1 = item.startTime1;
    this.rosterUpdate.endTime1 = item.endTime1;
    this.rosterUpdate.type1 = item.type1;
    this.rosterUpdate.remarks1 = item.remarks1;
    this.rosterUpdate.startTime2 = item.startTime2;
    this.rosterUpdate.endTime2 = item.endTime2;
    this.rosterUpdate.type2 = item.type2;
    this.rosterUpdate.remarks2 = item.remarks2;
    this.rosterUpdate.startTime3 = item.startTime3;
    this.rosterUpdate.endTime3 = item.endTime3;
    this.rosterUpdate.type3 = item.type3;
    this.rosterUpdate.remarks3 = item.remarks3;

    this.rosterUpdate.ShiftId = item.shiftId;
    this.rosterUpdate.Type = item.type;
    this.rosterUpdate.OtCodeId = item.otCodeId;
    this.rosterUpdate.OTCodeValue = item.otCodeValueId;
    this.rosterUpdate.Remarks = item.remarks;
    this.rosterUpdate.AttendanceId = item.attendanceId;
    this.rosterUpdate.Day = item.day;
    this.rosterUpdate.Month = item.month;
    this.rosterUpdate.Year = item.year;
    this.rosterUpdate.EmployeeId = this.currentEmployeeId;
    this.rosterUpdate.dateTime = item.date;
    this.modalUpdate.show();
  }

  saveChange() {
    this._rosterService.updateRoster(this.rosterUpdate).subscribe((response) => {

      if (!response.success) {
        this._notificationService.ErrorNotification(response.message);
        return;
      }

      this._notificationService.SuccessNotification('Save Successfully');

      var parentindex = (this.entity.CurrentIndex > 0) ? this.entity.CurrentIndex : 0;
      var childindex = (this.entity.ChildIndex > 0) ? this.entity.ChildIndex : 0;

      // Id
      this.trData[parentindex].listRoster[childindex] = response.data;
      this.trData[parentindex].listRoster[childindex].date = this.rosterUpdate.dateTime;

      // RosterCode
      var rosterCodeObj = this.listShiftCode.find(x => x.id == this.rosterUpdate.ShiftId);
      this.trData[parentindex].listRoster[childindex].shiftCodeName = (rosterCodeObj != undefined && rosterCodeObj != null) ? rosterCodeObj.mainCode : "--";

      // Attendance
      var attendanceObj = this.listAttendence.find(x => x.id == this.rosterUpdate.AttendanceId);
      this.trData[parentindex].listRoster[childindex].attendanceName = (attendanceObj != undefined && attendanceObj != null) ? attendanceObj.name : "--";

      // OTCode
      var OTCodeObj = this.listOTSettingCode.find(x => x.id == this.rosterUpdate.OtCodeId);
      this.trData[parentindex].listRoster[childindex].otCodeName = (OTCodeObj != undefined && OTCodeObj != null) ? OTCodeObj.remarks : "--";

      // OTCodeValue
      this.trData[parentindex].listRoster[childindex].otCodeValue = this.rosterUpdate.OTCodeValue;

      // Remark
      this.trData[parentindex].listRoster[childindex].remarks = this.rosterUpdate.Remarks;
      this.trData[parentindex].listRoster[childindex].remarksSplit = (this.rosterUpdate.Remarks.length > 40)
        ? this.rosterUpdate.Remarks.substring(0, 40) + "..." : this.rosterUpdate.Remarks;
      this.rosterUpdate = {};
    }, error => {
      this._notificationService.ErrorNotification('Save Failure. Try again!');
      this.errorMessage = error;
    });

    this.modalUpdate.hide();
  }
}
