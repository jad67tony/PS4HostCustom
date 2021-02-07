function displaySwitch(id) {
  let btn = document.getElementById(`btn-switch-${id}`);
  "active" === getCookie(id)
    ? (btn.classList.remove("slider-red"),
      btn.classList.add("slider-green"),
      btn.classList.add("checked-green"))
    : (btn.classList.remove("checked-green"),
      btn.classList.remove("slider-green"),
      btn.classList.add("slider-red"))
    "bubble" === id && dataDisplayBubble();

}
function selectorSwitch(id) {
  null === getCookie(id) && createCookie(id, "noactive"),
    "noactive" === getCookie(id)
      ? modifyCookie(id, "active")
      : modifyCookie(id, "noactive"),
    displaySwitch(id);
    console.log( getCookie(id));
}

$(document).ready(function () {
  let tab_switch = document
    .getElementById("btn-switch")
    .getElementsByTagName("input");

  for (let i = 0; i < tab_switch.length; i++) {
    let $id = tab_switch[i].id;

    displaySwitch($id),
      document.getElementById($id).addEventListener("click", function () {

          selectorSwitch($id);
        if ("ftp" === $id) {
        } else {
          //"ftp" === $id && loadPayload("Ftp"), selectorSwitch($id);
          //dataDisplayBubble();
        }
      });
  }
});
