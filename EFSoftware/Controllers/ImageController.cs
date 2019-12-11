
using System;
using System.IO;
using System.Threading.Tasks;
using EFSoftware.Core.Shared.Dtos;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace EFSoftware.Controllers
{
    [Route("api/[controller]")]
    public class ImageController : ControllerBase
    {
        public static IHostingEnvironment _environment;
        public ImageController(IHostingEnvironment environment)
        {
            _environment = environment;
        }
        public class FIleUploadAPI
        {
            public IFormFile files { get; set; }
        }


        [HttpPost]
        [Route("Upload")]
        public async Task<IActionResult> Upload(FIleUploadAPI files)
        {
            string msgresult = "";
            if (files.files.Length > 0)
            {
                try
                {
                    if(_environment.IsDevelopment())
                    {
                        if (!Directory.Exists(_environment.WebRootPath + "\\uploads\\"))
                        {
                            Directory.CreateDirectory(_environment.WebRootPath + "\\uploads\\");
                        }
                        using (FileStream filestream = System.IO.File.Create(_environment.WebRootPath + "\\uploads\\" + files.files.FileName))
                        {
                            files.files.CopyTo(filestream);
                            filestream.Flush();
                            msgresult = "\\uploads\\" + files.files.FileName;
                        }
                    }
                    else
                    {
                        var path = (_environment.WebRootPath + "\\uploads").Replace("\\", "/");

                        if (!Directory.Exists(path))
                        {
                            Directory.CreateDirectory(path);
                        }
                        using (FileStream filestream = System.IO.File.Create(path + "/" + files.files.FileName))
                        {
                            files.files.CopyTo(filestream);
                            filestream.Flush();
                            msgresult = "/uploads/" + files.files.FileName;
                        }
                    }
                    

                    return new OkObjectResult(new GenericResult(true, msgresult));
                }
                catch (Exception ex)
                {
                    msgresult = ex.ToString();
                }
            }
            else
            {
                msgresult = "Unsuccessful";
            }
            return new OkObjectResult(new GenericResult(false, msgresult));

        }
    }
}
