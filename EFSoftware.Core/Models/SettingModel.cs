using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Core.Models
{
    public class SettingModel: BaseModel
    {
        public string HomeColor { get; set; }
        public string HomeImageUrl { get; set; }
        public string ImageName { get; set; }
        public bool IsEnableCreditCard { get; set; }
    }
}
