// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

using EFSoftware.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using EFSoftware.Models.Interfaces;
using EFSoftware.Models.Models;

namespace EFSoftware.Repositories
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>
    {
        public string CurrentUserId { get; set; }

        public DbSet<TMSCostCenter> TMSCostCenters { get; set; }
        public DbSet<TMSempCostCenter> TMSempCostCenters { get; set; }
        public DbSet<TMSEmployee> TMSemployees { get; set; }
        public DbSet<TMSempRoster> TMSempRosters { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<PublicHoliday> PublicHolidays { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<CompanyBasicInfo> CompanyBasicInfos { get; set; }
        public DbSet<ApplicationUser> ApplicationUser { get; set; }
        public DbSet<TMSsite> TMSsites { get; set; }
        public DbSet<TMSJobSite> TMSJobSites { get; set; }

        public DbSet<TMSResignReason> TMSResignReasons { get; set; }

        public DbSet<TMSAttendance> TMSAttendances { get; set; }

        public DbSet<TMSPublicHoliday> TMSPublicHolidays { get; set; }

        public DbSet<TMSRace> TMSRaces { get; set; }

        public DbSet<TMSOtCode> TMSOtCode { get; set; }

        public DbSet<TMSAllowance> TMSAllowance { get; set; }

        public DbSet<TMSOtMaxTime> TMSOtMaxTime { get; set; }

        public DbSet<TMSOtSetting> TMSOtSetting { get; set; }

        public DbSet<TMSAllowanceJobsite> TMSAllowanceJobsite { get; set; }

        public DbSet<TMSShift> TMSShift { get; set; }

        public DbSet<TMSZoneLocation> TMSZoneLocation { get; set; }

        public DbSet<TMSLevel> TMSLevel { get; set; }

        public DbSet<TMSArea> TMSArea { get; set; }

        public DbSet<TMSLocation> TMSLocation { get; set; }

        public DbSet<TMSZone> TMSZone { get; set; }

        public DbSet<TMSShiftJobSite> TMSShiftJobSite { get; set; }

        public DbSet<TMSEmployeeLogTime> TMSEmployeeLogTime { get; set; }

        public DbSet<TMSRoster> TMSRoster { get; set; }

        public DbSet<TMSEventPromotion> TMSEventPromotion { get; set; }

        public DbSet<TMSEventTerminationResign> TMSEventTerminationResign { get; set; }

        public DbSet<TMSEventTransfer> TMSEventTransfer { get; set; }

        public DbSet<TMSEventContract> TMSEventContract { get; set; }

        public DbSet<TMSEventRejoin> TMSEventRejoin { get; set; }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        { }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            const string priceDecimalType = "decimal(18,2)";

            builder.Entity<ApplicationUser>().HasMany(u => u.Claims).WithOne().HasForeignKey(c => c.UserId).IsRequired().OnDelete(DeleteBehavior.Cascade);
            builder.Entity<ApplicationUser>().HasMany(u => u.Roles).WithOne().HasForeignKey(r => r.UserId).IsRequired().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<ApplicationRole>().HasMany(r => r.Claims).WithOne().HasForeignKey(c => c.RoleId).IsRequired().OnDelete(DeleteBehavior.Cascade);
            builder.Entity<ApplicationRole>().HasMany(r => r.Users).WithOne().HasForeignKey(r => r.RoleId).IsRequired().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<TMSCostCenter>().ToTable("TMSCostCenter");

            builder.Entity<TMSempCostCenter>().ToTable("TMSempCostCenter");

            builder.Entity<TMSEmployee>().ToTable("TMSemployee");

            builder.Entity<TMSempRoster>().ToTable("TMSempRoster");

            builder.Entity<Attendance>().ToTable("Attendance");

            builder.Entity<PublicHoliday>().ToTable("PublicHoliday");

            builder.Entity<Department>().ToTable("TMSDepartment");

            builder.Entity<CompanyBasicInfo>().ToTable("Company");

            builder.Entity<TMSsite>().ToTable("TMSSite");

            builder.Entity<TMSJobSite>().ToTable("TMSJobSite");

            builder.Entity<TMSResignReason>().ToTable($"TMSResignReason");

            builder.Entity<TMSAttendance>().ToTable($"TMSAttendance");

            builder.Entity<TMSPublicHoliday>().ToTable($"TMSPublicHoliday");

            builder.Entity<TMSRace>().ToTable($"TMSRace");

            builder.Entity<TMSOtCode>().ToTable($"TMSOtCode");

            builder.Entity<TMSAllowance>().ToTable($"TMSAllowance");

            builder.Entity<TMSOtMaxTime>().ToTable($"TMSOtMaxTime");

            builder.Entity<TMSOtSetting>().ToTable($"TMSOtSetting");

            builder.Entity<TMSAllowanceJobsite>().ToTable($"TMSAllowanceJobsite");

            builder.Entity<TMSShift>().ToTable($"TMSShift");

            builder.Entity<TMSZoneLocation>().ToTable($"TMSZoneLocation");

            builder.Entity<TMSLevel>().ToTable($"TMSLevel");

            builder.Entity<TMSArea>().ToTable($"TMSArea");

            builder.Entity<TMSLocation>().ToTable($"TMSLocation");

            builder.Entity<TMSZone>().ToTable($"TMSZone");

            builder.Entity<TMSShiftJobSite>().ToTable($"TMSShiftJobSite");

            builder.Entity<TMSEmployeeLogTime>().ToTable($"TMSEmployeeLogTime");

            builder.Entity<TMSRoster>().ToTable($"TMSRoster");

            builder.Entity<TMSEventPromotion>().ToTable($"TMSEventPromotion");

            builder.Entity<TMSEventTerminationResign>().ToTable($"TMSEventTerminationResign");

            builder.Entity<TMSEventTransfer>().ToTable($"TMSEventTransfer");

            builder.Entity<TMSEventContract>().ToTable($"TMSEventContract");

            builder.Entity<TMSEventRejoin>().ToTable($"TMSEventRejoin");

        }


        public override int SaveChanges()
        {
            UpdateAuditEntities();
            return base.SaveChanges();
        }


        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            UpdateAuditEntities();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }


        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            UpdateAuditEntities();
            return base.SaveChangesAsync(cancellationToken);
        }


        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken))
        {
            UpdateAuditEntities();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }


        private void UpdateAuditEntities()
        {
            var modifiedEntries = ChangeTracker.Entries()
                .Where(x => x.Entity is IAuditableEntity && (x.State == EntityState.Added || x.State == EntityState.Modified));


            foreach (var entry in modifiedEntries)
            {
                var entity = (IAuditableEntity)entry.Entity;
                DateTime now = DateTime.UtcNow;

                if (entry.State == EntityState.Added)
                {
                    entity.CreatedDate = now;
                    entity.CreatedBy = CurrentUserId;
                }
                else
                {
                    base.Entry(entity).Property(x => x.CreatedBy).IsModified = false;
                    base.Entry(entity).Property(x => x.CreatedDate).IsModified = false;
                }

                entity.UpdatedDate = now;
                entity.UpdatedBy = CurrentUserId;
            }
        }
    }
}
