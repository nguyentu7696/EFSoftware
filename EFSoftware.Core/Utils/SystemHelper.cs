using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Elect.Core.CheckUtils;
using Elect.Data.IO;
using Elect.Data.IO.DirectoryUtils;
using Flurl;
using Microsoft.AspNetCore.Http;
using EFSoftware.Core.Constants;
using EFSoftware.Core.Models;

namespace EFSoftware.Core.Utils
{
    public static class SystemHelper
    {
        public static SystemSettingModel Setting => SystemSettingModel.Instance;
        public static KalmsSettingModel KalmsSetting => KalmsSettingModel.Instance;

        public static string GetAbsoluteEndpoint(string endpoint)
        {
            endpoint = endpoint.Trim(' ', '~');

            return Setting.Domain.AppendPathSegment(endpoint);
        }

        public static string GetSaveImageLocation(string fileName)
        {
            CheckHelper.CheckNullOrWhiteSpace(fileName, nameof(fileName));

            var folderLocation = Locations.SavePath;

            DirectoryHelper.CreateIfNotExist(PathHelper.GetFullPath(folderLocation));

            var fileLocation = Path.Combine(folderLocation, fileName);

            return fileLocation;
        }

        public static CreateImageModel ToCreateFileModel(this IFormFile file, int? imageMaxWidthPx = null,
            int? imageMaxHeightPx = null)
        {
            byte[] imageBytes;

            using (var stream = new MemoryStream())
            {
                file.CopyTo(stream);

                imageBytes = stream.ToArray();
            }

            var createFileModel = new CreateImageModel
            {
                Name = file.FileName,
                ImageContentBase64 = Convert.ToBase64String(imageBytes),
                ImageMaxWidthPx = imageMaxWidthPx,
                ImageMaxHeightPx = imageMaxHeightPx
            };
            return createFileModel;
        }

        public static ImageModel GetRandomImage(IEnumerable<ImageModel> images)
        {
            var listImage = images.ToList();

            if (listImage.Any())
            {
                return null;
            }
            
            var random = new Random();

            var i = random.Next(0, listImage.Count - 1);

            return listImage.ElementAt(i);
        }
        
        public static string GetRandomImageUrl(IEnumerable<string> imageUrls)
        {
            var listImage = imageUrls.ToList();
            
            if (listImage.Any())
            {
                return null;
            }

            var random = new Random();

            var i = random.Next(0, listImage.Count - 1);

            return listImage.ElementAt(i);
        }

        public static string GetYoutubeThumbnailUrl(string youtubeUrl)
        {
            var id = youtubeUrl.Split('=').LastOrDefault();

            var thumbnailUrl = $"https://img.youtube.com/vi/{id}/maxresdefault.jpg";

            return thumbnailUrl;
        }

        public static void SendVerifySms(string phone, string otp, int expireInMinutes)
        {
            var message = $"{otp} - OTP Code expires in {expireInMinutes} {(expireInMinutes > 1 ? "minutes" : "minute")}.";

            // TODO send OTP
        }
    }
}