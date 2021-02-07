function start_li_ul(id, data, exploit) {
  return (
    '<li id="li_' +
    id +
    '" >' +
    '<a href="#" class="deroulant" id="scrolling_menu_' +
    id +
    '">' +
    data["Scrolls"][0][readCookie("language")][0][exploit] +
    "</a>" +
    '<ul class="submenu" id="submenu_' +
    id +
    '" >'
  );
}
function list_li(id, data) {
  if (id === 24) {
    return (
      '<li><a id="pl_' +
      id +
      '"class="custom-btn btn" href="http://ps4trainer.com/Trainer/index.html">' +
      data["Payloads"][0][readCookie("language")][id].title +
      "</a></li>"
    );
  } else
    return (
      '<li><a id="pl_' +
      id +
      '" href="#" class="custom-btn btn" onclick="loadPayload(\'pl_' +
      id +
      '\')";return false">' +
      data["Payloads"][0][readCookie("language")][id].title +
      "</a></li>"
    );
}
function end_li_ul() {
  return "</ul></li>";
}
function tabMenu(data) {
  const menu = document.getElementById("menu");
  let id_submenu = 0;
  let build_html = "";

  for (i = 0; i < data["Payloads"][0][readCookie("language")].length + 1; i++) {
    switch (i) {
      case 0:
        build_html += start_li_ul(id_submenu, data, "exploit");
        id_submenu++;
        break;
      case 5:
        build_html += end_li_ul();
        build_html += start_li_ul(id_submenu, data, "system");
        id_submenu++;
        break;
      case 12:
        build_html += end_li_ul();
        build_html += start_li_ul(id_submenu, data, "nav");
        id_submenu++;
        break;
      case 16:
        build_html += end_li_ul();
        build_html += start_li_ul(id_submenu, data, "app");
        id_submenu++;
        break;
      case 22:
        build_html += end_li_ul();
        build_html += start_li_ul(id_submenu, data, "update");
        id_submenu++;
        break;
      case 24:
        build_html += end_li_ul();
        build_html += start_li_ul(id_submenu, data, "ps4trainer");
        id_submenu++;
        break;
      case 25:
        build_html += end_li_ul();
        build_html += start_li_ul(id_submenu, data, "pkgi");
        break;
      case 26:
        build_html += end_li_ul();
        menu.innerHTML = build_html;
        id_submenu = 0;
        break;
    }
    if (i != 26) build_html += list_li(i, data);
  }
}
function buildTabMenu() {
  fetch(PAYLOAD(), { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      tabMenu(data);
    });
}

function displayTitle(data) {
  let title = document.getElementsByTagName("title");
  if (title) {
    title[0].innerHTML =
      data["Infos"][0][readCookie("language")][0].name +
      " " +
      readCookie("language") +
      " " +
      checkFw() +
      " " +
      data["Infos"][0][readCookie("language")][0].compagny;
  }
  buildTabMenu();
}

function requestMetaVersion() {
  fetch(VERSION(), { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayTitle(data);
    });
}

$(document).ready(function () {
  createCookie("language", "French");
  requestMetaVersion();
});
