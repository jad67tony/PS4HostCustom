function readCookie(name) {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name))
      .split("=")[1];
    return cookieValue;
  }
  
  function addDays(days) {
    let result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }
  
  function createCookie(name, value) {
    let expire = addDays(30);
    document.cookie = name + "=" + value + ";expires=" + expire.toUTCString();
  }
  
  function getCookie(name) {
    let dc = document.cookie;
    let prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
    } else return readCookie(name);
  }
  
  function readCookie(name) {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name))
      .split("=")[1];
    return cookieValue;
  }
  
  function deleteCookie(cname) {
    let d = new Date();
    d.setTime(d.getTime() - 1000 * 60 * 60 * 24);
    let expires = "expires=" + d.toGMTString();
    window.document.cookie = cname + "=" + "; " + expires;
  }
  
  function modifyCookie(name, value) {
    let expire = addDays(30);
    document.cookie = name + "=" + value + ";expires=" + expire.toUTCString();
  }
  /*
Copyright (c) 2018-2020 Jad67tony, https://github.com/Jad67tony/PS4HostCustom
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/