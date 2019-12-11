using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EFSoftware.Service.Interfaces.ViewModels
{
    public class TMSLevelViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Value { get; set; }

        public int ZoneLocationId { get; set; }
    }

    public class TMSLevelCreateViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Value is required")]
        public string Value { get; set; }

        public int ZoneLocationId { get; set; }
    }
}
