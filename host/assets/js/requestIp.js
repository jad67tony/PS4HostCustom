function displayIpOnline() {
  const boxip = document.getElementById("boxip");
  let ps4 = JSON.parse(getCookie("PS4")),
    lan = JSON.parse(getCookie("LAN"));
  addInnerHTML(boxip, `<span id="ipps4" class="lan">${ps4[0]} : ${ps4[1]}</span><br>`),
    addInnerHTML(boxip, `<span id="ipps4" class="lan">${lan[0]} : ${lan[1]}</span>`);
}
function displayIpOffline() {
  const boxip = document.getElementById("boxip");
  if (null != getCookie("PS4")) {
    let t = JSON.parse(getCookie("PS4"));
    addInnerHTML(
      boxip,
      `<span id="ipps4" class="lan">${t[0]} : ${t[1]}</span><br>`
    ),
      addInnerHTML(
        boxip,
        '<span id="ipps4" class="lan">Cache : <span class="green">Actif</span></span><br>'
      );
  } else
    addInnerHTML(
      boxip,
      '<span id="ipps4" class="lan">Cache : <span class="green">Actif</span></span><br>'
    );
}

function requestIp() {
  $.get(`http://${location.host}/ip/${user_agent()}`, (e, res) => {
    e.forEach((e) => {
      for (const res in e) {
        let a = [res, e[res]];
        "PS4" == res
          ? null === getCookie("PS4")
            ? createCookie("PS4", JSON.stringify(a))
            : modifyCookie("PS4", JSON.stringify(a))
          : null === getCookie("LAN")
          ? createCookie("LAN", JSON.stringify(a))
          : modifyCookie("LAN", JSON.stringify(a));
      }
    }),
      displayIpOnline();
  }).fail(function () {
    displayIpOffline();
  });
}

$(document).ready(function () {
  requestIp()
});
