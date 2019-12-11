import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../../../providers/data/data';
import { DashboardService } from '../dashboard.service';
import { NotificationService } from '../../../libs/notification';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NgxSmartModalService } from '../../../../ngx-smart-modal';
import { EmployeesService } from '../../company/job-site/employees/employees.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CalendarEvent, CalendarDateFormatter, CalendarMonthViewDay } from 'angular-calendar';
import { CustomDateFormatter } from '../../../providers/custom-date-formatter';
import { IMyDpOptions } from 'mydatepicker';
import { DateService } from '../../../providers/date-service';
import { AttType, NormalType, TypeCreate } from '../../../../constant/data';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class DashboardComponent implements OnInit {

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  employeeId: any;
  public showType = true;
  public attendanceList: any[] = [];
  public normalType = NormalType;
  public attType = AttType;
  public workingHours = [];

  // public employees: any[] = [];
  public employeeDetail: any = {};
  public page = 1;
  public pageSize = 10;
  public totalItems = 0;
  public show = 0;

  // Modal
  public pageV2 = 1;
  public totalItemsV2 = 0;
  public showV2 = 0;

  listDepartment: any = [];
  listSite: any = [];
  listJobsite: any = [];
  listJobSiteAll: any = [];

  listUser: any = [];

  currentCompany: any = {};
  currentDepartment: any = {};
  currentSite: any = {};
  currentJobsite: any = {};

  currentCompanyIdSelect: any = 0;
  currentDepartmentIdSelect: any = 0;
  currentSiteIdSelect: any = 0;
  currentJobsiteIdSelect: any = 0;
  isPresent = true;

  private filterByName = '';
  private filterRosterByName = '';

  // modal
  listUserV2: any = [];
  listCompanyModal: any = [];
  listDepartmentModal: any = [];
  listSiteModal: any = [];
  listSiteAllModal: any = [];
  listJobsiteModal: any = [];

  currentCompanyIdSelectModal: any = '';
  currentDepartmentIdSelectModal: any = 0;
  currentSiteIdSelectModal: any = 0;
  currentJobsiteIdSelectModal: any = 0;

  dateSelected: Date = new Date();
  stringDateSelected = '';
  dateTimeSelected = new Date();

  view = 'month';
  viewDate: Date = startOfDay(new Date());
  events: CalendarEvent[] = [];
  date: Date = new Date();
  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'MMM yyyy',
    defaultOpen: false
  };

  // myForm: FormGroup;
  myForm: any = {
    attendances: [],
    attendancesRemove: []
  };

  //roster
  rosterUpdate: any = {};
  listOTSettingCode: any = [];
  listAttendence: any = [];
  listShiftCode: any = [];
  currentEmployee: any = {};

  constructor(
    private _fb: FormBuilder,
    private _dateService: DateService,
    public _employeesService: EmployeesService,
    public ngxSmartModalService: NgxSmartModalService,
    private _dashboardService: DashboardService,
    private _notificationService: NotificationService,
    private _router: Router, ) {
    this.stringDateSelected = moment(this.dateSelected).format('DD MMM YYYY');

    this.myForm = {
      attendances: [],
      attendancesRemove: []
    };
  }

  ngOnInit() {
    this.getData();
    this.viewDate = startOfDay(new Date());
  }

  createAttendance() {
    return {
      attType: 2,
      normalType: 0,
      timeIn: '',
      timeOut: '',
      workingHourse: 0,
      remarks: '',
      dateLog : this.stringDateSelected,
      employeeId: this.employeeId,
      typeCreate: 1,
      updateManual: true
    };
  }

  // show/hide items
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

  async getData() {
    await this.getListCompany();
    this.getDataCombobox();

    this.getCount();
    this.getListUser();

    // Modal
    this.getCountModal();
    this.getListUserModal();

    this.getListPresent();
  }

  async getListCompany() {
    return new Promise(resolve => {
      this._dashboardService.getListCompany().subscribe(
        result => {
          this.listCompanyModal = result.data;
          this.currentCompanyIdSelectModal = result.data[0].id;
          this.currentCompanyIdSelect = this.currentCompanyIdSelectModal;
          resolve();
        }
      );
    });
  }

  getDataCombobox() {
    this.getListDepartment();
    this.getListSite();
    this.getListJobSite();
  }

  getListDepartment() {
    this._dashboardService.getListDepartment(this.currentCompanyIdSelect).subscribe(
      result => {
        this.listDepartment = result.data;
      }
    );

    this._dashboardService.getListDepartment(this.currentCompanyIdSelectModal).subscribe(
      result => {
        this.listDepartmentModal = result.data;
      }
    );
  }

  getListSite() {
    this._dashboardService.getListSite(this.currentCompanyIdSelect, this.currentDepartmentIdSelect).subscribe(
      result => {
        this.listSite = result.data;
      }
    );

    this._dashboardService.getListSite(this.currentCompanyIdSelectModal, this.currentDepartmentIdSelectModal).subscribe(
      result => {
        this.listSiteModal = result.data;
      }
    );

  }

  getListJobSite() {
    this._dashboardService.getListJobsite(this.currentCompanyIdSelect, this.currentDepartmentIdSelect, this.currentSiteIdSelect).subscribe(
      result => {
        this.listJobsite = result.data;
      }
    );

    this._dashboardService.getListJobsite(this.currentCompanyIdSelectModal, this.currentDepartmentIdSelectModal,
       this.currentJobsiteIdSelectModal).subscribe(
      result => {
        this.listJobsiteModal = result.data;
      }
    );
  }

  onSelectDepartment() {
    this.currentSiteIdSelect = 0;
    this.currentJobsiteIdSelect = 0;
    this.getListSite();
    this.getListJobSite();
    this.loadPage(1);
  }

  onSelectSite() {
    this.currentJobsiteIdSelect = 0;
    this.getListJobSite();
    this.loadPage(1);
  }

  onSelectCompany() {
    this.currentDepartmentIdSelect = 0;
    this.currentSiteIdSelect = 0;
    this.currentJobsiteIdSelect = 0;
    this.getListDepartment();
    this.getListSite();
    this.getListJobSite();
    this.loadPage(1);
  }

  clickPresent() {
    this.isPresent = true;
    this.listUser = [];
    this.loadPage(1);
  }

  clickAbsent() {
    this.isPresent = false;
    this.listUser = [];
    this.loadPage(1);
  }

  formatTime(strTime) {
    // Check correct time format and split into components
    strTime = strTime.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [strTime];
    if (strTime.length > 1) { // If time format correct
      strTime = strTime.slice(1);  // Remove full string match value
      strTime[5] = +strTime[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      strTime[0] = +strTime[0] % 12 || 12; // Adjust hours
    }
    return strTime.join(''); // return adjusted time or original string
  }

  // Modal
  onSelectCompanyModal() {
    this.currentDepartmentIdSelectModal = 0;
    this.currentSiteIdSelectModal = 0;
    this.currentJobsiteIdSelectModal = 0;
    this.getListDepartment();
    this.getListSite();
    this.getListJobSite();
    this.loadPageModal(1);
  }

  onSelectDepartmentModal() {
    this.currentSiteIdSelectModal = 0;
    this.currentJobsiteIdSelectModal = 0;
    this.getListSite();
    this.getListJobSite();
    this.loadPageModal(1);
  }

  onSelectSiteModal() {
    this.currentJobsiteIdSelectModal = 0;
    this.getListJobSite();
    this.loadPageModal(1);
  }

  onSelectJobSiteModal() {
    this.loadPageModal(1);
  }

  loadPage(page: number) {
    this.page = page;
    this.getCount();
    this.getListUser();
    if(page == 1) {
      this.getListPresent();
    }
  }

  loadPageModal(page: number) {
    this.pageV2 = page;
    this.getCountModal();
    this.getListUserModal();
  }


  // get data for user
  getListUser() {
    this._dashboardService.getListUser(this.page, this.pageSize, this.stringDateSelected, this.currentCompanyIdSelect,
       this.currentDepartmentIdSelect,
      this.currentSiteIdSelect, this.currentJobsiteIdSelect, this.isPresent, this.filterByName).subscribe(
        result => {
          this.listUser = result.data.results;
          this.show = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
        }
      );
  }

  getCount() {
    this._dashboardService.getCount(this.stringDateSelected, this.currentCompanyIdSelect, this.currentDepartmentIdSelect,
      this.currentSiteIdSelect, this.currentJobsiteIdSelect, this.isPresent, this.filterByName).subscribe(
        result => {
          this.totalItems = result.data.length;
        }
      );
  }

  // get data for modal
  getListUserModal() {
    this._dashboardService.getListUserModal(this.pageV2, this.pageSize, this.currentCompanyIdSelectModal,
       this.currentDepartmentIdSelectModal,
      this.currentSiteIdSelectModal, this.currentJobsiteIdSelectModal, this.filterRosterByName).subscribe(
        result => {
          this.listUserV2 = result.data.results;
          this.showV2 = result.data.lastRowOnPage - result.data.firstRowOnPage + 1;
        }
      );
  }

  getCountModal() {
    this._dashboardService.getCountModal(this.currentCompanyIdSelectModal, this.currentDepartmentIdSelectModal,
      this.currentSiteIdSelectModal, this.currentJobsiteIdSelectModal, this.filterRosterByName).subscribe(
        result => {
          this.totalItemsV2 = result.data.length;
        }
      );
  }

  Search() {
    this.loadPage(1);
  }

  SearchRoster() {
    this.loadPageModal(1);
  }

  gotoRosterOfEmployee(employee) {
    let jobsiteItem =  this.listJobsiteModal.find(item => item.id == employee.jobSiteId);
    DataStorage.setCurrentJobSite(jobsiteItem);
    let siteItem = this.listSiteModal.find(item => item.id == jobsiteItem.siteId);
    DataStorage.setCurrentSite(siteItem);
    let departmentItem =  this.listDepartmentModal.find(item => item.id == siteItem.departmentId);
    DataStorage.setCurrentDepartment(departmentItem);
    let companyItem = this.listCompanyModal.find(item => item.id == departmentItem.companyId);
    DataStorage.setCurrentCompany(companyItem);
    this._router.navigate(['company/job-site/detail/roster/list/', employee.id]);
  }

  // left dashboard
  dayClicked({
    date
  }: {
    date: Date;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (!isSameDay(this.viewDate, date)) {
        this.viewDate = date;
        this.stringDateSelected = moment(date).format('DD MMM YYYY');
        this.loadPage(1);
      }
    }
  }
  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (this.viewDate.getTime() === day.date.getTime()) {
        day.cssClass = 'cal-day-selected';
      }
    });
  }

  changeDateSelect(event) {
    this.viewDate = startOfDay(new Date(event));
    this.stringDateSelected = moment(this.viewDate).format('DD MMM YYYY');
    this.loadPage(1);
  }

  getListPresent() {
    this._dashboardService.getListPresent(moment(this.viewDate).format('DD MMM YYYY'), this.currentCompanyIdSelect, this.currentDepartmentIdSelect,
      this.currentSiteIdSelect, this.currentJobsiteIdSelect).subscribe(
        result => {
          this.events = [];
          result.data.forEach(element => {
            this.events.push({
              start: startOfDay(new Date(element.date)),
              title: element.count
            });
          });
        }
      );
  }

  async openPopup(id: number) {
    this.myForm.attendances = [];
    this.myForm.attendancesRemove = [];
    this.employeeId = id;
    await this.getEmployeeDetail(id);
    this.getWorkingHours();
    this.getAttendanceList(id);
    this.ngxSmartModalService.getModal('myManualRecord').open();
  }

  getWorkingHours() {
    this._employeesService.getWorkingHours()
    .subscribe(res => {
      this.workingHours = res.data;
    });
  }

  getAttendanceList(id: number) {
    this._dashboardService.getAttendanceList(id, this.stringDateSelected)
    .subscribe(res => {
      this.myForm.attendances =  res.data;
    });
  }

  // get list employee by id
  async getEmployeeDetail(id: number) {
    return new Promise(resolve => {
      // this._employeesService.getEmployeesById(id)
      // .subscribe(res => {
      //   this.employeeDetail.employeeName = res.data.name;
      //   this.employeeDetail.empID = res.data.empID;
      //   this.employeeDetail.empkey = res.data.empkey;
      //   this.employeeDetail.designation = '';
      //   this.employeeDetail.callSign = '';
      //   this.employeeDetail.shift = '';
      //   this.employeeDetail.date = this.stringDateSelected;
      //   this.currentEmployee = res.data;
      //   resolve("done");
      // });
    });
  }

  RemoveAttendance(i: number) {
    if (this.myForm.attendances[i].id) {
      this.myForm.attendances[i].attType = -1;
      this.myForm.attendancesRemove.push(this.myForm.attendances[i]);
    }
    this.myForm.attendances.splice(i, 1);
  }

  AddAttendance() {
    this.myForm.attendances.push(this.createAttendance());
  }

  submitForm() {
    let attendances = this.myForm.attendances.map(item => {
      return item;
    });
    this.myForm.attendancesRemove.map(item => {
      attendances.push(item);
    });
    this._dashboardService.updateAttendances(attendances)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Update Successfully');
        this.loadPage(1);
        this.ngxSmartModalService.getModal('myManualRecord').close();
      }
      , error => {
        this._notificationService.ErrorNotification('Update Failure. Try again!');
      });
  }
}
