
using AutoMapper;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using EFSoftware.Helpers;
using Swashbuckle.AspNetCore.Swagger;
using System;
using System.Collections.Generic;
using EFSoftware.Repositories.Interfaces;
using EFSoftware.Repositories;
using EFSoftware.Service;
using EFSoftware.Service.Interfaces;
using EFSoftware.Models;
using EFSoftware.Authorization;
using EFSoftware.Core.Shared;
using AppPermissions = EFSoftware.Service.ApplicationPermissions;
using EFSoftware.ViewModels;
using EFSoftware.Repository.Interfaces;
using EFSoftware.Repository.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using EFSoftware.Repository;

namespace EFSoftware
{
    public class Startup
    {
        private IHostingEnvironment _env { get; }
        public IConfiguration Configuration { get; }


        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            _env = env;
            Configuration = configuration;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"], b => b.MigrationsAssembly("EFSoftware")));

            // add identity
            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            // Configure Identity options and password complexity here
            services.Configure<IdentityOptions>(options =>
            {
                // User settings
                options.User.RequireUniqueEmail = true;

                // Password settings
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 6;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;

                // Lockout settings
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
                options.Lockout.MaxFailedAccessAttempts = 5;
            });

            //thuong start >>>
            //// Adds IdentityServer.
            //services.AddIdentityServer()
            //    // The AddDeveloperSigningCredential extension creates temporary key material for signing tokens.
            //    // This might be useful to get started, but needs to be replaced by some persistent key material for production scenarios.
            //    // See http://docs.identityserver.io/en/release/topics/crypto.html#refcrypto for more information.
            //    .AddDeveloperSigningCredential()
            //    .AddInMemoryPersistedGrants()
            //    // To configure IdentityServer to use EntityFramework (EF) as the storage mechanism for configuration data (rather than using the in-memory implementations),
            //    // see https://identityserver4.readthedocs.io/en/release/quickstarts/8_entity_framework.html
            //    .AddInMemoryIdentityResources(IdentityServerConfig.GetIdentityResources())
            //    .AddInMemoryApiResources(IdentityServerConfig.GetApiResources())
            //    .AddInMemoryClients(IdentityServerConfig.GetClients())
            //    .AddAspNetIdentity<ApplicationUser>()
            //    .AddProfileService<ProfileService>();


            var applicationUrl = Configuration["ApplicationUrl"].TrimEnd('/');

            //services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
            //    .AddIdentityServerAuthentication(options =>
            //    {
            //        options.Authority = applicationUrl;
            //        options.SupportedTokens = SupportedTokens.Jwt;
            //        options.RequireHttpsMetadata = false; // Note: Set to true in production
            //        options.ApiName = IdentityServerConfig.ApiName;
            //    });


            //config authen
            services.AddAuthentication(o =>
            {
                o.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                o.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;

                cfg.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidIssuer = Configuration["Tokens:Issuer"],
                    ValidAudience = Configuration["Tokens:Issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"]))
                };
            });

            //thuong end <<<


            services.AddAuthorization(options =>
            {
                options.AddPolicy(Authorization.Policies.ViewAllUsersPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ViewUsers));
                options.AddPolicy(Authorization.Policies.ManageAllUsersPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ManageUsers));

                options.AddPolicy(Authorization.Policies.ViewAllRolesPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ViewRoles));
                options.AddPolicy(Authorization.Policies.ViewRoleByRoleNamePolicy, policy => policy.Requirements.Add(new ViewRoleAuthorizationRequirement()));
                options.AddPolicy(Authorization.Policies.ManageAllRolesPolicy, policy => policy.RequireClaim(ClaimConstants.Permission, AppPermissions.ManageRoles));

                options.AddPolicy(Authorization.Policies.AssignAllowedRolesPolicy, policy => policy.Requirements.Add(new AssignRolesAuthorizationRequirement()));
            });


            // Add cors
            services.AddCors();

            // Add framework services.
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            // The port to use for https redirection in production
            if (!_env.IsDevelopment() && !string.IsNullOrWhiteSpace(Configuration["HttpsRedirectionPort"]))
            {
                services.AddHttpsRedirection(options =>
                {
                    options.HttpsPort = int.Parse(Configuration["HttpsRedirectionPort"]);
                });
            }

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });


            //Todo: ***Using DataAnnotations for validation until Swashbuckle supports FluentValidation***
            //services.AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());


            //.AddJsonOptions(opts =>
            //{
            //    opts.SerializerSettings.TransferResolver = new CamelCasePropertyNamesTransferResolver();
            //});


            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = IdentityServerConfig.ApiFriendlyName, Version = "v1" });
                c.OperationFilter<AuthorizeCheckOperationFilter>();
                //c.AddSecurityDefinition("oauth2", new OAuth2Scheme
                //{
                //    Type = "oauth2",
                //    Flow = "password",
                //    TokenUrl = $"{applicationUrl}/connect/token",
                //    Scopes = new Dictionary<string, string>()
                //    {
                //        { IdentityServerConfig.ApiName, IdentityServerConfig.ApiFriendlyName }
                //    }
                //});
            });


            //Mapper.Initialize(cfg =>
            //{
            //    cfg.AddProfile<AutoMapperProfile>();
            //});
            services.AddAutoMapper();


            // Configurations
            services.Configure<AppSettings>(Configuration);


            // Business Services
            #region Services

            services.AddScoped<IEmailSender, EmailSender>();
            services.AddTransient<IAttendanceService, AttendanceService>();
            services.AddTransient<IPublicHolidayService, PublicHolidayService>();
            services.AddTransient<ICompanyBasicInfoService, CompanyBasicInfoService>();
            services.AddTransient<IDepartmentService, DepartmentService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<ITMSsiteService, TMSsiteService>();
            services.AddTransient<ITMSJobSiteService, TMSJobSiteService>();
            services.AddTransient<ITMSResignReasonService, TMSResignReasonService>();
            services.AddTransient<ITMSAttendanceService, TMSAttendanceService>();
            services.AddTransient<ITMSPublicHolidayService, TMSPublicHolidayService>();
            services.AddTransient<ITMSRaceService, TMSRaceService>();
            services.AddTransient<ITMSEmployeeService, TMSEmployeeService>();
            services.AddTransient<ITMSOtCodeService, TMSOtCodeService>();
            services.AddTransient<ITMSAllowanceService, TMSAllowanceService>();
            services.AddTransient<ITMSOtMaxTimeService, TMSOtMaxTimeService>();
            services.AddTransient<ITMSOtSettingService, TMSOtSettingService>();
            services.AddTransient<ITMSAllowanceJobsiteService, TMSAllowanceJobsiteService>();
            services.AddTransient<ITMSShiftService, TMSShiftService>();
            services.AddTransient<ITMSZoneLocationService, TMSZoneLocationService>();
            services.AddTransient<ITMSLevelService, TMSLevelService>();
            services.AddTransient<ITMSAreaService, TMSAreaService>();
            services.AddTransient<ITMSLocationService, TMSLocationService>();
            services.AddTransient<ITMSZoneService, TMSZoneService>();
            services.AddTransient<ITMSShiftJobSiteService, TMSShiftJobSiteService>();
            services.AddTransient<ITMSEmployeeLogTimeService, TMSEmployeeLogTimeService>();
            services.AddTransient<ITMSEventPromotionService, TMSEventPromotionService>();
            services.AddTransient<ITMSEventTRService, TMSEventTRService>();
            services.AddTransient<ITMSEventTransferService, TMSEventTransferService>();
            services.AddTransient<ITMSEventContractService, TMSEventContractService>();
            services.AddTransient<ITMSEventRejoinService, TMSEventRejoinService>();
            services.AddTransient<ITMSRosterService, TMSRosterService>();

            #endregion Services

            // Repositories
            #region Repositories

            services.AddScoped<IUnitOfWork, HttpUnitOfWork>();
            services.AddScoped<IAccountManager, AccountManager>();
            services.AddTransient<IAttendanceRepository, AttendanceRepository>();
            services.AddTransient<IPublicHolidayRepository, PublicHolidayRepository>();
            services.AddTransient<ICompanyBasicInfoRepository, CompanyBasicInfoRepository>();
            services.AddTransient<IDepartmentRepository, DepartmentRepository>();
            services.AddTransient<ITMSsiteRepository, TMSsiteRepository>();
            services.AddTransient<ITMSJobSiteRepository, TMSJobSiteRepository>();
            services.AddTransient<ITMSResignReasonRepository, TMSResignReasonRepository>();
            services.AddTransient<ITMSAttendanceRepository, TMSAttendanceRepository>();
            services.AddTransient<ITMSPublicHolidayRepository, TMSPublicHolidayRepository>();
            services.AddTransient<ITMSRaceRepository, TMSRaceRepository>();
            services.AddTransient<ITMSEmployeeRepository, TMSEmployeeRepository>();
            services.AddTransient<ITMSOtCodeRepository, TMSOtCodeRepository>();
            services.AddTransient<ITMSAllowanceRepository, TMSAllowanceRepository>();
            services.AddTransient<ITMSOtMaxTimeRepository, TMSOtMaxTimeRepository>();
            services.AddTransient<ITMSOtSettingRepository, TMSOtSettingRepository>();
            services.AddTransient<ITMSAllowanceJobsiteRepository, TMSAllowanceJobsiteRepository>();
            services.AddTransient<ITMSShiftRepository, TMSShiftRepository>();
            services.AddTransient<ITMSZoneLocationRepository, TMSZoneLocationRepository>();
            services.AddTransient<ITMSLevelRepository, TMSLevelRepository>();
            services.AddTransient<ITMSAreaRepository, TMSAreaRepository>();
            services.AddTransient<ITMSLocationRepository, TMSLocationRepository>();
            services.AddTransient<ITMSZoneRepository, TMSZoneRepository>();
            services.AddTransient<ITMSShiftJobSiteRepository, TMSShiftJobSiteRepository>();
            services.AddTransient<ITMSEmployeeLogTimeRepository, TMSEmployeeLogTimeRepository>();
            services.AddTransient<ITMSEventPromotionRepository, TMSEventPromotionRepository>();
            services.AddTransient<ITMSEventTRRepository, TMSEventTRRepository>();
            services.AddTransient<ITMSEventTransferRepository, TMSEventTransferRepository>();
            services.AddTransient<ITMSEventContractRepository, TMSEventContractRepository>();
            services.AddTransient<ITMSEventRejoinRepository, TMSEventRejoinRepository>();
            services.AddTransient<ITMSRosterRepository, TMSRosterRepository>();

            #endregion Repositories

            // Auth Handlers
            services.AddSingleton<IAuthorizationHandler, ViewUserAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, ManageUserAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, ViewRoleAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, AssignRolesAuthorizationHandler>();

            // DB Creation and Seeding
            services.AddTransient<IDatabaseInitializer, DatabaseInitializer>();
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            Utilities.ConfigureLogger(loggerFactory);
            EmailTemplates.Initialize(env);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }


            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            //app.UseIdentityServer();
            app.UseAuthentication();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.DocumentTitle = "Swagger UI - QuickApp";
                c.SwaggerEndpoint("/swagger/v1/swagger.json", $"{IdentityServerConfig.ApiFriendlyName} V1");
                //c.OAuthClientId(IdentityServerConfig.SwaggerClientID);
                //c.OAuthClientSecret("no_password"); //Leaving it blank doesn't work
            });


            //Configure Cors
            //app.UseCors("allowSpecificOrigins");
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });


        }
    }
}
