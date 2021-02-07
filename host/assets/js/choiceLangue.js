function requestLangueServer() {
  const url = "http://" + location.host;
  fetch(url, {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    method: "post",
    body: JSON.stringify({ langue: readCookie("language") }),
  }).then(function (response) {
    console.log(response);
  });
}
function languncheck(elem) {
  if (elem) elem.checked = false;
}


function plLangue() {
  switch (readCookie("language")) {
    case "French":
      return "FR";
    case "English":
      return "EN"; 
  }
}
/*function selectLang() {
  switch (readCookie("language")) {
    case "french":
      defaultLangue = 0;
      break;
    case "english":
      defaultLangue = 1;
      break;
  }
  loadHTML();
  requestLangueServer();
  /*display_bubble();
}*/

/*function choiceLanguage() {

  if (getCookie("language") === null) {
    createCookie("language", "french");
    defaultLangue = 0;
  } else {
    switch (readCookie("language")) {
      case "french":
        defaultLangue = 0;
        break;
      case "english":
        defaultLangue = 1;
        break;
    }
  }
}*/

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
