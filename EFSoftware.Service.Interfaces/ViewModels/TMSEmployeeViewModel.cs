using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSEmployeeViewModel
    {
        public int Id { get; set; }

        //detail
        public string Name { get; set; }
        public DateTime DOB { get; set; }
        public string Gender { get; set; }
        public string MarialStatus { get; set; }
        public int Status { get; set; }
        public string Nationality { get; set; }
        public string Race { get; set; }
        public string Religion { get; set; }
        public string TelNo { get; set; }
        public string HomeNumber { get; set; }
        public string Stress { get; set; }
        public string Ward { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Photo { get; set; }
        public string Email { get; set; }
        //identity
        public string Nric { get; set; }
        public string FinNo { get; set; }
        public string PassportNo { get; set; }
        public string Residence { get; set; }
        public string ResignReason { get; set; }

        //Login Credential
        public string UserId { get; set; }
        public string Password { get; set; }

        //Working Info
        public string Empkey { get; set; }
        public string EmpID { get; set; }
        public DateTime DateJoined { get; set; }
        public DateTime DateResigned { get; set; }
        public DateTime OJTExpiryDate { get; set; }
        public string TransportAgent { get; set; }
        public string PLRDLienceNo { get; set; }
        public DateTime PLRDLicenceExpiryDate { get; set; }
        public string ReCall { get; set; }
        public DateTime DateMedicalDue { get; set; }

        public string ZoneLocation { get; set; }

        //work pemit
        public string WorkPermitNo { get; set; }
        public DateTime DateWorkPermitStart { get; set; }
        public DateTime DateWorkPermitExpiry { get; set; }
        public int JobSiteId { get; set; }
    }

    public class TMSEmployeeCreateViewModel
    {
        //detail
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }
        public string Gender { get; set; }
        public string MarialStatus { get; set; }
        public int Status { get; set; }
        public string Nationality { get; set; }
        public string Race { get; set; }
        public string Religion { get; set; }
        public string TelNo { get; set; }
        public string HomeNumber { get; set; }
        public string Stress { get; set; }
        public string Ward { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Photo { get; set; }

        //Login Credential
        public string UserId { get; set; }
        public string Password { get; set; }

        //identity
        public string Nric { get; set; }
        public string FinNo { get; set; }
        public string PassportNo { get; set; }
        public string Residence { get; set; }
        public string ResignReason { get; set; }

        //Working Info
        public string Empkey { get; set; }
        public string EmpID { get; set; }
        public DateTime DateJoined { get; set; }
        public DateTime DateResigned { get; set; }
        public DateTime OJTExpiryDate { get; set; }
        public string TransportAgent { get; set; }
        public string PLRDLienceNo { get; set; }
        public DateTime PLRDLicenceExpiryDate { get; set; }
        public string ReCall { get; set; }
        public DateTime DateMedicalDue { get; set; }
        public string ZoneLocation { get; set; }
        //work pemit
        public string WorkPermitNo { get; set; }
        public DateTime DateWorkPermitStart { get; set; }
        public DateTime DateWorkPermitExpiry { get; set; }
        public int JobSiteId { get; set; }
    }

    public class TMSEmployeeListViewModel
    {
        public TMSEmployeeListViewModel(int id, string nric, string empkey, string empID, string companyname, string name,  string jobsite,
            int companyid, int departmentid, int siteid, int jobsiteid)
        {
            Id = id;
            Nric = nric;
            Empkey = empkey;
            EmpID = empID;
            CompanyName = companyname;
            Name = name;
            JobSite = jobsite;
            CompanyId = companyid;
            DepartmentId = departmentid;
            SiteId = siteid;
            JobsiteId = jobsiteid;
            Code = JobsiteId.ToString() + Id.ToString();
        }
        public int Id { get; set; }
        public string Nric { get; set; }
        public string Empkey { get; set; }
        public string EmpID { get; set; }
        public string CompanyName { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string JobSite { get; set; }
        public int CompanyId { get; set; }
        public int DepartmentId { get; set; }
        public int SiteId { get; set; }
        public int JobsiteId { get; set; }
    }
}
