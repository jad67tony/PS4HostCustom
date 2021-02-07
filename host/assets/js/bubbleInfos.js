let cmpti = 0;

function GetId(e) {
  return document.getElementById(e);
}
function showBubble(e) {

  0 === cmpti &&
    ((GetId("infoBubble").style.visibility = "visible"),
    (GetId("infoBubble").innerHTML = e),
    (cmpti = 1));
}
function hideBubble() {
  1 == cmpti &&
    ((GetId("infoBubble").style.visibility = "hidden"), (cmpti = 0));
}

function display_bubble(data) {

  let tab_menu = document
    .getElementById("menu")
    .getElementsByClassName("custom-btn btn");
    
  let exist_tab_menu = setInterval(function () {
    if ($("#inputfan").length) {
      clearInterval(exist_tab_menu);

      if ("active" == getCookie("bubble")) {
        for (let i = 0; i < tab_menu.length; i++) {    
          let $id = tab_menu[i].id;
          document.getElementById($id).addEventListener("mouseover", function () {

            showBubble(
              '<div class=""><span>' +
                data["Payloads"][0][readCookie("language")][i].title +
                "<br></span><span>" +
                data["Payloads"][0][readCookie("language")][i].version +
                "<br></span><span>" +
                data["Payloads"][0][readCookie("language")][i].updated +
                "<br></span><span>" +
                data["Payloads"][0][readCookie("language")][i].description +
                "<br></span><span>" +
                data["Payloads"][0][readCookie("language")][i].author +
                "<br></span><span>" +
                data["Payloads"][0][readCookie("language")][i].url +
                "<br></span></div>"
            );
          });
          document.getElementById($id).addEventListener("mouseout", function () {
            hideBubble();
          });
        }
      }
      else {
        for (let i = 0; i < tab_menu.length; i++) {
          let $id = tab_menu[i].id;
          document.getElementById($id).addEventListener("mouseover", function () {
            hideBubble();
          });
        }
      }
    }
  }, 100);
}

function dataDisplayBubble() {
  fetch(PAYLOAD(), { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      display_bubble(data);
    });
}

$(document).ready(function () {
  dataDisplayBubble();
});
