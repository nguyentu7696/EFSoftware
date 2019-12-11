import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorage } from '../../../../../providers/data/data';
import { NotificationService } from '../../../../../libs/notification';
import { ZoneLocationService } from '../zone-location.service';
import { JobSiteService } from '../../jobsite.service';
import { LevelService } from '../../level/level.service';
import { AreaService } from '../../area/area.service';
import { LocationService } from '../../location/location.service';

@Component({
  selector: 'app-zone-location-edit',
  templateUrl: './zone-location-edit.component.html',
  styleUrls: ['./zone-location-edit.component.scss']
})
export class ZoneLocationEditComponent implements OnInit {
  zonelocationForm: FormGroup;
  zoneLocationId = 0;
  errorMessage: any;

  listCompany: any = [];
  listDepartment: any = [];
  listSite: any = [];
  listSiteAll: any = [];
  listJobSite: any = [];
  listJobSiteAll: any = [];

  listLevel: any = [];
  listArea: any = [];
  listLocation: any = [];

  currentCompany: any = {};
  currentDepartment: any = {};
  currentSite: any = {};
  currentJobSite: any = {};

  // currentCompanyIdSelect: any ='';
  currentDepartmentIdSelect: any = '';
  currentSiteIdSelect: any = '';
  currentJobSiteIdSelect: any = '';

  zonelocationCurrent: any = {};

  private filterByName = '';
  private searchLevel = '';
  private searchArea = '';
  private searchLocation = '';

  constructor(
    private _avRoute: ActivatedRoute,
    private _jobsiteService: JobSiteService,
    private _zonelocationService: ZoneLocationService,
    private _levelService: LevelService,
    private _areaService: AreaService,
    private _locationService: LocationService,
    private _notificationService: NotificationService,
    private _fb: FormBuilder, private _router: Router
  ) {

    this.currentCompany = DataStorage.getCurrentCompany();
    this.currentDepartment = DataStorage.getCurrentDepartment();
    this.currentSite = DataStorage.getCurrentSite();
    this.currentJobSite = DataStorage.getCurrentJobSite();

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

    if (!this.currentDepartment.id) {
      this.currentDepartment.id = 0;
    }

    if (!this.currentSite.id) {
      this.currentSite.id = 0;
    }

    if (!this.currentJobSite.id) {
      this.currentJobSite.id = 0;
    }

    // this.currentCompanyIdSelect = this.currentCompany.id;
    this.currentDepartmentIdSelect = this.currentDepartment.id;
    this.currentSiteIdSelect = this.currentSite.id;
    this.currentJobSiteIdSelect = this.currentJobSite.id;


    if (this._avRoute.snapshot.params['id']) {
      this.zoneLocationId = this._avRoute.snapshot.params['id'];
    }


    this.zonelocationForm = this._fb.group({
      id: [''],
      name: ['', [Validators.required]],
      status: ['1', [Validators.required]],
      levelId: ['0'],
      areaId: ['0'],
      locationId: ['0'],
      departmentId: [this.currentDepartment ? this.currentDepartment.id : '', [Validators.required]],
      siteId: [this.currentSite.id ? this.currentSite.id : '', [Validators.required]],
      jobSiteId: ['', [Validators.required]]
    });

    this.getDataCombobox();
  }

  async ngOnInit() {
    await this._zonelocationService.getZoneLocationById(this.zoneLocationId)
      .subscribe(res => {
        this.zonelocationCurrent = res.data;
        let jobsiteId = res.data.jobSiteId;
        this._zonelocationService.GetByJobsiteId(jobsiteId)
          .subscribe(res => {
            this.zonelocationForm.patchValue({
              siteId: res.data.siteId,
              departmentId: res.data.departmentId,
              jobSiteId: jobsiteId
            });
          },
            error => this.errorMessage = error);

        let status;
        if (res.data.status == 'Active') {
          status = 1;
        }
        else {
          status = 2;
        }

        this.zonelocationForm.patchValue({
          id: this.zoneLocationId,
          name: res.data.name,
          status: status,
          levelId: res.data.levelId,
          areaId: res.data.areaId,
          locationId: res.data.locationId,
          // jobSiteId: res.data.jobSiteId,
          // departmentId: ['0'],
          // siteId: ['0']
        });
      },
        error => this.errorMessage = error);

  }

  getDataCombobox() {
    this.getListDepartment();
    this.getListSite();
    this.getListJobSite();
    this.getListLevel();
    this.getListArea();
    this.getListLocation();
  }


  getListDepartment() {
    this._jobsiteService.getListDepartment(this.currentCompany.id).subscribe(
      result => {
        this.listDepartment = result.data;
      }
    );
  }

  getListSite() {
    this._jobsiteService.getListSite(this.currentCompany.id, this.currentDepartment.id).subscribe(
      result => {
        this.listSite = result.data;
      }
    );
  }

  getListJobSite() {
    this._jobsiteService.getCount(this.currentCompany.id, this.currentDepartment.id, this.currentSite.id, this.filterByName).subscribe(
      result => {
        this.listJobSite = result.data;
      }
    );
  }

  onSelectDepartment(departmentid) {
    this.currentDepartment = this.listDepartment.find(item => item.id == departmentid);
    if (!this.currentDepartment) {
      this.currentDepartment = {
        id: 0
      };
    }
  }

  onSelectSite(siteid) {
    this.currentSite = this.listSite.find(item => item.id == siteid);
    if (!this.currentSite) {
      this.currentSite = {
        id: 0
      };
    }
  }

  update() {
    if (!this.zonelocationForm.valid) {
      return;
    }
    this._zonelocationService.updateZoneLocation(this.zonelocationForm.value)
      .subscribe((res) => {
        this._notificationService.SuccessNotification('Update Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/zone-location/']);
        }, 3000);
      }
        , error => {
          this._notificationService.ErrorNotification('Create Failure. Try again!');
          this.errorMessage = error;
        });
  }

  delete() {
    this._zonelocationService.deleteZoneLocation(this.zoneLocationId)
      .subscribe((res) => {
        if (!res.success) {
          this._notificationService.ErrorNotification(res.message);
          return;
        }
        this._notificationService.SuccessNotification('Delete Successfully');
        setTimeout(() => {
          this._router.navigate(['/company/job-site/detail/zone-location/']);
        }, 2000);
      }

        , error => {
          this._notificationService.ErrorNotification('Delete Failure. Try again!');
          this.errorMessage = error;
        });
  }

  //List Level
  getListLevel() {
    this._levelService.getCount(this.zoneLocationId, this.searchLevel).subscribe(
      result => {
        this.listLevel = result.data;
      }
    );
  }

  //List Area
  getListArea() {
    this._areaService.getCount(this.zoneLocationId, this.searchArea).subscribe(
      result => {
        this.listArea = result.data;
      }
    );
  }

  //List Location
  getListLocation() {
    this._locationService.getCount(this.zoneLocationId, this.searchLocation).subscribe(
      result => {
        this.listLocation = result.data;
      }
    );
  }

  get name() { return this.zonelocationForm.get('name'); }
  get status() { return this.zonelocationForm.get('status'); }
  get levelId() { return this.zonelocationForm.get('levelId'); }
  get areaId() { return this.zonelocationForm.get('areaId'); }
  get locationId() { return this.zonelocationForm.get('locationId'); }
  get departmentId() { return this.zonelocationForm.get('departmentId'); }
  get siteId() { return this.zonelocationForm.get('siteId'); }
  get jobSiteId() { return this.zonelocationForm.get('jobSiteId'); }

}
