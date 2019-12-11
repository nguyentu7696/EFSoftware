using EFSoftware.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSZoneViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Status { get; set; }

        public int ZoneLocationId { get; set; }
    }

    public class TMSZoneCreateViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public int Status { get; set; }

        [Required(ErrorMessage = "ZoneLocation is required")]
        public int ZoneLocationId { get; set; }
    }

    public class TMSZoneListViewModel
    {

        public TMSZoneListViewModel(int id, string name, Status status, int zoneLocationId, string zoneLocation)
        {
            Id = id;
            Name = name;
            Status = status;
            ZoneLocationId = zoneLocationId;
            ZoneLocation = zoneLocation;
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public Status Status { get; set; }

        public int ZoneLocationId { get; set; }

        public string ZoneLocation { get; set; }
    }
}
