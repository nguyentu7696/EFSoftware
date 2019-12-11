export const constant = {
    API_GET_LIST_GLOBAL_HOLIDAYS: 'api/PublicHoliday/GetAll',
    API_GET_GLOBAL_HOLIDAYS_PAGING: 'api/PublicHoliday/GetAllPaging',
    API_GET_LIST_GLOBAL_HOLIDAYS_WITH_COUNTRY_YEAR: 'api/PublicHoliday/GetAllWithCountryAndYear',
    API_GET_LIST_GLOBAL_HOLIDAYS_WITH_COUNTRY_YEAR_PAGING: 'api/PublicHoliday/GetAllPagingWithCountryAndYear',
    API_ADD_GLOBAL_HOLIDAYS: 'api/PublicHoliday/Add',
    API_UPDATE_GLOBAL_HOLIDAYS: 'api/PublicHoliday/Update',
    API_DELETE_GLOBAL_HOLIDAYS: 'api/PublicHoliday/Delete',

    API_GET_LIST_COMPANY: 'api/CompanyBasicInfo/GetAll',
    API_GET_COMPANY_PAGING: 'api/CompanyBasicInfo/GetAllPaging',
    API_ADD_COMPANY: 'api/CompanyBasicInfo/Add',
    API_UPDATE_COMPANY: 'api/CompanyBasicInfo/Update',
    API_DELETE_COMPANY: 'api/CompanyBasicInfo/Delete',

    API_GET_LIST_DEPARTMENT: 'api/Department/GetAll',
    API_GET_DEPARTMENT_PAGING: 'api/Department/GetAllPaging',
    API_GET_LIST_DEPARTMENT_WITH_COMPANY: 'api/Department/GetAllWithCompany',
    API_GET_DEPARTMENT_PAGING_WITH_COMPANY: 'api/Department/GetAllPagingWithCompany',
    API_ADD_DEPARTMENT: 'api/Department/Add',
    API_UPDATE_DEPARTMENT: 'api/Department/Update',
    API_DELETE_DEPARTMENT: 'api/Department/Delete',

    API_GET_LIST_SITE_FOR_COMPANY: 'api/TMSsite/GetAllForCompany',
    API_GET_SITE_PAGING_FOR_COMPANY: 'api/TMSsite/GetAllPagingForCompany',
    API_ADD_SITE: 'api/TMSsite/Add',
    API_UPDATE_SITE: 'api/TMSsite/Update',
    API_DELETE_SITE: 'api/TMSsite/Delete',
    API_GET_LIST_SITE_FOR_DEPARTMENT: 'api/TMSsite/GetListSite',
    API_GET_SITE_PAGING_FOR_DEPARTMENT: 'api/TMSsite/GetListSitePaging',
    API_GET_SITE_DETAIL: 'api/TMSsite/GetById/',


    API_GET_LIST_RESIGN_REASON: 'api/TMSResignReason/GetAll',
    API_GET_RESIGN_REASON_PAGING: 'api/TMSResignReason/GetAllPaging',
    API_GET_LIST_RESIGN_REASON_WITH_COMPANY: 'api/TMSResignReason/GetAllWithCompany',
    API_GET_RESIGN_REASON_PAGING_WITH_COMPANY: 'api/TMSResignReason/GetAllPagingWithCompany',
    API_ADD_RESIGN_REASON: 'api/TMSResignReason/Add',
    API_UPDATE_RESIGN_REASON: 'api/TMSResignReason/Update',
    API_DELETE_RESIGN_REASON: 'api/TMSResignReason/Delete',
    API_GET_RESIGN_REASON_BY_ID: 'api/TMSResignReason/GetById/',

    API_GET_LIST_GLOBAL_ATTENDANCE: 'api/Attendance/GetAll',
    API_GET_GLOBAL_ATTENDANCE_ALL_ACTIVE: 'api/Attendance/GetAllActive',
    API_UPLOAD_FILE_IMAGE: 'api/Image/Upload',

    API_GET_LIST_PUBLIC_HOLIDAY: 'api/TMSPublicHoliday/GetAll',
    API_GET_PUBLIC_HOLIDAY_PAGING: 'api/TMSPublicHoliday/GetAllPaging',
    API_GET_LIST_PUBLIC_HOLIDAY_WITH_COMPANY: 'api/TMSPublicHoliday/GetAllWithCompany',
    API_GET_PUBLIC_HOLIDAY_PAGING_WITH_COMPANY: 'api/TMSPublicHoliday/GetAllPagingWithCompany',
    API_ADD_PUBLIC_HOLIDAY: 'api/TMSPublicHoliday/Add',
    API_UPDATE_PUBLIC_HOLIDAY: 'api/TMSPublicHoliday/Update',
    API_DELETE_PUBLIC_HOLIDAY: 'api/TMSPublicHoliday/Delete',
    API_GET_PUBLIC_HOLIDAY_BY_ID: 'api/TMSPublicHoliday/GetById/',

    API_GET_LIST_GLOBAL_PUBLIC_HOLIDAY: 'api/PublicHoliday/GetAllWithEvent',

    API_ADD_RACE: 'api/TMSRace/Add',
    API_GET_RACE_BY_ID: 'api/TMSRace/GetById/',
    API_UPDATE_RACE: 'api/TMSRace/Update',
    API_GET_RACE_PAGING: 'api/TMSRace/GetAllPagingWithCompany',
    API_GET_LIST_RACE_WITH_COMPANY: 'api/TMSRace/GetAllWithCompany',
    API_GET_ALL: 'api/TMSRace/GetAll',
    API_GET_ALL_PAGING: 'api/TMSRace/GetAllPaging',

    API_ADD_OT_CODE: 'api/TMSOtCode/Add',
    API_UPDATE_OT_CODE: 'api/TMSOtCode/Update',
    API_DELETE_OT_CODE: 'api/TMSOtCode/Delete',
    API_GET_ALL_OT_CODE: 'api/TMSOtCode/GetAll',
    API_GET_ALL_PAGING_OT_CODE: 'api/TMSOtCode/GetAllPaging',
    API_GET_ALL_PAGING_OT_CODE_WITH_COMPANY: 'api/TMSOtCode/GetAllPagingWithCompany',
    API_GET_ALL_OT_CODE_WITH_COMPANY: 'api/TMSOtCode/GetAllWithCompany',
    API_GET_ID_OT_CODE: 'api/TMSOtCode/GetById/',
    API_GET_OT_CODE_ACTIVE: 'api/TMSOtCode/GetAllActive',

    API_GET_LIST_ALLOWANCE: 'api/TMSAllowance/GetAll',
    API_GET_ALLOWANCE_PAGING: 'api/TMSAllowance/GetAllPaging',
    API_GET_LIST_ALLOWANCE_WITH_COMPANY: 'api/TMSAllowance/GetAllWithCompany',
    API_GET_ALLOWANCE_PAGING_WITH_COMPANY: 'api/TMSAllowance/GetAllPagingWithCompany',
    API_ADD_ALLOWANCE: 'api/TMSAllowance/Add',
    API_UPDATE_ALLOWANCE: 'api/TMSAllowance/Update',
    API_DELETE_ALLOWANCE: 'api/TMSAllowance/Delete',
    API_GET_ALLOWANCE_BY_ID: 'api/TMSAllowance/GetById/',
    API_GET_ALLOWANCE_COMPANY_ACTIVE: 'api/TMSAllowance/GetAllActive',

    API_ADD_OT_SETTING: 'api/TMSOtSetting/Add',
    API_ADD_FROM_COMPANY_OT_CODE: 'api/TMSOtSetting/AddFromCompany',
    API_UPDATE_OT_SETTING: 'api/TMSOtSetting/Update',
    API_DELETE_OT_SETTING: 'api/TMSOtSetting/Delete',
    API_GET_ALL_OT_SETTING: 'api/TMSOtSetting/GetAll',
    API_GET_ALL_PAGING_OT_SETTING: 'api/TMSOtSetting/GetAllPaging',
    API_GET_ALL_OT_SETTING_WITH_COMPANY: 'api/TMSOtSetting/GetAllWithCompany',
    API_GET_ALL_PAGING_OT_SETTING_WITH_COMPANY: 'api/TMSOtSetting/GetAllPagingWithCompany',
    API_GET_ALL_OT_SETTING_WITH_JOBSITE: 'api/TMSOtSetting/GetAllWithJobSite',
    API_GET_ALL_PAGING_OT_SETTING_WITH_JOBSITE: 'api/TMSOtSetting/GetAllPagingWithJobSite',
    API_GET_OT_SETTING_BY_ID: 'api/TMSOtSetting/GetById/',

    API_ADD_ALLOWANCE_JOBSITE: 'api/TMSAllowanceJobsite/Add',
    API_ADD_FROM_COMPANY_ALLOWANCE_JOBSITE: 'api/TMSAllowanceJobsite/AddFromCompany',
    API_UPDATE_ALLOWANCE_JOBSITE: 'api/TMSAllowanceJobsite/Update',
    API_DELETE_ALLOWANCE_JOBSITE: 'api/TMSAllowanceJobsite/Delete',
    API_GET_ALL_ALLOWANCE_JOBSITE: 'api/TMSAllowanceJobsite/GetAll',
    API_GET_ALL_PAGING_ALLOWANCE_JOBSITE: 'api/TMSAllowanceJobsite/GetAllPaging',
    API_GET_ALL_ALLOWANCE_JOBSITE_WITH_COMPANY: 'api/TMSAllowanceJobsite/GetAllWithCompany',
    API_GET_ALL_PAGING_ALLOWANCE_JOBSITE_WITH_COMPANY: 'api/TMSAllowanceJobsite/GetAllPagingWithCompany',
    API_GET_ALL_ALLOWANCE_JOBSITE_WITH_JOBSITE: 'api/TMSAllowanceJobsite/GetAllWithJobsite',
    API_GET_ALL_PAGING_ALLOWANCE_JOBSITE_WITH_JOBSITE: 'api/TMSAllowanceJobsite/GetAllPagingWithJobsite',
    API_GET_ALLOWANCE_JOBSITE_BY_ID: 'api/TMSAllowanceJobsite/GetById/',

    API_ADD_shift: 'api/TMSShift/Add',
    API_UPDATE_shift: 'api/TMSShift/Update',
    API_DELETE_shift: 'api/TMSShift/Delete',
    API_GET_shift_BY_ID: 'api/TMSShift/GetById/',
    API_GET_ALL_shift_WITH_COMPANY: 'api/TMSShift/GetAllWithCompany',
    API_GET_ALL_PAGING_shift_WITH_COMPANY: 'api/TMSShift/GetAllPagingWithCompany',

    // Zone Location
    API_ADD_ZONE_LOCATION: 'api/TMSZoneLocation/Add',
    API_UPDATE_ZONE_LOCATION: 'api/TMSZoneLocation/Update',
    API_DELETE_ZONE_LOCATION: 'api/TMSZoneLocation/Delete',
    API_GET_LIST_ZONE_LOCATION_WITH_JOBSITE: 'api/TMSZoneLocation/GetListWithJobSite',

    // OT MaxSetting
    API_GET_OT_MAX_SETTING_BY_JOBSITE: 'api/TMSOtMaxTime/GetWithJobSite',
    API_UPDATE_OT_MAX_SETTING: 'api/TMSOtMaxTime/Update',
    API_ADD_OT_MAX_SETTING: 'api/TMSOtMaxTime/Add',

    // level
    API_ADD_LEVEL: 'api/TMSLevel/Add',
    API_UPDATE_LEVEL: 'api/TMSLevel/Update',
    API_DELETE_LEVEL: 'api/TMSLevel/Delete',
    API_GET_LEVEL_BY_ID: 'api/TMSLevel/GetById/',
    API_GET_ALL_LEVEL_WITH_ZONE_LOCATION: 'api/TMSLevel/GetAllWithZoneLocation',
    API_GET_LIST_LEVEL_WITH_ZONE_LOCATION: 'api/TMSLevel/GetAllPagingWithZoneLocation',
    // API_GET_ALL: 'api/TMSRace/GetAll',
    // API_GET_ALL_PAGING: 'api/TMSRace/GetAllPaging',

    // area
    API_ADD_AREA: 'api/TMSArea/Add',
    API_UPDATE_AREA: 'api/TMSArea/Update',
    API_DELETE_AREA: 'api/TMSArea/Delete',
    API_GET_AREA_BY_ID: 'api/TMSArea/GetById/',
    API_GET_ALL_AREA_WITH_ZONE_LOCATION: 'api/TMSArea/GetAllWithZoneLocation',
    API_GET_LIST_AREA_WITH_ZONE_LOCATION: 'api/TMSArea/GetAllPagingWithZoneLocation',
    // API_GET_ALL: '',
    // API_GET_ALL_PAGING: '',

    // Location
    API_ADD_LOCATION: 'api/TMSLocation/Add',
    API_UPDATE_LOCATION: 'api/TMSLocation/Update',
    API_DELETE_LOCATION: 'api/TMSLocation/Delete',
    API_GET_LOCATION_BY_ID: 'api/TMSLocation/GetById/',
    API_GET_ALL_LOCATION_WITH_ZONE_LOCATION: 'api/TMSLocation/GetAllWithZoneLocation',
    API_GET_LIST_LOCATION_WITH_ZONE_LOCATION: 'api/TMSLocation/GetAllPagingWithZoneLocation',

    // Zone
    API_ADD_ZONE: 'api/TMSZone/Add',
    API_UPDATE_ZONE: 'api/TMSZone/Update',
    API_DELETE_ZONE: 'api/TMSZone/Delete',
    API_GET_ZONE_BY_ID: 'api/TMSZone/GetById/',
    API_GET_ALL_ZONE_WITH_ZONE_LOCATION: 'api/TMSZone/GetAllWithZoneLocation',
    API_GET_LIST_ZONE_WITH_ZONE_LOCATION: 'api/TMSZone/GetAllPagingWithZoneLocation',

    // Shift
    API_ADD_SHIFT: 'api/TMSShiftJobSite/Add',
    API_UPDATE_SHIFT: 'api/TMSShiftJobSite/Update',
    API_DELETE_SHIFT: 'api/TMSShiftJobSite/Delete',
    API_GET_SHIFT_BY_ID: 'api/TMSShiftJobSite/GetById/',
    API_GET_ALL_SHIFT_WITH_JOB_SITE: 'api/TMSShiftJobSite/GetAllWithJobSite',
    API_GET_LIST_SHIFT_WITH_JOB_SITE: 'api/TMSShiftJobSite/GetAllPagingWithJobSite',
    API_GET_ALL_SHIFT_WITH_JOB_SITE_Roster: 'api/TMSShiftJobSite/GetAllWithJobSiteRoster',

    // Roster
    API_SAVE_ROSTER_FOR_MONTH: 'api/TMSRoster/SaveForMonth',
    API_SAVE_DUPLICATE_ROSTER: 'api/TMSRoster/SaveDuplicate',
    API_UPDATE_ROSTER: 'api/TMSRoster/Update',
    API_GET_ROSTER_DETAIL: 'api/TMSRoster/GetDetailRoster/',
    API_GET_ROSTER_BY_MONTH: 'api/TMSRoster/GetByForMonth',

    // EventPromotion
    API_ADD_EVENT_PROMOTION: 'api/TMSEventPromotion/Add',
    API_UPDATE_EVENT_PROMOTION: 'api/TMSEventPromotion/Update',
    API_GET_ID_EVENT_PROMOTION: 'api/TMSEventPromotion/GetByEmployeeId/',

    // EventTerminationResign
    API_ADD_EVENT_TERMINATION_RESIGN: 'api/TMSEventTR/Add',
    API_UPDATE_EVENT_TERMINATION_RESIGN: 'api/TMSEventTR/Update',
    API_GET_ID_EVENT_TERMINATION_RESIGN: 'api/TMSEventTR/GetByEmployeeId/',

    // EventRejoin
    API_ADD_EVENT_REJOIN: 'api/TMSEventRejoin/Add',
    API_UPDATE_EVENT_REJOIN: 'api/TMSEventRejoin/Update',
    API_GET_ID_EVENT_REJOIN: 'api/TMSEventRejoin/GetByEmployeeId/',

    // EventContract
    API_ADD_EVENT_CONTRACT: 'api/TMSEventContract/Add',
    API_UPDATE_EVENT_CONTRACT: 'api/TMSEventContract/Update',
    API_GET_ID_EVENT_CONTRACT: 'api/TMSEventContract/GetByEmployeeId/',

    // EventTransfer
    API_ADD_EVENT_TRANSFER: 'api/TMSEventTransfer/Add',
    API_UPDATE_EVENT_TRASNFER: 'api/TMSEventTransfer/Update',
    API_GET_ID_EVENT_TRANSFER: 'api/TMSEventTransfer/GetByEmployeeId/',
};
