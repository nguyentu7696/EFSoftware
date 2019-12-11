// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using AutoMapper;
using EFSoftware.Models;
using EFSoftware.Models.Models;
using EFSoftware.Service;
using EFSoftware.Service.Interfaces.ViewModels;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFSoftware.ViewModels
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<ApplicationUser, UserViewModel>()
                   .ForMember(d => d.Roles, map => map.Ignore());
            CreateMap<UserViewModel, ApplicationUser>()
                .ForMember(d => d.Roles, map => map.Ignore());

            CreateMap<ApplicationUser, UserEditViewModel>()
                .ForMember(d => d.Roles, map => map.Ignore());
            CreateMap<UserEditViewModel, ApplicationUser>()
                .ForMember(d => d.Roles, map => map.Ignore());

            CreateMap<ApplicationUser, UserPatchViewModel>()
                .ReverseMap();

            CreateMap<ApplicationRole, RoleViewModel>()
                .ForMember(d => d.Permissions, map => map.MapFrom(s => s.Claims))
                .ForMember(d => d.UsersCount, map => map.MapFrom(s => s.Users != null ? s.Users.Count : 0))
                .ReverseMap();
            CreateMap<RoleViewModel, ApplicationRole>();

            CreateMap<IdentityRoleClaim<string>, ClaimViewModel>()
                .ForMember(d => d.Type, map => map.MapFrom(s => s.ClaimType))
                .ForMember(d => d.Value, map => map.MapFrom(s => s.ClaimValue))
                .ReverseMap();

            CreateMap<ApplicationPermission, PermissionViewModel>()
                .ReverseMap();

            CreateMap<IdentityRoleClaim<string>, PermissionViewModel>()
                .ConvertUsing(s => Mapper.Map<PermissionViewModel>(ApplicationPermissions.GetPermissionByValue(s.ClaimValue)));

            CreateMap<Attendance, AttendanceViewModel>()
                .ReverseMap();

            CreateMap<AttendanceViewModel, Attendance>();

            CreateMap<Attendance, AttendanceCreateViewModel>()
                .ReverseMap();

            CreateMap<AttendanceCreateViewModel, Attendance>()
                .ReverseMap();

            CreateMap<PublicHoliday, PublicHolidayViewModel>()
                .ReverseMap();

            CreateMap<PublicHolidayViewModel, PublicHoliday>()
                .ReverseMap();

            CreateMap<PublicHoliday, PublicHolidayWithEventViewModel>()
                .ReverseMap();

            CreateMap<PublicHolidayWithEventViewModel, PublicHoliday>()
                .ReverseMap();

            CreateMap<Department, DepartmentViewModel>()
                .ReverseMap();

            CreateMap<DepartmentViewModel, Department>()
                .ReverseMap();

            CreateMap<CompanyBasicInfo, CompanyBasicInfoViewModel>()
                .ReverseMap();

            CreateMap<CompanyBasicInfoViewModel, CompanyBasicInfo>()
                .ReverseMap();

            CreateMap<ApplicationUser, ApplicationUserViewModel>()
                .ReverseMap();

            CreateMap<ApplicationUserViewModel, ApplicationUser>()
                .ReverseMap();

            CreateMap<TMSsite, TMSsiteViewModel>()
                .ReverseMap();

            CreateMap<TMSsiteViewModel, TMSsite>()
                .ReverseMap();

            CreateMap<TMSJobSite, TMSJobSiteViewModel>()
                .ReverseMap();

            CreateMap<TMSJobSiteViewModel, TMSJobSite>()
                .ReverseMap();

            CreateMap<JobSiteViewModel, TMSJobSite>()
                .ReverseMap();

            CreateMap<TMSJobSite, JobSiteViewModel>()
                .ReverseMap();

            CreateMap<JobSiteUpdateModel, TMSJobSite>()
                .ReverseMap();

            CreateMap<TMSJobSite, JobSiteUpdateModel>()
                .ReverseMap();


            CreateMap<TMSResignReason, TMSResignReasonViewModel>()
           .ReverseMap();

            CreateMap<TMSResignReasonViewModel, TMSResignReason>()
                .ReverseMap();

            CreateMap<TMSAttendance, TMSAttendanceViewModel>()
           .ReverseMap();

            CreateMap<TMSAttendanceViewModel, TMSAttendance>()
                .ReverseMap();

            CreateMap<TMSAttendance, TMSAttendanceCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSAttendanceCreateViewModel, TMSAttendance>()
                .ReverseMap();

            CreateMap<TMSPublicHoliday, TMSPublicHolidayViewModel>()
                .ReverseMap();

            CreateMap<TMSPublicHolidayViewModel, TMSPublicHoliday>()
                .ReverseMap();

            CreateMap<TMSPublicHoliday, TMSPublicHolidayCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSPublicHolidayCreateViewModel, TMSPublicHoliday>()
                .ReverseMap();

            CreateMap<TMSRace, TMSRaceViewModel>()
                .ReverseMap();

            CreateMap<TMSRaceViewModel, TMSRace>()
                .ReverseMap();

            CreateMap<TMSRace, TMSRaceCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSRaceCreateViewModel, TMSRace>()
                .ReverseMap();

            CreateMap<TMSEmployee, TMSEmployeeViewModel>()
                .ReverseMap();

            CreateMap<TMSEmployeeViewModel, TMSEmployee>()
                .ReverseMap();

            CreateMap<TMSEmployee, TMSEmployeeCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSEmployeeCreateViewModel, TMSEmployee>()
                .ReverseMap();

            CreateMap<TMSOtCode, TMSOtCodeViewModel>()
                .ReverseMap();

            CreateMap<TMSOtCodeViewModel, TMSOtCode>()
                .ReverseMap();

            CreateMap<TMSOtCode, TMSOtCodeGetIdViewModel>()
                .ReverseMap();

            CreateMap<TMSOtCodeGetIdViewModel, TMSOtCode>()
                .ReverseMap();

            CreateMap<TMSOtCode, TMSOtCodeCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSOtCodeCreateViewModel, TMSOtCode>()
                .ReverseMap();

            CreateMap<TMSAllowance, TMSAllowanceViewModel>()
                .ReverseMap();

            CreateMap<TMSAllowanceViewModel, TMSAllowance>()
                .ReverseMap();

            CreateMap<TMSOtSetting, TMSOtSettingCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSOtSettingCreateViewModel, TMSOtSetting>()
                .ReverseMap();

            CreateMap<TMSOtSetting, TMSOtSettingViewModel>()
                .ReverseMap();

            CreateMap<TMSOtSettingViewModel, TMSOtSetting>()
                .ReverseMap();

            CreateMap<TMSOtSetting, TMSOtSettingGetIdViewModel>()
                .ReverseMap();

            CreateMap<TMSOtSettingGetIdViewModel, TMSOtSetting>()
                .ReverseMap();

            CreateMap<TMSAllowanceJobsite, TMSAllowanceJobsiteViewModel>()
                .ReverseMap();

            CreateMap<TMSAllowanceJobsiteViewModel, TMSAllowanceJobsite>()
                .ReverseMap();

            CreateMap<TMSAllowanceJobsite, TMSAllowanceJobsiteCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSAllowanceJobsiteCreateViewModel, TMSAllowanceJobsite>()
                .ReverseMap();

            CreateMap<TMSShift, TMSShiftViewModel>()
                .ReverseMap();

            CreateMap<TMSShift, TMSShiftViewModelV2>()
                .ReverseMap();

            CreateMap<TMSShiftViewModel, TMSShift>()
                .ReverseMap();

            CreateMap<TMSZoneLocation, TMSZoneLocationViewModel>()
                .ReverseMap();

            CreateMap<TMSZoneLocationViewModel, TMSZoneLocation>()
                .ReverseMap();

            CreateMap<TMSZoneLocation, TMSZoneLocationCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSZoneLocationCreateViewModel, TMSZoneLocation>()
                .ReverseMap();

            CreateMap<TMSOtMaxTimeCreateViewModel, TMSOtMaxTime>()
              .ReverseMap();

            CreateMap<TMSOtMaxTimeViewModel, TMSOtMaxTime>()
              .ReverseMap();

            CreateMap<TMSOtMaxTime, TMSOtMaxTimeViewModel>()
            .ReverseMap();

            CreateMap<TMSLevel, TMSLevelViewModel>()
                .ReverseMap();

            CreateMap<TMSLevelViewModel, TMSLevel>()
                .ReverseMap();

            CreateMap<TMSLevel, TMSLevelCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSLevelCreateViewModel, TMSLevel>()
                .ReverseMap();

            CreateMap<TMSArea, TMSAreaViewModel>()
                .ReverseMap();

            CreateMap<TMSAreaViewModel, TMSArea>()
                .ReverseMap();

            CreateMap<TMSArea, TMSAreaCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSAreaCreateViewModel, TMSArea>()
                .ReverseMap();

            CreateMap<TMSLocation, TMSLocationViewModel>()
                .ReverseMap();

            CreateMap<TMSLocationViewModel, TMSLocation>()
                .ReverseMap();

            CreateMap<TMSLocation, TMSLocationCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSLocationCreateViewModel, TMSLocation>()
                .ReverseMap();

            CreateMap<TMSLocation, TMSLocationGetIdViewModel>()
                .ReverseMap();

            CreateMap<TMSZone, TMSZoneViewModel>()
                .ReverseMap();

            CreateMap<TMSZoneViewModel, TMSZone>()
                .ReverseMap();

            CreateMap<TMSZone, TMSZoneCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSZoneCreateViewModel, TMSZone>()
                .ReverseMap();

            CreateMap<TMSZone, TMSZoneListViewModel>()
                .ReverseMap();

            CreateMap<TMSZoneListViewModel, TMSZone>()
                .ReverseMap();

            CreateMap<TMSShiftJobSite, TMSShiftJobSiteViewModel>()
                .ReverseMap();

            CreateMap<TMSShiftJobSiteViewModel, TMSShiftJobSite>()
                .ReverseMap();

            CreateMap<TMSShiftJobSiteCreateViewModel, TMSShiftJobSite>()
                .ReverseMap();

            CreateMap<TMSEmployeeLogTime, TMSEmployeeLogTimeViewModel>()
                .ReverseMap();

            CreateMap<TMSEmployeeLogTimeViewModel, TMSEmployeeLogTime>()
                .ReverseMap();


            CreateMap<TMSEventPromotion, TMSEventPromotionViewModel>()
                .ReverseMap();

            CreateMap<TMSEventPromotionViewModel, TMSEventPromotion>()
                .ReverseMap();

            CreateMap<TMSEventPromotion, TMSEventPromotionCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSEventPromotionCreateViewModel, TMSEventPromotion>()
                .ReverseMap();


            CreateMap<TMSEventTerminationResign, TMSEventTerminationResignViewModel>()
                .ReverseMap();

            CreateMap<TMSEventTerminationResignViewModel, TMSEventTerminationResign>()
                .ReverseMap();

            CreateMap<TMSEventTerminationResign, TMSEventCreateTRViewModel>()
                .ReverseMap();

            CreateMap<TMSEventCreateTRViewModel, TMSEventTerminationResign>()
                .ReverseMap();


            CreateMap<TMSEventTransfer, TMSEventTransferViewModel>()
                .ReverseMap();

            CreateMap<TMSEventTransferViewModel, TMSEventTransfer>()
                .ReverseMap();

            CreateMap<TMSEventTransfer, TMSEventTransferCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSEventTransferCreateViewModel, TMSEventTransfer>()
                .ReverseMap();


            CreateMap<TMSEventContract, TMSEventContractViewModel>()
                .ReverseMap();

            CreateMap<TMSEventContractViewModel, TMSEventContract>()
                .ReverseMap();

            CreateMap<TMSEventContract, TMSEventContractCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSEventContractCreateViewModel, TMSEventContract>()
                .ReverseMap();

            CreateMap<TMSEventRejoin, TMSEventRejoinViewModel>()
               .ReverseMap();

            CreateMap<TMSEventRejoinViewModel, TMSEventRejoin>()
                .ReverseMap();

            CreateMap<TMSEventRejoin, TMSEventRejoinCreateViewModel>()
                .ReverseMap();

            CreateMap<TMSEventRejoinCreateViewModel, TMSEventRejoin>()
                .ReverseMap();

            CreateMap<TMSRosterViewModel, TMSRoster>()
                .ReverseMap();

        }
    }
}
