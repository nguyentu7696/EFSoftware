import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStorage {

    public storage: any;

    static currentPublicHoliday: any = {};

    static  currentDepartment: any = {};

    static currentSite: any = {};

    //static currentDepartmentForSite: any = {};

    static currentCompany: any = {};

    static shiftCodeMain: any = {};

    //static currentSiteForJobSite: any = {};

    static currentJobSite: any = {};

    //static currentJobSiteForEmployee: any = {};

    static currentEmployee: any = {};

    //static currentJobSiteForZoneLocation: any = {};

    static currentZoneLocation: any = {};

    static currentUserLogin: any = {};

    private _currentCompanyStatic = new BehaviorSubject<any>({});
    currentCompanyStatic: Observable<boolean> = this._currentCompanyStatic.asObservable();

    public constructor() { }

    static setCurrentCompany(company) {
        DataStorage.currentCompany = Object.assign({}, company)
    }

    static getCurrentCompany() {
        return Object.assign({},DataStorage.currentCompany);
    }
  
    static setCurrentDepartment(department) {
        DataStorage.currentDepartment = Object.assign({}, department)
    }

    static getCurrentDepartment() {
        return Object.assign({},DataStorage.currentDepartment);
    }

    static setCurrentSite(site) {
        DataStorage.currentSite = Object.assign({}, site)
    }

    static getCurrentSite() {
        return Object.assign({},DataStorage.currentSite);
    }

    static setCurrentJobSite(jobsite) {
        DataStorage.currentJobSite = Object.assign({}, jobsite)
    }

    static getCurrentJobSite() {
        return Object.assign({},DataStorage.currentJobSite);
    }

    static setCurrentUserLogin(useritem) {
        DataStorage.currentUserLogin = Object.assign({}, useritem)
    }

    static getCurrentUserLogin() {
        return Object.assign({},DataStorage.currentUserLogin);
    }

    static setCurrentZoneLocation(zonelocation) {
        DataStorage.currentZoneLocation = Object.assign({}, zonelocation);
    }

    static getCurrentZoneLocation() {
        return Object.assign({}, DataStorage.currentZoneLocation);
    }

}