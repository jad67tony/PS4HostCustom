function choiceLanguage() {
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
}

function JB(x) {
  return "jb/" + x + ".js";
}

function SC(x) {
  return '<script src="' + x + '.js"></scr' + "ipt>";
}

function BINLOADER(x) {
  return "PL_" + plLangue() + "/binloader/" + x + ".js";
}

function SCMIRA(x) {
  return "PL_" + plLangue() + "/mirahen/" + x + ".js";
}
function PKGI(x) {
  return "PL_" + plLangue() + "/pkgi/" + x + ".js";
}
function PAYLOAD(x) {
  return "PL_" + plLangue() + "/" + x + ".js";
}

function checkBlock(elem) {
  if (elem && elem.style.display == "block") return true;
  else return false;
}

function displayBlock(elem) {
  if (elem) {
    elem.style.display = "block";
  }
}

function displayNone(elem) {
  if (elem) {
    elem.style.display = "none";
  }
}

function setInnerHTML(elem, str) {
  if (elem) elem.innerHTML = str;
}

function addInnerHTML(elem, str) {
  if (elem) elem.innerHTML += str;
}

function setInnerText(elem, str) {
  if (elem) elem.innerHTML = str;
}

function languncheck(elem) {
  if (elem) elem.checked = false;
}

function plLangue() {
  let pl_langue;
  switch (defaultLangue) {
    case 0:
      return (pl_langue = "FR");
    case 1:
      return (pl_langue = "EN");
  }
}

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

function addDays(days) {
  let result = new Date();
  result.setDate(result.getDate() + days);
  return result;
}

function removeScript() {
  let head = document.getElementsByTagName("head")[0],
    scripts = head.getElementsByTagName("script");
  for (let i = scripts.length; i > 0; i--) {
    head.removeChild(scripts[i - 1]);
  }
}

function newScript(func) {
  let element = document.createElement("script");
  element.src = func;
  return document.getElementsByTagName("head")[0].appendChild(element);
}

function createTempDefault(value) {
  let expire = addDays(30);
  if (document.cookie.indexOf("fancontrol=") == -1) {
    document.cookie =
      "fancontrol=" + value + ";expires=" + expire.toUTCString();
    document.cookie = "levelTemp=" + value + ";expires=" + expire.toUTCString();
  }
}

function requestLangueServer() {
  const url = "http://" + location.host;
  fetch(url, {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    method: "post",
    body: JSON.stringify({ langue: defaultLangue }),
  }).then(function (response) {
    console.log(response);
  });
}

function selectLang() {
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
  display_bubble();
}

function loadPayload(payload) {
  let tab = [payload, "c-code"];
  for (let i = 0; i < tab.length; i++) {
    let element = document.createElement("script");
    if (i == 0) element.src = PAYLOAD(tab[i]);
    else element.src = SCMIRA(tab[i]);
    document.getElementsByTagName("head")[0].appendChild(element);
  }
}
/*
Copyright (c) 2018-2020 Jad67tony, https://github.com/Jad67tony/PS4HostCS

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
