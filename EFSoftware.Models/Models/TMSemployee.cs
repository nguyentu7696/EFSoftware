// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Models.Models
{
    public class TMSEmployee : AuditableEntity<int>

    {
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
}
