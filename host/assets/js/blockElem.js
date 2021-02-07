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