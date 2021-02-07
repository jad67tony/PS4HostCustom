var b64s =
  "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JAq5BQAAAPOqTI0tLBQAAGbHRCQIAABIjRUWFwAASI1cJA9Ni2UA/xJIid9IjRW5DgAASInBviEAAAAxwEH/1EyNNRUVAABIid9IjTW0DgAATI1kJApB/xZIhcBIicN1GUiNNZ0OAABIjT2ZDgAAQf8WSIXASInDdF1IjQVDFAAAugEAAAC+dAMAAEiJ3/8QSI0FpRQAAEiJ2boCAAAAvgEAAABIjXwkCP8QSI0F2hQAAEiJ3/8QD75MJAlIjRViDgAARA++RCQIvgUAAABMiecxwEH/VQBIjQUGFQAATInn/xBmiUUASIPEMFtdQVxBXUFew0iD7BgxwOjI/v//hcB1G+jV/v//SI09LPr//0iNdCQOZolEJA7ofwUAADHASIPEGMNIjQWgFQAAU0UxyUUxwDHJMdIx9kiNPQ8OAAD/EEiNFRMTAABIjTUXDgAAiceJw+iw+f//SI0VtBQAAInfSI01BQ4AAOib+f//SI0VFxMAAInfSI019Q0AAOiG+f//SI0VehMAAInfSI015w0AAOhx+f//SI0VFRQAAInfSI012g0AAOhc+f//SI0VwBMAAInfSI01zg0AAOhH+f//SI0VexIAAInfSI01wA0AAOgy+f//SI0VPhMAAInfSI01sg0AAOgd+f//SI0VQRIAAInfSI01pA0AAOgI+f//SI0VLBMAAInfSI01lw0AAOjz+P//SI0V/xEAAInfSI01jA0AAOje+P//SI0VyhIAAInfSI01fg0AAOjJ+P//SI0VdRIAAInfSI01cQ0AAOi0+P//SI0V0BIAAInfSI01Yw0AAOif+P//SI0VgxMAAInfSI01Vg0AAOiK+P//SI0VHhMAAInfSI01SA0AAOh1+P//SI0VWRIAAInfSI01Og0AAOhg+P//SI0VDBMAAInfSI01LQ0AAOhL+P//SI0VdxEAAInfSI01IA0AAOg2+P//SI0VohEAAInfSI01FA0AAOgh+P//SI0VNRIAAInfSI01Cg0AAOgM+P//SI0V+BIAAInfSI01/AwAAOj39///SI0VaxEAAInfSI017gwAAOji9///SI0VphEAAInfSI014QwAAOjN9///SI0VCRIAAInfSI010wwAAOi49///SI0VvBEAAInfSI01xQwAAOij9///SI0V5xEAAInfSI01uAwAAOiO9///SI0VEhEAAInfSI01ogwAAOh59///SI0VPRIAAInfSI01lAwAAOhk9///SI0VOBIAAInfSI01hwwAAOhP9///SI0V2xAAAInfSI01dwwAAOg69///SI0VFhEAAInfSI01ZwwAAOgl9///SI0VQRAAAInfSI01WgwAAOgQ9///SI0VpBAAAInfSI01TgwAAOj79v//SI0VLxEAAInfSI01RAwAAOjm9v//SI0V4hAAAInfSI01NgwAAOjR9v//SI0VRREAAInfSI01JwwAAOi89v//SI0ViBAAAInfSI01EwwAAOin9v//SI0Vuw8AAInfSI01AwwAAOiS9v//SI0V5hAAAInfSI019gsAAOh99v//SI0VIRAAAInfSI012wsAAOho9v//SI0VHBEAAInfSI01zgsAAOhT9v//SI0V1xAAAInfSI01sgsAAOg+9v//SI0VGhEAAInfSI01rAsAAOgp9v//SI0VxRAAAInfSI01ngsAAOgU9v//SI0VcBAAAInfSI01kgsAAOj/9f//SI0VuxAAAInfSI01hwsAAOjq9f//SI0Vpg8AAInfSI01fgsAAOjV9f//SI0VYRAAAInfSI01cAsAAOjA9f//SI0VJA8AAInfSI01YwsAAOir9f//SI0V/w4AAInfSI01VgsAAOiW9f//SI0VkhAAAInfSI01SwsAAOiB9f//SI0VvQ4AAInfSI01PgsAAOhs9f//SI0VsA4AAInfSI01MQsAAOhX9f//SI0VSxAAAInfSI01JgsAAOhC9f//SI0VFg8AAInfSI01GgsAAOgt9f//SI0ViQ4AAInfSI01CwsAAOgY9f//SI0VZA8AAInfSI01AgsAAOgD9f//SI0VLw8AAInfSI018woAAOju9P//SI0Vug8AAInfSI015AoAAOjZ9P//SI0VjQ4AAInfSI011goAAOjE9P//SI0VMA8AAInfSI01xwoAAOiv9P//SI0VKw8AAInfSI01uAoAAOia9P//id9IjRU0DgAAW0iNNakKAADphPT//0jHwCUAAADpcQMAAEjHwDYAAADpZQMAAEjHwAsAAADpWQMAAFVTUkiNHXkPAABIjS3yDwAASI09jAcAAEiJ3kjHRQAAAAAA6FD0//+FwHQiSIneSI09UgoAAOg99P//hcB0D0iJ3kiNPVIKAADoKvT//4s7SI01VwoAAEiNFS0PAADo/fP//4s7SI01VAoAAEiNFVgPAADo6PP//4s7SInqSI01TQoAAOjX8///iztIjTVHCgAASI0VSg8AAOjC8///iztIjTVBCgAASI0VdQ8AAOit8///iztIjTVFCgAASI0VkA8AAOiY8///iztIjTVOCgAASI0V+w4AAOiD8///iztIjTVSCgAASI0Vpg4AAOhu8///iztIjTVaCgAASI0VGQ8AAOhZ8///iztIjTVTCgAASI0VZA8AAOhE8///iztIjTVMCgAASI0Vxw4AAOgv8///iztIjTVFCgAASI0V0g4AAOga8///iztIjTU/CgAASI0V3Q4AAOgF8///iztIjTU5CgAASI0VQA4AAOjw8v//iztIjTUzCgAASI0V2w4AAOjb8v//iztIjTUuCgAASI0V3g0AAOjG8v//iztIjTUvCgAASI0VmQ4AAOix8v//iztIjTUyCgAASI0V9A0AAOic8v//iztIjTU0CgAASI0VFw4AAOiH8v//iztIjTUmCgAASI0Vsg4AAOhy8v//iztIjTUeCgAASI0V3Q0AAOhd8v//iztIjTURCgAASI0ViA0AAOhI8v//iztIjTUDCgAASI0VQw4AAOgz8v//iztIjTX7CQAASI0V/g0AAOge8v//iztIjTX9CQAASI0VIQ4AAOgJ8v//iztIjTX+CQAASI0VVA0AAOj08f//iztIjTX/CQAASI0V5w0AAOjf8f//iztIjTUACgAASI0VAg4AAOjK8f//iztIjTUBCgAASI0VHQ0AAOi18f//iztIjTXzCQAASI0VwAwAAOig8f//iztIjTXlCQAASI0V0wwAAOiL8f//iztIjTXXCQAASI0Vng0AAOh28f//iztIjTXJCQAASI0VEQ0AAOhh8f//iztIjTW7CQAASI0VPA0AAOhM8f//iztIjTWvCQAASI0V1wwAAOg38f//iztIjTWjCQAASI0VUg0AAOgi8f//iztIjTWuCQAASI0V3QwAAFhbXekK8f//SDHASYnKDwVyAcNIgz2aDAAAAHQYUP8VkQwAAFmJCEjHwP////9Ix8L/////wy9tbnQvc2F1dmVnYXJkZUhvc3QvAC91c2VyL3N5c3RlbS93ZWJraXQvd2ViYnJvd3Nlci9hcHBjYWNoZS9BcHBsaWNhdGlvbkNhY2hlLmRiAC91c2VyL3NhdXZlZ2FyZGVIb3N0LwAvdXNlci9zYXV2ZWdhcmRlSG9zdAAvdXNlci9zeXN0ZW0vd2Via2l0L3dlYmJyb3dzZXIAUG91ciBlZmZlY3R1ZXIgdW5lIHNhdXZlZ2FyZGUgaWwgZmF1dAphY3RpdmVyIHZvdHJlIGNhY2hlIGF1IHByw6lhbGFibGUhAC9tbnQvdXNiMC8ucHJvYmUAL21udC91c2IxLy5wcm9iZQBTYXV2ZWdhcmRlIGRlIFBTNEhvc3QgZW4gaW50ZXJuZSB0ZXJtaW7DqWUuClZvdXMgcG91dmV6IMOpZ2FsZW1lbnQgdXRpbGlzZXIgdW4gcMOpcmlwaMOpcmlxdWUgVVNCCnBvdXIgdW5lIHByb2NoYWluZSBzYXV2ZWdhcmRlAFNhdXZlZ2FyZGUgc3VyIFVTQjEAL21udC91c2IxL3NhdXZlZ2FyZGVIb3N0LwBTYXV2ZWdhcmRlIGRlIFBTNEhvc3QgZW4gY291cnMKVmV1aWxsZXogcGF0aWVudGVyLi4uAC9tbnQvdXNiMS9zYXV2ZWdhcmRlSG9zdABVU0Igc2F1dmVnYXJkZSBjb21wbGV0ZSEAU2F1dmVnYXJkZSBzdXIgVVNCMAAvbW50L3VzYjAvc2F1dmVnYXJkZUhvc3QvAC9tbnQvdXNiMC9zYXV2ZWdhcmRlSG9zdAAlcy8lcwBmc3R5cGUAZnNwYXRoAGZyb20AeWVzAGxhcmdlAHN0YXRpYwB0aW1lem9uZQBhc3luYwBpZ25vcmVhY2wAZGlybWFzawAvc3lzdGVtL2NvbW1vbi9saWIvbGliU2NlU3lzVXRpbC5zcHJ4AC9zeXN0ZW0vY29tbW9uL2xpYi9saWJTY2VTeXN0ZW1TZXJ2aWNlLnNwcngAc2NlU3lzVXRpbFNlbmRTeXN0ZW1Ob3RpZmljYXRpb25XaXRoVGV4dABzY2VTeXN0ZW1TZXJ2aWNlTGF1bmNoV2ViQnJvd3NlcgAvc3lzdGVtL2NvbW1vbi9saWIvbGliU2NlVXNlclNlcnZpY2Uuc3ByeABzY2VVc2VyU2VydmljZUluaXRpYWxpemUAc2NlVXNlclNlcnZpY2VHZXRMb2dpblVzZXJJZExpc3QAc2NlVXNlclNlcnZpY2VUZXJtaW5hdGUAc2NlVXNlclNlcnZpY2VHZXRVc2VyTmFtZQBzY2VVc2VyU2VydmljZUdldEluaXRpYWxVc2VyAFNjZVN5c0NvcmVSZWJvb3QAL3N5c3RlbS9jb21tb24vbGliL2xpYmtlcm5lbC5zcHJ4AHNjZUtlcm5lbFJlYm9vdAA0MDAANDAxADQwNQA0MDYANDA3ADQ1MAA0NTUANDcwADQ3MQA0NzIANDczADQ3NAA1MDAANTAxADUwMwA1MDUANTA3ADU1MAA1NTMANTU1ADU1NgA2MDAANjAyADYyMAA2NTAANjUxADY3MAA2NzEANjcyADcwMAA3MDEANzAyAC8lcy9jb21tb24vbGliL2xpYmMuc3ByeAByYgAvc3lzdGVtL2NvbW1vbi9saWIvbGliYy5zcHJ4ACUwMnglMDJ4ACVzJWMlYwAlaQAwLjAlYwAwLiVjJWMAJWMlYy4lYyVjAGxpYlNjZUxpYmNJbnRlcm5hbC5zcHJ4AG1hbGxvYwBmcmVlAGNhbGxvYwByZWFsbG9jAG1lbWFsaWduAG1lbXNldABtZW1jcHkAbWVtY21wAG1lbW1vdmUAbWVtbW92ZV9zAHN0cmNweQBzdHJuY3B5AHN0cmNhdABzdHJuY2F0AHN0cmxlbgBzdHJjbXAAc3RybmNtcABzcHJpbnRmAHNucHJpbnRmAHNucHJpbnRmX3MAc3NjYW5mAHN0cmNocgBzdHJyY2hyAHN0cnN0cgBzdHJkdXAAc3RydG9rAHJpbmRleABpc2RpZ2l0AGF0b2kAYXRvZgBzdHJsY3B5AHN0cmVycm9yAF9HZXRwY3R5cGUAX1N0b3VsAGJjb3B5AHNyYW5kAGFzY3RpbWUAYXNjdGltZV9yAGdtdGltZQBnbXRpbWVfcwBsb2NhbHRpbWUAbG9jYWx0aW1lX3IAbWt0aW1lAG9wZW5kaXIAcmVhZGRpcgByZWFkZGlyX3IAdGVsbGRpcgBzZWVrZGlyAHJld2luZGRpcgBjbG9zZWRpcgBkaXJmZABnZXRwcm9nbmFtZQBmb3BlbgBmcmVhZABmd3JpdGUAZnNlZWsAZnRlbGwAZmNsb3NlAGZwcmludGYAbGlia2VybmVsX3dlYi5zcHJ4AGxpYmtlcm5lbF9zeXMuc3ByeABfX3N0YWNrX2Noa19ndWFyZABfX3N0YWNrX2Noa19mYWlsAF9fZXJyb3IAc2NlS2VybmVsRXJyb3IAc2NlS2VybmVsTG9hZFN0YXJ0TW9kdWxlAHNjZUtlcm5lbEFsbG9jYXRlRGlyZWN0TWVtb3J5AHNjZUtlcm5lbE1hcERpcmVjdE1lbW9yeQBzY2VLZXJuZWxHZXREaXJlY3RNZW1vcnlTaXplAHNjZUtlcm5lbFN0YXQAc2NlS2VybmVsT3BlbgBzY2VLZXJuZWxSZWFkAHNjZUtlcm5lbExzZWVrAHNjZUtlcm5lbENsb3NlAHNjZUtlcm5lbFNsZWVwAHNjZUtlcm5lbFVzbGVlcABzY2VLZXJuZWxHZXR0aW1lb2ZkYXkAc2NlS2VybmVsR2V0UHJvY2Vzc1RpbWUAc2NlS2VybmVsR2V0Q3VycmVudENwdQBzeXNjdGwAc3lzY3RsYnluYW1lAHN5c2FyY2gAZXhlY3ZlAHB0aHJlYWRfc2VsZgBwdGhyZWFkX3NldGFmZmluaXR5X25wAHNjZUtlcm5lbENyZWF0ZUVxdWV1ZQBzY2VLZXJuZWxEZWxldGVFcXVldWUAc2NlS2VybmVsQWRkVXNlckV2ZW50AHNjZUtlcm5lbEFkZFJlYWRFdmVudABnZXR1aWQAZ2V0Z2lkAGdldHBpZABzZXR1aWQAc2V0Z2lkAHNldHJldWlkAHNldHJlZ2lkAHNjZUtlcm5lbEdldEZzU2FuZGJveFJhbmRvbVdvcmQAc2NlS2VybmVsR2V0U3lzdGVtU3dWZXJzaW9uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
var Base64Binary = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  /* will return a  Uint8Array type */
  decodeArrayBuffer: function (input) {
    var bytes = (input.length / 4) * 3;
    var ab = new ArrayBuffer(bytes);
    return this.decode(input, ab);
  },

  removePaddingChars: function (input) {
    var lkey = this._keyStr.indexOf(input.charAt(input.length - 1));
    if (lkey == 64) {
      return input.substring(0, input.length - 1);
    }
    return input;
  },

  decode: function (input, arrayBuffer) {
    //get last chars to see if are valid
    input = this.removePaddingChars(input);
    input = this.removePaddingChars(input);

    var bytes = parseInt((input.length / 4) * 3, 10);

    var uarray;
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    var j = 0;

    if (arrayBuffer) uarray = new Uint8Array(arrayBuffer);
    else uarray = new Uint8Array(bytes);

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    for (i = 0; i < bytes; i += 3) {
      //get the 3 octects in 4 ascii chars
      enc1 = this._keyStr.indexOf(input.charAt(j++));
      enc2 = this._keyStr.indexOf(input.charAt(j++));
      enc3 = this._keyStr.indexOf(input.charAt(j++));
      enc4 = this._keyStr.indexOf(input.charAt(j++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      uarray[i] = chr1;
      if (enc3 != 64) uarray[i + 1] = chr2;
      if (enc4 != 64) uarray[i + 2] = chr3;
    }

    return uarray;
  },
};

function write_payload(payload_writer) {
  var ua = Base64Binary.decode(b64s);

  var i;
  for (i = 0; i < ua.length; i++) {
    payload_writer[i] = ua[i];
  }
}