function REDIRECT() {
  switch (checkFw()) {
    case "7.02":
      return (document.location.href = "PS4HostCustom/702/index.html");
    case "6.72":
      return (document.location.href = "PS4HostCustom/672/index.html");
  }
}
function REDIRECTINDEX() {
  return (document.location.href = "../../index.html");
}
function REDIRECTCACHE() {
  return (document.location.href = "../../cached.html");
}
function CACHED() {
  return (document.location.href = "cached.html");
}
function EXPLOITWEBKIT702() {
  return (document.location.href = "../../webkit702/index.html");
}
function PAYLOAD(x) {
  return "../../payloads/PL_" + plLangue() + "/" + x + ".js";
}
function PAYLOAD702(x) {
  return "../../payloads/PL_702_" + plLangue() + "/" + x + ".js";
}
function JB(x) {
  return "../../jb/" + x + ".js";
}
function SCMIRA(x) {
  return "../../miraloader/" + x + ".js";
}
function WEBKIT702(x) {
  return "../../webkit702/" + x + ".js";
}
function PAYLOAD(){
  return "../../assets/lang/payload.json";
}
function VERSION(){
  return "../../version.json";
}
function HOME(){
  return "../../assets/lang/home.json";
}
function CONFIG(){
  return "../../config.json";
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
