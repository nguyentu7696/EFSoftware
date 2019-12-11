USE [master]
GO
/****** Object:  Database [EFSoftware]    Script Date: 8/19/2019 9:08:43 AM ******/
CREATE DATABASE [EFSoftware]GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [EFSoftware].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [EFSoftware] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [EFSoftware] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [EFSoftware] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [EFSoftware] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [EFSoftware] SET ARITHABORT OFF 
GO
ALTER DATABASE [EFSoftware] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [EFSoftware] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [EFSoftware] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [EFSoftware] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [EFSoftware] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [EFSoftware] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [EFSoftware] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [EFSoftware] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [EFSoftware] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [EFSoftware] SET  ENABLE_BROKER 
GO
ALTER DATABASE [EFSoftware] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [EFSoftware] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [EFSoftware] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [EFSoftware] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [EFSoftware] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [EFSoftware] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [EFSoftware] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [EFSoftware] SET RECOVERY FULL 
GO
ALTER DATABASE [EFSoftware] SET  MULTI_USER 
GO
ALTER DATABASE [EFSoftware] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [EFSoftware] SET DB_CHAINING OFF 
GO
ALTER DATABASE [EFSoftware] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [EFSoftware] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [EFSoftware] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'EFSoftware', N'ON'
GO
USE [EFSoftware]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[UpdatedBy] [nvarchar](max) NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](450) NOT NULL,
	[ProviderKey] [nvarchar](450) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[UserName] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[Email] [nvarchar](256) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[JobTitle] [nvarchar](max) NULL,
	[FullName] [nvarchar](max) NULL,
	[Configuration] [nvarchar](max) NULL,
	[IsEnabled] [bit] NOT NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[UpdatedBy] [nvarchar](max) NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[Role] [int] NOT NULL,
	[Token] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](450) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Attendance]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Attendance](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Code] [nvarchar](max) NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[Value] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
	[Used] [int] NOT NULL,
	[CompanyUsed] [nvarchar](256) NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_AppAttendances] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Company]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Company](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[EmailAddress] [nvarchar](max) NULL,
	[Address] [nvarchar](max) NULL,
	[PICHandphone] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
	[Logo] [nvarchar](max) NULL,
	[Department] [nvarchar](max) NULL,
	[Site] [nvarchar](max) NULL,
	[JobSite] [nvarchar](max) NULL,
	[Zone] [nvarchar](max) NULL,
	[Level] [nvarchar](max) NULL,
	[Area] [nvarchar](max) NULL,
	[Location] [nvarchar](max) NULL,
	[DeleteFlag] [int] NOT NULL,
	[DepartmentUsed] [nvarchar](max) NULL,
 CONSTRAINT [PK_AppCompanyBasicInfos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PublicHoliday]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PublicHoliday](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Event] [nvarchar](max) NULL,
	[PeriodStartDate] [datetime2](7) NOT NULL,
	[PeriodEndDate] [datetime2](7) NOT NULL,
	[Year] [int] NOT NULL,
	[Country] [nvarchar](max) NULL,
	[CompanyUsed] [nvarchar](256) NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_AppPublicHolidays] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SGHEmployee]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SGHEmployee](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Code] [nvarchar](max) NULL,
	[CompanyId] [int] NOT NULL,
	[DepartmentId] [int] NOT NULL,
	[SiteId] [int] NOT NULL,
	[JobsiteId] [int] NOT NULL,
 CONSTRAINT [PK_SGHEmployee] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSAllowance]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSAllowance](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[Code] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[Amount] [decimal](18, 2) NOT NULL,
	[CompanyId] [int] NOT NULL,
	[JobsiteUsed] [nvarchar](max) NULL,
	[Used] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSAllowance] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSAllowanceJobsite]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSAllowanceJobsite](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Code] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[Amount] [decimal](18, 2) NOT NULL,
	[CompanyId] [int] NOT NULL,
	[JobsiteId] [int] NOT NULL,
	[AllowanceCompanyId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSAllowanceJobsite] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSArea]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSArea](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Value] [nvarchar](max) NULL,
	[ZoneLocationId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSArea] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSAttendance]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSAttendance](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[CompanyId] [int] NOT NULL,
	[AttendanceId] [int] NOT NULL,
	[Value] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[Status] [int] NOT NULL,
	[Code] [nvarchar](max) NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSAttendances] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSCostCenter]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSCostCenter](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[SnCC] [decimal](18, 2) NOT NULL,
	[Company] [nvarchar](max) NULL,
	[EffectiveDateStart] [datetime2](7) NOT NULL,
	[EffectiveDateEnd] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_AppTMSCostCenters] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSDepartment]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSDepartment](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[CompanyId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[SiteUsed] [nvarchar](max) NULL,
 CONSTRAINT [PK_AppDepartments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSempCostCenter]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSempCostCenter](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Sn] [decimal](18, 2) NOT NULL,
	[Empkey] [nvarchar](max) NULL,
	[DateEffective] [datetime2](7) NOT NULL,
	[DateModified] [datetime2](7) NOT NULL,
	[UserModified] [nvarchar](max) NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_AppTMSempCostCenters] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSemployee]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSemployee](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[DOB] [datetime2](7) NULL,
	[Gender] [nvarchar](256) NULL,
	[MarialStatus] [nvarchar](256) NULL,
	[Nationality] [nvarchar](max) NULL,
	[Race] [nvarchar](max) NULL,
	[Religion] [nvarchar](max) NULL,
	[TelNo] [nvarchar](max) NULL,
	[HomeNumber] [nvarchar](max) NULL,
	[Stress] [nvarchar](max) NULL,
	[Ward] [nvarchar](max) NULL,
	[District] [nvarchar](max) NULL,
	[City] [nvarchar](max) NULL,
	[Country] [nvarchar](max) NULL,
	[Photo] [nvarchar](max) NULL,
	[UserId] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NULL,
	[Nric] [nvarchar](max) NOT NULL,
	[FinNo] [nvarchar](max) NULL,
	[PassportNo] [nvarchar](max) NULL,
	[Residence] [nvarchar](max) NULL,
	[ResignReason] [nvarchar](max) NULL,
	[Empkey] [nvarchar](max) NULL,
	[EmpID] [nvarchar](max) NULL,
	[DateJoined] [datetime2](7) NULL,
	[DateResigned] [datetime2](7) NULL,
	[OJTExpiryDate] [datetime2](7) NULL,
	[TransportAgent] [nvarchar](max) NULL,
	[PLRDLienceNo] [nvarchar](max) NULL,
	[PLRDLicenceExpiryDate] [datetime2](7) NULL,
	[ReCall] [nvarchar](max) NULL,
	[DateMedicalDue] [datetime2](7) NULL,
	[WorkPermitNo] [nvarchar](max) NULL,
	[DateWorkPermitStart] [datetime2](7) NULL,
	[DateWorkPermitExpiry] [datetime2](7) NULL,
	[JobSiteId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[email] [nvarchar](max) NULL,
	[ZoneLocation] [nvarchar](max) NULL,
	[status] [int] NULL,
 CONSTRAINT [PK_TMSemployee] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSEmployeeLogTime]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSEmployeeLogTime](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[TimeIn] [nvarchar](max) NULL,
	[TimeOut] [nvarchar](max) NULL,
	[DateLog] [datetime2](7) NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[AttType] [int] NOT NULL,
	[NormalType] [int] NOT NULL,
	[ShiftId] [int] NOT NULL,
	[TypeCreate] [int] NOT NULL,
	[UpdateManual] [bit] NOT NULL,
	[WorkingHourse] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
 CONSTRAINT [PK_TMSEmployeeLogTime] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSempRoster]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSempRoster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Sn] [decimal](18, 2) NOT NULL,
	[Empkey] [nvarchar](max) NULL,
	[Date] [datetime2](7) NOT NULL,
	[RosterCode] [decimal](18, 2) NOT NULL,
	[Remarks] [nvarchar](max) NULL,
	[OT] [nvarchar](max) NULL,
	[Injection] [nvarchar](max) NULL,
	[Training] [nvarchar](max) NULL,
	[OTstartTime] [nvarchar](max) NULL,
	[OTendTime] [nvarchar](max) NULL,
	[OTrem] [nvarchar](max) NULL,
	[INJstartTime] [nvarchar](max) NULL,
	[INJendTime] [nvarchar](max) NULL,
	[INJrem] [nvarchar](max) NULL,
	[TRstartTime] [nvarchar](max) NULL,
	[TRendTime] [nvarchar](max) NULL,
	[TRrem] [nvarchar](max) NULL,
	[DateModified] [datetime2](7) NOT NULL,
	[UserModified] [nvarchar](max) NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_AppTMSempRosters] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSEventContract]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSEventContract](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[EventType] [nvarchar](max) NULL,
	[PeriodStart] [datetime2](7) NOT NULL,
	[PeriodEnd] [datetime2](7) NOT NULL,
	[ZoneLocationId] [int] NOT NULL,
	[ShiftId] [int] NOT NULL,
	[ShiftKey] [nvarchar](max) NULL,
	[SubContractor] [nvarchar](max) NULL,
	[Recall] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
	[EligibilityShift] [bit] NOT NULL,
	[EligibilityAllowance] [bit] NOT NULL,
	[MealAllowanceId] [int] NOT NULL,
	[MealAllowanceValue] [nvarchar](max) NULL,
	[MonthlyShiftAllowanceId] [int] NOT NULL,
	[MonthlyShiftAllowanceValue] [nvarchar](max) NULL,
	[EligibilityOt] [bit] NOT NULL,
	[MaxWorkingHours] [int] NOT NULL,
	[OtPhId] [int] NOT NULL,
	[OtPhValue] [nvarchar](max) NULL,
	[OtRdId] [int] NOT NULL,
	[OtRdValue] [nvarchar](max) NULL,
	[OtOId] [int] NOT NULL,
	[OtOValue] [nvarchar](max) NULL,
	[OtStdId] [int] NOT NULL,
	[OtStdValue] [nvarchar](max) NULL,
	[TransportAllowanceId] [int] NOT NULL,
	[TransportAllowanceValue] [nvarchar](max) NULL,
	[ZoneId] [int] NOT NULL,
 CONSTRAINT [PK_TMSEventContract] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSEventPromotion]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSEventPromotion](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[EventType] [nvarchar](max) NULL,
	[EffectiveDate] [datetime2](7) NOT NULL,
	[Designation] [nvarchar](max) NULL,
	[DesignationType] [nvarchar](max) NULL,
	[EmployeeType] [nvarchar](max) NULL,
	[ZoneLocationId] [int] NOT NULL,
	[ShiftId] [int] NOT NULL,
	[ShiftKey] [nvarchar](max) NULL,
	[SubContractor] [nvarchar](max) NULL,
	[Recall] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
	[EligibilityShift] [bit] NOT NULL,
	[EligibilityAllowance] [bit] NOT NULL,
	[MealAllowanceId] [int] NOT NULL,
	[MealAllowanceValue] [nvarchar](max) NULL,
	[MonthlyShiftAllowanceId] [int] NOT NULL,
	[MonthlyShiftAllowanceValue] [nvarchar](max) NULL,
	[EligibilityOt] [bit] NOT NULL,
	[MaxWorkingHours] [int] NOT NULL,
	[OtPhId] [int] NOT NULL,
	[OtPhValue] [nvarchar](max) NULL,
	[OtRdId] [int] NOT NULL,
	[OtRdValue] [nvarchar](max) NULL,
	[OtOId] [int] NOT NULL,
	[OtOValue] [nvarchar](max) NULL,
	[OtStdId] [int] NOT NULL,
	[OtStdValue] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
	[TransportAllowanceId] [int] NOT NULL,
	[TransportAllowanceValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_TMSEventPromotion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSEventRejoin]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSEventRejoin](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[EventType] [nvarchar](max) NULL,
	[EffectiveDate] [datetime2](7) NOT NULL,
	[EmpKey] [nvarchar](max) NULL,
	[EmpId] [nvarchar](max) NULL,
	[ZoneLocationId] [int] NOT NULL,
	[ShiftId] [int] NOT NULL,
	[ShiftKey] [nvarchar](max) NULL,
	[SubContractor] [nvarchar](max) NULL,
	[Recall] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
	[EligibilityShift] [bit] NOT NULL,
	[EligibilityAllowance] [bit] NOT NULL,
	[MealAllowanceId] [int] NOT NULL,
	[MealAllowanceValue] [nvarchar](max) NULL,
	[MonthlyShiftAllowanceId] [int] NOT NULL,
	[MonthlyShiftAllowanceValue] [nvarchar](max) NULL,
	[EligibilityOt] [bit] NOT NULL,
	[MaxWorkingHours] [int] NOT NULL,
	[OtPhId] [int] NOT NULL,
	[OtPhValue] [nvarchar](max) NULL,
	[OtRdId] [int] NOT NULL,
	[OtRdValue] [nvarchar](max) NULL,
	[OtOId] [int] NOT NULL,
	[OtOValue] [nvarchar](max) NULL,
	[OtStdId] [int] NOT NULL,
	[OtStdValue] [nvarchar](max) NULL,
	[TransportAllowanceId] [int] NOT NULL,
	[TransportAllowanceValue] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_TMSEventRejoin] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSEventTerminationResign]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSEventTerminationResign](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[EventType] [nvarchar](max) NULL,
	[EffectiveDate] [datetime2](7) NOT NULL,
	[ResignReasonId] [int] NOT NULL,
	[ZoneLocationId] [int] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_TMSEventTerminationResign] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSEventTransfer]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSEventTransfer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[EventType] [nvarchar](max) NULL,
	[PeriodStart] [datetime2](7) NOT NULL,
	[PeriodEnd] [datetime2](7) NOT NULL,
	[ZoneLocationId] [int] NOT NULL,
	[ShiftId] [int] NOT NULL,
	[ShiftKey] [nvarchar](max) NULL,
	[SubContractor] [nvarchar](max) NULL,
	[Recall] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
	[EligibilityShift] [bit] NOT NULL,
	[EligibilityAllowance] [bit] NOT NULL,
	[MealAllowanceId] [int] NOT NULL,
	[MealAllowanceValue] [nvarchar](max) NULL,
	[MonthlyShiftAllowanceId] [int] NOT NULL,
	[MonthlyShiftAllowanceValue] [nvarchar](max) NULL,
	[EligibilityOt] [bit] NOT NULL,
	[MaxWorkingHours] [int] NOT NULL,
	[OtPhId] [int] NOT NULL,
	[OtPhValue] [nvarchar](max) NULL,
	[OtRdId] [int] NOT NULL,
	[OtRdValue] [nvarchar](max) NULL,
	[OtOId] [int] NOT NULL,
	[OtOValue] [nvarchar](max) NULL,
	[OtStdId] [int] NOT NULL,
	[OtStdValue] [nvarchar](max) NULL,
	[TransportAllowanceId] [int] NOT NULL,
	[TransportAllowanceValue] [nvarchar](max) NULL,
	[ZoneId] [int] NOT NULL,
 CONSTRAINT [PK_TMSEventTransfer] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSJobSite]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSJobSite](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[SiteId] [int] NOT NULL,
	[CompanyId] [int] NOT NULL,
	[DepartmentId] [int] NOT NULL,
	[ZoneId] [int] NOT NULL,
	[Level] [int] NULL,
	[Area] [nvarchar](max) NULL,
	[Location] [nvarchar](max) NULL,
	[DeleteFlag] [int] NOT NULL,
	[EmployeeUsed] [nvarchar](max) NULL,
 CONSTRAINT [PK_AppTMSJobSites] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSLevel]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSLevel](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Value] [nvarchar](max) NULL,
	[ZoneLocationId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSLevel] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSLocation]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSLocation](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[Name] [nvarchar](max) NULL,
	[ZoneLocationId] [int] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_TMSLocation] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSOtCode]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSOtCode](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[CompanyId] [int] NOT NULL,
	[PayrollCode] [nvarchar](max) NULL,
	[Payroll] [nvarchar](max) NULL,
	[Type] [int] NOT NULL,
	[Rate] [float] NOT NULL,
	[Remarks] [int] NOT NULL,
	[StartDate] [datetime2](7) NULL,
	[EndDate] [datetime2](7) NULL,
	[JobsiteUsed] [nvarchar](max) NULL,
	[Used] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSOtCode] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSOtMaxTime]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSOtMaxTime](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[JobSiteId] [int] NOT NULL,
	[WorkingHoursWeek] [int] NOT NULL,
	[OtHoursMonth] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSOtMaxTime] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSOtSetting]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSOtSetting](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[PayrollCode] [nvarchar](max) NULL,
	[Payroll] [nvarchar](max) NULL,
	[Type] [int] NOT NULL,
	[Rate] [float] NOT NULL,
	[Remarks] [int] NULL,
	[StartDate] [datetime2](7) NULL,
	[EndDate] [datetime2](7) NULL,
	[CompanyId] [int] NOT NULL,
	[JobsiteId] [int] NOT NULL,
	[OtcodeId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSOtSetting] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSPublicHoliday]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSPublicHoliday](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Event] [nvarchar](max) NULL,
	[Year] [int] NOT NULL,
	[Country] [nvarchar](max) NULL,
	[PeriodStartDate] [datetime2](7) NOT NULL,
	[PeriodEndDate] [datetime2](7) NOT NULL,
	[PublicHolidayId] [int] NOT NULL,
	[CompanyId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSPublicHoliday] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSRace]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSRace](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Value] [nvarchar](max) NULL,
	[CompanyId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSRace] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSResignReason]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSResignReason](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[CompanyId] [int] NOT NULL,
	[Code] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
	[StartDate] [datetime2](7) NOT NULL,
	[EndDate] [datetime2](7) NOT NULL,
	[Status] [int] NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSResignReason] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSRoster]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSRoster](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[Date] [datetime2](7) NOT NULL,
	[OtCodeId] [int] NOT NULL,
	[OtCodeValue] [nvarchar](max) NULL,
	[Remarks] [nvarchar](max) NULL,
	[AttendanceId] [int] NOT NULL,
	[ShiftId] [int] NOT NULL,
	[StartTime] [nvarchar](max) NULL,
	[EndTime] [nvarchar](max) NULL,
	[Type] [int] NOT NULL,
	[EndTime1] [nvarchar](max) NULL,
	[EndTime2] [nvarchar](max) NULL,
	[EndTime3] [nvarchar](max) NULL,
	[Remarks1] [nvarchar](max) NULL,
	[Remarks2] [nvarchar](max) NULL,
	[Remarks3] [nvarchar](max) NULL,
	[StartTime1] [nvarchar](max) NULL,
	[StartTime2] [nvarchar](max) NULL,
	[StartTime3] [nvarchar](max) NULL,
	[Type1] [int] NOT NULL,
	[Type2] [int] NOT NULL,
	[Type3] [int] NOT NULL,
 CONSTRAINT [PK_TMSRoster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSShift]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSShift](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[MainCode] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
	[CompanyId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSShift] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSShiftJobSite]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSShiftJobSite](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[SubCode] [nvarchar](max) NULL,
	[StartHours] [nvarchar](max) NULL,
	[EndHours] [nvarchar](max) NULL,
	[Minutes] [int] NOT NULL,
	[StartMinutes] [nvarchar](max) NULL,
	[EndMinutes] [nvarchar](max) NULL,
	[Hours] [nvarchar](max) NULL,
	[PeriodDate] [datetime2](7) NOT NULL,
	[Remarks] [nvarchar](max) NULL,
	[Value] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
	[ShiftId] [int] NOT NULL,
	[JobSiteId] [int] NOT NULL,
	[MainCode] [nvarchar](max) NULL,
 CONSTRAINT [PK_TMSShiftJobSite] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSSite]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSSite](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[CompanyId] [int] NOT NULL,
	[DepartmentId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[JobSiteUsed] [nvarchar](max) NULL,
 CONSTRAINT [PK_AppTMSsites] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSZone]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSZone](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[DeleteFlag] [int] NOT NULL,
	[Name] [nvarchar](max) NULL,
	[ZoneLocationId] [int] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_TMSZone] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TMSZoneLocation]    Script Date: 8/19/2019 9:08:43 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TMSZoneLocation](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [nvarchar](256) NULL,
	[UpdatedBy] [nvarchar](256) NULL,
	[UpdatedDate] [datetime2](7) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
	[JobSiteId] [int] NOT NULL,
	[LevelId] [int] NOT NULL,
	[AreaId] [int] NOT NULL,
	[LocationId] [int] NOT NULL,
	[DeleteFlag] [int] NOT NULL,
 CONSTRAINT [PK_TMSZoneLocation] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190528093625_Initial', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190529025026_initUpdateJobSite', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190529030329_initUpdateAttendance', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190530223143_InitialCreate', N'2.1.8-servicing-32085')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190530223917_InitialCreate', N'2.1.8-servicing-32085')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190531080207_AddTMSAttendance', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190531115629_UpdateTMSAttendance', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190601155830_editApplicationUser', N'2.1.8-servicing-32085')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190601161800_editApplicationUser1', N'2.1.8-servicing-32085')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190601163128_editApplicationUser2', N'2.1.8-servicing-32085')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190603052441_AdTMSPublicHoliday', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190603144602_AddTMSRace', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190607093659_AddSGHEmployee', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190610035605_AddTMSOtCode', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190610101621_AddTMSOtCode', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190611032128_AddTMSAllowance', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190612044954_AddTMSOtCodeAndOtMaxTime', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190612225110_AddTMSOtSetting', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190612235753_ad employee', N'2.1.8-servicing-32085')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190613090109_AddTMSAllowanceJobsite', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190613094757_AddTMSAllowanceJobsite2', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190617081722_AddTMSShiftTable', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190618091255_AddTMSZoneLocationTable', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190619101208_UpdateTMSOtCode', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190620085839_AddLevelAndArea', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190622091813_UpdateDB', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190624025620_AddTMSLocation', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190624042931_EditTMSLocation', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190624082003_AddTMSZone', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190625085308_AddTMSShift', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190627083431_UpdateTMSZone', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190703175230_AddTMSEmployeeLogTime', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190705035959_UpdateRemarksOTCode', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190710170843_AddTMSRosterTable', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190710171659_AddTMSRosterTable', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190710172235_AddTMSRosterTable', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190710172618_AddTMSRosterTable', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190712032447_initTMSRoster', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190712041530_AddTableTMSRoster', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190715025835_UpdateEmployeeLogTime', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190715045349_UpdateTMSLogTime', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190715154116_UpdateTableTMSRoster', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190716043353_Init', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190716092328_TMSEventContract', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190716164135_AddTMSEventPromotion', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190717041556_AddTMSEventTerminationResign', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190717045552_AddEventRejon', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190717050636_Add TMSEventTR', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190717052011_AddEventRejoin', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190717071156_AddEventRejoin', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190717072433_AddTableEventRejoin', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190717091502_AddEventRejoin', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190718041108_AddTMSEventRejoin', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190718075750_UpdateEventPromotion', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190718080304_UpdateTableTMSEventTR', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190718080629_UpdateTableEventRejoin', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190718081219_UpdateTableEventContract', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190718081647_UpdateEventTransfer', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190718102139_editRejoin', N'2.1.8-servicing-32085')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190722080301_EditTableApplicationUser', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190722081125_EditTableUser_token', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190722083007_EditTableUserv2', N'2.1.11-servicing-32099')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190813110443_UpdateRoster', N'2.1.11-servicing-32099')
SET IDENTITY_INSERT [dbo].[AspNetRoleClaims] ON 

INSERT [dbo].[AspNetRoleClaims] ([Id], [RoleId], [ClaimType], [ClaimValue]) VALUES (1, N'43311e79-4602-4c96-a6b0-9ad89b16f3f4', N'permission', N'users.view')
INSERT [dbo].[AspNetRoleClaims] ([Id], [RoleId], [ClaimType], [ClaimValue]) VALUES (2, N'43311e79-4602-4c96-a6b0-9ad89b16f3f4', N'permission', N'users.manage')
INSERT [dbo].[AspNetRoleClaims] ([Id], [RoleId], [ClaimType], [ClaimValue]) VALUES (3, N'43311e79-4602-4c96-a6b0-9ad89b16f3f4', N'permission', N'roles.view')
INSERT [dbo].[AspNetRoleClaims] ([Id], [RoleId], [ClaimType], [ClaimValue]) VALUES (4, N'43311e79-4602-4c96-a6b0-9ad89b16f3f4', N'permission', N'roles.manage')
INSERT [dbo].[AspNetRoleClaims] ([Id], [RoleId], [ClaimType], [ClaimValue]) VALUES (5, N'43311e79-4602-4c96-a6b0-9ad89b16f3f4', N'permission', N'roles.assign')
SET IDENTITY_INSERT [dbo].[AspNetRoleClaims] OFF
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp], [Description], [CreatedBy], [UpdatedBy], [CreatedDate], [UpdatedDate]) VALUES (N'43311e79-4602-4c96-a6b0-9ad89b16f3f4', N'administrator', N'ADMINISTRATOR', N'ebb92888-defc-4284-af8f-dad0363e367f', N'Default administrator', NULL, NULL, CAST(N'2019-05-28T09:39:31.9869145' AS DateTime2), CAST(N'2019-05-28T09:39:34.2224831' AS DateTime2))
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp], [Description], [CreatedBy], [UpdatedBy], [CreatedDate], [UpdatedDate]) VALUES (N'e8e6b8ae-7bdc-4bba-93db-23b0e1f667a5', N'user', N'USER', N'33b3c30f-9fb6-4a56-9f9b-6a4e59668e11', N'Default user', NULL, NULL, CAST(N'2019-05-28T09:39:34.4547221' AS DateTime2), CAST(N'2019-05-28T09:39:34.4547221' AS DateTime2))
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'e7656450-ec52-4a73-bda9-39633cd63ee5', N'e8e6b8ae-7bdc-4bba-93db-23b0e1f667a5')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [JobTitle], [FullName], [Configuration], [IsEnabled], [CreatedBy], [UpdatedBy], [CreatedDate], [UpdatedDate], [Role], [Token]) VALUES (N'12b27ef6-0cdf-433b-bf78-565ca4ea9515', N'admin', N'ADMIN', N'admin2@gmail.com', N'ADMIN2@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAELi6l4Oyn4lJNqs7aX3ocQ/+oWBsWFcDqeBANLyr4EKSC9Bq7rZ8mcHNOTnDEQSPhQ==', N'YLU2TFXS2WMX43FKPCA4SWTAX4POW6NP', N'892fc9ba-7ff3-4bd4-b8c0-11457bbdbb9d', N'string', 0, 0, NULL, 1, 0, N'admin2', N'admin2', N'string', 1, NULL, NULL, CAST(N'2019-06-03T00:07:02.3450637' AS DateTime2), CAST(N'2019-08-19T00:24:07.3574509' AS DateTime2), 0, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMzY1N2JlYS02ODcxLTRmODItODcxYi1jMWQyNTZlODc1NWUiLCJleHAiOjE1NjYxNzYwNDcsImlzcyI6InRodW9uZ3ZoIiwiYXVkIjoidGh1b25ndmgifQ.dADsGXY37b0-wOENc1pJ0bQlgPfUacKRk_-K4Ychj9g')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [JobTitle], [FullName], [Configuration], [IsEnabled], [CreatedBy], [UpdatedBy], [CreatedDate], [UpdatedDate], [Role], [Token]) VALUES (N'5344e7c3-052d-4909-8514-7da7c143f145', N'phuongnv', N'PHUONGNV', N'nguyenvanphuongbk@gmail.com', N'NGUYENVANPHUONGBK@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEJhtNHahBoDWnUTUA7Vo4+vLttBzfJ9CoALyX1pSkdV3lVoFSWMzd0MgbVCJLGz20Q==', N'E62NKAPJKKPPYNO47ENHMQCNAVCX2TIC', N'e1910917-574e-4199-8826-35dce72f6726', N'string', 0, 0, NULL, 1, 0, N'string', N'nguyen van phuong', N'string', 1, NULL, NULL, CAST(N'2019-06-02T19:09:48.6714105' AS DateTime2), CAST(N'2019-06-10T22:43:05.9673065' AS DateTime2), 0, NULL)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [JobTitle], [FullName], [Configuration], [IsEnabled], [CreatedBy], [UpdatedBy], [CreatedDate], [UpdatedDate], [Role], [Token]) VALUES (N'803e76c5-a332-4959-a327-51f1e816973d', N'demo1', N'DEMO1', N'demo1@gmail.com', N'DEMO1@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEOqSJs+1ry4UodxkVvoEmCdGi5pMla0tC6+v22nZUPbd9TJoV/rECkmQsh3ZTJeDyw==', N'G2ZMYAYR47XEXZG62YD4J6UJ2XMT23AJ', N'75ad80a7-3a47-47eb-b8b6-17bc153d6fbb', N'string', 0, 0, NULL, 1, 0, N'string', N'string', N'string', 1, NULL, NULL, CAST(N'2019-07-22T09:37:24.0318591' AS DateTime2), CAST(N'2019-07-22T09:37:24.0318591' AS DateTime2), 1, N'')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [JobTitle], [FullName], [Configuration], [IsEnabled], [CreatedBy], [UpdatedBy], [CreatedDate], [UpdatedDate], [Role], [Token]) VALUES (N'b27cfe3a-f01c-47f9-a012-83efe72c57aa', N'demo', N'DEMO', N'demo@gmail.com', N'DEMO@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEGKwfWgFqIZRfHjulguJXOxZHE1w3ElF9lIaGNKcWsX87RkjiCzuii6tmcRwEo5ScA==', N'C4BYKDIOL2XUTPGHFVCACAKJ2JSYX4JF', N'a77acb36-1105-4a0e-ad98-243776fcc65e', N'string', 0, 0, NULL, 1, 0, N'string', N'string', N'string', 1, NULL, NULL, CAST(N'2019-07-22T09:31:04.5414784' AS DateTime2), CAST(N'2019-07-22T09:32:22.1593009' AS DateTime2), 1, N'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyODg3OTdjMi1hZGVkLTQwMzktOTRiOC05ZWUwODBkNGQ1M2IiLCJleHAiOjE1NjM3ODk3MzksImlzcyI6InRodW9uZ3ZoIiwiYXVkIjoidGh1b25ndmgifQ.5c8QozBqKs9pVXs2_mzQ31xhXq31p0hz4Ryhory4E0k')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [JobTitle], [FullName], [Configuration], [IsEnabled], [CreatedBy], [UpdatedBy], [CreatedDate], [UpdatedDate], [Role], [Token]) VALUES (N'e7656450-ec52-4a73-bda9-39633cd63ee5', N'user', N'USER', N'user@ebenmonney.com', N'USER@EBENMONNEY.COM', 1, N'AQAAAAEAACcQAAAAEL7F8h9tMYu2+TPWJ9qG/tfEObKLXHU805aryFhvPWZoHS9il2V+wcl0cYLfbpSIIw==', N'R3NPIQSHVVSASPGNJC3OO5ALPUVTJ7XI', N'6c52a3e5-ba9f-428a-9dfd-50754f5f0e05', N'+1 (123) 000-0001', 0, 0, NULL, 1, 0, NULL, N'Inbuilt Standard User', NULL, 1, NULL, NULL, CAST(N'2019-05-28T09:39:36.0934115' AS DateTime2), CAST(N'2019-05-28T09:39:36.8585116' AS DateTime2), 0, NULL)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [JobTitle], [FullName], [Configuration], [IsEnabled], [CreatedBy], [UpdatedBy], [CreatedDate], [UpdatedDate], [Role], [Token]) VALUES (N'ebadd34b-7205-4c87-96b4-2fd3f62158b7', N'hoangthuong', N'HOANGTHUONG', N'admin@gmail.com', N'ADMIN@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEMOR6KCEMmK/mwOdH8ZMveNAE6jIoGMBZG7WhvRT2FKzh7aKNQ3CGP4rLhBJl0ixzQ==', N'LAAY4RQYNFDXWOMPD2YEUSCVMBI3LEFB', N'1feca527-24de-4525-a6d1-0f47876aef1f', N'0123456789', 0, 0, NULL, 1, 0, N'admin', N'admin', N'string', 1, NULL, NULL, CAST(N'2019-06-01T16:49:46.5526151' AS DateTime2), CAST(N'2019-06-02T15:00:31.2639551' AS DateTime2), 0, NULL)
SET IDENTITY_INSERT [dbo].[Attendance] ON 

INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (15, NULL, NULL, CAST(N'2019-06-25T12:01:08.9924793' AS DateTime2), CAST(N'2019-06-04T04:27:32.4802730' AS DateTime2), N'A11', N'A11', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'1', 1, 1, N';3;1007;1006;1014;2017', 1)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (31, NULL, NULL, CAST(N'2019-06-28T16:44:45.0621821' AS DateTime2), CAST(N'2019-06-13T07:45:53.7680206' AS DateTime2), N'Name', N'demo', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'demo', 1, 1, N';2016;3016', 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2031, NULL, NULL, CAST(N'2019-06-28T16:44:55.3963032' AS DateTime2), CAST(N'2019-06-27T21:18:38.8250907' AS DateTime2), N'name', N'value', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'value', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2032, NULL, NULL, CAST(N'2019-06-29T06:37:46.9189447' AS DateTime2), CAST(N'2019-06-28T16:45:28.7408920' AS DateTime2), N'1', N'1', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'1', 1, 1, N';3016', 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2033, NULL, NULL, CAST(N'2019-06-28T16:45:37.1256238' AS DateTime2), CAST(N'2019-06-28T16:45:37.1256238' AS DateTime2), N'1', N'1', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'1', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2034, NULL, NULL, CAST(N'2019-07-15T05:13:57.0980783' AS DateTime2), CAST(N'2019-06-28T16:45:44.9555519' AS DateTime2), N'1', N'1', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'1', 1, 1, N';3016', 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2035, NULL, NULL, CAST(N'2019-06-28T16:45:53.2584387' AS DateTime2), CAST(N'2019-06-28T16:45:53.2584387' AS DateTime2), N'2', N'2', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'2', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2036, NULL, NULL, CAST(N'2019-08-14T04:35:52.3953736' AS DateTime2), CAST(N'2019-06-28T16:46:00.3875633' AS DateTime2), N'2', N'2', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'2', 1, 1, N';3016', 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2037, NULL, NULL, CAST(N'2019-06-28T16:46:07.6522005' AS DateTime2), CAST(N'2019-06-28T16:46:07.6522005' AS DateTime2), N'2', N'2', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'2', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2038, NULL, NULL, CAST(N'2019-06-28T16:46:15.1546350' AS DateTime2), CAST(N'2019-06-28T16:46:15.1546350' AS DateTime2), N'2', N'2', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'2', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2039, NULL, NULL, CAST(N'2019-06-28T16:46:22.0047079' AS DateTime2), CAST(N'2019-06-28T16:46:22.0047079' AS DateTime2), N'2', N'2', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'2', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2040, NULL, NULL, CAST(N'2019-08-14T04:04:26.5636504' AS DateTime2), CAST(N'2019-06-28T16:46:32.6946653' AS DateTime2), N'3', N'3', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'3', 1, 1, N';3016', 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2041, NULL, NULL, CAST(N'2019-06-28T16:46:39.3655338' AS DateTime2), CAST(N'2019-06-28T16:46:39.3655338' AS DateTime2), N'3', N'3', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'3', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2042, NULL, NULL, CAST(N'2019-06-28T16:46:46.7154539' AS DateTime2), CAST(N'2019-06-28T16:46:46.7154539' AS DateTime2), N'3', N'3', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'3', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2043, NULL, NULL, CAST(N'2019-06-28T16:46:54.3485481' AS DateTime2), CAST(N'2019-06-28T16:46:54.3485481' AS DateTime2), N'4', N'4', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'4', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2044, NULL, NULL, CAST(N'2019-06-28T16:47:05.7878811' AS DateTime2), CAST(N'2019-06-28T16:47:05.7878811' AS DateTime2), N'2', N'2', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'2', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2045, NULL, NULL, CAST(N'2019-06-28T16:47:15.3452636' AS DateTime2), CAST(N'2019-06-28T16:47:15.3452636' AS DateTime2), N'3', N'3', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'3', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2046, NULL, NULL, CAST(N'2019-06-28T16:47:22.1327709' AS DateTime2), CAST(N'2019-06-28T16:47:22.1327709' AS DateTime2), N'1', N'1', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'1', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2047, NULL, NULL, CAST(N'2019-06-28T16:47:28.6358027' AS DateTime2), CAST(N'2019-06-28T16:47:28.6358027' AS DateTime2), N'1', N'1', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'1', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2048, NULL, NULL, CAST(N'2019-06-28T16:47:41.0691524' AS DateTime2), CAST(N'2019-06-28T16:47:41.0691524' AS DateTime2), N'3', N'3', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'3', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2049, NULL, NULL, CAST(N'2019-06-28T16:47:48.7148479' AS DateTime2), CAST(N'2019-06-28T16:47:48.7148479' AS DateTime2), N'4', N'4', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'4', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2050, NULL, NULL, CAST(N'2019-06-28T16:47:56.7470897' AS DateTime2), CAST(N'2019-06-28T16:47:56.7470897' AS DateTime2), N'5', N'5', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'5', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2051, NULL, NULL, CAST(N'2019-06-28T16:48:04.4220727' AS DateTime2), CAST(N'2019-06-28T16:48:04.4220727' AS DateTime2), N'6', N'6', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'6', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2052, NULL, NULL, CAST(N'2019-06-28T16:48:11.8392134' AS DateTime2), CAST(N'2019-06-28T16:48:11.8392134' AS DateTime2), N'6', N'6', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'6', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2053, NULL, NULL, CAST(N'2019-06-28T16:48:18.9712436' AS DateTime2), CAST(N'2019-06-28T16:48:18.9712436' AS DateTime2), N'6', N'6', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'6', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2054, NULL, NULL, CAST(N'2019-06-28T16:48:25.7947046' AS DateTime2), CAST(N'2019-06-28T16:48:25.7947046' AS DateTime2), N'6', N'6', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'6', 1, 0, NULL, 0)
INSERT [dbo].[Attendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [StartDate], [EndDate], [Value], [Status], [Used], [CompanyUsed], [DeleteFlag]) VALUES (2055, NULL, NULL, CAST(N'2019-06-28T16:48:33.0283937' AS DateTime2), CAST(N'2019-06-28T16:48:33.0283937' AS DateTime2), N'6', N'6', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'6', 1, 0, NULL, 0)
SET IDENTITY_INSERT [dbo].[Attendance] OFF
SET IDENTITY_INSERT [dbo].[Company] ON 

INSERT [dbo].[Company] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [EmailAddress], [Address], [PICHandphone], [Status], [Logo], [Department], [Site], [JobSite], [Zone], [Level], [Area], [Location], [DeleteFlag], [DepartmentUsed]) VALUES (2016, NULL, NULL, CAST(N'2019-08-10T12:56:14.7852602' AS DateTime2), CAST(N'2019-06-14T06:42:03.0673802' AS DateTime2), N'EF Demo', N'james@inspius.com', N'998 Toa Payoh', N'8693 6978', 1, N'/uploads/EF-Logo_CMYK(header).jpg', N'Department', N'Site', N'JobSite', N'Zone', N'Level', N'Area', N'Location', 0, NULL)
INSERT [dbo].[Company] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [EmailAddress], [Address], [PICHandphone], [Status], [Logo], [Department], [Site], [JobSite], [Zone], [Level], [Area], [Location], [DeleteFlag], [DepartmentUsed]) VALUES (3016, NULL, NULL, CAST(N'2019-08-05T02:22:00.4769936' AS DateTime2), CAST(N'2019-06-17T04:30:39.7745460' AS DateTime2), N'Inspius', N'ngoc@inspius.com', N'Hanoi', N'1232134', 1, N'\uploads\Capture.PNG', N'Department1', N'Site1', N'Job Site1', N'Zone1', N'Level1', N'Area1', N'Location1', 0, NULL)
SET IDENTITY_INSERT [dbo].[Company] OFF
SET IDENTITY_INSERT [dbo].[PublicHoliday] ON 

INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (18, NULL, NULL, CAST(N'2019-08-16T07:18:09.9162501' AS DateTime2), CAST(N'2019-06-02T03:33:29.2971968' AS DateTime2), N'New Year 2', CAST(N'2019-12-17T05:00:00.0000000' AS DateTime2), CAST(N'2019-01-08T05:00:00.0000000' AS DateTime2), 2019, N'SG', N';3;4;1013;1007;1014;2017;2016', 0)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3064, NULL, NULL, CAST(N'2019-06-24T07:46:51.0298302' AS DateTime2), CAST(N'2019-06-21T07:21:34.8921964' AS DateTime2), N'Lunar New Year', CAST(N'2019-12-31T17:00:00.0000000' AS DateTime2), CAST(N'2020-01-11T00:00:00.0000000' AS DateTime2), 2020, N'VN', N';3016', 0)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3075, NULL, NULL, CAST(N'2019-06-29T09:55:48.7139578' AS DateTime2), CAST(N'2019-06-25T11:58:14.2520784' AS DateTime2), N'1', CAST(N'2019-06-23T17:00:00.0000000' AS DateTime2), CAST(N'2019-06-23T17:00:00.0000000' AS DateTime2), 2019, N'SG', N'', 1)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3076, NULL, NULL, CAST(N'2019-07-02T23:59:23.5753795' AS DateTime2), CAST(N'2019-06-29T09:56:04.2778597' AS DateTime2), N'demo2', CAST(N'2019-06-29T09:55:57.6080000' AS DateTime2), CAST(N'2019-06-29T09:55:57.6080000' AS DateTime2), 2019, N'SG', N';3016', 0)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3077, NULL, NULL, CAST(N'2019-07-03T00:07:25.1972794' AS DateTime2), CAST(N'2019-07-02T23:54:20.0331273' AS DateTime2), N'year1', CAST(N'2019-07-02T23:54:11.3310000' AS DateTime2), CAST(N'2019-07-05T00:00:00.0000000' AS DateTime2), 2019, N'SG', N';3016', 0)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3078, NULL, NULL, CAST(N'2019-07-10T06:29:06.9631280' AS DateTime2), CAST(N'2019-07-03T21:45:19.9379465' AS DateTime2), N'year2', CAST(N'2019-07-03T21:45:15.9190000' AS DateTime2), CAST(N'2019-07-03T21:45:15.9190000' AS DateTime2), 2019, N'SG', NULL, 1)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3079, NULL, NULL, CAST(N'2019-07-03T21:45:26.8992028' AS DateTime2), CAST(N'2019-07-03T21:45:26.8992028' AS DateTime2), N'year3', CAST(N'2019-07-03T21:45:23.4410000' AS DateTime2), CAST(N'2019-07-03T21:45:23.4410000' AS DateTime2), 2019, N'SG', NULL, 0)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3080, NULL, NULL, CAST(N'2019-07-03T21:45:39.3329807' AS DateTime2), CAST(N'2019-07-03T21:45:39.3329807' AS DateTime2), N'year5', CAST(N'2019-07-03T21:45:35.0520000' AS DateTime2), CAST(N'2019-07-03T21:45:35.0520000' AS DateTime2), 2019, N'SG', NULL, 0)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3081, NULL, NULL, CAST(N'2019-07-10T06:29:00.6582659' AS DateTime2), CAST(N'2019-07-03T21:45:47.6105283' AS DateTime2), N'year6', CAST(N'2019-07-03T21:45:43.7900000' AS DateTime2), CAST(N'2019-07-03T21:45:43.7900000' AS DateTime2), 2019, N'SG', NULL, 1)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3082, NULL, NULL, CAST(N'2019-07-10T06:28:59.7890562' AS DateTime2), CAST(N'2019-07-03T21:45:54.8445303' AS DateTime2), N'year7', CAST(N'2019-07-03T21:45:51.5020000' AS DateTime2), CAST(N'2019-07-03T21:45:51.5020000' AS DateTime2), 2019, N'SG', NULL, 1)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3083, NULL, NULL, CAST(N'2019-07-10T06:28:58.4393083' AS DateTime2), CAST(N'2019-07-03T21:46:11.0782886' AS DateTime2), N'year8', CAST(N'2019-07-03T21:46:07.1810000' AS DateTime2), CAST(N'2019-07-03T21:46:07.1810000' AS DateTime2), 2019, N'SG', NULL, 1)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3084, NULL, NULL, CAST(N'2019-07-10T06:29:03.9248031' AS DateTime2), CAST(N'2019-07-03T21:46:21.9324799' AS DateTime2), N'year9', CAST(N'2019-07-03T21:46:18.2620000' AS DateTime2), CAST(N'2019-07-03T21:46:18.2620000' AS DateTime2), 2019, N'SG', NULL, 1)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3085, NULL, NULL, CAST(N'2019-07-03T21:46:29.9346697' AS DateTime2), CAST(N'2019-07-03T21:46:29.9346697' AS DateTime2), N'year10', CAST(N'2019-07-03T21:46:25.9390000' AS DateTime2), CAST(N'2019-07-03T21:46:25.9390000' AS DateTime2), 2019, N'SG', NULL, 0)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3086, NULL, NULL, CAST(N'2019-07-10T06:28:50.6375734' AS DateTime2), CAST(N'2019-07-10T06:20:52.4947511' AS DateTime2), N'eventdemo1', CAST(N'2019-07-01T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-10T05:00:00.0000000' AS DateTime2), 2019, N'SG', NULL, 1)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3087, NULL, NULL, CAST(N'2019-07-11T00:17:24.2417132' AS DateTime2), CAST(N'2019-07-10T06:28:24.0189241' AS DateTime2), N'demo21', CAST(N'2019-07-01T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-10T05:00:00.0000000' AS DateTime2), 2019, N'SG', NULL, 1)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3088, NULL, NULL, CAST(N'2019-07-11T00:17:20.5006487' AS DateTime2), CAST(N'2019-07-10T06:29:30.7623341' AS DateTime2), N'demo3', CAST(N'2019-06-30T17:00:00.0000000' AS DateTime2), CAST(N'2019-07-10T05:00:00.0000000' AS DateTime2), 2019, N'SG', NULL, 1)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3089, NULL, NULL, CAST(N'2019-07-10T06:29:57.8616582' AS DateTime2), CAST(N'2019-07-10T06:29:57.8616582' AS DateTime2), N'demo4', CAST(N'2019-07-01T17:00:00.0000000' AS DateTime2), CAST(N'2019-07-10T05:00:00.0000000' AS DateTime2), 2019, N'SG', NULL, 0)
INSERT [dbo].[PublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [PeriodStartDate], [PeriodEndDate], [Year], [Country], [CompanyUsed], [DeleteFlag]) VALUES (3090, NULL, NULL, CAST(N'2019-08-16T03:20:52.4416136' AS DateTime2), CAST(N'2019-07-10T06:31:22.4312345' AS DateTime2), N'demop12', CAST(N'2019-07-11T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-13T05:00:00.0000000' AS DateTime2), 2019, N'SG', N';3016', 0)
SET IDENTITY_INSERT [dbo].[PublicHoliday] OFF
SET IDENTITY_INSERT [dbo].[SGHEmployee] ON 

INSERT [dbo].[SGHEmployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [CompanyId], [DepartmentId], [SiteId], [JobsiteId]) VALUES (1, NULL, NULL, CAST(N'2019-06-09T10:17:30.4519325' AS DateTime2), CAST(N'2019-06-09T10:17:30.4519325' AS DateTime2), N'YIN ZH', N'302294', 1006, 1016, 1022, 1025)
INSERT [dbo].[SGHEmployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [CompanyId], [DepartmentId], [SiteId], [JobsiteId]) VALUES (3, NULL, NULL, CAST(N'2019-06-10T03:22:06.8380161' AS DateTime2), CAST(N'2019-06-10T03:22:06.8380161' AS DateTime2), N'Ngoc', N'001', 1006, 1015, 0, 1024)
INSERT [dbo].[SGHEmployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [CompanyId], [DepartmentId], [SiteId], [JobsiteId]) VALUES (1004, NULL, NULL, CAST(N'2019-06-10T23:07:35.3233269' AS DateTime2), CAST(N'2019-06-10T23:07:35.3233269' AS DateTime2), N'phuongnv1', N'002', 1013, 1021, 1030, 1021)
INSERT [dbo].[SGHEmployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [CompanyId], [DepartmentId], [SiteId], [JobsiteId]) VALUES (1005, NULL, NULL, CAST(N'2019-06-11T03:42:18.8975903' AS DateTime2), CAST(N'2019-06-11T03:41:09.8423764' AS DateTime2), N'Ngoc', N'1', 1006, 1015, 1022, 1025)
SET IDENTITY_INSERT [dbo].[SGHEmployee] OFF
SET IDENTITY_INSERT [dbo].[TMSAllowance] ON 

INSERT [dbo].[TMSAllowance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Description], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (3006, NULL, NULL, CAST(N'2019-07-15T06:18:36.9513195' AS DateTime2), CAST(N'2019-06-18T02:37:10.3405535' AS DateTime2), N'Meals', N'A33', N'Remarks', CAST(N'2019-06-20T05:00:00.0000000' AS DateTime2), CAST(N'2019-06-24T05:00:00.0000000' AS DateTime2), CAST(5.00 AS Decimal(18, 2)), 3016, NULL, 0, 0)
INSERT [dbo].[TMSAllowance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Description], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (3008, NULL, NULL, CAST(N'2019-06-19T09:43:00.8192918' AS DateTime2), CAST(N'2019-06-18T07:02:41.5817902' AS DateTime2), N'1', N'1', N'1', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(1.00 AS Decimal(18, 2)), 3017, N'', 1, 0)
INSERT [dbo].[TMSAllowance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Description], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (3012, NULL, NULL, CAST(N'2019-08-01T09:28:08.0747285' AS DateTime2), CAST(N'2019-07-03T21:53:14.8003841' AS DateTime2), N'Allowance2', N'al2', N're2', CAST(N'2019-07-05T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-06T00:00:00.0000000' AS DateTime2), CAST(4.00 AS Decimal(18, 2)), 3016, N';3043;3036', 1, 0)
INSERT [dbo].[TMSAllowance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Description], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (3013, NULL, NULL, CAST(N'2019-07-11T07:03:21.0408585' AS DateTime2), CAST(N'2019-07-03T21:53:40.7197287' AS DateTime2), N'Allowance3', N'A3', N'R3', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(5.00 AS Decimal(18, 2)), 3016, NULL, 0, 1)
INSERT [dbo].[TMSAllowance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Description], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (3014, NULL, NULL, CAST(N'2019-07-11T07:04:40.9814465' AS DateTime2), CAST(N'2019-07-03T21:59:13.3400397' AS DateTime2), N'Allowance4', N'A4', N'R4', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(7.00 AS Decimal(18, 2)), 3016, N'', 1, 1)
INSERT [dbo].[TMSAllowance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Description], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (3015, NULL, NULL, CAST(N'2019-07-11T05:02:55.3385084' AS DateTime2), CAST(N'2019-07-03T21:59:28.9999823' AS DateTime2), N'Allowance5', N'code5', N'remarks5', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(8.00 AS Decimal(18, 2)), 3016, N'', 1, 1)
INSERT [dbo].[TMSAllowance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Description], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (3016, NULL, NULL, CAST(N'2019-08-14T19:29:53.9305897' AS DateTime2), CAST(N'2019-07-15T06:15:45.3293814' AS DateTime2), N'allow1', N'01', N'remark01', CAST(N'2019-07-02T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-18T05:00:00.0000000' AS DateTime2), CAST(11.00 AS Decimal(18, 2)), 3016, N';3036', 1, 0)
INSERT [dbo].[TMSAllowance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Description], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (3017, NULL, NULL, CAST(N'2019-08-03T08:39:12.8524090' AS DateTime2), CAST(N'2019-07-15T06:16:34.3550706' AS DateTime2), N'naem012', N'02', N'remark02', CAST(N'2019-07-12T05:00:00.0000000' AS DateTime2), CAST(N'2019-08-31T05:00:00.0000000' AS DateTime2), CAST(10.00 AS Decimal(18, 2)), 3016, NULL, 0, 0)
INSERT [dbo].[TMSAllowance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Description], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (3018, NULL, NULL, CAST(N'2019-08-12T02:39:50.5200998' AS DateTime2), CAST(N'2019-07-15T06:18:56.8632756' AS DateTime2), N'name2', N'02', N'remark02', CAST(N'2019-07-06T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-19T05:00:00.0000000' AS DateTime2), CAST(10.00 AS Decimal(18, 2)), 3016, N';3036', 1, 0)
INSERT [dbo].[TMSAllowance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Description], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (3019, NULL, NULL, CAST(N'2019-07-15T06:23:41.1788462' AS DateTime2), CAST(N'2019-07-15T06:23:33.0153399' AS DateTime2), N'04', N'04', N'renmark04', CAST(N'2019-07-02T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-18T05:00:00.0000000' AS DateTime2), CAST(40.00 AS Decimal(18, 2)), 3016, NULL, 0, 0)
SET IDENTITY_INSERT [dbo].[TMSAllowance] OFF
SET IDENTITY_INSERT [dbo].[TMSAllowanceJobsite] ON 

INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1, NULL, NULL, CAST(N'2019-06-14T08:18:25.3415563' AS DateTime2), CAST(N'2019-06-14T08:03:48.1184149' AS DateTime2), N'Meals', N'A36', N'extra', CAST(N'2019-06-14T08:16:47.1040000' AS DateTime2), CAST(N'2019-06-14T08:16:47.1040000' AS DateTime2), CAST(8.00 AS Decimal(18, 2)), 2017, 2034, 1003, 0)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1003, NULL, NULL, CAST(N'2019-06-16T07:41:07.5166139' AS DateTime2), CAST(N'2019-06-16T07:41:07.5166139' AS DateTime2), N'AaAA', N'A343', N'CCCC', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(3.00 AS Decimal(18, 2)), 2017, 2034, 1, 0)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1016, NULL, NULL, CAST(N'2019-06-28T22:09:33.4048365' AS DateTime2), CAST(N'2019-06-28T22:08:54.5004742' AS DateTime2), N'Meals', N'A33', N'Remarks', CAST(N'2019-06-28T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-30T00:00:00.0000000' AS DateTime2), CAST(5.00 AS Decimal(18, 2)), 3016, 3044, 3006, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1017, NULL, NULL, CAST(N'2019-07-03T22:06:34.9602523' AS DateTime2), CAST(N'2019-06-29T09:05:19.5339735' AS DateTime2), N'Meals', N'A33', N'Remarks', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(5.00 AS Decimal(18, 2)), 3016, 3043, 3006, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1018, NULL, NULL, CAST(N'2019-07-03T21:59:51.6355372' AS DateTime2), CAST(N'2019-07-03T21:54:03.0124029' AS DateTime2), N'Allowance2', N'al2', N're2', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(4.00 AS Decimal(18, 2)), 3016, 3043, 3012, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1019, NULL, NULL, CAST(N'2019-07-03T22:10:04.2352365' AS DateTime2), CAST(N'2019-07-03T22:06:39.5252850' AS DateTime2), N'Meals', N'A33', N'Remarks', CAST(N'2019-07-04T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-06T00:00:00.0000000' AS DateTime2), CAST(5.00 AS Decimal(18, 2)), 3016, 3043, 3006, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1020, NULL, NULL, CAST(N'2019-07-03T22:23:22.1276143' AS DateTime2), CAST(N'2019-07-03T22:09:51.9152419' AS DateTime2), N'Allowance2', N'al2', N're2', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(4.00 AS Decimal(18, 2)), 3016, 3043, 3012, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1021, NULL, NULL, CAST(N'2019-07-03T22:30:04.5731242' AS DateTime2), CAST(N'2019-07-03T22:27:25.8848058' AS DateTime2), N'Meals', N'A33', N'Remarks', CAST(N'2019-06-21T05:00:00.0000000' AS DateTime2), CAST(N'2019-06-24T05:00:00.0000000' AS DateTime2), CAST(5.00 AS Decimal(18, 2)), 3016, 3043, 3006, 0)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1022, NULL, NULL, CAST(N'2019-07-03T23:46:43.0883494' AS DateTime2), CAST(N'2019-07-03T23:40:36.9714630' AS DateTime2), N'Allowance4', N'A4', N'R4', CAST(N'2001-01-01T05:00:00.0000000' AS DateTime2), CAST(N'2001-01-01T05:00:00.0000000' AS DateTime2), CAST(7.00 AS Decimal(18, 2)), 3016, 3043, 3014, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1023, NULL, NULL, CAST(N'2019-07-11T07:04:32.8584625' AS DateTime2), CAST(N'2019-07-03T23:46:46.7901666' AS DateTime2), N'Allowance4', N'A4', N'R4', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(7.00 AS Decimal(18, 2)), 3016, 3043, 3014, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1024, NULL, NULL, CAST(N'2019-07-03T23:46:56.6529142' AS DateTime2), CAST(N'2019-07-03T23:46:56.6529142' AS DateTime2), N'Allowance2', N'al2', N're2', CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-06T05:00:00.0000000' AS DateTime2), CAST(4.00 AS Decimal(18, 2)), 3016, 3043, 3012, 0)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1025, NULL, NULL, CAST(N'2019-07-11T05:02:55.3383786' AS DateTime2), CAST(N'2019-07-11T05:02:01.6915091' AS DateTime2), N'Allowance5', N'code5', N'remarks5', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(8.00 AS Decimal(18, 2)), 3016, 3036, 3015, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1026, NULL, NULL, CAST(N'2019-07-11T06:59:50.7051761' AS DateTime2), CAST(N'2019-07-11T06:59:17.4919167' AS DateTime2), N'Allowance4', N'A4', N'R4', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(7.00 AS Decimal(18, 2)), 3016, 3036, 3014, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1027, NULL, NULL, CAST(N'2019-07-11T07:00:52.3383628' AS DateTime2), CAST(N'2019-07-11T07:00:40.4489313' AS DateTime2), N'Allowance4', N'A4', N'R4', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(7.00 AS Decimal(18, 2)), 3016, 3036, 3014, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1028, NULL, NULL, CAST(N'2019-07-11T07:02:16.5726408' AS DateTime2), CAST(N'2019-07-11T07:00:57.9953960' AS DateTime2), N'Allowance4', N'A4', N'R4', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(7.00 AS Decimal(18, 2)), 3016, 3036, 3014, 1)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1029, NULL, NULL, CAST(N'2019-08-14T19:29:41.0748454' AS DateTime2), CAST(N'2019-07-11T07:33:02.4855602' AS DateTime2), N'Meals', N'A33', N'Remarks', CAST(N'2019-06-22T05:00:00.0000000' AS DateTime2), CAST(N'2019-06-30T05:00:00.0000000' AS DateTime2), CAST(5.00 AS Decimal(18, 2)), 3016, 3036, 3006, 0)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1030, NULL, NULL, CAST(N'2019-08-01T09:28:20.7296653' AS DateTime2), CAST(N'2019-08-01T09:28:08.0746705' AS DateTime2), N'Allowance2', N'al2', N're2', CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-06T05:00:00.0000000' AS DateTime2), CAST(7.00 AS Decimal(18, 2)), 3016, 3036, 3012, 0)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1031, NULL, NULL, CAST(N'2019-08-12T02:41:03.5675502' AS DateTime2), CAST(N'2019-08-12T02:39:50.5200716' AS DateTime2), N'name2', N'02', N'remark02', CAST(N'2019-07-06T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-19T05:00:00.0000000' AS DateTime2), CAST(10.00 AS Decimal(18, 2)), 3016, 3036, 3018, 0)
INSERT [dbo].[TMSAllowanceJobsite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Code], [Remarks], [StartDate], [EndDate], [Amount], [CompanyId], [JobsiteId], [AllowanceCompanyId], [DeleteFlag]) VALUES (1032, NULL, NULL, CAST(N'2019-08-14T19:30:20.4818815' AS DateTime2), CAST(N'2019-08-14T19:29:53.9305889' AS DateTime2), N'allow1', N'01', N'remark01', CAST(N'2019-07-11T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-27T05:00:00.0000000' AS DateTime2), CAST(11.00 AS Decimal(18, 2)), 3016, 3036, 3016, 0)
SET IDENTITY_INSERT [dbo].[TMSAllowanceJobsite] OFF
SET IDENTITY_INSERT [dbo].[TMSArea] ON 

INSERT [dbo].[TMSArea] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (1, NULL, NULL, CAST(N'2019-06-21T04:44:52.1339350' AS DateTime2), CAST(N'2019-06-21T04:44:52.1339350' AS DateTime2), N'CGH', N'-', 0, 0)
INSERT [dbo].[TMSArea] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (2, NULL, NULL, CAST(N'2019-06-21T07:14:00.0471919' AS DateTime2), CAST(N'2019-06-21T04:53:45.8396107' AS DateTime2), N'CGM', N'-', 1, 0)
INSERT [dbo].[TMSArea] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (4, NULL, NULL, CAST(N'2019-06-21T10:46:16.5199859' AS DateTime2), CAST(N'2019-06-21T10:46:16.5199859' AS DateTime2), N'1', N'1', 2, 0)
INSERT [dbo].[TMSArea] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (5, NULL, NULL, CAST(N'2019-08-12T03:15:59.7800861' AS DateTime2), CAST(N'2019-06-25T03:15:31.4139681' AS DateTime2), N'Name', N'Value', 2, 0)
INSERT [dbo].[TMSArea] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (6, NULL, NULL, CAST(N'2019-07-02T23:42:59.9020522' AS DateTime2), CAST(N'2019-07-02T23:41:57.8029413' AS DateTime2), N'ar1', N'ar11', 14, 0)
INSERT [dbo].[TMSArea] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (7, NULL, NULL, CAST(N'2019-07-02T23:42:49.1300015' AS DateTime2), CAST(N'2019-07-02T23:42:49.1300015' AS DateTime2), N'ar2', N'ar2', 14, 0)
SET IDENTITY_INSERT [dbo].[TMSArea] OFF
SET IDENTITY_INSERT [dbo].[TMSAttendance] ON 

INSERT [dbo].[TMSAttendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [AttendanceId], [Value], [Remarks], [StartDate], [EndDate], [Status], [Code], [DeleteFlag]) VALUES (1076, NULL, NULL, CAST(N'2019-06-14T11:05:57.1686452' AS DateTime2), CAST(N'2019-06-14T11:05:57.1686452' AS DateTime2), N'Absent', 2016, 31, N'ABS', NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 1, N'AB', 0)
INSERT [dbo].[TMSAttendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [AttendanceId], [Value], [Remarks], [StartDate], [EndDate], [Status], [Code], [DeleteFlag]) VALUES (2076, NULL, NULL, CAST(N'2019-06-25T11:57:45.3148465' AS DateTime2), CAST(N'2019-06-17T07:33:24.8810585' AS DateTime2), N'A11', 3016, 15, N'1', NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 1, N'A11', 1)
INSERT [dbo].[TMSAttendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [AttendanceId], [Value], [Remarks], [StartDate], [EndDate], [Status], [Code], [DeleteFlag]) VALUES (2078, NULL, NULL, CAST(N'2019-08-14T04:38:47.4884211' AS DateTime2), CAST(N'2019-06-24T07:29:31.4800308' AS DateTime2), N'Absent', 3016, 31, N'ABS', N'Remarks', CAST(N'2019-08-14T05:00:00.0000000' AS DateTime2), CAST(N'2019-08-25T05:00:00.0000000' AS DateTime2), 1, N'AB', 0)
INSERT [dbo].[TMSAttendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [AttendanceId], [Value], [Remarks], [StartDate], [EndDate], [Status], [Code], [DeleteFlag]) VALUES (2079, NULL, NULL, CAST(N'2019-08-14T04:19:02.0759883' AS DateTime2), CAST(N'2019-06-29T06:37:46.9188960' AS DateTime2), N'1', 3016, 2032, N'1', N'1', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 1, N'1', 0)
INSERT [dbo].[TMSAttendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [AttendanceId], [Value], [Remarks], [StartDate], [EndDate], [Status], [Code], [DeleteFlag]) VALUES (2080, NULL, NULL, CAST(N'2019-07-15T05:13:57.0980343' AS DateTime2), CAST(N'2019-07-15T05:13:57.0980343' AS DateTime2), N'1', 3016, 2034, N'1', NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 1, N'1', 0)
INSERT [dbo].[TMSAttendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [AttendanceId], [Value], [Remarks], [StartDate], [EndDate], [Status], [Code], [DeleteFlag]) VALUES (2081, NULL, NULL, CAST(N'2019-08-14T04:04:26.5635881' AS DateTime2), CAST(N'2019-08-14T04:04:26.5635881' AS DateTime2), N'3', 3016, 2040, N'3', NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 1, N'3', 0)
INSERT [dbo].[TMSAttendance] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [AttendanceId], [Value], [Remarks], [StartDate], [EndDate], [Status], [Code], [DeleteFlag]) VALUES (2082, NULL, NULL, CAST(N'2019-08-14T04:41:24.2014941' AS DateTime2), CAST(N'2019-08-14T04:35:52.3953728' AS DateTime2), N'2', 3016, 2036, N'2', N'2', CAST(N'2019-08-15T05:00:00.0000000' AS DateTime2), CAST(N'2019-08-30T05:00:00.0000000' AS DateTime2), 1, N'2', 0)
SET IDENTITY_INSERT [dbo].[TMSAttendance] OFF
SET IDENTITY_INSERT [dbo].[TMSDepartment] ON 

INSERT [dbo].[TMSDepartment] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DeleteFlag], [SiteUsed]) VALUES (2023, NULL, NULL, CAST(N'2019-06-14T09:04:01.7487674' AS DateTime2), CAST(N'2019-06-14T06:42:22.7326445' AS DateTime2), N'Hospital', 3016, 0, NULL)
INSERT [dbo].[TMSDepartment] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DeleteFlag], [SiteUsed]) VALUES (2024, NULL, NULL, CAST(N'2019-06-14T07:24:45.9632532' AS DateTime2), CAST(N'2019-06-14T07:24:45.9632532' AS DateTime2), N'Division-Inspius', 3016, 0, NULL)
INSERT [dbo].[TMSDepartment] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DeleteFlag], [SiteUsed]) VALUES (3024, NULL, NULL, CAST(N'2019-06-18T07:00:50.7171846' AS DateTime2), CAST(N'2019-06-18T07:00:50.7171846' AS DateTime2), N'1', 3016, 0, NULL)
INSERT [dbo].[TMSDepartment] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DeleteFlag], [SiteUsed]) VALUES (3026, NULL, NULL, CAST(N'2019-06-28T22:10:14.1431291' AS DateTime2), CAST(N'2019-06-28T21:34:03.8573743' AS DateTime2), N'demo1', 3016, 1, NULL)
SET IDENTITY_INSERT [dbo].[TMSDepartment] OFF
SET IDENTITY_INSERT [dbo].[TMSemployee] ON 

INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (3, NULL, NULL, CAST(N'2019-07-12T12:15:29.6526608' AS DateTime2), CAST(N'2019-07-08T00:16:17.3784587' AS DateTime2), N'name1', CAST(N'2019-07-09T05:00:00.0000000' AS DateTime2), N'gen1', N'single', N'nation1', N'race1', N'religion', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'user1', NULL, N'nric1', NULL, NULL, NULL, NULL, N'AAAA', N'123', CAST(N'2019-07-01T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-02T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-03T05:00:00.0000000' AS DateTime2), NULL, NULL, CAST(N'2019-07-13T05:00:00.0000000' AS DateTime2), NULL, CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-14T05:00:00.0000000' AS DateTime2), 3043, 0, NULL, NULL, 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (4, NULL, NULL, CAST(N'2019-07-12T08:02:35.4076249' AS DateTime2), CAST(N'2019-07-08T00:32:33.9787619' AS DateTime2), N'name1', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'gen1', N'single', N'nation1', N'race1', N'adf', N'123456', N'12345', N'4f', N'2343', N'df', N'vdv', N'viet nam', N'\uploads\_MG_2164.JPG', N'userid1', N'123456', N'nric1', N'123456', N'123456', N'123456', N'123456', N'33342', N'23456', CAST(N'2019-07-09T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'vfdv', N'2222444', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'3333333', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'32434', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 3043, 0, N'A@gmail.com', N'ggfs', 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (5, NULL, NULL, CAST(N'2019-07-08T01:04:43.1194524' AS DateTime2), CAST(N'2019-07-08T00:46:19.0892469' AS DateTime2), N'name2', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'gen2', N'single', N'nation2', N'race1', N'religion', NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'\uploads\Capture - Copy.PNG', N'userid2', NULL, N'nric2', NULL, NULL, NULL, NULL, N'33342', NULL, CAST(N'2019-07-11T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 3043, 0, NULL, NULL, 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (6, NULL, NULL, CAST(N'2019-07-08T00:48:10.3281983' AS DateTime2), CAST(N'2019-07-08T00:48:02.7861025' AS DateTime2), N'name2', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'gen2', N'single', N'nation2', N'race1', N'religion', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'userid2', NULL, N'nric2', NULL, NULL, NULL, NULL, N'454354', NULL, CAST(N'2019-07-10T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 3043, 1, NULL, NULL, 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (7, NULL, NULL, CAST(N'2019-07-08T00:54:41.7843881' AS DateTime2), CAST(N'2019-07-08T00:54:35.7597183' AS DateTime2), N'name3', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'gen3', N'single', N'nation3', N'race1', N'religion', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'userid3', NULL, N'nric3', NULL, NULL, NULL, NULL, N'435435', NULL, CAST(N'2019-07-04T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 3043, 1, NULL, NULL, 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (8, NULL, NULL, CAST(N'2019-07-08T01:05:26.3733261' AS DateTime2), CAST(N'2019-07-08T01:05:26.3733261' AS DateTime2), N'name3', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'gen3', N'single', N'nation3', N'race1', N'religion', NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'\uploads\Capture.PNG', N'user3', NULL, N'nric3', NULL, NULL, NULL, NULL, N'34324', NULL, CAST(N'2019-07-03T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 3043, 0, NULL, NULL, 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (9, NULL, NULL, CAST(N'2019-08-13T03:18:01.5568306' AS DateTime2), CAST(N'2019-07-09T09:43:07.6670880' AS DateTime2), N'AA', CAST(N'2019-07-27T00:00:00.0000000' AS DateTime2), N'Male', N'single', N'VietNam', N'Race', N'religion', N'No', N'Number', N'stresss', N'ddd', N'ccc', N'xxxx', N'xxxxxx', NULL, N'xxxxx', N'123', N'xxx', N'xxxxx', N'xxxx', N'xxxx', N'xxxxx', N'xxxx', N'ccccc', CAST(N'2019-07-11T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-19T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-06T00:00:00.0000000' AS DateTime2), N'xxxx', NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'bbbb', CAST(N'2019-07-27T00:00:00.0000000' AS DateTime2), N'bbbbb', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 3036, 0, N'AA@gmail.com', N'xxxx', 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (10, NULL, NULL, CAST(N'2019-07-12T08:23:38.6574275' AS DateTime2), CAST(N'2019-07-12T08:06:24.7013281' AS DateTime2), N'aaaa', CAST(N'2019-07-19T00:00:00.0000000' AS DateTime2), N'sss', N's', N's', N's', N's', N's', N's', N's', N's', N's', N's', N's', NULL, N'ssss', N'123456', N'ss', N'ss', N'ss', N'ss', N'ss', N'ss', N'ss', CAST(N'2019-07-19T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-20T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-18T00:00:00.0000000' AS DateTime2), N'sss', N'sssss', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'sss', CAST(N'2019-07-19T00:00:00.0000000' AS DateTime2), N'ssss', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 3043, 0, N'aa@gmail.com', N'ss', 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (11, NULL, NULL, CAST(N'2019-07-12T08:24:57.2262707' AS DateTime2), CAST(N'2019-07-12T08:24:57.2262707' AS DateTime2), N'ggg', CAST(N'2019-07-12T00:00:00.0000000' AS DateTime2), N'ggg', N'ggg', N'ggg', N'ggg', N'gg', N'gg', N'ggg', N'gg', N'gg', N'gg', N'gg', N'ggg', NULL, N'ggggg', N'123456', N'gggg', N'gggg', N'ggg', N'gg', N'gg', N'gg', N'gg', CAST(N'2019-07-13T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-13T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-26T00:00:00.0000000' AS DateTime2), N'gg', N'gg', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), N'gg', CAST(N'2019-07-28T00:00:00.0000000' AS DateTime2), N'gggg', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 3036, 0, N'ggg@gmail.com', N'gg', 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (12, NULL, NULL, CAST(N'2019-07-12T12:21:02.8984693' AS DateTime2), CAST(N'2019-07-12T12:20:41.3425692' AS DateTime2), N'Name', CAST(N'2019-07-01T05:00:00.0000000' AS DateTime2), N'Gender', N'Marial Status', N'Marial Status', N'Race', N'Religion', N'Tel No', N'Home Number', N'Stress', N'Ward', N'District', N'City', N'Country', NULL, N'hoangkhoi28@gmail.com', N'123456a@', N'NRIC', N'NRIC', N'Passport No', N'Residence', N'Resign Reason', N'Key', N'ID', CAST(N'2019-07-02T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-03T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-04T05:00:00.0000000' AS DateTime2), N'Transport Agent', N'PLRD Licence No', CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), N'Emergency Recall List', CAST(N'2019-07-06T05:00:00.0000000' AS DateTime2), N'Work Permit No', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-07T05:00:00.0000000' AS DateTime2), 3043, 0, N'Email', N'Zone Location', 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (13, NULL, NULL, CAST(N'2019-07-12T12:49:50.4353990' AS DateTime2), CAST(N'2019-07-12T12:39:19.6652045' AS DateTime2), N'Name', CAST(N'2019-07-01T05:00:00.0000000' AS DateTime2), N'Gender', N'Marial Status', N'Nationality', N'Race', N'Religion', N'Tel No', N'Home Number', N'Stress', N'Ward', N'District', N'City', N'Country', NULL, N'User ID', N'Password', N'NRIC', N'Fin No', N'Passport No', N'Residence', N'Resign Reason', N'Key', N'ID', CAST(N'2019-07-12T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-02T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-03T05:00:00.0000000' AS DateTime2), N'Transport Agent', N'PLRD Licence No', CAST(N'2019-07-04T05:00:00.0000000' AS DateTime2), N'Emergency Recall List', CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), N'Work Permit No', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-06T05:00:00.0000000' AS DateTime2), 3043, 0, N'Email', N'Zone Location', 1)
INSERT [dbo].[TMSemployee] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [DOB], [Gender], [MarialStatus], [Nationality], [Race], [Religion], [TelNo], [HomeNumber], [Stress], [Ward], [District], [City], [Country], [Photo], [UserId], [Password], [Nric], [FinNo], [PassportNo], [Residence], [ResignReason], [Empkey], [EmpID], [DateJoined], [DateResigned], [OJTExpiryDate], [TransportAgent], [PLRDLienceNo], [PLRDLicenceExpiryDate], [ReCall], [DateMedicalDue], [WorkPermitNo], [DateWorkPermitStart], [DateWorkPermitExpiry], [JobSiteId], [DeleteFlag], [email], [ZoneLocation], [status]) VALUES (35, NULL, NULL, CAST(N'2019-07-25T09:17:41.1325130' AS DateTime2), CAST(N'2019-07-25T09:17:41.1325130' AS DateTime2), N'demo10', CAST(N'2019-07-25T09:16:52.0940000' AS DateTime2), N'string', N'string', N'string', N'string', N'string', N'string', N'string', N'string', N'string', N'string', N'string', N'string', N'string', N'string', N'TKgcLDdfAv3MkaXQ4M5fnAaODdnDK+sPqyeVT0HFcOM=', N'string', N'string', N'string', N'string', N'string', N'123', N'string', CAST(N'2019-07-25T09:16:52.0940000' AS DateTime2), CAST(N'2019-07-25T09:16:52.0940000' AS DateTime2), CAST(N'2019-07-25T09:16:52.0940000' AS DateTime2), N'string', N'string', CAST(N'2019-07-25T09:16:52.0940000' AS DateTime2), N'string', CAST(N'2019-07-25T09:16:52.0940000' AS DateTime2), N'string', CAST(N'2019-07-25T09:16:52.0940000' AS DateTime2), CAST(N'2019-07-25T09:16:52.0940000' AS DateTime2), 2023, 0, N'string', N'string', 0)
SET IDENTITY_INSERT [dbo].[TMSemployee] OFF
SET IDENTITY_INSERT [dbo].[TMSEmployeeLogTime] ON 

INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (1, NULL, NULL, CAST(N'2019-07-15T18:07:23.0384676' AS DateTime2), CAST(N'2019-07-08T04:56:04.9246807' AS DateTime2), 0, N'08:01', N'17:05', CAST(N'2019-07-08T00:00:00.0000000' AS DateTime2), 3, 1, 3, 0, 1, 1, N'maincodeAdd3 - (03:02 to 03:03)', N'	Remarks')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (12, NULL, NULL, CAST(N'2019-07-15T18:07:23.1731514' AS DateTime2), CAST(N'2019-07-15T17:04:00.3845836' AS DateTime2), 0, N'01:00', N'02:00', CAST(N'2019-07-08T00:00:00.0000000' AS DateTime2), 3, 1, 1, 0, 1, 1, N' - (03:00 to 21:00)', N'	Remarks')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (13, NULL, NULL, CAST(N'2019-07-15T18:07:23.2606725' AS DateTime2), CAST(N'2019-07-15T17:04:00.5183184' AS DateTime2), 0, N'13:00', N'14:01', CAST(N'2019-07-08T00:00:00.0000000' AS DateTime2), 3, 1, 2, 0, 1, 1, N' - (15:30 to 05:20)', N'	Remarks')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (14, NULL, NULL, CAST(N'2019-07-15T18:07:23.3535357' AS DateTime2), CAST(N'2019-07-15T17:05:16.5457684' AS DateTime2), 0, N'13:00', N'14:01', CAST(N'2019-07-08T00:00:00.0000000' AS DateTime2), 3, 1, 2, 0, 1, 1, N'maincodeAdd3 - (03:02 to 03:03)', N'	Remarks')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (15, NULL, NULL, CAST(N'2019-07-16T00:30:11.4403961' AS DateTime2), CAST(N'2019-07-15T18:36:41.2078953' AS DateTime2), 1, N'04:03', N'14:02', CAST(N'2019-07-16T00:00:00.0000000' AS DateTime2), 3, 2, 2, 0, 1, 1, N'maincodeAdd3 - (03:02 to 03:03)', N'remark1')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (16, NULL, NULL, CAST(N'2019-07-16T00:35:57.6556639' AS DateTime2), CAST(N'2019-07-15T18:36:41.3424961' AS DateTime2), 1, N'05:02', N'02:01', CAST(N'2019-07-16T00:00:00.0000000' AS DateTime2), 3, 1, 1, 0, 1, 1, N' - (15:30 to 05:20)', N'remark2')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (17, NULL, NULL, CAST(N'2019-07-16T00:37:06.7321179' AS DateTime2), CAST(N'2019-07-16T00:09:57.9212691' AS DateTime2), 0, N'02:04', N'15:00', CAST(N'2019-07-16T00:00:00.0000000' AS DateTime2), 3, 1, 1, 0, 1, 1, N'B3 - (07:03 to 17:00)', N'remark3')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (18, NULL, NULL, CAST(N'2019-07-17T00:33:23.6932517' AS DateTime2), CAST(N'2019-07-17T00:16:22.2852575' AS DateTime2), 0, N'05:02', N'16:00', CAST(N'2019-07-17T00:00:00.0000000' AS DateTime2), 3, 1, 1, 0, 1, 1, N'0', N'bc1')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (19, NULL, NULL, CAST(N'2019-07-17T00:33:23.7813371' AS DateTime2), CAST(N'2019-07-17T00:32:50.2421174' AS DateTime2), 0, N'02:00', N'15:00', CAST(N'2019-07-17T00:00:00.0000000' AS DateTime2), 3, 1, 2, 0, 1, 1, N'0', N'cdd')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (20, NULL, NULL, CAST(N'2019-07-17T00:33:23.8723749' AS DateTime2), CAST(N'2019-07-17T00:33:23.8723749' AS DateTime2), 0, N'13:01', N'14:01', CAST(N'2019-07-17T00:00:00.0000000' AS DateTime2), 3, 1, 3, 0, 1, 1, N'0', N'bc')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (21, NULL, NULL, CAST(N'2019-07-17T00:34:17.8502546' AS DateTime2), CAST(N'2019-07-17T00:33:54.1953935' AS DateTime2), 0, N'13:03', N'13:05', CAST(N'2019-07-17T00:00:00.0000000' AS DateTime2), 5, 1, 1, 0, 1, 1, N'0', N'bb')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (22, NULL, NULL, CAST(N'2019-07-22T06:21:19.5178967' AS DateTime2), CAST(N'2019-07-22T04:36:08.7360278' AS DateTime2), 0, N'14:01', N'03:58', CAST(N'2019-07-22T00:00:00.0000000' AS DateTime2), 3, 1, 1, 0, 1, 1, N'0', N'demo')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (23, NULL, NULL, CAST(N'2019-07-22T06:21:20.6119949' AS DateTime2), CAST(N'2019-07-22T06:21:08.5962082' AS DateTime2), 1, N'', N'', CAST(N'2019-07-22T00:00:00.0000000' AS DateTime2), 3, 2, 0, 0, 1, 1, N'0', N'')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (24, NULL, NULL, CAST(N'2019-08-10T09:37:26.0388096' AS DateTime2), CAST(N'2019-08-10T09:37:26.0388096' AS DateTime2), 0, N'13:00', N'02:01', CAST(N'2019-08-12T00:00:00.0000000' AS DateTime2), 3, 1, 1, 0, 1, 1, N'0', N'demo')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (25, NULL, NULL, CAST(N'2019-08-10T09:47:29.5783782' AS DateTime2), CAST(N'2019-08-10T09:47:29.5783782' AS DateTime2), 0, N'02:00', N'13:01', CAST(N'2019-08-10T00:00:00.0000000' AS DateTime2), 3, 1, 2, 0, 1, 1, N'0', N'demo1')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (26, NULL, NULL, CAST(N'2019-08-10T09:48:05.8900781' AS DateTime2), CAST(N'2019-08-10T09:48:05.8900781' AS DateTime2), 0, N'02:01', N'15:01', CAST(N'2019-08-11T00:00:00.0000000' AS DateTime2), 3, 1, 2, 0, 1, 1, N'0', N'')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (27, NULL, NULL, CAST(N'2019-08-12T08:24:45.7578309' AS DateTime2), CAST(N'2019-08-12T08:24:45.7578309' AS DateTime2), 0, N'16:01', N'02:01', CAST(N'2019-08-13T00:00:00.0000000' AS DateTime2), 3, 1, 2, 0, 1, 1, N'0', N'demo')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (28, NULL, NULL, CAST(N'2019-08-12T08:56:55.5329494' AS DateTime2), CAST(N'2019-08-12T08:56:55.5329494' AS DateTime2), 0, N'02:01', N'13:00', CAST(N'2019-08-13T00:00:00.0000000' AS DateTime2), 5, 1, 2, 0, 1, 1, N'0', N'')
INSERT [dbo].[TMSEmployeeLogTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [TimeIn], [TimeOut], [DateLog], [EmployeeId], [AttType], [NormalType], [ShiftId], [TypeCreate], [UpdateManual], [WorkingHourse], [Remarks]) VALUES (29, NULL, NULL, CAST(N'2019-08-12T09:02:44.9492615' AS DateTime2), CAST(N'2019-08-12T09:02:36.0081322' AS DateTime2), 1, N'02:00', N'13:00', CAST(N'2019-08-14T00:00:00.0000000' AS DateTime2), 5, 1, 1, 0, 1, 1, N'0', N'')
SET IDENTITY_INSERT [dbo].[TMSEmployeeLogTime] OFF
SET IDENTITY_INSERT [dbo].[TMSEventContract] ON 

INSERT [dbo].[TMSEventContract] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [EventType], [PeriodStart], [PeriodEnd], [ZoneLocationId], [ShiftId], [ShiftKey], [SubContractor], [Recall], [Remarks], [EligibilityShift], [EligibilityAllowance], [MealAllowanceId], [MealAllowanceValue], [MonthlyShiftAllowanceId], [MonthlyShiftAllowanceValue], [EligibilityOt], [MaxWorkingHours], [OtPhId], [OtPhValue], [OtRdId], [OtRdValue], [OtOId], [OtOValue], [OtStdId], [OtStdValue], [TransportAllowanceId], [TransportAllowanceValue], [ZoneId]) VALUES (11, NULL, NULL, CAST(N'2019-08-13T11:12:43.2237801' AS DateTime2), CAST(N'2019-08-09T08:15:53.1339720' AS DateTime2), 0, 9, N'3', CAST(N'2019-08-07T05:00:00.0000000' AS DateTime2), CAST(N'2019-08-14T05:00:00.0000000' AS DateTime2), 4, 8, N'Shift Key', N'Sub Contractor', N'Recall', N'Remarks', 1, 1, 1030, N'7', 1029, N'5', 1, 12, 2, N'@22', 0, NULL, 0, NULL, 0, NULL, 1029, N'5', 3)
SET IDENTITY_INSERT [dbo].[TMSEventContract] OFF
SET IDENTITY_INSERT [dbo].[TMSEventPromotion] ON 

INSERT [dbo].[TMSEventPromotion] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [EventType], [EffectiveDate], [Designation], [DesignationType], [EmployeeType], [ZoneLocationId], [ShiftId], [ShiftKey], [SubContractor], [Recall], [Remarks], [EligibilityShift], [EligibilityAllowance], [MealAllowanceId], [MealAllowanceValue], [MonthlyShiftAllowanceId], [MonthlyShiftAllowanceValue], [EligibilityOt], [MaxWorkingHours], [OtPhId], [OtPhValue], [OtRdId], [OtRdValue], [OtOId], [OtOValue], [OtStdId], [OtStdValue], [Status], [TransportAllowanceId], [TransportAllowanceValue]) VALUES (5, NULL, NULL, CAST(N'2019-08-15T11:36:13.4987041' AS DateTime2), CAST(N'2019-07-18T09:33:22.6489877' AS DateTime2), 0, 9, N'0', CAST(N'1996-03-18T05:00:00.0000000' AS DateTime2), N'Designation', N'Designation Type', N'Employee Type', 4, 14, N'Shift Key', N'Sub Contractor11', N'Recall', N'Remarks', 1, 1, 1029, N'5', 1029, N'5', 1, 12, 4, N'@1', 1, N'@5', 2, N'@22', 3, N'@2', 2, 1029, N'5')
INSERT [dbo].[TMSEventPromotion] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [EventType], [EffectiveDate], [Designation], [DesignationType], [EmployeeType], [ZoneLocationId], [ShiftId], [ShiftKey], [SubContractor], [Recall], [Remarks], [EligibilityShift], [EligibilityAllowance], [MealAllowanceId], [MealAllowanceValue], [MonthlyShiftAllowanceId], [MonthlyShiftAllowanceValue], [EligibilityOt], [MaxWorkingHours], [OtPhId], [OtPhValue], [OtRdId], [OtRdValue], [OtOId], [OtOValue], [OtStdId], [OtStdValue], [Status], [TransportAllowanceId], [TransportAllowanceValue]) VALUES (7, NULL, NULL, CAST(N'2019-08-08T10:08:56.0422228' AS DateTime2), CAST(N'2019-08-08T10:08:56.0422228' AS DateTime2), 0, 11, N'0', CAST(N'2019-08-28T05:00:00.0000000' AS DateTime2), N'Designation', N'Designation Type', N'Employee Type', 6, 7, N'Shift Key', N'Sub Contractor', N'Recall', N'Remarks', 1, 1, 1030, N'7', 1030, N'7', 1, 12, 2, N'@22', 0, NULL, 0, NULL, 0, NULL, 1, 1029, N'5')
SET IDENTITY_INSERT [dbo].[TMSEventPromotion] OFF
SET IDENTITY_INSERT [dbo].[TMSEventRejoin] ON 

INSERT [dbo].[TMSEventRejoin] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [EventType], [EffectiveDate], [EmpKey], [EmpId], [ZoneLocationId], [ShiftId], [ShiftKey], [SubContractor], [Recall], [Remarks], [EligibilityShift], [EligibilityAllowance], [MealAllowanceId], [MealAllowanceValue], [MonthlyShiftAllowanceId], [MonthlyShiftAllowanceValue], [EligibilityOt], [MaxWorkingHours], [OtPhId], [OtPhValue], [OtRdId], [OtRdValue], [OtOId], [OtOValue], [OtStdId], [OtStdValue], [TransportAllowanceId], [TransportAllowanceValue], [Status]) VALUES (6, NULL, NULL, CAST(N'2019-08-09T06:32:59.5887961' AS DateTime2), CAST(N'2019-07-18T10:56:27.6904045' AS DateTime2), 0, 9, N'2', CAST(N'2019-07-10T05:00:00.0000000' AS DateTime2), N'Employee Key', N'Employee ID', 3, 14, N'Shift Key', N'Sub Contractor', N'Recall', N'Remarks', 1, 1, 1029, N'5', 1029, N'6', 1, 12, 1, N'@5', 0, NULL, 0, NULL, 0, NULL, 1029, N'7', 1)
SET IDENTITY_INSERT [dbo].[TMSEventRejoin] OFF
SET IDENTITY_INSERT [dbo].[TMSEventTerminationResign] ON 

INSERT [dbo].[TMSEventTerminationResign] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [EventType], [EffectiveDate], [ResignReasonId], [ZoneLocationId], [Status]) VALUES (1, NULL, NULL, CAST(N'2019-07-18T07:41:45.1532055' AS DateTime2), CAST(N'2019-07-18T07:41:45.1532055' AS DateTime2), 0, 1, N'Tcom', CAST(N'2019-07-18T07:41:23.7840000' AS DateTime2), 1, 1, 0)
INSERT [dbo].[TMSEventTerminationResign] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [EventType], [EffectiveDate], [ResignReasonId], [ZoneLocationId], [Status]) VALUES (2, NULL, NULL, CAST(N'2019-07-29T10:53:27.0815915' AS DateTime2), CAST(N'2019-07-19T08:24:59.4275985' AS DateTime2), 0, 9, N'1', CAST(N'2019-07-31T05:00:00.0000000' AS DateTime2), 3037, 6, 1)
SET IDENTITY_INSERT [dbo].[TMSEventTerminationResign] OFF
SET IDENTITY_INSERT [dbo].[TMSEventTransfer] ON 

INSERT [dbo].[TMSEventTransfer] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [EventType], [PeriodStart], [PeriodEnd], [ZoneLocationId], [ShiftId], [ShiftKey], [SubContractor], [Recall], [Remarks], [EligibilityShift], [EligibilityAllowance], [MealAllowanceId], [MealAllowanceValue], [MonthlyShiftAllowanceId], [MonthlyShiftAllowanceValue], [EligibilityOt], [MaxWorkingHours], [OtPhId], [OtPhValue], [OtRdId], [OtRdValue], [OtOId], [OtOValue], [OtStdId], [OtStdValue], [TransportAllowanceId], [TransportAllowanceValue], [ZoneId]) VALUES (1, NULL, NULL, CAST(N'2019-07-18T03:03:09.6589932' AS DateTime2), CAST(N'2019-07-16T08:37:35.8380861' AS DateTime2), 0, 3, N'bkhn', CAST(N'2019-07-18T03:02:45.7440000' AS DateTime2), CAST(N'2019-07-18T03:02:45.7440000' AS DateTime2), 0, 3, N'string', N'string', N'string', N'string', 0, 0, 0, N'string', 0, N'string', 0, 0, 0, N'string', 0, N'string', 0, N'string', 0, N'string', 0, NULL, 0)
INSERT [dbo].[TMSEventTransfer] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [EventType], [PeriodStart], [PeriodEnd], [ZoneLocationId], [ShiftId], [ShiftKey], [SubContractor], [Recall], [Remarks], [EligibilityShift], [EligibilityAllowance], [MealAllowanceId], [MealAllowanceValue], [MonthlyShiftAllowanceId], [MonthlyShiftAllowanceValue], [EligibilityOt], [MaxWorkingHours], [OtPhId], [OtPhValue], [OtRdId], [OtRdValue], [OtOId], [OtOValue], [OtStdId], [OtStdValue], [TransportAllowanceId], [TransportAllowanceValue], [ZoneId]) VALUES (2, NULL, NULL, CAST(N'2019-07-17T03:08:44.8154735' AS DateTime2), CAST(N'2019-07-17T03:07:47.3801251' AS DateTime2), 0, 0, N'bye', CAST(N'2019-07-17T03:08:22.9220000' AS DateTime2), CAST(N'2019-07-17T03:08:22.9220000' AS DateTime2), 0, 3, N'string', N'string', N'string', N'string', 0, 0, 0, N'string', 0, N'string', 0, 0, 0, N'string', 0, N'string', 0, N'string', 0, N'string', 0, NULL, 0)
INSERT [dbo].[TMSEventTransfer] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [EventType], [PeriodStart], [PeriodEnd], [ZoneLocationId], [ShiftId], [ShiftKey], [SubContractor], [Recall], [Remarks], [EligibilityShift], [EligibilityAllowance], [MealAllowanceId], [MealAllowanceValue], [MonthlyShiftAllowanceId], [MonthlyShiftAllowanceValue], [EligibilityOt], [MaxWorkingHours], [OtPhId], [OtPhValue], [OtRdId], [OtRdValue], [OtOId], [OtOValue], [OtStdId], [OtStdValue], [TransportAllowanceId], [TransportAllowanceValue], [ZoneId]) VALUES (3, NULL, NULL, CAST(N'2019-07-22T04:31:31.7066407' AS DateTime2), CAST(N'2019-07-20T07:40:14.6932993' AS DateTime2), 0, 9, N'4', CAST(N'2019-07-16T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-31T05:00:00.0000000' AS DateTime2), 0, 14, N'Shift Key', N'Sub Contractor', N'Recall', N'Remarks', 1, 1, 1029, N'5', 1029, N'5', 1, 12, 1, N'@5', 0, NULL, 0, NULL, 0, NULL, 1029, N'5', 0)
INSERT [dbo].[TMSEventTransfer] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [EventType], [PeriodStart], [PeriodEnd], [ZoneLocationId], [ShiftId], [ShiftKey], [SubContractor], [Recall], [Remarks], [EligibilityShift], [EligibilityAllowance], [MealAllowanceId], [MealAllowanceValue], [MonthlyShiftAllowanceId], [MonthlyShiftAllowanceValue], [EligibilityOt], [MaxWorkingHours], [OtPhId], [OtPhValue], [OtRdId], [OtRdValue], [OtOId], [OtOValue], [OtStdId], [OtStdValue], [TransportAllowanceId], [TransportAllowanceValue], [ZoneId]) VALUES (4, NULL, NULL, CAST(N'2019-08-12T08:35:08.5747954' AS DateTime2), CAST(N'2019-08-09T08:30:41.6401326' AS DateTime2), 0, 9, N'4', CAST(N'2019-08-09T05:00:00.0000000' AS DateTime2), CAST(N'2019-08-16T05:00:00.0000000' AS DateTime2), 4, 7, N'Shift Key', N'Sub Contractor', N'Recall', N'Remarks', 1, 1, 1030, N'7', 1029, N'5', 1, 12, 3, N'@2', 0, NULL, 0, NULL, 0, NULL, 1029, N'5', 0)
SET IDENTITY_INSERT [dbo].[TMSEventTransfer] OFF
SET IDENTITY_INSERT [dbo].[TMSJobSite] ON 

INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (2036, NULL, NULL, CAST(N'2019-06-25T03:20:08.1316507' AS DateTime2), CAST(N'2019-06-14T10:59:17.3043055' AS DateTime2), N'P000010', 2037, 2016, 2023, 0, 0, NULL, NULL, 1, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (2037, NULL, NULL, CAST(N'2019-06-25T03:20:08.9972456' AS DateTime2), CAST(N'2019-06-14T10:59:37.8917240' AS DateTime2), N'P000003', 2037, 2016, 2023, 0, 0, NULL, NULL, 1, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (2038, NULL, NULL, CAST(N'2019-06-25T03:20:09.7813222' AS DateTime2), CAST(N'2019-06-14T11:00:19.6742686' AS DateTime2), N'P000001', 2038, 2016, 2023, 0, 0, NULL, NULL, 1, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (3035, NULL, NULL, CAST(N'2019-07-05T09:07:59.0406350' AS DateTime2), CAST(N'2019-06-18T07:01:05.9996478' AS DateTime2), N'1', 3035, 3016, 3024, 0, 0, NULL, NULL, 1, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (3036, NULL, NULL, CAST(N'2019-08-05T11:42:04.1396395' AS DateTime2), CAST(N'2019-06-20T01:01:26.3198213' AS DateTime2), N'job site', 3034, 3016, 2023, 0, 0, NULL, NULL, 0, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (3037, NULL, NULL, CAST(N'2019-06-20T11:15:39.9196641' AS DateTime2), CAST(N'2019-06-20T11:15:39.9196641' AS DateTime2), N'1', 3034, 3016, 2023, 0, 0, NULL, NULL, 0, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (3038, NULL, NULL, CAST(N'2019-07-05T09:08:27.5287082' AS DateTime2), CAST(N'2019-06-21T03:23:45.4907146' AS DateTime2), N'update', 3034, 3016, 2023, 0, 0, NULL, NULL, 0, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (3039, NULL, NULL, CAST(N'2019-06-21T04:25:01.1579213' AS DateTime2), CAST(N'2019-06-21T04:25:01.1579213' AS DateTime2), N'JST', 3037, 3016, 2024, 0, 0, NULL, NULL, 0, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (3040, NULL, NULL, CAST(N'2019-07-05T09:08:23.2551125' AS DateTime2), CAST(N'2019-06-21T04:29:52.4978870' AS DateTime2), N'1', 3037, 3016, 2024, 0, 0, NULL, NULL, 0, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (3041, NULL, NULL, CAST(N'2019-07-05T09:08:21.6331186' AS DateTime2), CAST(N'2019-06-21T04:30:08.0127623' AS DateTime2), N'1', 3037, 3016, 2024, 0, 0, NULL, NULL, 0, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (3042, NULL, NULL, CAST(N'2019-07-10T10:14:08.3507539' AS DateTime2), CAST(N'2019-06-21T04:31:03.4440405' AS DateTime2), N'1', 3038, 3016, 2024, 0, 0, NULL, NULL, 1, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (3043, NULL, NULL, CAST(N'2019-06-21T07:16:57.8916209' AS DateTime2), CAST(N'2019-06-21T07:16:57.8916209' AS DateTime2), N'JST2', 3037, 3016, 2023, 0, 0, NULL, NULL, 0, NULL)
INSERT [dbo].[TMSJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [SiteId], [CompanyId], [DepartmentId], [ZoneId], [Level], [Area], [Location], [DeleteFlag], [EmployeeUsed]) VALUES (3044, NULL, NULL, CAST(N'2019-06-28T22:10:00.5680725' AS DateTime2), CAST(N'2019-06-28T21:59:25.4620175' AS DateTime2), N'jobsitedemo1', 3039, 3016, 3026, 0, 0, NULL, NULL, 1, NULL)
SET IDENTITY_INSERT [dbo].[TMSJobSite] OFF
SET IDENTITY_INSERT [dbo].[TMSLevel] ON 

INSERT [dbo].[TMSLevel] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (1, NULL, NULL, CAST(N'2019-06-22T09:41:45.4938968' AS DateTime2), CAST(N'2019-06-21T04:34:01.6788449' AS DateTime2), N'A2', N'1312', 1, 1)
INSERT [dbo].[TMSLevel] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (2, NULL, NULL, CAST(N'2019-06-22T09:28:34.3530372' AS DateTime2), CAST(N'2019-06-21T04:41:29.0206725' AS DateTime2), N'B', N'1', 1, 1)
INSERT [dbo].[TMSLevel] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (3, NULL, NULL, CAST(N'2019-06-22T09:44:14.8621262' AS DateTime2), CAST(N'2019-06-22T09:43:31.8909134' AS DateTime2), N'A44', N'-', 1, 0)
INSERT [dbo].[TMSLevel] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (4, NULL, NULL, CAST(N'2019-06-25T03:14:54.0277761' AS DateTime2), CAST(N'2019-06-25T03:14:54.0277761' AS DateTime2), N'1', N'1', 1, 0)
INSERT [dbo].[TMSLevel] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (5, NULL, NULL, CAST(N'2019-06-25T03:15:12.8402702' AS DateTime2), CAST(N'2019-06-25T03:15:12.8402702' AS DateTime2), N'2', N'2', 2, 0)
INSERT [dbo].[TMSLevel] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (6, NULL, NULL, CAST(N'2019-07-02T23:34:58.4742670' AS DateTime2), CAST(N'2019-07-02T23:34:58.4742670' AS DateTime2), N'lv1', N'lv1', 14, 0)
INSERT [dbo].[TMSLevel] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (7, NULL, NULL, CAST(N'2019-07-02T23:37:09.2795335' AS DateTime2), CAST(N'2019-07-02T23:37:09.2795335' AS DateTime2), N'lv2', N'lv2', 14, 0)
INSERT [dbo].[TMSLevel] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (8, NULL, NULL, CAST(N'2019-07-29T04:48:34.7797188' AS DateTime2), CAST(N'2019-07-29T04:48:34.7797188' AS DateTime2), N'son', N'12', 13, 0)
INSERT [dbo].[TMSLevel] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [ZoneLocationId], [DeleteFlag]) VALUES (9, NULL, NULL, CAST(N'2019-08-01T09:36:23.8093742' AS DateTime2), CAST(N'2019-08-01T09:36:23.8093742' AS DateTime2), N'Level2', N'123', 2, 0)
SET IDENTITY_INSERT [dbo].[TMSLevel] OFF
SET IDENTITY_INSERT [dbo].[TMSLocation] ON 

INSERT [dbo].[TMSLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (1, NULL, NULL, CAST(N'2019-06-24T10:47:57.6811130' AS DateTime2), CAST(N'2019-06-24T04:04:11.0725232' AS DateTime2), 0, N'AAA3', 1, 2)
INSERT [dbo].[TMSLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (2, NULL, NULL, CAST(N'2019-06-24T04:47:22.8637143' AS DateTime2), CAST(N'2019-06-24T04:47:08.2548224' AS DateTime2), 0, N'DDD', 1, 2)
INSERT [dbo].[TMSLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (3, NULL, NULL, CAST(N'2019-07-02T23:46:20.4587152' AS DateTime2), CAST(N'2019-07-02T23:46:20.4587152' AS DateTime2), 0, N'loc1', 14, 1)
INSERT [dbo].[TMSLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (4, NULL, NULL, CAST(N'2019-07-02T23:46:28.3036352' AS DateTime2), CAST(N'2019-07-02T23:46:28.3036352' AS DateTime2), 0, N'loc2', 14, 1)
INSERT [dbo].[TMSLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (5, NULL, NULL, CAST(N'2019-08-01T09:48:37.6028853' AS DateTime2), CAST(N'2019-08-01T09:48:37.6028853' AS DateTime2), 0, N'Location 1', 2, 1)
INSERT [dbo].[TMSLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (6, NULL, NULL, CAST(N'2019-08-01T09:48:49.6630239' AS DateTime2), CAST(N'2019-08-01T09:48:49.6630239' AS DateTime2), 0, N'Location 2', 2, 1)
SET IDENTITY_INSERT [dbo].[TMSLocation] OFF
SET IDENTITY_INSERT [dbo].[TMSOtCode] ON 

INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1, NULL, NULL, CAST(N'2019-06-12T08:43:31.4635278' AS DateTime2), CAST(N'2019-06-12T08:43:31.4635278' AS DateTime2), 1007, N'T02', N'@1.0', 1, 1, 1, CAST(N'2019-06-12T08:36:22.6180000' AS DateTime2), CAST(N'2019-06-12T08:36:22.6180000' AS DateTime2), NULL, 0, 0)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (4, NULL, NULL, CAST(N'2019-06-12T11:37:35.6559599' AS DateTime2), CAST(N'2019-06-12T11:37:35.6559599' AS DateTime2), 1013, N'T33', N'@33', 1, 33, 2, CAST(N'2019-06-15T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-27T00:00:00.0000000' AS DateTime2), NULL, 0, 0)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (5, NULL, NULL, CAST(N'2019-06-12T21:38:28.5913746' AS DateTime2), CAST(N'2019-06-12T21:38:28.5913746' AS DateTime2), 1013, N'T44', N'@444', 1, 444, 1, CAST(N'2019-06-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-22T00:00:00.0000000' AS DateTime2), NULL, 0, 0)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (6, NULL, NULL, CAST(N'2019-06-13T08:30:38.2071090' AS DateTime2), CAST(N'2019-06-13T08:30:38.2071090' AS DateTime2), 1014, N'1', N'@1', 1, 1, 2, CAST(N'2019-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-10-10T00:00:00.0000000' AS DateTime2), NULL, 0, 0)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1006, NULL, NULL, CAST(N'2019-06-17T03:48:32.2158238' AS DateTime2), CAST(N'2019-06-17T03:48:32.2158238' AS DateTime2), 2017, N'1', N'@1', 1, 1, 1, CAST(N'2019-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-01-11T00:00:00.0000000' AS DateTime2), NULL, 0, 0)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1009, NULL, NULL, CAST(N'2019-06-29T07:15:08.4936459' AS DateTime2), CAST(N'2019-06-19T10:17:50.0487265' AS DateTime2), 3016, N'1', N'@112', 1, 111, 3, CAST(N'2019-06-30T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-28T00:00:00.0000000' AS DateTime2), NULL, 0, 1)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1012, NULL, NULL, CAST(N'2019-06-29T07:15:06.2879830' AS DateTime2), CAST(N'2019-06-21T03:56:43.5913499' AS DateTime2), 3016, N'O', N'@7', 1, 1, 1, CAST(N'2019-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-01T00:00:00.0000000' AS DateTime2), NULL, 0, 1)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1013, NULL, NULL, CAST(N'2019-07-05T10:47:11.9186552' AS DateTime2), CAST(N'2019-06-29T07:15:27.8726765' AS DateTime2), 3016, N'otcode1', N'@5', 1, 5, 3, CAST(N'2019-06-29T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-29T00:00:00.0000000' AS DateTime2), NULL, 0, 0)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1014, NULL, NULL, CAST(N'2019-07-04T00:20:44.6302342' AS DateTime2), CAST(N'2019-07-03T22:42:43.8446254' AS DateTime2), 3016, N'payrol1', N'X223', 2, 223, 3, CAST(N'2019-07-05T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-09T00:00:00.0000000' AS DateTime2), NULL, 0, 1)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1015, NULL, NULL, CAST(N'2019-07-05T10:38:32.1949142' AS DateTime2), CAST(N'2019-07-04T00:21:04.2111608' AS DateTime2), 3016, N'pay1', N'@22', 1, 22, 3, CAST(N'2019-07-05T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-07T00:00:00.0000000' AS DateTime2), NULL, 0, 0)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1016, NULL, NULL, CAST(N'2019-07-05T04:08:06.3761177' AS DateTime2), CAST(N'2019-07-05T04:08:06.3761177' AS DateTime2), 3016, N'AA', N'@1', 1, 1, 1, CAST(N'2019-07-06T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-28T00:00:00.0000000' AS DateTime2), NULL, 0, 0)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1017, NULL, NULL, CAST(N'2019-08-14T10:35:11.6969935' AS DateTime2), CAST(N'2019-07-05T10:39:23.3454229' AS DateTime2), 3016, N'DDD', N'@2', 1, 2, 2, CAST(N'2019-07-11T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-27T05:00:00.0000000' AS DateTime2), NULL, 0, 0)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1018, NULL, NULL, CAST(N'2019-07-20T10:09:56.1049527' AS DateTime2), CAST(N'2019-07-20T10:09:56.1049527' AS DateTime2), 3016, N'A55', N'@555', 1, 555, 2, CAST(N'2019-07-20T00:00:00.0000000' AS DateTime2), CAST(N'2019-08-04T00:00:00.0000000' AS DateTime2), NULL, 0, 0)
INSERT [dbo].[TMSOtCode] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [CompanyId], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [JobsiteUsed], [Used], [DeleteFlag]) VALUES (1019, NULL, NULL, CAST(N'2019-08-15T10:31:41.0307372' AS DateTime2), CAST(N'2019-08-14T09:13:01.6838266' AS DateTime2), 3016, N'Code', N'X22', 2, 22, 2, CAST(N'2019-08-15T05:00:00.0000000' AS DateTime2), CAST(N'2019-08-08T05:00:00.0000000' AS DateTime2), NULL, 0, 1)
SET IDENTITY_INSERT [dbo].[TMSOtCode] OFF
SET IDENTITY_INSERT [dbo].[TMSOtMaxTime] ON 

INSERT [dbo].[TMSOtMaxTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [JobSiteId], [WorkingHoursWeek], [OtHoursMonth], [DeleteFlag]) VALUES (1, NULL, NULL, CAST(N'2019-06-20T00:39:28.8543248' AS DateTime2), CAST(N'2019-06-20T00:39:28.8543248' AS DateTime2), 10, 10, 10, 0)
INSERT [dbo].[TMSOtMaxTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [JobSiteId], [WorkingHoursWeek], [OtHoursMonth], [DeleteFlag]) VALUES (2, NULL, NULL, CAST(N'2019-06-20T00:45:13.4240007' AS DateTime2), CAST(N'2019-06-20T00:45:13.4240007' AS DateTime2), 0, 10, 20, 0)
INSERT [dbo].[TMSOtMaxTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [JobSiteId], [WorkingHoursWeek], [OtHoursMonth], [DeleteFlag]) VALUES (3, NULL, NULL, CAST(N'2019-06-20T01:01:06.1789834' AS DateTime2), CAST(N'2019-06-20T01:01:06.1789834' AS DateTime2), 3034, 20, 30, 0)
INSERT [dbo].[TMSOtMaxTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [JobSiteId], [WorkingHoursWeek], [OtHoursMonth], [DeleteFlag]) VALUES (4, NULL, NULL, CAST(N'2019-06-21T03:55:39.1961110' AS DateTime2), CAST(N'2019-06-20T01:01:48.5274288' AS DateTime2), 3036, 1, 1, 0)
INSERT [dbo].[TMSOtMaxTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [JobSiteId], [WorkingHoursWeek], [OtHoursMonth], [DeleteFlag]) VALUES (5, NULL, NULL, CAST(N'2019-06-25T11:03:17.7959764' AS DateTime2), CAST(N'2019-06-25T11:03:17.7959764' AS DateTime2), 3038, 72, 40, 0)
INSERT [dbo].[TMSOtMaxTime] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [JobSiteId], [WorkingHoursWeek], [OtHoursMonth], [DeleteFlag]) VALUES (6, NULL, NULL, CAST(N'2019-07-03T22:56:50.1457632' AS DateTime2), CAST(N'2019-07-03T22:32:22.5071990' AS DateTime2), 3043, 15, 35, 0)
SET IDENTITY_INSERT [dbo].[TMSOtMaxTime] OFF
SET IDENTITY_INSERT [dbo].[TMSOtSetting] ON 

INSERT [dbo].[TMSOtSetting] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [CompanyId], [JobsiteId], [OtcodeId], [DeleteFlag]) VALUES (1, NULL, NULL, CAST(N'2019-08-15T11:35:53.8270500' AS DateTime2), CAST(N'2019-07-20T10:08:31.2868294' AS DateTime2), N'otcode1', N'@5', 1, 5, 4, CAST(N'2019-06-14T05:00:00.0000000' AS DateTime2), CAST(N'2019-08-30T05:00:00.0000000' AS DateTime2), 3016, 3036, 1013, 0)
INSERT [dbo].[TMSOtSetting] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [CompanyId], [JobsiteId], [OtcodeId], [DeleteFlag]) VALUES (2, NULL, NULL, CAST(N'2019-07-20T10:08:59.5709139' AS DateTime2), CAST(N'2019-07-20T10:08:53.0459960' AS DateTime2), N'pay1', N'@22', 1, 22, 3, CAST(N'2019-07-05T00:00:00.0000000' AS DateTime2), CAST(N'2019-08-03T00:00:00.0000000' AS DateTime2), 3016, 3036, 1015, 0)
INSERT [dbo].[TMSOtSetting] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [CompanyId], [JobsiteId], [OtcodeId], [DeleteFlag]) VALUES (3, NULL, NULL, CAST(N'2019-07-20T10:09:13.5726645' AS DateTime2), CAST(N'2019-07-20T10:09:06.8692807' AS DateTime2), N'DDD', N'@2', 1, 2, 2, CAST(N'2019-07-05T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-25T00:00:00.0000000' AS DateTime2), 3016, 3036, 1017, 0)
INSERT [dbo].[TMSOtSetting] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [CompanyId], [JobsiteId], [OtcodeId], [DeleteFlag]) VALUES (4, NULL, NULL, CAST(N'2019-07-20T10:09:24.6302141' AS DateTime2), CAST(N'2019-07-20T10:09:20.4449532' AS DateTime2), N'AA', N'@1', 1, 1, 1, CAST(N'2019-07-06T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-28T00:00:00.0000000' AS DateTime2), 3016, 3036, 1016, 0)
INSERT [dbo].[TMSOtSetting] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [CompanyId], [JobsiteId], [OtcodeId], [DeleteFlag]) VALUES (5, NULL, NULL, CAST(N'2019-07-26T02:02:34.4936371' AS DateTime2), CAST(N'2019-07-26T02:02:34.4936371' AS DateTime2), N'pay1', N'@22', 1, 22, 3, CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-07T05:00:00.0000000' AS DateTime2), 3016, 2034, 1015, 0)
INSERT [dbo].[TMSOtSetting] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [CompanyId], [JobsiteId], [OtcodeId], [DeleteFlag]) VALUES (6, NULL, NULL, CAST(N'2019-07-26T02:02:35.9248578' AS DateTime2), CAST(N'2019-07-26T02:02:35.9248578' AS DateTime2), N'pay1', N'@22', 1, 22, 3, CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-07T05:00:00.0000000' AS DateTime2), 3016, 2034, 1015, 0)
INSERT [dbo].[TMSOtSetting] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [CompanyId], [JobsiteId], [OtcodeId], [DeleteFlag]) VALUES (7, NULL, NULL, CAST(N'2019-07-26T02:02:36.2435043' AS DateTime2), CAST(N'2019-07-26T02:02:36.2435043' AS DateTime2), N'pay1', N'@22', 1, 22, 3, CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-07T05:00:00.0000000' AS DateTime2), 3016, 2034, 1015, 0)
INSERT [dbo].[TMSOtSetting] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [CompanyId], [JobsiteId], [OtcodeId], [DeleteFlag]) VALUES (8, NULL, NULL, CAST(N'2019-07-26T02:02:36.4106290' AS DateTime2), CAST(N'2019-07-26T02:02:36.4106290' AS DateTime2), N'pay1', N'@22', 1, 22, 3, CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-07T05:00:00.0000000' AS DateTime2), 3016, 2034, 1015, 0)
INSERT [dbo].[TMSOtSetting] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [CompanyId], [JobsiteId], [OtcodeId], [DeleteFlag]) VALUES (9, NULL, NULL, CAST(N'2019-08-14T01:29:06.4572631' AS DateTime2), CAST(N'2019-08-14T01:29:06.4572631' AS DateTime2), N'otcode1', N'@5', 1, 5, 3, CAST(N'2019-06-29T05:00:00.0000000' AS DateTime2), CAST(N'2019-06-29T05:00:00.0000000' AS DateTime2), 3016, 3043, 1013, 0)
INSERT [dbo].[TMSOtSetting] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [PayrollCode], [Payroll], [Type], [Rate], [Remarks], [StartDate], [EndDate], [CompanyId], [JobsiteId], [OtcodeId], [DeleteFlag]) VALUES (10, NULL, NULL, CAST(N'2019-08-14T01:29:18.9211211' AS DateTime2), CAST(N'2019-08-14T01:29:18.9211211' AS DateTime2), N'pay1', N'@22', 1, 22, 3, CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-07T05:00:00.0000000' AS DateTime2), 3016, 3043, 1015, 0)
SET IDENTITY_INSERT [dbo].[TMSOtSetting] OFF
SET IDENTITY_INSERT [dbo].[TMSPublicHoliday] ON 

INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (27, NULL, NULL, CAST(N'2019-06-04T02:21:00.3297965' AS DateTime2), CAST(N'2019-06-04T02:21:00.3297965' AS DateTime2), N'event1', 2019, N'SG', CAST(N'2019-06-04T02:20:40.1520000' AS DateTime2), CAST(N'2019-06-04T02:20:40.1520000' AS DateTime2), 0, 0, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (29, NULL, NULL, CAST(N'2019-06-04T02:38:29.5119401' AS DateTime2), CAST(N'2019-06-04T02:22:57.2586537' AS DateTime2), N'event3', 2019, N'SG', CAST(N'2019-06-03T19:22:53.4250000' AS DateTime2), CAST(N'2019-06-03T19:22:53.4250000' AS DateTime2), 0, 3, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (30, NULL, NULL, CAST(N'2019-06-04T02:23:25.1918654' AS DateTime2), CAST(N'2019-06-04T02:23:25.1918654' AS DateTime2), N'event3', 2020, N'SL', CAST(N'2020-06-03T17:00:00.0000000' AS DateTime2), CAST(N'2020-06-03T17:00:00.0000000' AS DateTime2), 0, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (37, NULL, NULL, CAST(N'2019-06-04T02:54:39.2106432' AS DateTime2), CAST(N'2019-06-04T02:54:34.5696067' AS DateTime2), N'New Year', 2019, N'SG', CAST(N'2019-06-04T02:54:34.5250000' AS DateTime2), CAST(N'2019-06-04T02:54:34.5250000' AS DateTime2), 18, 3, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (42, NULL, NULL, CAST(N'2019-06-04T04:06:23.6587512' AS DateTime2), CAST(N'2019-06-04T04:06:17.1903427' AS DateTime2), N'01/05', 2019, N'SG', CAST(N'2019-06-04T04:06:16.0780000' AS DateTime2), CAST(N'2019-06-04T04:06:16.0780000' AS DateTime2), 28, 3, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (43, NULL, NULL, CAST(N'2019-06-04T04:39:11.0617142' AS DateTime2), CAST(N'2019-06-04T04:39:11.0617142' AS DateTime2), N'02/09', 2019, N'SG', CAST(N'2019-06-04T04:39:12.3080000' AS DateTime2), CAST(N'2019-06-04T04:39:12.3080000' AS DateTime2), 29, 3, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (54, NULL, NULL, CAST(N'2019-06-04T23:50:15.0242644' AS DateTime2), CAST(N'2019-06-04T23:50:15.0242644' AS DateTime2), N'Event3', 2019, N'SG', CAST(N'2019-06-04T23:50:10.8330000' AS DateTime2), CAST(N'2019-06-04T23:50:10.8330000' AS DateTime2), 0, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (55, NULL, NULL, CAST(N'2019-06-04T23:53:46.6396647' AS DateTime2), CAST(N'2019-06-04T23:53:46.6396647' AS DateTime2), N'event3', 2019, N'SG', CAST(N'2019-06-04T23:53:41.1590000' AS DateTime2), CAST(N'2019-06-04T23:53:41.1590000' AS DateTime2), 0, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (56, NULL, NULL, CAST(N'2019-06-04T23:53:58.8335158' AS DateTime2), CAST(N'2019-06-04T23:53:54.7930104' AS DateTime2), N'01/05', 2019, N'SG', CAST(N'2019-06-04T23:53:54.7290000' AS DateTime2), CAST(N'2019-06-04T23:53:54.7290000' AS DateTime2), 28, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (57, NULL, NULL, CAST(N'2019-06-04T23:54:09.4876729' AS DateTime2), CAST(N'2019-06-04T23:54:09.4876729' AS DateTime2), N'New Year', 2019, N'SG', CAST(N'2019-06-04T23:54:09.4490000' AS DateTime2), CAST(N'2019-06-04T23:54:09.4490000' AS DateTime2), 18, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (59, NULL, NULL, CAST(N'2019-06-05T00:21:55.0522893' AS DateTime2), CAST(N'2019-06-05T00:21:55.0522893' AS DateTime2), N'05/05', 2019, N'SG', CAST(N'2019-06-05T00:21:55.0130000' AS DateTime2), CAST(N'2019-06-05T00:21:55.0130000' AS DateTime2), 33, 1010, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (60, NULL, NULL, CAST(N'2019-06-05T00:22:40.6759514' AS DateTime2), CAST(N'2019-06-05T00:22:40.6759514' AS DateTime2), N'07/01', 2019, N'SG', CAST(N'2019-06-05T00:22:40.6380000' AS DateTime2), CAST(N'2019-06-05T00:22:40.6380000' AS DateTime2), 34, 1011, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (67, NULL, NULL, CAST(N'2019-06-05T07:02:54.2033263' AS DateTime2), CAST(N'2019-06-05T07:00:43.0480868' AS DateTime2), N'N', 2022, N'SG', CAST(N'2019-06-05T07:00:43.3170000' AS DateTime2), CAST(N'2019-06-05T07:00:43.3170000' AS DateTime2), 38, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (68, NULL, NULL, CAST(N'2019-06-05T07:04:00.4184672' AS DateTime2), CAST(N'2019-06-05T07:04:00.4184672' AS DateTime2), N'N', 2022, N'SG', CAST(N'2019-06-05T07:04:00.7290000' AS DateTime2), CAST(N'2019-06-05T07:04:00.7290000' AS DateTime2), 38, 1006, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (71, NULL, NULL, CAST(N'2019-06-05T08:23:53.9874132' AS DateTime2), CAST(N'2019-06-05T08:23:53.9874132' AS DateTime2), N'qqqq', 2021, N'SG', CAST(N'2019-06-05T08:24:05.1750000' AS DateTime2), CAST(N'2019-06-05T08:24:05.1750000' AS DateTime2), 39, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (72, NULL, NULL, CAST(N'2019-06-05T08:29:02.4985690' AS DateTime2), CAST(N'2019-06-05T08:29:02.4985690' AS DateTime2), N'tttt', 2021, N'SG', CAST(N'2019-06-05T08:29:13.6710000' AS DateTime2), CAST(N'2019-06-05T08:29:13.6710000' AS DateTime2), 41, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (73, NULL, NULL, CAST(N'2019-06-05T08:29:53.9032127' AS DateTime2), CAST(N'2019-06-05T08:29:53.9032127' AS DateTime2), N'02/09', 2019, N'SG', CAST(N'2019-06-05T08:30:05.0630000' AS DateTime2), CAST(N'2019-06-05T08:30:05.0630000' AS DateTime2), 29, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (74, NULL, NULL, CAST(N'2019-06-05T08:33:37.8928478' AS DateTime2), CAST(N'2019-06-05T08:33:37.8928478' AS DateTime2), N'yyyyyy', 2020, N'SG', CAST(N'2020-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2020-06-04T17:00:00.0000000' AS DateTime2), 0, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (75, NULL, NULL, CAST(N'2019-06-05T08:33:56.7473170' AS DateTime2), CAST(N'2019-06-05T08:33:56.7473170' AS DateTime2), N'1', 2020, N'SG', CAST(N'2019-06-05T08:34:07.9420000' AS DateTime2), CAST(N'2019-06-05T08:34:07.9420000' AS DateTime2), 16, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (76, NULL, NULL, CAST(N'2019-06-05T08:39:16.4485459' AS DateTime2), CAST(N'2019-06-05T08:39:16.4485459' AS DateTime2), N'New Year', 2020, N'SG', CAST(N'2019-06-05T08:39:27.6090000' AS DateTime2), CAST(N'2019-06-05T08:39:27.6090000' AS DateTime2), 15, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (77, NULL, NULL, CAST(N'2019-06-05T08:46:54.4839515' AS DateTime2), CAST(N'2019-06-05T08:46:54.4839515' AS DateTime2), N'Tet', 2020, N'SG', CAST(N'2019-06-05T08:47:05.5480000' AS DateTime2), CAST(N'2019-06-05T08:47:05.5480000' AS DateTime2), 35, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (78, NULL, NULL, CAST(N'2019-06-05T08:50:03.9205592' AS DateTime2), CAST(N'2019-06-05T08:50:03.9205592' AS DateTime2), N'qqqqq', 2021, N'SG', CAST(N'2019-06-05T08:50:15.0550000' AS DateTime2), CAST(N'2019-06-05T08:50:15.0550000' AS DateTime2), 40, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (79, NULL, NULL, CAST(N'2019-06-05T09:17:10.4336189' AS DateTime2), CAST(N'2019-06-05T09:16:46.4575587' AS DateTime2), N'gggggghhhh', 2019, N'SG', CAST(N'2019-06-06T17:00:00.0000000' AS DateTime2), CAST(N'2019-06-14T17:00:00.0000000' AS DateTime2), 42, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (80, NULL, NULL, CAST(N'2019-06-05T09:18:13.1559503' AS DateTime2), CAST(N'2019-06-05T09:18:05.6777795' AS DateTime2), N'jjjjjjjjjjjjjjjjj', 2020, N'SG', CAST(N'2020-06-26T17:00:00.0000000' AS DateTime2), CAST(N'2020-06-29T17:00:00.0000000' AS DateTime2), 43, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (81, NULL, NULL, CAST(N'2019-06-05T09:39:58.0156891' AS DateTime2), CAST(N'2019-06-05T09:39:58.0156891' AS DateTime2), N'A', 2023, N'SG', CAST(N'2019-06-05T09:39:58.2400000' AS DateTime2), CAST(N'2019-06-05T09:39:58.2400000' AS DateTime2), 44, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (82, NULL, NULL, CAST(N'2019-06-05T09:41:17.6812254' AS DateTime2), CAST(N'2019-06-05T09:41:17.6812254' AS DateTime2), N'A', 2023, N'SG', CAST(N'2019-06-05T09:41:18.0640000' AS DateTime2), CAST(N'2019-06-05T09:41:18.0640000' AS DateTime2), 44, 1006, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (83, NULL, NULL, CAST(N'2019-06-05T09:45:50.2733157' AS DateTime2), CAST(N'2019-06-05T09:45:50.2733157' AS DateTime2), N'aa', 2023, N'SG', CAST(N'2019-06-05T09:46:01.3940000' AS DateTime2), CAST(N'2019-06-05T09:46:01.3940000' AS DateTime2), 45, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (84, NULL, NULL, CAST(N'2019-06-05T09:47:49.5944364' AS DateTime2), CAST(N'2019-06-05T09:47:49.5944364' AS DateTime2), N'bbbb', 2023, N'SG', CAST(N'2023-06-04T10:00:00.0000000' AS DateTime2), CAST(N'2023-06-04T10:00:00.0000000' AS DateTime2), 46, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (85, NULL, NULL, CAST(N'2019-06-05T09:48:40.3394799' AS DateTime2), CAST(N'2019-06-05T09:48:40.3394799' AS DateTime2), N'cccccccc', 2023, N'SG', CAST(N'2019-06-05T09:48:51.4590000' AS DateTime2), CAST(N'2019-06-05T09:48:51.4590000' AS DateTime2), 47, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (86, NULL, NULL, CAST(N'2019-06-05T10:09:48.1053721' AS DateTime2), CAST(N'2019-06-05T10:09:48.1053721' AS DateTime2), N'NNN', 2023, N'SG', CAST(N'2019-06-05T10:09:59.1460000' AS DateTime2), CAST(N'2019-06-05T10:09:59.1460000' AS DateTime2), 48, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (87, NULL, NULL, CAST(N'2019-06-05T10:12:46.9719304' AS DateTime2), CAST(N'2019-06-05T10:12:46.9719304' AS DateTime2), N'QA', 2019, N'SG', CAST(N'2019-06-05T10:12:47.3590000' AS DateTime2), CAST(N'2019-06-05T10:12:47.3590000' AS DateTime2), 50, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (88, NULL, NULL, CAST(N'2019-06-05T10:15:13.8102164' AS DateTime2), CAST(N'2019-06-05T10:15:13.8102164' AS DateTime2), N'QA', 2020, N'SG', CAST(N'2019-06-05T10:15:14.1750000' AS DateTime2), CAST(N'2019-06-05T10:15:14.1750000' AS DateTime2), 50, 1006, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (89, NULL, NULL, CAST(N'2019-06-05T10:18:21.8646056' AS DateTime2), CAST(N'2019-06-05T10:18:21.8646056' AS DateTime2), N'DEV', 2024, N'SG', CAST(N'2024-06-04T10:00:00.0000000' AS DateTime2), CAST(N'2024-06-04T10:00:00.0000000' AS DateTime2), 52, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (90, NULL, NULL, CAST(N'2019-06-05T10:19:23.6133112' AS DateTime2), CAST(N'2019-06-05T10:19:23.6133112' AS DateTime2), N'DEV2', 2024, N'SG', CAST(N'2019-06-05T10:19:34.7010000' AS DateTime2), CAST(N'2019-06-05T10:19:34.7010000' AS DateTime2), 53, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (91, NULL, NULL, CAST(N'2019-06-05T10:50:46.6312593' AS DateTime2), CAST(N'2019-06-05T10:50:46.6312593' AS DateTime2), N'dev3', 2024, N'SG', CAST(N'2024-06-04T10:00:00.0000000' AS DateTime2), CAST(N'2024-06-04T10:00:00.0000000' AS DateTime2), 54, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (92, NULL, NULL, CAST(N'2019-06-05T10:52:49.6056929' AS DateTime2), CAST(N'2019-06-05T10:52:49.6056929' AS DateTime2), N'QA1', 2019, N'SG', CAST(N'2019-06-05T03:12:20.1040000' AS DateTime2), CAST(N'2019-06-05T03:12:20.1040000' AS DateTime2), 51, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (93, NULL, NULL, CAST(N'2019-06-05T11:15:23.9618039' AS DateTime2), CAST(N'2019-06-05T11:15:17.2121439' AS DateTime2), N'QA', 2025, N'SG', CAST(N'2025-06-04T10:00:00.0000000' AS DateTime2), CAST(N'2025-06-04T10:00:00.0000000' AS DateTime2), 55, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (94, NULL, NULL, CAST(N'2019-06-05T11:22:43.6467559' AS DateTime2), CAST(N'2019-06-05T11:22:43.6467559' AS DateTime2), N'test', 2031, N'SG', CAST(N'2031-06-04T10:00:00.0000000' AS DateTime2), CAST(N'2031-06-04T10:00:00.0000000' AS DateTime2), 58, 4, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (97, NULL, NULL, CAST(N'2019-06-05T22:39:26.7250567' AS DateTime2), CAST(N'2019-06-05T22:39:21.7476351' AS DateTime2), N'01/05', 2019, N'SG', CAST(N'2019-06-03T19:57:31.4830000' AS DateTime2), CAST(N'2019-06-03T19:57:31.4830000' AS DateTime2), 28, 1007, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (98, NULL, NULL, CAST(N'2019-06-05T22:44:29.8808662' AS DateTime2), CAST(N'2019-06-05T22:44:20.5211432' AS DateTime2), N'19/05', 2019, N'SL', CAST(N'2019-05-18T17:00:00.0000000' AS DateTime2), CAST(N'2019-05-18T17:00:00.0000000' AS DateTime2), 61, 1007, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (99, NULL, NULL, CAST(N'2019-06-05T22:45:11.7231398' AS DateTime2), CAST(N'2019-06-05T22:45:11.7231398' AS DateTime2), N'event02', 2020, N'SL', CAST(N'2020-06-05T17:00:00.0000000' AS DateTime2), CAST(N'2020-06-05T17:00:00.0000000' AS DateTime2), 0, 1007, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (100, NULL, NULL, CAST(N'2019-06-06T11:06:04.4569974' AS DateTime2), CAST(N'2019-06-06T09:41:18.8674166' AS DateTime2), N'New Year', 2022, N'SG', CAST(N'2022-05-31T17:00:00.0000000' AS DateTime2), CAST(N'2022-05-31T17:00:00.0000000' AS DateTime2), 18, 1006, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (101, NULL, NULL, CAST(N'2019-06-06T11:04:51.1741602' AS DateTime2), CAST(N'2019-06-06T11:04:43.6781108' AS DateTime2), N'New Year', 2020, N'SG', CAST(N'2020-06-01T17:00:00.0000000' AS DateTime2), CAST(N'2020-06-01T17:00:00.0000000' AS DateTime2), 18, 1006, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (102, NULL, NULL, CAST(N'2019-06-06T11:05:38.5039880' AS DateTime2), CAST(N'2019-06-06T11:05:32.0926456' AS DateTime2), N'New Year', 2020, N'SG', CAST(N'2020-06-01T17:00:00.0000000' AS DateTime2), CAST(N'2020-06-01T17:00:00.0000000' AS DateTime2), 18, 1013, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (103, NULL, NULL, CAST(N'2019-06-06T23:17:52.9964299' AS DateTime2), CAST(N'2019-06-06T23:17:52.9964299' AS DateTime2), N'19/05', 2019, N'SL', CAST(N'2019-05-18T17:00:00.0000000' AS DateTime2), CAST(N'2019-05-18T17:00:00.0000000' AS DateTime2), 61, 1013, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (105, NULL, NULL, CAST(N'2019-06-06T23:19:16.0721964' AS DateTime2), CAST(N'2019-06-06T23:19:05.1574632' AS DateTime2), N'New Year', 2019, N'SG', CAST(N'2019-06-01T20:33:19.6640000' AS DateTime2), CAST(N'2019-06-01T20:33:19.6640000' AS DateTime2), 18, 1013, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (106, NULL, NULL, CAST(N'2019-06-06T23:30:21.4693709' AS DateTime2), CAST(N'2019-06-06T23:30:21.4693709' AS DateTime2), N'01/05', 2019, N'SG', CAST(N'2019-06-03T19:57:31.4830000' AS DateTime2), CAST(N'2019-06-03T19:57:31.4830000' AS DateTime2), 28, 1013, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (109, NULL, NULL, CAST(N'2019-06-07T04:59:19.1064091' AS DateTime2), CAST(N'2019-06-07T04:59:19.1064091' AS DateTime2), N'19/05', 2019, N'SL', CAST(N'2019-05-18T17:00:00.0000000' AS DateTime2), CAST(N'2019-05-18T17:00:00.0000000' AS DateTime2), 61, 1006, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (111, NULL, NULL, CAST(N'2019-06-08T11:20:44.1420439' AS DateTime2), CAST(N'2019-06-08T11:20:44.1420439' AS DateTime2), N'New Year', 2019, N'SG', CAST(N'2019-06-01T20:33:19.6640000' AS DateTime2), CAST(N'2019-06-01T20:33:19.6640000' AS DateTime2), 18, 1007, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (113, NULL, NULL, CAST(N'2019-06-13T08:20:04.6782628' AS DateTime2), CAST(N'2019-06-13T08:20:00.7572748' AS DateTime2), N'New Year', 2019, N'SG', CAST(N'2019-06-01T20:33:19.6640000' AS DateTime2), CAST(N'2019-06-01T20:33:19.6640000' AS DateTime2), 18, 1014, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (1112, NULL, NULL, CAST(N'2019-06-14T08:23:42.2109467' AS DateTime2), CAST(N'2019-06-14T08:22:55.8422764' AS DateTime2), N'New Year', 2020, N'SG', CAST(N'2020-05-31T17:00:00.0000000' AS DateTime2), CAST(N'2020-05-31T17:00:00.0000000' AS DateTime2), 18, 2017, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2114, NULL, NULL, CAST(N'2019-06-17T04:25:27.1660360' AS DateTime2), CAST(N'2019-06-17T04:25:21.6241362' AS DateTime2), N'New Year', 2019, N'SG', CAST(N'2019-06-01T13:33:19.6640000' AS DateTime2), CAST(N'2019-06-02T17:00:00.0000000' AS DateTime2), 18, 2016, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2116, NULL, NULL, CAST(N'2019-06-27T06:45:29.3781606' AS DateTime2), CAST(N'2019-06-17T07:47:22.5724555' AS DateTime2), N'New Year 2', 2020, N'SG', CAST(N'2020-05-23T05:00:00.0000000' AS DateTime2), CAST(N'2020-05-27T05:00:00.0000000' AS DateTime2), 18, 3016, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2119, NULL, NULL, CAST(N'2019-06-24T07:46:51.0298192' AS DateTime2), CAST(N'2019-06-24T07:46:51.0298192' AS DateTime2), N'Lunar New Year', 2020, N'VN', CAST(N'2019-12-31T10:00:00.0000000' AS DateTime2), CAST(N'2020-01-10T17:00:00.0000000' AS DateTime2), 3064, 3016, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2120, NULL, NULL, CAST(N'2019-06-25T12:01:27.4351576' AS DateTime2), CAST(N'2019-06-25T11:58:25.3536935' AS DateTime2), N'1', 2019, N'SG', CAST(N'2019-06-23T17:00:00.0000000' AS DateTime2), CAST(N'2019-06-23T17:00:00.0000000' AS DateTime2), 3075, 3016, 1)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2121, NULL, NULL, CAST(N'2019-06-27T05:31:58.5352242' AS DateTime2), CAST(N'2019-06-26T08:23:47.1435834' AS DateTime2), N'1', 2020, N'SG', CAST(N'2020-06-22T17:00:00.0000000' AS DateTime2), CAST(N'2020-06-22T17:00:00.0000000' AS DateTime2), 3075, 3016, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2122, NULL, NULL, CAST(N'2019-08-16T04:52:55.1362317' AS DateTime2), CAST(N'2019-06-29T07:05:04.7552129' AS DateTime2), N'event custome1', 2019, N'SG', CAST(N'2019-06-28T05:00:00.0000000' AS DateTime2), CAST(N'2019-06-30T05:00:00.0000000' AS DateTime2), 0, 3016, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2123, NULL, NULL, CAST(N'2019-07-02T23:52:28.8895739' AS DateTime2), CAST(N'2019-06-29T09:56:54.9861175' AS DateTime2), N'demo2', 2019, N'SG', CAST(N'2019-06-29T02:55:57.6080000' AS DateTime2), CAST(N'2019-06-29T02:55:57.6080000' AS DateTime2), 3076, 3016, 1)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2124, NULL, NULL, CAST(N'2019-07-02T23:59:20.4117757' AS DateTime2), CAST(N'2019-07-02T23:52:38.3393175' AS DateTime2), N'demo2', 2019, N'SG', CAST(N'2019-06-29T02:55:57.6080000' AS DateTime2), CAST(N'2019-06-29T02:55:57.6080000' AS DateTime2), 3076, 3016, 1)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2125, NULL, NULL, CAST(N'2019-07-02T23:54:54.0830277' AS DateTime2), CAST(N'2019-07-02T23:54:30.6489829' AS DateTime2), N'year1', 2019, N'SG', CAST(N'2019-07-02T16:54:11.3310000' AS DateTime2), CAST(N'2019-07-04T17:00:00.0000000' AS DateTime2), 3077, 3016, 1)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2126, NULL, NULL, CAST(N'2019-07-02T23:59:27.9518505' AS DateTime2), CAST(N'2019-07-02T23:59:23.5753791' AS DateTime2), N'demo2', 2019, N'SG', CAST(N'2019-06-29T05:00:00.0000000' AS DateTime2), CAST(N'2019-06-29T05:00:00.0000000' AS DateTime2), 3076, 3016, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2127, NULL, NULL, CAST(N'2019-07-03T00:00:02.5049870' AS DateTime2), CAST(N'2019-07-02T23:59:33.3391909' AS DateTime2), N'year1', 2019, N'SG', CAST(N'2019-07-01T22:00:00.0000000' AS DateTime2), CAST(N'2019-07-04T22:00:00.0000000' AS DateTime2), 3077, 3016, 1)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2128, NULL, NULL, CAST(N'2019-07-03T00:04:48.4502447' AS DateTime2), CAST(N'2019-07-03T00:02:08.8764611' AS DateTime2), N'year1', 2019, N'SG', CAST(N'2019-07-02T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), 3077, 3016, 1)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2129, NULL, NULL, CAST(N'2019-07-03T00:07:22.3165558' AS DateTime2), CAST(N'2019-07-03T00:04:53.3099739' AS DateTime2), N'year1', 2019, N'SG', CAST(N'2019-07-01T22:00:00.0000000' AS DateTime2), CAST(N'2019-07-04T22:00:00.0000000' AS DateTime2), 3077, 3016, 1)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2130, NULL, NULL, CAST(N'2019-07-03T00:07:41.7455258' AS DateTime2), CAST(N'2019-07-03T00:07:25.1972787' AS DateTime2), N'year1', 2019, N'SG', CAST(N'2019-07-02T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-05T05:00:00.0000000' AS DateTime2), 3077, 3016, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2131, NULL, NULL, CAST(N'2019-08-15T05:02:55.0737032' AS DateTime2), CAST(N'2019-08-15T05:02:55.0737032' AS DateTime2), N'New Year 2020', 2019, N'SG', CAST(N'2019-08-15T05:02:45.8390000' AS DateTime2), CAST(N'2019-08-15T05:02:45.8390000' AS DateTime2), 0, 3016, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2132, NULL, NULL, CAST(N'2019-08-16T03:20:09.7404055' AS DateTime2), CAST(N'2019-08-16T03:20:09.7404055' AS DateTime2), N'Independence Day', 2019, N'SG', CAST(N'2019-09-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-09-02T00:00:00.0000000' AS DateTime2), 0, 3016, 0)
INSERT [dbo].[TMSPublicHoliday] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Event], [Year], [Country], [PeriodStartDate], [PeriodEndDate], [PublicHolidayId], [CompanyId], [DeleteFlag]) VALUES (2133, NULL, NULL, CAST(N'2019-08-16T03:20:56.7851347' AS DateTime2), CAST(N'2019-08-16T03:20:52.4416127' AS DateTime2), N'demop12', 2019, N'SG', CAST(N'2019-07-11T05:00:00.0000000' AS DateTime2), CAST(N'2019-07-13T05:00:00.0000000' AS DateTime2), 3090, 3016, 0)
SET IDENTITY_INSERT [dbo].[TMSPublicHoliday] OFF
SET IDENTITY_INSERT [dbo].[TMSRace] ON 

INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (1, NULL, NULL, CAST(N'2019-06-03T14:54:43.2898836' AS DateTime2), CAST(N'2019-06-03T14:52:34.0140708' AS DateTime2), N'Chinese', N'-', 0, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (2, NULL, NULL, CAST(N'2019-06-04T04:50:08.0013987' AS DateTime2), CAST(N'2019-06-04T04:50:08.0013987' AS DateTime2), N'afawfawf', N'awfafa', 0, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (3, NULL, NULL, CAST(N'2019-06-04T08:47:38.2698596' AS DateTime2), CAST(N'2019-06-04T08:47:38.2698596' AS DateTime2), N'abc', N'-', 0, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (4, NULL, NULL, CAST(N'2019-06-04T08:54:52.0251503' AS DateTime2), CAST(N'2019-06-04T08:54:52.0251503' AS DateTime2), N'sssss', N'sssss', 1, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (5, NULL, NULL, CAST(N'2019-06-04T09:34:36.4952714' AS DateTime2), CAST(N'2019-06-04T09:11:25.8363321' AS DateTime2), N'qqq11', N'qqqq111', 4, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (6, NULL, NULL, CAST(N'2019-06-04T09:34:14.8580783' AS DateTime2), CAST(N'2019-06-04T09:34:14.8580783' AS DateTime2), N'wwww', N'wwww', 4, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (7, NULL, NULL, CAST(N'2019-06-04T16:19:27.1677406' AS DateTime2), CAST(N'2019-06-04T16:19:27.1677406' AS DateTime2), N'Vietnamese', N'VN', 4, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (8, NULL, NULL, CAST(N'2019-06-06T11:09:09.5185721' AS DateTime2), CAST(N'2019-06-06T11:09:09.5185721' AS DateTime2), N'Chinese', N'C', 1006, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (9, NULL, NULL, CAST(N'2019-06-08T11:21:00.9561869' AS DateTime2), CAST(N'2019-06-08T11:21:00.9561869' AS DateTime2), N'1', N'1', 1007, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (10, NULL, NULL, CAST(N'2019-06-10T10:38:28.5811966' AS DateTime2), CAST(N'2019-06-10T10:38:28.5811966' AS DateTime2), N'ABC', N'-', 1006, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (1010, NULL, NULL, CAST(N'2019-06-12T03:02:49.7591184' AS DateTime2), CAST(N'2019-06-12T03:02:49.7591184' AS DateTime2), N'Arab', N'1', 1013, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (2010, NULL, NULL, CAST(N'2019-06-14T08:24:24.2174182' AS DateTime2), CAST(N'2019-06-14T08:24:24.2174182' AS DateTime2), N'1', N'1', 2017, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (3010, NULL, NULL, CAST(N'2019-06-25T12:07:31.4337982' AS DateTime2), CAST(N'2019-06-25T12:07:18.9138864' AS DateTime2), N'Race', N'1', 3016, 0)
INSERT [dbo].[TMSRace] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Value], [CompanyId], [DeleteFlag]) VALUES (3011, NULL, NULL, CAST(N'2019-08-01T08:23:08.2952540' AS DateTime2), CAST(N'2019-08-01T08:23:08.2952540' AS DateTime2), N'Race2', N'Value2', 3016, 0)
SET IDENTITY_INSERT [dbo].[TMSRace] OFF
SET IDENTITY_INSERT [dbo].[TMSResignReason] ON 

INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (1, NULL, NULL, CAST(N'2019-05-31T10:41:14.6743696' AS DateTime2), CAST(N'2019-05-31T00:14:08.0139506' AS DateTime2), N'name1.111', 1, N'code1111', N'marks1', CAST(N'2019-05-23T00:00:00.0000000' AS DateTime2), CAST(N'2019-05-25T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (2, NULL, NULL, CAST(N'2019-05-31T00:58:30.5737126' AS DateTime2), CAST(N'2019-05-31T00:41:39.0000388' AS DateTime2), N'name2', 1, N'code2', N'marks2', CAST(N'2019-05-24T00:00:00.0000000' AS DateTime2), CAST(N'2019-05-27T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (12, NULL, NULL, CAST(N'2019-05-31T01:10:20.8600887' AS DateTime2), CAST(N'2019-05-31T01:10:20.8600887' AS DateTime2), N'name3', 1, N'03', N'mark3', CAST(N'2019-05-25T00:00:00.0000000' AS DateTime2), CAST(N'2019-05-28T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (13, NULL, NULL, CAST(N'2019-05-31T10:37:21.5798472' AS DateTime2), CAST(N'2019-05-31T10:37:21.5798472' AS DateTime2), N'aa', 1, N'aa', N'aaa', CAST(N'2019-05-31T00:00:00.0000000' AS DateTime2), CAST(N'2019-05-31T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (15, NULL, NULL, CAST(N'2019-06-01T05:53:58.1621288' AS DateTime2), CAST(N'2019-06-01T05:53:58.1621288' AS DateTime2), N'vnvn', 1, N'nvdjnvsn', N'nvdjnvjdnv', CAST(N'2019-05-31T00:00:00.0000000' AS DateTime2), CAST(N'2019-05-31T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (16, NULL, NULL, CAST(N'2019-06-01T05:56:16.2777823' AS DateTime2), CAST(N'2019-06-01T05:56:16.2777823' AS DateTime2), N'dvsvd', 1, N'vsvdvs', N'dvdsvdv', CAST(N'2019-06-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-29T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (17, NULL, NULL, CAST(N'2019-06-01T05:56:32.4139842' AS DateTime2), CAST(N'2019-06-01T05:56:32.4139842' AS DateTime2), N'vsvd', 1, N'x xcxv', N'cxvcvc', CAST(N'2019-06-08T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-01T00:00:00.0000000' AS DateTime2), 0, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (18, NULL, NULL, CAST(N'2019-06-01T08:10:02.3696728' AS DateTime2), CAST(N'2019-06-01T08:10:02.3696728' AS DateTime2), N'vdvds', 1, N'vdvsvds', N'vsvdsvs', CAST(N'2019-07-04T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-25T00:00:00.0000000' AS DateTime2), 0, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (19, NULL, NULL, CAST(N'2019-06-02T13:53:07.9399184' AS DateTime2), CAST(N'2019-06-02T10:11:04.0416666' AS DateTime2), N'demo2', 3, N'A1', N'remarks1', CAST(N'2019-06-09T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-01T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (20, NULL, NULL, CAST(N'2019-06-02T11:41:57.6602612' AS DateTime2), CAST(N'2019-06-02T10:50:00.3955196' AS DateTime2), N'Resign Reason 1', 3, N'01', N'remax1', CAST(N'2019-06-08T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-16T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (21, NULL, NULL, CAST(N'2019-06-02T11:13:31.6803428' AS DateTime2), CAST(N'2019-06-02T11:13:31.6803428' AS DateTime2), N'Name1', 3, N'A01', N're01', CAST(N'2019-06-02T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-02T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (22, NULL, NULL, CAST(N'2019-06-02T11:41:27.2947538' AS DateTime2), CAST(N'2019-06-02T11:41:27.2947538' AS DateTime2), N'Name1', 3, N'01', N're02', CAST(N'2019-06-08T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-09T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (23, NULL, NULL, CAST(N'2019-06-03T10:46:43.5595551' AS DateTime2), CAST(N'2019-06-03T10:46:43.5595551' AS DateTime2), N'ill', 3, N'ill', N'Standard', CAST(N'2019-06-03T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-03T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (25, NULL, NULL, CAST(N'2019-06-05T11:28:38.2662803' AS DateTime2), CAST(N'2019-06-04T09:06:01.3678998' AS DateTime2), N'Sick', 4, N'S', N'S', CAST(N'2019-05-05T00:00:00.0000000' AS DateTime2), CAST(N'2019-07-26T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (26, NULL, NULL, CAST(N'2019-06-05T11:29:43.5546672' AS DateTime2), CAST(N'2019-06-04T09:06:53.7462028' AS DateTime2), N'qqqqqqqq1', 4, N'q1', N'q1', CAST(N'2019-06-08T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-12T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (27, NULL, NULL, CAST(N'2019-06-05T11:30:02.8343477' AS DateTime2), CAST(N'2019-06-04T09:39:05.5936198' AS DateTime2), N'Sickness', 4, N'C', N'C', CAST(N'2019-06-04T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-07T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (28, NULL, NULL, CAST(N'2019-06-04T23:31:02.9882936' AS DateTime2), CAST(N'2019-06-04T23:31:02.9882936' AS DateTime2), N'demo', 4, N'01', N'1', CAST(N'2019-06-05T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-05T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (29, NULL, NULL, CAST(N'2019-06-04T23:31:29.6041798' AS DateTime2), CAST(N'2019-06-04T23:31:29.6041798' AS DateTime2), N'demo2', 4, N'03', N'mark3', CAST(N'2019-06-06T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-06T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (31, NULL, NULL, CAST(N'2019-06-05T22:29:17.8344404' AS DateTime2), CAST(N'2019-06-05T22:29:17.8344404' AS DateTime2), N'demo01', 0, N'01', N'01', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (32, NULL, NULL, CAST(N'2019-06-05T22:29:56.8762624' AS DateTime2), CAST(N'2019-06-05T22:29:56.8762624' AS DateTime2), N'demo02', 0, N'02', N'02', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (33, NULL, NULL, CAST(N'2019-06-05T22:38:24.4025079' AS DateTime2), CAST(N'2019-06-05T22:31:14.4293790' AS DateTime2), N'demo03', 1007, N'03', N'03', CAST(N'2019-06-07T00:00:00.0000000' AS DateTime2), CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (34, NULL, NULL, CAST(N'2019-06-05T22:38:37.0854574' AS DateTime2), CAST(N'2019-06-05T22:32:30.8692059' AS DateTime2), N'demo04', 1007, N'04', N'04', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-22T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (35, NULL, NULL, CAST(N'2019-06-05T22:32:51.3415945' AS DateTime2), CAST(N'2019-06-05T22:32:51.3415945' AS DateTime2), N'demo05', 1007, N'05', N'05', CAST(N'2019-06-07T00:00:00.0000000' AS DateTime2), CAST(N'2019-06-09T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (37, NULL, NULL, CAST(N'2019-06-13T02:54:49.2448229' AS DateTime2), CAST(N'2019-06-11T04:25:44.7206529' AS DateTime2), N'1', 1013, N'1', N'1', CAST(N'2019-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-01-10T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (38, NULL, NULL, CAST(N'2019-06-11T09:22:08.5045823' AS DateTime2), CAST(N'2019-06-11T07:06:18.3700377' AS DateTime2), N'1', 1006, N'1', N'1', CAST(N'2019-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-10-06T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (1037, NULL, NULL, CAST(N'2019-06-13T08:28:43.0772199' AS DateTime2), CAST(N'2019-06-13T08:28:43.0772199' AS DateTime2), N'1', 1014, N'1', N'1', CAST(N'2019-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-01-01T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (2037, NULL, NULL, CAST(N'2019-06-14T08:22:08.9393774' AS DateTime2), CAST(N'2019-06-14T08:21:59.1335334' AS DateTime2), N'Retired', 2017, N'1', N'1', CAST(N'2019-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-01-01T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (3037, NULL, NULL, CAST(N'2019-08-14T05:09:08.7149814' AS DateTime2), CAST(N'2019-06-19T22:29:34.4160257' AS DateTime2), N'demo1', 3016, N'1', N'1', CAST(N'2019-01-10T05:00:00.0000000' AS DateTime2), CAST(N'2019-11-30T05:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (3039, NULL, NULL, CAST(N'2019-08-01T08:09:22.1111680' AS DateTime2), CAST(N'2019-08-01T08:09:22.1111680' AS DateTime2), N'Reason1', 3016, N'Code1', N'Remarks1', CAST(N'2019-08-01T00:00:00.0000000' AS DateTime2), CAST(N'2019-08-22T00:00:00.0000000' AS DateTime2), 1, 0)
INSERT [dbo].[TMSResignReason] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [Code], [Remarks], [StartDate], [EndDate], [Status], [DeleteFlag]) VALUES (3040, NULL, NULL, CAST(N'2019-08-14T05:01:17.3718458' AS DateTime2), CAST(N'2019-08-14T05:01:17.3718458' AS DateTime2), N'Name', 3016, N'Code', N'Remarks', CAST(N'2019-08-14T05:00:00.0000000' AS DateTime2), CAST(N'2019-08-31T05:00:00.0000000' AS DateTime2), 1, 0)
SET IDENTITY_INSERT [dbo].[TMSResignReason] OFF
SET IDENTITY_INSERT [dbo].[TMSRoster] ON 

INSERT [dbo].[TMSRoster] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [EmployeeId], [Date], [OtCodeId], [OtCodeValue], [Remarks], [AttendanceId], [ShiftId], [StartTime], [EndTime], [Type], [EndTime1], [EndTime2], [EndTime3], [Remarks1], [Remarks2], [Remarks3], [StartTime1], [StartTime2], [StartTime3], [Type1], [Type2], [Type3]) VALUES (32, NULL, NULL, CAST(N'2019-08-18T09:09:21.2004300' AS DateTime2), CAST(N'2019-08-16T00:16:28.8195486' AS DateTime2), 0, 3, CAST(N'2019-08-01T00:00:00.0000000' AS DateTime2), 10, N'0', N'remark', 2081, 16, N'02:01', N'15:01', 0, N'13:00', N'14:00', N'13:00', N'remarks1', N'remarks2', N'remarks3', N'03:00', N'01:00', N'01:01', 2, 0, 2)
SET IDENTITY_INSERT [dbo].[TMSRoster] OFF
SET IDENTITY_INSERT [dbo].[TMSShift] ON 

INSERT [dbo].[TMSShift] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [MainCode], [Status], [CompanyId], [DeleteFlag]) VALUES (1, NULL, NULL, CAST(N'2019-07-11T05:17:03.4096157' AS DateTime2), CAST(N'2019-06-17T09:05:59.0289580' AS DateTime2), N'A01', 1, 3016, 0)
INSERT [dbo].[TMSShift] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [MainCode], [Status], [CompanyId], [DeleteFlag]) VALUES (6, NULL, NULL, CAST(N'2019-07-11T04:43:40.3725584' AS DateTime2), CAST(N'2019-07-06T03:44:03.9017046' AS DateTime2), N'A02', 1, 3016, 0)
INSERT [dbo].[TMSShift] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [MainCode], [Status], [CompanyId], [DeleteFlag]) VALUES (7, NULL, NULL, CAST(N'2019-07-11T04:59:37.9323858' AS DateTime2), CAST(N'2019-07-06T03:44:14.6854643' AS DateTime2), N'A03', 1, 3016, 0)
INSERT [dbo].[TMSShift] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [MainCode], [Status], [CompanyId], [DeleteFlag]) VALUES (8, NULL, NULL, CAST(N'2019-07-11T05:23:33.3462528' AS DateTime2), CAST(N'2019-07-11T05:17:18.4527047' AS DateTime2), N'A03', 1, 3016, 0)
INSERT [dbo].[TMSShift] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [MainCode], [Status], [CompanyId], [DeleteFlag]) VALUES (9, NULL, NULL, CAST(N'2019-07-29T11:53:01.2730805' AS DateTime2), CAST(N'2019-07-11T05:24:17.6595313' AS DateTime2), N'A05', 1, 3016, 0)
INSERT [dbo].[TMSShift] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [MainCode], [Status], [CompanyId], [DeleteFlag]) VALUES (10, NULL, NULL, CAST(N'2019-07-30T02:47:00.7818889' AS DateTime2), CAST(N'2019-07-30T02:44:52.1908381' AS DateTime2), N'A06', 1, 3016, 0)
INSERT [dbo].[TMSShift] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [MainCode], [Status], [CompanyId], [DeleteFlag]) VALUES (11, NULL, NULL, CAST(N'2019-07-30T05:15:42.9073312' AS DateTime2), CAST(N'2019-07-30T05:10:06.9335853' AS DateTime2), N'A07', 1, 3016, 0)
SET IDENTITY_INSERT [dbo].[TMSShift] OFF
SET IDENTITY_INSERT [dbo].[TMSShiftJobSite] ON 

INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (7, NULL, NULL, CAST(N'2019-06-28T10:41:42.8185179' AS DateTime2), CAST(N'2019-06-28T10:32:16.1904559' AS DateTime2), 0, N'Shift SubCode', N'06:07', N'03:03', 8, N'07:04', N'03:02', N'1', CAST(N'2019-06-21T00:00:00.0000000' AS DateTime2), N'remarks', N'value', 1, 1, 3036, N'A123')
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (8, NULL, NULL, CAST(N'2019-07-11T05:00:09.0716912' AS DateTime2), CAST(N'2019-06-28T10:43:18.1011495' AS DateTime2), 0, N'Sub Code', N'06:07', N'07:02', 13, N'08:00', N'20:00', N'1', CAST(N'2019-06-29T00:00:00.0000000' AS DateTime2), N'Remarks', N'Value', 1, 1, 3036, N'Ab')
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (12, NULL, NULL, CAST(N'2019-07-11T06:07:03.8749425' AS DateTime2), CAST(N'2019-07-06T09:19:12.9648767' AS DateTime2), 0, N'subAdd1', N'03:02', N'03:03', 23, N'16:01', N'17:00', N'21', CAST(N'2019-07-18T00:00:00.0000000' AS DateTime2), N'remark1', N'10', 1, 0, 3043, N'maincodeAdd3')
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (13, NULL, NULL, CAST(N'2019-08-14T20:00:29.3031590' AS DateTime2), CAST(N'2019-07-06T09:33:33.6678164' AS DateTime2), 0, N'Shift Sub CodeA1', N'01:00', N'01:00', 1, N'01:00', N'01:00', N'12', CAST(N'2019-08-15T19:59:43.0000000' AS DateTime2), N'RemarksA1', N'ValueA1', 1, 1, 3043, NULL)
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (14, NULL, NULL, CAST(N'2019-07-30T07:42:15.5381380' AS DateTime2), CAST(N'2019-07-10T03:21:27.6453494' AS DateTime2), 0, N'AA', N'07:03', N'17:00', 20, N'08:01', N'08:21', N'8', CAST(N'2019-07-10T00:00:00.0000000' AS DateTime2), N'cccc', N'cccc', 1, 0, 3036, N'ADC')
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (15, NULL, NULL, CAST(N'2019-07-30T07:42:17.7560360' AS DateTime2), CAST(N'2019-07-11T04:39:01.6309118' AS DateTime2), 0, N'DDD', N'01:00', N'01:00', 1, N'01:00', N'01:00', N'VVVV', CAST(N'2019-07-11T00:00:00.0000000' AS DateTime2), N'Remarks', N'aaa', 1, 6, 3036, N'AWC')
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (16, NULL, NULL, CAST(N'2019-07-11T05:23:26.9299018' AS DateTime2), CAST(N'2019-07-11T05:17:41.9601042' AS DateTime2), 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, NULL, 1, 8, 3043, NULL)
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (17, NULL, NULL, CAST(N'2019-07-11T06:09:28.5158949' AS DateTime2), CAST(N'2019-07-11T06:07:09.5620415' AS DateTime2), 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, NULL, 1, 9, 3043, NULL)
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (18, NULL, NULL, CAST(N'2019-07-29T11:53:01.2729883' AS DateTime2), CAST(N'2019-07-11T06:09:30.8827923' AS DateTime2), 0, NULL, NULL, NULL, 0, NULL, NULL, NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, NULL, 1, 9, 3043, NULL)
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (19, NULL, NULL, CAST(N'2019-07-11T08:31:24.2160585' AS DateTime2), CAST(N'2019-07-11T08:23:28.2624538' AS DateTime2), 0, N'bbbb', N'01:00', N'01:00', 1, N'01:00', N'01:00', N'ff', CAST(N'1970-01-01T00:00:00.0000000' AS DateTime2), N'fff', N'ff', 1, 9, 2034, NULL)
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (20, NULL, NULL, CAST(N'2019-07-30T02:46:37.1306158' AS DateTime2), CAST(N'2019-07-30T02:45:19.5208079' AS DateTime2), 0, N'Shift Sub Code6', N'01:00', N'01:00', 0, N'01:00', N'01:00', N'1', CAST(N'2019-07-10T02:45:21.0000000' AS DateTime2), N'Remarks6', N'Value6', 1, 10, 3036, N'Sub')
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (21, NULL, NULL, CAST(N'2019-07-30T05:15:30.8247291' AS DateTime2), CAST(N'2019-07-30T05:14:12.0417754' AS DateTime2), 0, N'Shift Sub Code7', N'01:00', N'01:01', 1, N'01:00', N'01:01', N'12', CAST(N'1970-01-01T00:00:00.0000000' AS DateTime2), N'Remarks7', N'Value7', 1, 11, 3036, N'Clone')
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (22, NULL, NULL, CAST(N'2019-08-09T09:57:44.7656865' AS DateTime2), CAST(N'2019-08-09T09:57:05.9674730' AS DateTime2), 0, N'Shift Sub Code45', N'01:00', N'01:01', 1, N'01:00', N'01:01', N'1', CAST(N'2019-08-10T09:57:08.0000000' AS DateTime2), N'Remarks45', N'Value45', 1, 7, 3036, NULL)
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (23, NULL, NULL, CAST(N'2019-08-14T20:55:36.1064827' AS DateTime2), CAST(N'2019-08-09T10:03:02.7930619' AS DateTime2), 0, N'A', N'00:12', N'00:13', 1, N'01:01', N'01:02', N'1', CAST(N'2019-08-31T05:00:00.0000000' AS DateTime2), N'A', N'A', 1, 0, 3036, N'A')
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (24, NULL, NULL, CAST(N'2019-08-12T09:31:53.7375368' AS DateTime2), CAST(N'2019-08-09T10:06:10.0042785' AS DateTime2), 1, NULL, NULL, NULL, 0, NULL, NULL, NULL, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), NULL, NULL, 1, 8, 3036, NULL)
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (25, NULL, NULL, CAST(N'2019-08-14T20:29:04.1066166' AS DateTime2), CAST(N'2019-08-14T20:27:20.2188005' AS DateTime2), 0, N'Shift Sub Code', N'01:00', N'01:01', 1, N'01:00', N'01:01', N'12', CAST(N'2019-08-31T00:00:00.0000000' AS DateTime2), N'Remarks', N'Value', 1, 0, 3036, N'Shift Main Code')
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (26, NULL, NULL, CAST(N'2019-08-14T20:34:26.4765683' AS DateTime2), CAST(N'2019-08-14T20:27:53.9661862' AS DateTime2), 1, N'Shift Sub Code', N'01:00', N'01:00', 1, N'01:00', N'01:01', N'12', CAST(N'2019-08-17T00:00:00.0000000' AS DateTime2), N'Remarks', N'Value', 1, 8, 3036, NULL)
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (27, NULL, NULL, CAST(N'2019-08-14T20:55:50.5935824' AS DateTime2), CAST(N'2019-08-14T20:34:30.1633070' AS DateTime2), 1, N'VVV', N'01:02', N'01:03', 1, N'01:00', N'01:01', N'12', CAST(N'2019-08-30T05:00:00.0000000' AS DateTime2), N'vvv', N'vvvv', 1, 8, 3036, NULL)
INSERT [dbo].[TMSShiftJobSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [SubCode], [StartHours], [EndHours], [Minutes], [StartMinutes], [EndMinutes], [Hours], [PeriodDate], [Remarks], [Value], [Status], [ShiftId], [JobSiteId], [MainCode]) VALUES (28, NULL, NULL, CAST(N'2019-08-14T21:06:19.8297663' AS DateTime2), CAST(N'2019-08-14T20:55:54.0916479' AS DateTime2), 0, N'Shift Sub Code', N'01:00', N'01:01', 1, N'13:01', N'13:01', N'12', CAST(N'2019-08-23T05:00:00.0000000' AS DateTime2), N'bbbb', N'bbb', 1, 8, 3036, NULL)
SET IDENTITY_INSERT [dbo].[TMSShiftJobSite] OFF
SET IDENTITY_INSERT [dbo].[TMSSite] ON 

INSERT [dbo].[TMSSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DepartmentId], [DeleteFlag], [JobSiteUsed]) VALUES (2037, NULL, NULL, CAST(N'2019-07-12T00:39:39.2708083' AS DateTime2), CAST(N'2019-06-14T10:57:44.8388818' AS DateTime2), N'FS-0711', 2016, 2023, 1, NULL)
INSERT [dbo].[TMSSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DepartmentId], [DeleteFlag], [JobSiteUsed]) VALUES (2038, NULL, NULL, CAST(N'2019-07-12T00:39:41.9071386' AS DateTime2), CAST(N'2019-06-14T10:57:58.5459321' AS DateTime2), N'FS-0667', 2016, 2023, 1, NULL)
INSERT [dbo].[TMSSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DepartmentId], [DeleteFlag], [JobSiteUsed]) VALUES (3034, NULL, NULL, CAST(N'2019-06-17T07:48:53.6821257' AS DateTime2), CAST(N'2019-06-17T07:48:53.6821257' AS DateTime2), N'IT job', 3016, 3024, 0, NULL)
INSERT [dbo].[TMSSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DepartmentId], [DeleteFlag], [JobSiteUsed]) VALUES (3035, NULL, NULL, CAST(N'2019-06-18T07:00:58.4485477' AS DateTime2), CAST(N'2019-06-18T07:00:58.4485477' AS DateTime2), N'1', 3016, 3024, 0, NULL)
INSERT [dbo].[TMSSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DepartmentId], [DeleteFlag], [JobSiteUsed]) VALUES (3037, NULL, NULL, CAST(N'2019-06-21T04:24:07.0553384' AS DateTime2), CAST(N'2019-06-21T04:24:07.0553384' AS DateTime2), N'ST', 3016, 2023, 0, NULL)
INSERT [dbo].[TMSSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DepartmentId], [DeleteFlag], [JobSiteUsed]) VALUES (3038, NULL, NULL, CAST(N'2019-06-21T04:30:53.1708242' AS DateTime2), CAST(N'2019-06-21T04:30:53.1708242' AS DateTime2), N'1', 3016, 2024, 0, NULL)
INSERT [dbo].[TMSSite] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [CompanyId], [DepartmentId], [DeleteFlag], [JobSiteUsed]) VALUES (3039, NULL, NULL, CAST(N'2019-06-28T22:10:09.8163379' AS DateTime2), CAST(N'2019-06-28T21:34:27.3776487' AS DateTime2), N'sitedemo1', 3016, 3026, 1, NULL)
SET IDENTITY_INSERT [dbo].[TMSSite] OFF
SET IDENTITY_INSERT [dbo].[TMSZone] ON 

INSERT [dbo].[TMSZone] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (1, NULL, NULL, CAST(N'2019-07-02T22:51:23.8443465' AS DateTime2), CAST(N'2019-06-24T08:56:25.7146174' AS DateTime2), 1, N'B3', 4, 2)
INSERT [dbo].[TMSZone] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (2, NULL, NULL, CAST(N'2019-07-02T22:51:22.6666359' AS DateTime2), CAST(N'2019-06-27T08:45:41.0254448' AS DateTime2), 1, N'B2', 7, 1)
INSERT [dbo].[TMSZone] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (3, NULL, NULL, CAST(N'2019-08-01T08:39:49.8899488' AS DateTime2), CAST(N'2019-07-02T22:51:33.6243064' AS DateTime2), 0, N'zone1', 4, 1)
INSERT [dbo].[TMSZone] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (4, NULL, NULL, CAST(N'2019-07-02T22:53:48.3302447' AS DateTime2), CAST(N'2019-07-02T22:51:48.4604237' AS DateTime2), 1, N'zone3', 14, 1)
INSERT [dbo].[TMSZone] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [DeleteFlag], [Name], [ZoneLocationId], [Status]) VALUES (5, NULL, NULL, CAST(N'2019-08-01T08:39:25.0983846' AS DateTime2), CAST(N'2019-08-01T08:39:25.0983846' AS DateTime2), 0, N'Zone 2', 4, 1)
SET IDENTITY_INSERT [dbo].[TMSZone] OFF
SET IDENTITY_INSERT [dbo].[TMSZoneLocation] ON 

INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (1, NULL, NULL, CAST(N'2019-07-29T04:31:58.5125874' AS DateTime2), CAST(N'2019-06-18T09:16:13.8026567' AS DateTime2), N'E', 1, 3036, 3, 2, 1, 1)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (2, NULL, NULL, CAST(N'2019-08-01T09:49:24.6536061' AS DateTime2), CAST(N'2019-06-18T16:29:34.0846367' AS DateTime2), N'B2', 1, 3036, 9, 4, 6, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (3, NULL, NULL, CAST(N'2019-06-19T03:31:43.2941969' AS DateTime2), CAST(N'2019-06-19T03:31:43.2941969' AS DateTime2), N'B3', 1, 3036, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (4, NULL, NULL, CAST(N'2019-06-19T03:34:13.1687928' AS DateTime2), CAST(N'2019-06-19T03:34:13.1687928' AS DateTime2), N'B5', 1, 3036, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (5, NULL, NULL, CAST(N'2019-06-19T07:52:33.3528565' AS DateTime2), CAST(N'2019-06-19T07:52:33.3528565' AS DateTime2), N'B1', 1, 3036, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (6, NULL, NULL, CAST(N'2019-06-19T10:59:28.4486337' AS DateTime2), CAST(N'2019-06-19T10:59:28.4486337' AS DateTime2), N'1', 1, 3036, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (7, NULL, NULL, CAST(N'2019-06-21T03:04:35.0270904' AS DateTime2), CAST(N'2019-06-20T08:06:30.4666630' AS DateTime2), N'demo', 1, 3036, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (8, NULL, NULL, CAST(N'2019-06-20T08:07:11.1876318' AS DateTime2), CAST(N'2019-06-20T08:07:11.1876318' AS DateTime2), N'demo1', 1, 3036, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (9, NULL, NULL, CAST(N'2019-06-21T03:05:42.0595807' AS DateTime2), CAST(N'2019-06-21T03:05:42.0595807' AS DateTime2), N'TEST', 1, 3036, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (10, NULL, NULL, CAST(N'2019-06-21T03:42:46.7920497' AS DateTime2), CAST(N'2019-06-21T03:42:46.7920497' AS DateTime2), N'DE', 1, 3036, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (11, NULL, NULL, CAST(N'2019-06-21T07:40:37.1327194' AS DateTime2), CAST(N'2019-06-21T07:40:37.1327194' AS DateTime2), N'B7', 1, 3036, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (12, NULL, NULL, CAST(N'2019-06-21T08:46:17.2096734' AS DateTime2), CAST(N'2019-06-21T08:46:17.2096734' AS DateTime2), N'AA2', 1, 3036, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (13, NULL, NULL, CAST(N'2019-06-21T08:50:18.9644741' AS DateTime2), CAST(N'2019-06-21T08:50:18.9644741' AS DateTime2), N'EE', 1, 3039, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (14, NULL, NULL, CAST(N'2019-07-02T23:46:44.8098039' AS DateTime2), CAST(N'2019-06-21T09:05:10.8526361' AS DateTime2), N'B5', 1, 3043, 6, 6, 4, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (15, NULL, NULL, CAST(N'2019-07-03T00:17:47.7520598' AS DateTime2), CAST(N'2019-07-03T00:17:47.7520598' AS DateTime2), N'zonlo2', 1, 3043, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (16, NULL, NULL, CAST(N'2019-07-18T11:09:56.6492879' AS DateTime2), CAST(N'2019-07-18T11:09:56.6492879' AS DateTime2), N'tcom', 1, 3037, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (17, NULL, NULL, CAST(N'2019-08-16T05:06:47.3982987' AS DateTime2), CAST(N'2019-08-16T05:06:47.3982987' AS DateTime2), N'ss', 4, 0, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (18, NULL, NULL, CAST(N'2019-08-16T05:09:43.9875708' AS DateTime2), CAST(N'2019-08-16T05:09:43.9875708' AS DateTime2), N'a', 2, 0, 0, 0, 0, 0)
INSERT [dbo].[TMSZoneLocation] ([Id], [CreatedBy], [UpdatedBy], [UpdatedDate], [CreatedDate], [Name], [Status], [JobSiteId], [LevelId], [AreaId], [LocationId], [DeleteFlag]) VALUES (19, NULL, NULL, CAST(N'2019-08-16T05:11:09.8026425' AS DateTime2), CAST(N'2019-08-16T05:11:09.8026425' AS DateTime2), N'b', 2, 0, 0, 0, 0, 0)
SET IDENTITY_INSERT [dbo].[TMSZoneLocation] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetRoleClaims_RoleId]    Script Date: 8/19/2019 9:08:56 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetRoleClaims_RoleId] ON [dbo].[AspNetRoleClaims]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [RoleNameIndex]    Script Date: 8/19/2019 9:08:57 AM ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[NormalizedName] ASC
)
WHERE ([NormalizedName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserClaims_UserId]    Script Date: 8/19/2019 9:08:57 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserClaims_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserLogins_UserId]    Script Date: 8/19/2019 9:08:57 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserLogins_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserRoles_RoleId]    Script Date: 8/19/2019 9:08:57 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserRoles_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [EmailIndex]    Script Date: 8/19/2019 9:08:57 AM ******/
CREATE NONCLUSTERED INDEX [EmailIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UserNameIndex]    Script Date: 8/19/2019 9:08:57 AM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedUserName] ASC
)
WHERE ([NormalizedUserName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AspNetUsers] ADD  DEFAULT ((0)) FOR [Role]
GO
ALTER TABLE [dbo].[Attendance] ADD  DEFAULT ((0)) FOR [Used]
GO
ALTER TABLE [dbo].[Attendance] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[Company] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[PublicHoliday] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSAllowance] ADD  DEFAULT ((0)) FOR [Used]
GO
ALTER TABLE [dbo].[TMSAllowance] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSAllowanceJobsite] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSArea] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSAttendance] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSCostCenter] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSDepartment] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSempCostCenter] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSemployee] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSEmployeeLogTime] ADD  DEFAULT ((0)) FOR [AttType]
GO
ALTER TABLE [dbo].[TMSEmployeeLogTime] ADD  DEFAULT ((0)) FOR [NormalType]
GO
ALTER TABLE [dbo].[TMSEmployeeLogTime] ADD  DEFAULT ((0)) FOR [ShiftId]
GO
ALTER TABLE [dbo].[TMSEmployeeLogTime] ADD  DEFAULT ((0)) FOR [TypeCreate]
GO
ALTER TABLE [dbo].[TMSEmployeeLogTime] ADD  DEFAULT ((0)) FOR [UpdateManual]
GO
ALTER TABLE [dbo].[TMSempRoster] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSEventContract] ADD  CONSTRAINT [DF__TMSEventC__Trans__14B10FFA]  DEFAULT ((0)) FOR [TransportAllowanceId]
GO
ALTER TABLE [dbo].[TMSEventContract] ADD  DEFAULT ((0)) FOR [ZoneId]
GO
ALTER TABLE [dbo].[TMSEventPromotion] ADD  CONSTRAINT [DF__TMSEventP__Statu__10E07F16]  DEFAULT ((0)) FOR [Status]
GO
ALTER TABLE [dbo].[TMSEventPromotion] ADD  CONSTRAINT [DF__TMSEventP__Trans__11D4A34F]  DEFAULT ((0)) FOR [TransportAllowanceId]
GO
ALTER TABLE [dbo].[TMSEventRejoin] ADD  DEFAULT ((0)) FOR [Status]
GO
ALTER TABLE [dbo].[TMSEventTerminationResign] ADD  DEFAULT ((0)) FOR [Status]
GO
ALTER TABLE [dbo].[TMSEventTransfer] ADD  CONSTRAINT [DF__TMSEventT__Trans__15A53433]  DEFAULT ((0)) FOR [TransportAllowanceId]
GO
ALTER TABLE [dbo].[TMSEventTransfer] ADD  DEFAULT ((0)) FOR [ZoneId]
GO
ALTER TABLE [dbo].[TMSJobSite] ADD  DEFAULT ((0)) FOR [ZoneId]
GO
ALTER TABLE [dbo].[TMSJobSite] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSLevel] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSLocation] ADD  DEFAULT ((0)) FOR [Status]
GO
ALTER TABLE [dbo].[TMSOtCode] ADD  DEFAULT ((0)) FOR [Used]
GO
ALTER TABLE [dbo].[TMSOtCode] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSOtMaxTime] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSOtSetting] ADD  CONSTRAINT [DF__TMSOtSett__Delet__3B0BC30C]  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSPublicHoliday] ADD  DEFAULT ((0)) FOR [CompanyId]
GO
ALTER TABLE [dbo].[TMSPublicHoliday] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSRace] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSResignReason] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSRoster] ADD  DEFAULT ((0)) FOR [Type1]
GO
ALTER TABLE [dbo].[TMSRoster] ADD  DEFAULT ((0)) FOR [Type2]
GO
ALTER TABLE [dbo].[TMSRoster] ADD  DEFAULT ((0)) FOR [Type3]
GO
ALTER TABLE [dbo].[TMSShift] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSSite] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[TMSZone] ADD  DEFAULT ((0)) FOR [Status]
GO
ALTER TABLE [dbo].[TMSZoneLocation] ADD  DEFAULT ((0)) FOR [DeleteFlag]
GO
ALTER TABLE [dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserTokens] CHECK CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
USE [master]
GO
ALTER DATABASE [EFSoftware] SET  READ_WRITE 
GO
