using EFSoftware.Core;
using EFSoftware.Models.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSEmployeeLogTimeViewModel
    {
        public int Id { get; set; }

        public string TimeIn { get; set; }

        public string TimeOut { get; set; }

        public DateTime DateLog { get; set; }

        public int EmployeeId { get; set; }

        public int AttType { get; set; }

        public int NormalType { get; set; }

        public string WorkingHourse { get; set; }

        public string Remarks { get; set; }

        public int ShiftId { get; set; }

        public int TypeCreate { get; set; }

        public bool UpdateManual { get; set; }
    }

    public class TMSEmployeeLogTimeListViewModel
    {
        public TMSEmployeeLogTimeListViewModel(TMSEmployeeLogTime tmsEmployeeLogTime, string jobSite, string site, string department, TMSEmployee tmsEmployee)
        {
            if(tmsEmployeeLogTime != null)
            {
                Id = tmsEmployeeLogTime.Id;
                TimeIn = tmsEmployeeLogTime.TimeIn;
                TimeOut = tmsEmployeeLogTime.TimeOut;
                DateLog = tmsEmployeeLogTime.DateLog;

            } else
            {
                Id = 0;
                TimeIn = "";
                TimeOut = "";
            }
            EmployeeId = tmsEmployee.Id;
            Empkey = tmsEmployee.Empkey;
            EmpID = tmsEmployee.EmpID;
            EmployeeName = tmsEmployee.Name;

            JobSite = jobSite;
            Site = site;
            Department = department;
        }
        public int Id { get; set; }

        public string TimeIn { get; set; }

        public string TimeOut { get; set; }

        public int EmployeeId { get; set; }

        public string Empkey { get; set; }
        public string EmpID { get; set; }

        public string EmployeeName { get; set; }

        public string JobSite { get; set; }

        public string Site { get; set; }

        public string Department { get; set; }
        public DateTime DateLog { get; set; }
    }

    public class TMSEmployeeModalViewModel
    {
        public TMSEmployeeModalViewModel(int id, string companyName, string employeeKey, string employeeID,
            string employeeName, TMSJobSite tmsJobSite)
        {
            Id = id;
            CompanyName = companyName;
            EmployeeKey = employeeKey;
            EmployeeID = employeeID;
            EmployeeName = employeeName;
            JobSiteName = tmsJobSite.Name;
            JobSiteId = tmsJobSite.Id;
        }
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string EmployeeKey { get; set; }
        public string EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public string JobSiteName { get; set; }

        public int JobSiteId { get; set; }
        
    }

    public class TMSEmployeeLogtimeModel
    {
        public TMSEmployeeLogtimeModel(int count, DateTime date)
        {
            Count = count;
            Date = date;
        }
        public int Count { get; set; }

        public DateTime Date { get; set; }

    }


}
