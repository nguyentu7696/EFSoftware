// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.ComponentModel.DataAnnotations;

namespace EFSoftware.Core
{
    public enum Gender
    {
        None,
        Female,
        Male
    }

    [JsonConverter(typeof(StringEnumConverter))]
    public enum Status
    {
        [Display(Name = "Active")] Active = 1,
        [Display(Name = "Inactive")] Inactive = 2,
        [Display(Name = "Expired")] Expired = 3,
    }

    [JsonConverter(typeof(StringEnumConverter))]
    public enum Roles
    {
        [Display(Name = "AdminEF")] AdminEF = 1,
        [Display(Name = "AdminCompany")] AdminCompany = 2,
        [Display(Name = "Employee")] Employee = 3,
    }

    [JsonConverter(typeof(StringEnumConverter))]
    public enum Remarks
    {
        [Display(Name = "PH")] PH = 1,
        [Display(Name = "STD")] STD = 2,
        [Display(Name = "O")] O = 3,
        [Display(Name = "RD")] RD = 4,
    }

    public static class DeleteFlg
    {
        public static int Delete = 1;
        public static int NotDelete = 0;
    }

    [JsonConverter(typeof(StringEnumConverter))]
    public enum AttType
    {
        [Display(Name = "Present")] Present = 1,
        [Display(Name = "Absent")] Absent = 2,
    }

    [JsonConverter(typeof(StringEnumConverter))]
    public enum NormalType
    {
        [Display(Name = "Planned OT")] PlannedOT = 1,
        [Display(Name = "Vaccination")] Vaccination = 2,
        [Display(Name = "Training")] Training = 3,
    }

    [JsonConverter(typeof(StringEnumConverter))]
    public enum TypeCreate
    {
        [Display(Name = "Manual")] Manual = 1,
        [Display(Name = "Machine")] Machine = 2,
    }

    public enum MonthName
    {
        [Display(Name = "Jan")] January = 1,
        [Display(Name = "Feb")] February = 2,
        [Display(Name = "Mar")] March = 3,
        [Display(Name = "Apr")] April = 4,
        [Display(Name = "May")] May = 5,
        [Display(Name = "Jun")] June = 6,
        [Display(Name = "Jul")] July = 7,
        [Display(Name = "Aug")] August = 8,
        [Display(Name = "Sep")] September = 9,
        [Display(Name = "Oct")] October = 10,
        [Display(Name = "Nov")] November = 11,
        [Display(Name = "Dec")] December = 12,
    }
}
