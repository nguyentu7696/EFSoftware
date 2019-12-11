﻿using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace EFSoftware.Core.Share.Constants
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ApplicationType
    {
        /// <summary>
        ///     Mobile or Desktop, apps that run native in a device. eg: Android, iOS, Desktop
        ///     Universal App.
        /// </summary>
        Native,

        /// <summary>
        ///     A javascript frontend app that uses an API. eg: AngularJS, ReactJS. 
        /// </summary>
        [Display(Name = "Single Page Application")]
        SinglePageWebApp,

        /// <summary>
        ///     Traditional web app (with refresh). eg: PHP, Java, ASP .NET, .Net Core. 
        /// </summary>
        [Display(Name = "Regular Web Application")]
        RegularWebApp,

        /// <summary>
        ///     CLI, Daemons or Services running on your backend, background job. Not have UI and
        ///     interactive with end-user by any way.
        /// </summary>
        [Display(Name = "Machine to Machine Application")]
        NonInteractiveClient
    }
}