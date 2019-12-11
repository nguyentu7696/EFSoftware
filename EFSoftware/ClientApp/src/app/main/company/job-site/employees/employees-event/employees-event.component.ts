import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { IMyDpOptions } from 'mydatepicker';
import { SystemConstants } from '../../../../../libs/SystemConstant';
import { EmployeesService } from '../employees.service';
import { NotificationService } from '../../../../../libs/notification';
import { DataStorage } from '../../../../../providers/data/data';
import { BasicService } from '../../../basic/basic.service';
import { DateService } from '../../../../../providers/date-service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ZoneService } from '../../zone/zone.service';
import { ResignService } from '../../../resign-reason/resign.service';


@Component({
  selector: 'app-employees-event',
  templateUrl: './employees-event.component.html',
  styleUrls: ['./employees-event.component.scss']
})
export class EmployeesEventComponent implements OnInit {
  //add by Son Start >>>
  eventContract: any = {};
  listZone: any;
  currentZoneLocation: any = {};
  //add by Son End <<<

  //add by thuong start >>>
  employeeDetail: any = {};
  eventRejoinDetail: any = {};
  eventRejoin: any = {};
  listShift: any;
  listAllowance: any;
  listOtSetting: any;
  listOtPh: any;
  listOtRd: any;
  listOtO: any;
  listOtStd: any;
  currentEmployeeId: number = 0;
  //add by thuong end <<<

  // Add by Phuong start >>>
  eventTR: any = {};
  eventPromotion: any = {};
  eventTransfer: any = {};
  // Add by Phuong end <<<

  currentCompany: any = {};
  currentDepartment: any = {};
  currentSite: any = {};
  currentJobSite: any = {};
  currentEmployee: any = {};

  currentDepartmentIdSelect: any = '';
  currentSiteIdSelect: any = '';
  currentJobsiteIdSelect: any = '';
  public showHide = 0;
  public totalItems = 0;

  private filterByName = '';
  private searchZone = '';

  listResign: any;
  listZoneLocation: any;
  errorMessage: any;

  employeeValid: any = {
    designation: true,
  };

  listDepartment: any = [];
  listSite: any = [];
  listJobsite: any = [];

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    editableDateField: false,
    openSelectorOnInputClick: true
  };

  baseUrl = '';
  eventTRTmp: any = {};
  eventPromotionTmp: any = {};
  eventRejoinTmp: any = {};
  eventContractTmp: any = {};
  eventTransferTmp: any = {};

  constructor(
    private _avRoute: ActivatedRoute,
    private _employeesService: EmployeesService,
    private _basicService: BasicService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder,
    private _router: Router,
    private _dateService: DateService,
    private _zoneService: ZoneService,
    private _resignService: ResignService,
  ) {

    if (this._avRoute.snapshot.params['id']) {
      this.currentEmployeeId = this._avRoute.snapshot.params['id'];
    }

    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentSite = DataStorage.getCurrentSite();
    this.currentJobSite = DataStorage.getCurrentJobSite();
    this.currentDepartment = DataStorage.getCurrentDepartment();

    this.eventPromotion.departmentId = 0;
    this.eventPromotion.siteId = 0;
    this.eventPromotion.jobSiteId = 0;
    this.eventPromotion.zoneLocationId = 0;
    this.eventPromotion.shiftId = 0;

    this.eventRejoin.departmentId = 0;
    this.eventRejoin.jobSiteId = 0;
    this.eventRejoin.zoneLocationId = 0;
    this.eventRejoin.shiftId = 0;

    // By Son Start >>>
    this.eventContract.departmentId = 0;
    this.eventContract.jobSiteId = 0;
    this.eventContract.zoneLocationId = 0;
    this.eventContract.zoneId = 0;
    this.currentZoneLocation = DataStorage.getCurrentZoneLocation();
    // by Son end <<<

    // Termination/Resign by Phuong start >>>
    this.eventTR.zoneLocationId = 0;
    // Termination/Resign by Phuong end <<<

    // Transfer by Phuong start >>>
    this.eventTransfer.departmentId = 0;
    this.eventTransfer.jobSiteId = 0;
    this.eventTransfer.zoneLocationId = 0;
    this.eventTransfer.zoneId = 0;
    // Transfer by Phuong start <<<

    if (!this.currentDepartment) {
      this.currentDepartment = {
        id: 0
      };
    }

    if (!this.currentSite) {
      this.currentSite = {
        id: 0
      };
    }

    if (!this.currentJobSite) {
      this.currentJobSite = {
        id: 0
      };
    }
    this.baseUrl = SystemConstants.BASE_API;
  }

  ngOnInit() {
    // this.getEmployeeDetail();
    this.eventPromotion.status = 1;
    this.eventTR.status = 1;
    this.eventRejoin.status = 1;
    this.getDataCombobox();
    this.getListResign();
    this.getListZoneLocation(this.currentJobSite.id);
    this.getListZone(this.currentZoneLocation.id);
    this.getEventPromotionByEmployeeId();
  }

  getEmployeeDetail() {
    this._employeesService.getEmployeesById(this.currentEmployeeId)
      .subscribe((res) => {
        this.employeeDetail = res.data;
      }, error => {
        this.errorMessage = error;
      });
  }

  showHideShift() {
    $('.info-shift').slideToggle('slow');
  }
  showHideAllowance() {
    $('.info-allowance').slideToggle('slow');
  }
  showHideOT() {
    $('.info-ot').slideToggle('slow');
  }

  showHideShiftRejoin() {
    $('.info-shiftrejoin').slideToggle('slow');
  }
  showHideAllowanceRejoin() {
    $('.info-allowancerejoin').slideToggle('slow');
  }
  showHideOTRejoin() {
    $('.info-otrejoin').slideToggle('slow');
  }

  showHideShiftConTract() {
    $('.info-shiftcontract').slideToggle('slow');
  }
  showHideAllowanceConTract() {
    $('.info-allowancecontract').slideToggle('slow');
  }
  showHideOTConTract() {
    $('.info-otcontract').slideToggle('slow');
  }

  showHideShiftTransfer() {
    $('.info-shifttransfer').slideToggle('slow');
  }
  showHideAllowanceTransfer() {
    $('.info-allowancetransfer').slideToggle('slow');
  }
  showHideOTTransfer() {
    $('.info-ottransfer').slideToggle('slow');
  }


  getDataCombobox() {
    this.getListDepartment(this.currentCompany.id);
    this.getListSite(this.currentCompany.id, this.currentDepartment.id);
    this.getListJobSite(this.currentCompany.id, this.currentDepartmentIdSelect, this.currentSiteIdSelect);
    this.getListShift(this.currentJobSite.id);
    this.getListAllowance(this.currentCompany.id, this.currentJobSite.id);
    this.getListOtSetting(this.currentCompany.id, this.currentJobSite.id);
  }

  getListDepartment(companyId) {
    this._employeesService.getListDepartment(companyId).subscribe(
      result => {
        this.listDepartment = result.data;
      }
    );
  }

  getListSite(companyId, departmentId) {
    this._employeesService.getListSite(companyId, departmentId).subscribe(
      result => {
        this.listSite = result.data;
      }
    );
  }

  getListJobSite(companyId, departmentId, siteId) {
    this._employeesService.getListJobsite(companyId, departmentId, siteId).subscribe(
      result => {
        this.listJobsite = result.data;
      }
    );
  }

  getListResign() {
    this._resignService.getCount(this.currentCompany.id, this.filterByName)
      .subscribe((res) => {
        this.listResign = res.data;
      }, error => {
        this.errorMessage = error;
      });
  }

  getListZoneLocation(jobsiteId) {
    this._zoneService.getListZoneLocation(jobsiteId)
      .subscribe((res) => {
        this.listZoneLocation = res.data;
      }
        , error => {
          this.errorMessage = error;
        });
  }


  // add by thuong start >>>
  getListShift(jobsiteId) {
    this._zoneService.getListShift(jobsiteId)
      .subscribe((res) => {
        this.listShift = res.data;
      }
        , error => {
          this.errorMessage = error;
        });
  }

  getListAllowance(companyId, jobsiteId) {
    this._zoneService.getListAllowance(companyId, jobsiteId)
      .subscribe((res) => {
        this.listAllowance = res.data;
      }
        , error => {
          this.errorMessage = error;
        });
  }

  getListOtSetting(companyId, jobsiteId) {
    this._zoneService.getListOtSetting(companyId, jobsiteId)
      .subscribe((res) => {
        this.listOtSetting = res.data;
        this.listOtPh = res.data.filter(item => {
          if (item.remarks == 'PH') {
            return item;
          }
        });
        this.listOtRd = res.data.filter(item => {
          if (item.remarks == 'RD') {
            return item;
          }
        });
        this.listOtO = res.data.filter(item => {
          if (item.remarks == 'O') {
            return item;
          }
        });
        this.listOtStd = res.data.filter(item => {
          if (item.remarks == 'STD') {
            return item;
          }
        });
      }
        , error => {
          this.errorMessage = error;
        });
  }

  // Promotion by Phuong start >>>
  changeDepartmentPromotion(departmentId) {
    this.currentDepartmentIdSelect = departmentId;
    this.eventPromotion.siteId = 0;
    this.eventPromotion.jobSiteId = 0;
    this.eventPromotion.zoneLocationId = 0;
    this.getListSite(this.currentCompany.id, this.eventPromotion.departmentId);
    this.getListJobSite(this.currentCompany.id, this.eventPromotion.departmentId, this.eventPromotion.siteId);
  }

  changeSitePromotion(siteId) {
    this.currentSiteIdSelect = siteId;
    this.eventPromotion.jobSiteId = 0;
    this.eventPromotion.zoneLocationId = 0;
    this.getListJobSite(this.currentCompany.id, this.eventPromotion.departmentId, this.eventPromotion.siteId);
  }

  changeJobsitePromotion() {
    this.eventPromotion.zoneLocationId = 0;
    this.getListZoneLocation(this.eventPromotion.jobSiteId);
  }

  changeMealAllowancePromotion() {
    var allowance = this.listAllowance.find(x => x.id == this.eventPromotion.mealAllowanceId);
    this.eventPromotion.mealAllowanceValue = allowance.amount;
  }
  changeMonthlyShiftAllowancePromotion() {
    var allowance = this.listAllowance.find(x => x.id == this.eventPromotion.monthlyShiftAllowanceId);
    this.eventPromotion.monthlyShiftAllowanceValue = allowance.amount;
  }
  changeTransportAllowancePromotion() {
    var allowance = this.listAllowance.find(x => x.id == this.eventPromotion.transportAllowanceId);
    this.eventPromotion.transportAllowanceValue = allowance.amount;
  }
  changeOtPhPromotion() {
    let otPh = this.listOtPh.filter(item => {
      if (item.id == this.eventPromotion.otPhId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventPromotion.otPhValue = otPh[0].payroll;
  }
  changeOtRdPromotion() {
    let otRd = this.listOtRd.filter(item => {
      if (item.id == this.eventPromotion.otRdId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventPromotion.OtRdValue = otRd[0].payroll;
  }
  changeOtOPromotion() {
    let OtO = this.listOtO.filter(item => {
      if (item.id == this.eventPromotion.otOId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventPromotion.otOValue = OtO[0].payroll;
  }
  changeOtStdPromotion() {
    let otStd = this.listOtStd.filter(item => {
      if (item.id == this.eventPromotion.otStdId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventPromotion.otStdValue = otStd[0].payroll;
  }
  // Promotion by Phuong end <<<

  changeDepartmentRejoin() {
    this.eventRejoin.jobSiteId = 0;
    this.eventRejoin.zoneLocationId = 0;
    this.getListJobSite(this.currentCompany.id, this.eventRejoin.departmentId,
      this.currentSiteIdSelect);
  }

  changeJobsiteRejoin() {
    this.eventRejoin.zoneLocationId = 0;
    this.getListZoneLocation(this.eventRejoin.jobSiteId);
  }

  changeMealAllowance() {
    var allowance = this.listAllowance.find(x => x.id == this.eventRejoin.mealAllowanceId);
    this.eventRejoin.mealAllowanceValue = allowance.amount;
  }
  changeMonthlyShiftAllowance() {
    var allowance = this.listAllowance.find(x => x.id == this.eventRejoin.monthlyShiftAllowanceId);
    this.eventRejoin.monthlyShiftAllowanceValue = allowance.amount;
  }
  changeTransportAllowance() {
    var allowance = this.listAllowance.find(x => x.id == this.eventRejoin.transportAllowanceId);
    this.eventRejoin.transportAllowanceValue = allowance.amount;
  }
  changeOtPh() {
    let otPh = this.listOtPh.filter(item => {
      if (item.id == this.eventRejoin.otPhId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventRejoin.otPhValue = otPh[0].payroll;
  }
  changeOtRd() {
    let otRd = this.listOtRd.filter(item => {
      if (item.id == this.eventRejoin.otRdId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventRejoin.OtRdValue = otRd[0].payroll;
  }
  changeOtO() {
    let OtO = this.listOtO.filter(item => {
      if (item.id == this.eventRejoin.otOId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventRejoin.otOValue = OtO[0].payroll;
  }
  changeOtStd() {
    let otStd = this.listOtStd.filter(item => {
      if (item.id == this.eventRejoin.otStdId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventRejoin.otStdValue = otStd[0].payroll;
  }

  // Transfer by Phuong start >>>
  changeDepartmentTransfer() {
    this.eventTransfer.jobSiteId = 0;
    this.eventTransfer.zoneLocationId = 0;
    this.eventTransfer.zoneId = 0;
    this.getListJobSite(this.currentCompany.id, this.eventTransfer.departmentId,
      this.currentSiteIdSelect);
  }
  changeJobsiteTransfer() {
    this.eventTransfer.zoneLocationId = 0;
    this.eventTransfer.zoneId = 0;
    this.getListZoneLocation(this.eventTransfer.jobSiteId);
  }
  changeZoneTransfer() {
    this.eventTransfer.zoneId = 0;
    this.getListZone(this.eventTransfer.zoneLocationId);
  }
  changeMealAllowanceTransfer() {
    var allowance = this.listAllowance.find(x => x.id == this.eventTransfer.mealAllowanceId);
    this.eventTransfer.mealAllowanceValue = allowance.amount;
  }
  changeMonthlyShiftAllowanceTransfer() {
    var allowance = this.listAllowance.find(x => x.id == this.eventTransfer.monthlyShiftAllowanceId);
    this.eventTransfer.monthlyShiftAllowanceValue = allowance.amount;
  }
  changeTransportAllowanceTransfer() {
    var allowance = this.listAllowance.find(x => x.id == this.eventTransfer.transportAllowanceId);
    this.eventTransfer.transportAllowanceValue = allowance.amount;
  }
  changeOtPhTransfer() {
    let otPh = this.listOtPh.filter(item => {
      if (item.id == this.eventTransfer.otPhId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventTransfer.otPhValue = otPh[0].payroll;
  }
  changeOtRdTransfer() {
    let otRd = this.listOtRd.filter(item => {
      if (item.id == this.eventTransfer.otRdId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventTransfer.OtRdValue = otRd[0].payroll;
  }
  changeOtTransfer() {
    let OtO = this.listOtO.filter(item => {
      if (item.id == this.eventTransfer.otOId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventTransfer.otOValue = OtO[0].payroll;
  }
  changeOtStdTransfer() {
    let otStd = this.listOtStd.filter(item => {
      if (item.id == this.eventTransfer.otStdId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventTransfer.otStdValue = otStd[0].payroll;
  }
  // Transfer by Phuong end <<<

  // Promotion by Phuong start >>>
  getEventPromotionByEmployeeId() {
    this._employeesService.getEventPromotionByEmployeeId(this.currentEmployeeId)
      .subscribe((res) => {
        if (res.data.length > 0) {
          this.eventPromotion = res.data[0];
          if (this.eventPromotion.effectiveDate != undefined) {
            this.eventPromotionTmp.effectiveDate = this._dateService.strToObjDDMMYYYY(this.eventPromotion.effectiveDate);
          }
        }
      }
        , error => {
          this.errorMessage = error;
        });
  }
  // Promotion by Phuong end <<<

  // Termination/Resign by Phuong start >>>
  getEventTRByEmployeeId() {
    this._employeesService.getEventTRByEmployeeId(this.currentEmployeeId)
      .subscribe((res) => {
        if (res.data.length > 0) {
          this.eventTR = res.data[0];
          if (this.eventTR.effectiveDate != undefined) {
            this.eventTRTmp.effectiveDate = this._dateService.strToObjDDMMYYYY(this.eventTR.effectiveDate);
          }
        }
      }
        , error => {
          this.errorMessage = error;
        });
  }
  // Termination/Resign by Phuong end <<<

  getEventRejoinDetail() {
    this._employeesService.getEventRejoinDetail(this.currentEmployeeId)
      .subscribe((res) => {
        if (res.data.length > 0) {
          this.eventRejoin = res.data[0];
          if (this.eventRejoin.effectiveDate != undefined) {
            this.eventRejoinTmp.effectiveDate = this._dateService.strToObjDDMMYYYY(this.eventRejoin.effectiveDate);
          }
        }
      }
        , error => {
          this.errorMessage = error;
        });
  }

  // Transfer by Phuong start >>>
  getEventTransferByEmployeeId() {
    this._employeesService.getEventTransferByEmployeeId(this.currentEmployeeId)
      .subscribe((res) => {
        if (res.data.length > 0) {
          this.eventTransfer = res.data[0];
          if (this.eventTransfer.periodStart != undefined) {
            this.eventTransferTmp.periodStart = this._dateService.strToObjDDMMYYYY(this.eventTransfer.periodStart);
          }
          if (this.eventTransfer.periodEnd != undefined) {
            this.eventTransferTmp.periodEnd = this._dateService.strToObjDDMMYYYY(this.eventTransfer.periodEnd);
          }
        }
      }
        , error => {
          this.errorMessage = error;
        });
  }
  // Transfer by Phuong end <<<

  getEventContractByEmployeeId() {
    this._employeesService.getEventContractByEmployeeId(this.currentEmployeeId)
      .subscribe((res) => {
        if (res.data.length > 0) {
          this.eventContract = res.data[0];
          if (this.eventContract.periodStart != undefined) {
            this.eventContractTmp.periodStart = this._dateService.strToObjDDMMYYYY(this.eventContract.periodStart);
          }
          if (this.eventContract.periodEnd != undefined) {
            this.eventContractTmp.periodEnd = this._dateService.strToObjDDMMYYYY(this.eventContract.periodEnd);
          }
        }
      }
        , error => {
          this.errorMessage = error;
        });
  }

  changeEventType() {
    if (this.showHide == 0) {
      this.getEventPromotionByEmployeeId();
      this.getDataCombobox();
      this.getListZoneLocation(this.currentJobSite.id);
      this.getListShift(this.currentJobSite.id);
      this.getListAllowance(this.currentCompany.id, this.currentJobSite.id);
      this.getListOtSetting(this.currentCompany.id, this.currentJobSite.id);
      this.eventPromotion.departmentId = this.currentDepartment.id;
      this.eventPromotion.jobSiteId = this.currentJobSite.id;
      if (this.eventPromotion.length > 0) {
        if (this.eventPromotion.empId == null || this.eventPromotion.empId == '') {
          this.eventPromotion.empId = this.employeeDetail.empID;
        }
        if (this.eventPromotion.empKey == null || this.eventPromotion.empKey == '') {
          this.eventPromotion.empKey = this.employeeDetail.empKey;
        }
      }
    }

    else if (this.showHide == 1) {
      this.getEventTRByEmployeeId();
      this.getListZoneLocation(this.currentJobSite.id);
      this.getListResign();
    }
    else if (this.showHide == 2) {
      this.getEventRejoinDetail();
      this.getDataCombobox();
      this.getListZoneLocation(this.currentJobSite.id);
      this.getListShift(this.currentJobSite.id);
      this.getListAllowance(this.currentCompany.id, this.currentJobSite.id);
      this.getListOtSetting(this.currentCompany.id, this.currentJobSite.id);
      this.eventRejoin.departmentId = this.currentDepartment.id;
      this.eventRejoin.jobSiteId = this.currentJobSite.id;
      if (this.eventRejoin.length > 0) {
        if (this.eventRejoin.empId == null || this.eventRejoin.empId == '') {
          this.eventRejoin.empId = this.employeeDetail.empID;
        }
        if (this.eventRejoin.empKey == null || this.eventRejoin.empKey == '') {
          this.eventRejoin.empKey = this.employeeDetail.empKey;
        }
      }

    }

    else if (this.showHide == 3) {
      this.getEventContractByEmployeeId();
      this.getDataCombobox();
      this.getListZoneLocation(this.currentJobSite.id);
      this.getListZone(this.currentZoneLocation.id);
      this.getListShift(this.currentJobSite.id);
      this.getListAllowance(this.currentCompany.id, this.currentJobSite.id);
      this.getListOtSetting(this.currentCompany.id, this.currentJobSite.id);
      this.eventContract.departmentId = this.currentDepartment.id;
      this.eventContract.jobSiteId = this.currentJobSite.id;
      if (this.eventContract.length > 0) {
        if (this.eventContract.empId == null || this.eventContract.empId == '') {
          this.eventContract.empId = this.employeeDetail.empID;
        }
        if (this.eventContract.empKey == null || this.eventContract.empKey == '') {
          this.eventContract.empKey = this.employeeDetail.empKey;
        }
      }
    }

    else if (this.showHide == 4) {
      this.getEventTransferByEmployeeId();
      this.getDataCombobox();
      this.getListZoneLocation(this.currentJobSite.id);
      this.getListZone(this.currentZoneLocation.id);
      this.getListShift(this.currentJobSite.id);
      this.getListAllowance(this.currentCompany.id, this.currentJobSite.id);
      this.getListOtSetting(this.currentCompany.id, this.currentJobSite.id);
      this.eventTransfer.departmentId = this.currentDepartment.id;
      this.eventTransfer.jobSiteId = this.currentJobSite.id;
      if (this.eventTransfer.length > 0) {
        if (this.eventTransfer.empId == null || this.eventTransfer.empId == '') {
          this.eventTransfer.empId = this.employeeDetail.empID;
        }
        if (this.eventTransfer.empKey == null || this.eventTransfer.empKey == '') {
          this.eventTransfer.empKey = this.employeeDetail.empKey;
        }
      }

    }
  }


  updateEventEmployee() {
    if (this.showHide == 0) {
      this.eventPromotion.eventType = this.showHide;
      this.eventPromotion.employeeId = this.currentEmployeeId;

      this._employeesService.updateEventPromotion(this.eventPromotion)
        .subscribe((res) => {
          if (!res.success) {
            this._notificationService.ErrorNotification(res.message);
            return;
          }
          this._notificationService.SuccessNotification('Update Successfully');
        }
          , error => {
            this._notificationService.ErrorNotification('Update Failure. Try again!');
          });
    }
    else if (this.showHide == 1) {
      this.eventTR.eventType = this.showHide;
      this.eventTR.employeeId = this.currentEmployeeId;

      this._employeesService.updateEventTR(this.eventTR)
        .subscribe((res) => {
          if (!res.success) {
            this._notificationService.ErrorNotification(res.message);
            return;
          }
          this._notificationService.SuccessNotification('Update Successfully');
        }
          , error => {
            this._notificationService.ErrorNotification('Update Failure. Try again!');
          });
    }
    else if (this.showHide == 2) {
      this.eventRejoin.eventType = this.showHide;
      this.eventRejoin.status = 1;
      this.eventRejoin.employeeId = this.currentEmployeeId;

      this._employeesService.updateEventEmployee(this.eventRejoin)
        .subscribe((res) => {
          if (!res.success) {
            this._notificationService.ErrorNotification(res.message);
            return;
          }
          this._notificationService.SuccessNotification('Update Successfully');
        }
          , error => {
            this._notificationService.ErrorNotification('Update Failure. Try again!');
          });

    }
    else if (this.showHide == 3) {
      this.eventContract.eventType = this.showHide;
      this.eventContract.employeeId = this.currentEmployeeId;
      this._employeesService.updateEventContract(this.eventContract)
        .subscribe((res) => {
          if (!res.success) {
            this._notificationService.ErrorNotification(res.message);
            return;
          }
          this._notificationService.SuccessNotification('Update Successfully');
        }
          , error => {
            this._notificationService.ErrorNotification('Update Failure. Try again!');
          });
    }

    else if (this.showHide == 4) {
      this.eventTransfer.eventType = this.showHide;
      this.eventTransfer.employeeId = this.currentEmployeeId;

      this._employeesService.updateEventTransfer(this.eventTransfer)
        .subscribe((res) => {
          if (!res.success) {
            this._notificationService.ErrorNotification(res.message);
            return;
          }
          this._notificationService.SuccessNotification('Update Successfully');
        }
          , error => {
            this._notificationService.ErrorNotification('Update Failure. Try again!');
          });
    }
  }

  // add by thuong end <<<

  // add by Son Start
  changeDepartmentContract() {
    this.eventContract.jobSiteId = 0;
    this.eventContract.zoneLocationId = 0;
    this.eventContract.zoneId = 0;
    this.getListJobSite(this.currentCompany.id, this.eventContract.departmentId,
      this.currentSiteIdSelect);
  }
  changeJobsiteContract() {
    this.eventContract.zoneLocationId = 0;
    this.eventContract.zoneId = 0;
    this.getListZoneLocation(this.eventContract.jobSiteId);
  }
  getListZone(zonelocationid) {
    this._zoneService.getCount(zonelocationid, this.searchZone)
      .subscribe((res) => {
        this.listZone = res.data;
      }
        , error => {
          this.errorMessage = error;
        });
  }
  changeZoneContract() {
    this.eventContract.zoneId = 0;
    this.getListZone(this.eventContract.zoneLocationId);
  }
  changeMealAllowanceContract() {
    var allowance = this.listAllowance.find(x => x.id == this.eventContract.mealAllowanceId);
    this.eventContract.mealAllowanceValue = allowance.amount;
  }
  changeMonthlyShiftAllowanceContract() {
    var allowance = this.listAllowance.find(x => x.id == this.eventContract.monthlyShiftAllowanceId);
    this.eventContract.monthlyShiftAllowanceValue = allowance.amount;
  }
  changeTransportAllowanceContract() {
    var allowance = this.listAllowance.find(x => x.id == this.eventContract.transportAllowanceId);
    this.eventContract.transportAllowanceValue = allowance.amount;
  }
  changeOtPhContract() {
    let otPh = this.listOtPh.filter(item => {
      if (item.id == this.eventContract.otPhId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventContract.otPhValue = otPh[0].payroll;
  }
  changeOtRdContract() {
    let otRd = this.listOtRd.filter(item => {
      if (item.id == this.eventContract.otRdId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventContract.OtRdValue = otRd[0].payroll;
  }
  changeOtOContract() {
    let OtO = this.listOtO.filter(item => {
      if (item.id == this.eventContract.otOId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventContract.otOValue = OtO[0].payroll;
  }
  changeOtStdContract() {
    let otStd = this.listOtStd.filter(item => {
      if (item.id == this.eventContract.otStdId) {
        return item.payroll;
      } else {
        return '';
      }
    });
    this.eventContract.otStdValue = otStd[0].payroll;
  }
  // add by Son End
}
