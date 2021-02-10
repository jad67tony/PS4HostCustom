function load_JB() {
  sessionStorage.setItem("exploit", "jailbreak");
  if (null === getCookie("jb")) createCookie("jb", "Sleirsgoevy.min");
  let e = JB(readCookie("jb"));
  newScript(e);
}
$(document).ready(function () {
  load_JB();
});
