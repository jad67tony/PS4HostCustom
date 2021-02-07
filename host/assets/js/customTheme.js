function selectorColorBtn() {
  let e = document.getElementsByClassName("custom-btn btn");
  for (let t = 0; t < e.length; t++)
    "null" === localStorage.getItem("btnColor")
      ? (document.getElementById(e[t].id).style.background = null)
      : (e[t].style.background = localStorage.getItem("btnColor")),
      e[t].addEventListener("mouseover", function () {
        "null" === localStorage.getItem("btnColorHover")
          ? (document.getElementById(e[t].id).style.background = null)
          : $(`#${e[t].id}`).css(
              "backgroundColor",
              localStorage.getItem("btnColorHover")
            );
      }),
      e[t].addEventListener("mouseout", function () {
        "null" === localStorage.getItem("btnColor")
          ? (document.getElementById(e[t].id).style.background = null)
          : $(`#${e[t].id}`).css(
              "backgroundColor",
              localStorage.getItem("btnColor")
            );
      });
  $("#btn1-cust").css("backgroundColor", localStorage.getItem("btnColor")),
    $("#btn2-cust").css(
      "backgroundColor",
      localStorage.getItem("btnColorHover")
    );
}


/*

function cookieBtn(e) {
  localStorage.setItem("btnColor", e);
}



function cookieBtnHover(e) {
  localStorage.setItem("btnColorHover", e);
}



function cookieBtn1Transparent() {
  localStorage.setItem("btnColor", "null");
  let e = document.getElementsByClassName("custom-btn btn");
  for (let t = 0; t < e.length; t++) e[t].style.background = null;
  "null" === localStorage.getItem("btnColor")
    ? (document.getElementById("btn1-cust").style.background = null)
    : $("#btn1-cust").css("backgroundColor", localStorage.getItem("btnColor"));
}




function cookieBtn2Transparent() {
  localStorage.setItem("btnColorHover", "null"),
    "null" === localStorage.getItem("btnColor")
      ? (document.getElementById("btn2-cust").style.background = null)
      : $("#btn2-cust").css(
          "backgroundColor",
          localStorage.getItem("btnColorHover")
        ),
    selectorColorBtn();
}



function cookieBackground(e) {
  localStorage.setItem("baColor", e);
}



function cookieFooter(e) {
  localStorage.setItem("foColor", e);
}



function cookieMenuText(e) {
  localStorage.setItem("menuColor", e);
}



function cookieWave(e, t) {
  localStorage.setItem(`colorWave${t}`, e),
    document.getElementById(`useWaveCustom${t}`).setAttribute("fill", e),
    document.getElementById(`useWave${t}`).setAttribute("fill", e);
}





function changeOpacityWave(e, t) {
  let l = document.querySelectorAll('input[class="range"]'),
    o = document.querySelectorAll('output[class="outrange"]');
  for (i = 0; i < l.length; ++i) {
    let a = l[i].id,
      n = o[i].id,
      r = e[i].id,
      s = t[i].id;
    document.getElementById(a).addEventListener("input", function (e) {
      let l = (e.target.value / 100).toFixed(1);
      localStorage.getItem(`${n}val`),
        localStorage.setItem(`${n}val`, l),
        (document.getElementById(n).value = localStorage.getItem(`${n}val`)),
        localStorage.getItem(`${r}opac`),
        localStorage.setItem(`${r}opac`, l),
        document
          .getElementById(r)
          .setAttribute("style", "opacity:" + localStorage.getItem(`${r}opac`)),
        "null" !== t &&
          document
            .getElementById(s)
            .setAttribute(
              "style",
              "opacity:" + localStorage.getItem(`${r}opac`)
            );
    });
  }
}





function selectOpacityWave() {
  let e = document.getElementsByClassName("class-wave"),
    t = document.getElementsByClassName("class-wave-custom"),
    l = document.querySelectorAll('input[class="range"]'),
    o = document.querySelectorAll('output[class="outrange"]');
  for (i = 0; i < o.length; ++i) {
    let e = l[i].id,
      t = o[i].id;
    null === localStorage.getItem(`${t}val`) &&
      localStorage.setItem(`${t}val`, "0.5"),
      (document.getElementById(e).value =
        100 * localStorage.getItem(`${t}val`)),
      (document.getElementById(t).value = localStorage.getItem(`${t}val`));
  }
  if (
    null === localStorage.getItem("wave") ||
    "off" === localStorage.getItem("wave")
  ) {
    changeOpacityWave(
      document.getElementsByClassName("class-wave-custom"),
      "null"
    );
  } else {
    for (i = 0; i < o.length; ++i) {
      let l = t[i].id,
        o = e[i].id;
      document
        .getElementById(o)
        .setAttribute("style", "opacity:" + localStorage.getItem(`${l}opac`));
    }
    changeOpacityWave(t, e);
  }
}


function selectorMenuText() {
  let e = document.querySelectorAll('a[class="deroulant"]');
  for (let t = 0; t < e.length; ++t)
    e[t].setAttribute("style", `color:${localStorage.getItem("menuColor")}`);
}
function cookieMenuText(e) {
  localStorage.setItem("menuColor", e), selectorMenuText();
}
function selectorLinkBtn() {
  let e = document.querySelectorAll('a[class="custom-btn btn"]');
  for (let t = 0; t < e.length; ++t)
    e[t].setAttribute("style", `color:${localStorage.getItem("btnLinkColor")}`);
}
function cookieLinkBtn(e) {
  localStorage.setItem("btnLinkColor", e), selectorLinkBtn();
}



function selectorFooterText() {
  let e = document.getElementById("footer"),
    t = document.getElementById("submitfan");
  t && t.setAttribute("style", `color:${localStorage.getItem("footerColor")}`),
    e.setAttribute("style", `color:${localStorage.getItem("footerColor")}`);
}
function cookieFooterText(e) {
  localStorage.setItem("footerColor", e), selectorFooterText();
}*/

$(document).ready(function () {
  /************************Default color background************************/
  localStorage.getItem("background_Color") === null
    ? (localStorage.setItem("background_Color", "#00307f"),
      $("body").css(
        "backgroundColor",
        localStorage.getItem("background_Color")
      ))
    : $("body").css(
        "backgroundColor",
        localStorage.getItem("background_Color")
      );
  $("#colorBackground").css(
    "backgroundColor",
    localStorage.getItem("background_Color")
  );

  /************************Default color btn************************/
  localStorage.getItem("btnColor") === null
    ? (localStorage.setItem("btnColor", "null"),
      $(".btn").css("backgroundColor", localStorage.getItem("btnColor")))
    : $(".btn").css("backgroundColor", localStorage.getItem("btnColor"));
  localStorage.getItem("btnColorHover") === null
    ? (localStorage.setItem("btnColorHover", "null"),
      $(".btn").css("backgroundColor", localStorage.getItem("btnColorHover")))
    : $(".btn").css("backgroundColor", localStorage.getItem("btnColorHover"));
  selectorColorBtn();
});
