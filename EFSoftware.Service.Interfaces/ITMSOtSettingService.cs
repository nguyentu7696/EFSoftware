using EFSoftware.Core.Shared.Dtos;
using EFSoftware.Models.Models;
using EFSoftware.Service.Interfaces.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Service.Interfaces
{
    public interface ITMSOtSettingService : IDisposable
    {
        #region GET

        TMSOtSettingGetIdViewModel GetById(int id);
        List<TMSOtSettingViewModel> GetAll();
        PagedResult<TMSOtSettingViewModel> GetAllPaging(int page, int pageSize);

        List<TMSOtSettingViewModel> GetAllWithCompany(int companyid);
        PagedResult<TMSOtSettingViewModel> GetAllPagingWithCompany(int page, int pageSize, int companyid);

        List<TMSOtSettingViewModel> GetAllWithJobSiteByRemark(int companyid, int jobsiteid, int remark);

        List<TMSOtSettingViewModel> GetAllWithJobSite(int companyid, int jobsiteid, string filterByName = "");
        PagedResult<TMSOtSettingViewModel> GetAllPagingWithJobSite(int page, int pageSize, int companyid, int jobsiteid, string filterByName = "");


        #endregion GET

        #region POST

        TMSOtSetting Add(TMSOtSettingCreateViewModel Vm);

        #endregion POST

        #region PUT

        void Update(TMSOtSettingViewModel Vm);

        #endregion PUT
        
        #region DELETE

        void Delete(int id);

        #endregion DELETE
    }
}
