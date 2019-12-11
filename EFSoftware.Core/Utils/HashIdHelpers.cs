using HashidsNet;
using EFSoftware.Core.Share.Constants;
using KalEFSoftwarems.Core.Share.Exceptions;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFSoftware.Core.Utils
{
    public class HashIdHelpers
    {
        private static readonly Hashids HashMachine = new Hashids("qYj5s", 7);

        public static string HashId(long id)
        {
            var code = Convert.ToInt32(id);
            return HashMachine.Encode(code);
        }

        public static long DecodeHashId(string hashId)
        {
            try
            {
                var decodeValue = HashMachine.Decode(hashId);

                if (decodeValue == null || decodeValue.Length <= 0)
                    return -1;
                //throw new CoreException(nameof(ErrorCode.InvalidParameter));

                return decodeValue[0];
            }
            catch(Exception ex)
            {
                Console.Write(ex.Message);
                return -1;
            }
           
        }
    }
}
