using AutoMapper;
using AutoMapper.QueryableExtensions;
using EFSoftware.Core;
using EFSoftware.Core.Shared;
using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Repositories.Interfaces;
using EFSoftware.Repository.Interfaces;
using EFSoftware.Service.Interfaces;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EFSoftware.Service
{
    public class TMSRosterService : ITMSRosterService
    {
        #region CTO

        private IUnitOfWork _unitOfWork;
        private ITMSRosterRepository _rosterRepository;
        private ITMSShiftJobSiteRepository _shiftJobSiteRepository;
        private ITMSShiftRepository _tMSShiftRepository;
        private ITMSOtSettingRepository _otSettingRepository;
        private ITMSAttendanceRepository _attendanceRepository;
        private readonly IMapper _mapper;

        public TMSRosterService(IUnitOfWork unitOfWork, ITMSRosterRepository rosterRepository, ITMSShiftJobSiteRepository shiftJobSiteRepository,
            ITMSOtSettingRepository otSettingRepository, ITMSAttendanceRepository attendanceRepository, IMapper mapper, ITMSShiftRepository tMSShiftRepository)
        {
            _unitOfWork = unitOfWork;
            _rosterRepository = rosterRepository;
            _shiftJobSiteRepository = shiftJobSiteRepository;
            _otSettingRepository = otSettingRepository;
            _attendanceRepository = attendanceRepository;
            _mapper = mapper;
            _tMSShiftRepository = tMSShiftRepository;
        }

        #endregion CTO

        #region GET

        public List<TMSRosterViewModel> GetAll()
        {
            var data = _rosterRepository.GetAll().ToList();
            return _mapper.Map<List<TMSRoster>, List<TMSRosterViewModel>>(data);
        }

        public TMSRosterViewModel GetDetailRoster(int employeeId, DateTime date)
        {
            var model = _rosterRepository.Find(x => x.EmployeeId == employeeId && x.Date == date.Date).FirstOrDefault();
            var dataMapper = _mapper.Map<TMSRoster, TMSRosterViewModel>(model);
            dataMapper.Id = model.Id;
            dataMapper.StartTime = model.StartTime;
            dataMapper.EndTime = model.EndTime;
            return dataMapper;
        }


        public List<RosterData> GetByForMonth(DateTime startDate, DateTime endDate, int employeeId, int compnayId, int jobsiteId)
        {
            int sumDayOfEndTime = DateTime.DaysInMonth(endDate.Year, endDate.Month);
            var startTime = new DateTime(startDate.Year, startDate.Month, 1, 0, 0, 0);
            var endTime = new DateTime(endDate.Year, endDate.Month, sumDayOfEndTime, 0, 0, 0);

            var data = _rosterRepository.Find(x => x.EmployeeId == employeeId && x.Date >= startTime && x.Date <= endTime).ToList();
            // get list Shift Code
            var listShiftCode = _shiftJobSiteRepository.Find(x => x.JobSiteId == jobsiteId && x.DeleteFlag != DeleteFlg.Delete).ToList();

            //get list Shift Code 
            var listShiftCodeSource = _tMSShiftRepository.Find(x => x.CompanyId == compnayId && x.DeleteFlag != DeleteFlg.Delete).ToList();

            // get list Atendance
            var lstAtendance = _attendanceRepository.Find(x => x.CompanyId == compnayId && x.DeleteFlag != DeleteFlg.Delete).ToList();

            var result = ProcessDataForTime(employeeId, startTime, endTime, data, listShiftCode, lstAtendance, listShiftCodeSource);

            return result;
        }

        #endregion GET

        #region POST

        public TMSRoster Update(TMSRosterViewModel Vm)
        {
            var entity = _mapper.Map<TMSRosterViewModel, TMSRoster>(Vm);
            var date = new DateTime(Vm.Year, Vm.Month, Vm.Day, 0, 0, 0);

            //check exist
            var existItem = _rosterRepository.Find(x => x.EmployeeId == Vm.EmployeeId && x.Date == date).FirstOrDefault();
            if (existItem != null)
            {
                existItem.AttendanceId = Vm.AttendanceId;
                existItem.ShiftId = Vm.ShiftId;
                existItem.OtCodeId = Vm.OtCodeId;
                existItem.OtCodeValue = Vm.OtCodeValue;
                existItem.Remarks = Vm.Remarks;
                existItem.Type = Vm.Type;
                existItem.StartTime = Vm.StartTime;
                existItem.EndTime = Vm.EndTime;
                existItem.Type1 = Vm.Type1;
                existItem.StartTime1 = Vm.StartTime1;
                existItem.EndTime1 = Vm.EndTime1;
                existItem.Remarks1 = Vm.Remarks1;
                existItem.Type2 = Vm.Type2;
                existItem.StartTime2 = Vm.StartTime2;
                existItem.EndTime2 = Vm.EndTime2;
                existItem.Remarks2 = Vm.Remarks2;
                existItem.Type3 = Vm.Type3;
                existItem.StartTime3 = Vm.StartTime3;
                existItem.EndTime3 = Vm.EndTime3;
                existItem.Remarks3 = Vm.Remarks3;
                _rosterRepository.Update(existItem);
                entity.Id = existItem.Id;
                entity.Date = existItem.Date;
            }
            else
            {
                entity.Date = date;
                _rosterRepository.Add(entity);
            }
            //entity.Date = date;
            //_rosterRepository.Update(entity);
            SaveChanges();
            return entity;
        }

        public void SaveForMonth(List<TMSRosterViewModel> LstRosterChanged)
        {
            if (LstRosterChanged != null && LstRosterChanged.Count > 0)
            {
                for (int i = 0; i < LstRosterChanged.Count; i++)
                {
                    var employeeId = LstRosterChanged[i].EmployeeId;
                    var date = new DateTime(LstRosterChanged[i].Year, LstRosterChanged[i].Month, LstRosterChanged[i].Day, 0, 0, 0);
                    var checkExistItem = _rosterRepository.Find(x => x.Date == date && x.EmployeeId == employeeId).FirstOrDefault();
                    var entity = UpdateModelToEntity(LstRosterChanged[i], date);

                    if (checkExistItem != null)
                    {
                        checkExistItem.ShiftId = LstRosterChanged[i].ShiftId;
                        checkExistItem.AttendanceId = LstRosterChanged[i].AttendanceId;
                        checkExistItem.OtCodeId = LstRosterChanged[i].OtCodeId;
                        checkExistItem.OtCodeValue = LstRosterChanged[i].OtCodeValue;
                        checkExistItem.Remarks = LstRosterChanged[i].Remarks;
                        checkExistItem.Type = LstRosterChanged[i].Type;

                        _rosterRepository.Update(checkExistItem);
                    }
                    else
                    {
                        _rosterRepository.Add(entity);
                    }
                }

                SaveChanges();
            } 
        }

        public void SaveDuplicate(DuplicateModel Vm)
        {
            var data = _rosterRepository.Find(x => x.EmployeeId == Vm.EmployeeId && x.Date >= Vm.StartDate && x.Date <= Vm.EndDate).ToList();

            if (data != null && data.Count > 0)
            {
                for (var curDate = Vm.ToStartDate.Date; curDate <= Vm.ToEndDate.Date; curDate = curDate.AddDays(1))
                {
                    for (int i = 0; i < data.Count; i++)
                    {
                        if (data[i].Date.Month == curDate.Month && data[i].Date.Day == curDate.Day)
                        {
                            var entity = new TMSRoster();
                            entity.AttendanceId = data[i].AttendanceId;
                            entity.OtCodeId = data[i].OtCodeId;
                            entity.OtCodeValue = data[i].OtCodeValue;
                            entity.ShiftId = data[i].ShiftId;
                            entity.Type = data[i].Type;
                            entity.Remarks = data[i].Remarks;
                            entity.EmployeeId = data[i].EmployeeId;
                            entity.Date = curDate;
                            entity.StartTime = data[i].StartTime;
                            entity.EndTime = data[i].EndTime;

                            _rosterRepository.Add(entity);

                            break;
                        }
                    }
                }

                SaveChanges();
            }
        }

        #endregion POST


        private void SaveChanges()
        {
            _unitOfWork.SaveChanges();
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        private List<RosterData> ProcessDataForTime(int employeeId, DateTime startDate, DateTime endDate, List<TMSRoster> rowData, 
            List<TMSShiftJobSite> lstShiftJobSite, List<TMSAttendance> lstAtendance, List<TMSShift> lstShiftCode)
        {
            var result = new List<RosterData>();
            var lstRosterData = new List<TMSRosterViewModel>();
            TMSRosterViewModel model = null;

            for (var curDate = startDate; curDate.Date <= endDate; curDate = curDate.AddDays(1))
            {
                if (rowData != null && rowData.Count > 0)
                {
                    for (int i = 0; i < rowData.Count; i++)
                    {
                        if (rowData[i].Date == curDate)
                        {
                            var shiftObj = lstShiftJobSite.Where(x=>x.Id == rowData[i].ShiftId).FirstOrDefault();
                            var attendanceObj = lstAtendance.Where(X => X.Id == rowData[i].AttendanceId).FirstOrDefault();
                            if(shiftObj.ShiftId != 0)
                            {
                                var shiftObjSource = lstShiftCode.Where(x => x.Id == shiftObj.ShiftId).FirstOrDefault();
                                shiftObj.MainCode = shiftObjSource.MainCode;
                            }

                            model = AddNewItemDate(employeeId, curDate.Date, rowData[i], shiftObj, attendanceObj);
                            lstRosterData.Add(model);

                            rowData.Remove(rowData[i]);

                            break;
                        }

                        if (i == rowData.Count - 1)
                        {
                            model = AddNewItemDate(employeeId, curDate.Date, null, null, null);
                            lstRosterData.Add(model);
                        }
                    }
                }
                else
                {
                    model = AddNewItemDate(employeeId, curDate.Date, null, null, null);
                    lstRosterData.Add(model);
                }
            };

            if (startDate.Month - endDate.Month > 0)
            {
                // push data from startMonth to 12
                for (int i = startDate.Month; i <= 12; i++)
                {
                    var data = new RosterData();
                    data.Month = i;
                    data.MonthStr = GetMonthName(i).ToUpper();
                    //data.ListRoster = new List<TMSRosterViewModel>();
                    data.ListRoster = lstRosterData.Where(x => x.Month == i).ToList();

                    result.Add(data);
                }

                // push data from 1 to endMonth
                for (int i = 1; i <= endDate.Month; i++)
                {
                    var data = new RosterData();
                    data.Month = i;
                    data.MonthStr = GetMonthName(i).ToUpper();
                    //data.ListRoster = new List<TMSRosterViewModel>();
                    data.ListRoster = lstRosterData.Where(x => x.Month == i).ToList();

                    result.Add(data);
                }
            }
            else
            {
                // push data for each month
                for (int i = startDate.Month; i <= endDate.Month; i++)
                {
                    var data = new RosterData();
                    data.Month = i;
                    data.MonthStr = GetMonthName(i).ToUpper();
                    //data.ListRoster = new List<TMSRosterViewModel>();
                    data.ListRoster = lstRosterData.Where(x => x.Month == i).ToList();

                    result.Add(data);
                }
            }

            

            return result;
        }

        private TMSRosterViewModel AddNewItemDate(int employeeId, DateTime currentDate, TMSRoster model, TMSShiftJobSite shiftJobSite, TMSAttendance attendance)
        {
            var result = new TMSRosterViewModel();

            result.Date = currentDate.Date.ToString("dd MMM yyyy");
            result.Month = currentDate.Month;
            result.DayOfWeek = currentDate.DayOfWeek.ToString().Substring(0,3);
            result.Day = currentDate.Day;
            result.Year = currentDate.Year;

            if (model != null)
            {
                result.Id = 1;
                result.OtCodeId = model.OtCodeId;
                result.OtCodeName = GetOTName(model.OtCodeId);
                result.OtCodeValue = model.OtCodeValue;
                result.OtCodeValueId = (model.OtCodeValue != string.Empty) ? int.Parse(model.OtCodeValue) : 0;
                result.Remarks = model.Remarks;
                result.RemarksSplit = (model.Remarks != string.Empty && model.Remarks.Length > 40) ? model.Remarks.Substring(0,40) + "..." : model.Remarks;
                result.AttendanceId = model.AttendanceId;
                result.AttendanceName = (attendance != null) ? attendance.Name : "";
                result.ShiftId = model.ShiftId;
                result.ShiftCodeName = (shiftJobSite != null) ? shiftJobSite.MainCode : "";
                result.Type = model.Type;
                result.TypeName = GetTypeName(model.Type);
                result.EmployeeId = employeeId;

                result.StartTime = model.StartTime;
                result.EndTime = model.EndTime;
                result.StartTime1 = model.StartTime1;
                result.EndTime1 = model.EndTime1;
                result.Type1 = model.Type1;
                result.Remarks1 = model.Remarks1;

                result.StartTime2 = model.StartTime2;
                result.EndTime2 = model.EndTime2;
                result.Type2 = model.Type2;
                result.Remarks2 = model.Remarks2;

                result.StartTime3 = model.StartTime3;
                result.EndTime3 = model.EndTime3;
                result.Type3 = model.Type3;
                result.Remarks3 = model.Remarks3;

            }
            else
            {
                result.Id = 0;
                result.OtCodeId = 0;
                result.OtCodeName = "";
                result.OtCodeValue = "";
                result.OtCodeValueId = 0;
                result.Remarks = "";
                result.RemarksSplit = "";
                result.AttendanceId = 0;
                result.AttendanceName = "";
                result.ShiftId = 0;
                result.ShiftCodeName = "";
                result.StartTime = "";
                result.EndTime = "";
                result.Type = 0;
                result.TypeName = "";
                result.EmployeeId = 0;
            }

            return result;
        }

        private string GetTypeName(int typeId)
        {
            var result = string.Empty;

            if (typeId == (int)NormalType.PlannedOT)
            {
                result = NormalType.PlannedOT.ToString();
            }
            else if (typeId == (int)NormalType.Training)
            {
                result = NormalType.Training.ToString();
            }
            else
            {
                result = NormalType.Vaccination.ToString();
            }

            return result;
        }

        private string GetOTName(int OTCodeId)
        {
            var result = string.Empty;

            if (OTCodeId == (int)Remarks.O)
            {
                result = Remarks.O.ToString();
            }
            else if (OTCodeId == (int)Remarks.PH)
            {
                result = Remarks.PH.ToString();
            }
            else if(OTCodeId == (int)Remarks.RD)
            {
                result = Remarks.RD.ToString();
            }
            else
            {
                result = Remarks.STD.ToString();
            }

            return result;
        }

        private string GetMonthName(int month)
        {
            var result = string.Empty;

            switch (month)
            {
                case (int)MonthName.January:
                    result = MonthName.January.ToString().Substring(0,3);
                    break;

                case (int)MonthName.February:
                    result = MonthName.February.ToString().Substring(0, 3);
                    break;

                case (int)MonthName.March:
                    result = MonthName.March.ToString().Substring(0, 3);
                    break;

                case (int)MonthName.April:
                    result = MonthName.April.ToString().Substring(0, 3);
                    break;

                case (int)MonthName.May:
                    result = MonthName.May.ToString().Substring(0, 3);
                    break;

                case (int)MonthName.June:
                    result = MonthName.June.ToString().Substring(0, 3);
                    break;

                case (int)MonthName.July:
                    result = MonthName.July.ToString().Substring(0, 3);
                    break;

                case (int)MonthName.August:
                    result = MonthName.August.ToString().Substring(0, 3);
                    break;

                case (int)MonthName.September:
                    result = MonthName.September.ToString().Substring(0, 3);
                    break;

                case (int)MonthName.October:
                    result = MonthName.October.ToString().Substring(0, 3);
                    break;

                case (int)MonthName.November:
                    result = MonthName.November.ToString().Substring(0, 3);
                    break;

                case (int)MonthName.December:
                    result = MonthName.December.ToString().Substring(0, 3);
                    break;

                default:
                    break;
            }

            return result;
        }

        private TMSRoster UpdateModelToEntity(TMSRosterViewModel model, DateTime date)
        {
            var result = new TMSRoster();

            result.AttendanceId = model.AttendanceId;
            result.OtCodeId = model.OtCodeId;
            result.OtCodeValue = model.OtCodeValue;
            result.ShiftId = model.ShiftId;
            result.Type = model.Type;
            result.Remarks = model.Remarks;
            result.EmployeeId = model.EmployeeId;
            result.Date = date;

            return result;
        }
    }
}
