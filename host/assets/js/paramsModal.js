/*function showBackground() {
    let e = document.createElement("div");
    return (e.innerHTML = '<div id="imgback"></div>'), e;
  }*/

$(document).ready(function () {
    /************************Button parameter************************/
    /*onkeydown = function (e) {
      if (e.key === "!") {
        showModal();
      }
      if (e.keyCode === 117) {
        showModal();
      }
    };*/
  
    /************************Default color menu************************/
    if (localStorage.getItem("menuColor") === null) {
      localStorage.setItem("menuColor", "#fff");
    }
    selectorMenuText();
    $("#btn3-cust").css("backgroundColor", localStorage.getItem("menuColor"));
    /************************Default color link btn************************/
    if (localStorage.getItem("btnLinkColor") === null) {
      localStorage.setItem("btnLinkColor", "#fff");
    }
    selectorLinkBtn();
    $("#btn4-cust").css("backgroundColor", localStorage.getItem("btnLinkColor"));
    /************************Footer color************************/
    if (localStorage.getItem("footerColor") === null) {
      localStorage.setItem("footerColor", "#red");
    }
    selectorFooterText();
    $("#btn5-cust").css("backgroundColor", localStorage.getItem("footerColor"));
  
    //////////////////////////////////////
    /************************Default color wave************************/
    if (localStorage.getItem("colorWave0") === null) {
      localStorage.setItem("colorWave0", "red");
    }
    if (localStorage.getItem("colorWave1") === null) {
      localStorage.setItem("colorWave1", "blue");
    }
    if (localStorage.getItem("colorWave2") === null) {
      localStorage.setItem("colorWave2", "green");
    }
    if (localStorage.getItem("colorWave3") === null) {
      localStorage.setItem("colorWave3", "orange");
    }
    /************************Default color background************************/
    /*localStorage.getItem("baColor") === null
      ? (localStorage.setItem("baColor", "#00307f"),
        $("body").css("backgroundColor", localStorage.getItem("baColor")))
      : $("body").css("backgroundColor", localStorage.getItem("baColor"));
    $("#colorBackground").css("backgroundColor", localStorage.getItem("baColor"));*/
  
    /************************Default color footer************************/
    localStorage.getItem("foColor") === null
      ? (localStorage.setItem("foColor", "#00307f"),
        $("footer").css("backgroundColor", localStorage.getItem("foColor")))
      : $("footer").css("backgroundColor", localStorage.getItem("foColor"));
    $("#colorFooter").css("backgroundColor", localStorage.getItem("foColor"));
  
    /************************Default color btn************************/
    /*localStorage.getItem("btnColor") === null
      ? (localStorage.setItem("btnColor", "null"),
        $(".btn").css("backgroundColor", localStorage.getItem("btnColor")))
      : $(".btn").css("backgroundColor", localStorage.getItem("btnColor"));
    localStorage.getItem("btnColorHover") === null
      ? (localStorage.setItem("btnColorHover", "null"),
        $(".btn").css("backgroundColor", localStorage.getItem("btnColorHover")))
      : $(".btn").css("backgroundColor", localStorage.getItem("btnColorHover"));
    selectorColorBtn();*/
  
    /************************Default and selector background************************/
    if (localStorage.getItem("backgroundurl") !== "") {
      $("#imgback").css(
        "background-image",
        `url(${localStorage.getItem("backgroundurl")})`
      );
      $("#imgback").addClass("superbg");
    }
    $("#background-image-url").on("click", function () {
      localStorage.getItem("backgroundurl") === null
        ? localStorage.setItem("backgroundurl", "")
        : localStorage.setItem("backgroundurl", "");
    });
    $("#submitbackground").on("click", function () {
      let urlImg = $("#background-image-url").val();
      "" === urlImg
        ? localStorage.setItem("backgroundurl", "")
        : localStorage.setItem("backgroundurl", urlImg);
      $("#imgback").css(
        "background-image",
        `url(${localStorage.getItem("backgroundurl")})`
      );
      $("#imgback").addClass("superbg");
      if (localStorage.getItem("backgroundurl" === ""))
        $("body").css("backgroundColor", localStorage.getItem("baColor"));
    });
  
    /************************btn color wave custom************************/
    let tabBtnColorWave = document.getElementsByClassName(
      "btn-color-show col-sm color-rad"
    );
    for (i = 0; i < tabBtnColorWave.length; i++) {
      let idBtn = tabBtnColorWave[i].id;
      document
        .getElementById(idBtn)
        .setAttribute(
          "style",
          `background-color:${localStorage.getItem(`colorWave${i}`)}`
        );
    }
  
    /************************Submit On Off wave************************/
    $("#submitwave").on("click", function () {
      localStorage.getItem("wave") === null
        ? localStorage.setItem("wave", $("#waveselection option:selected").val())
        : localStorage.setItem("wave", $("#waveselection option:selected").val());
      let containerWave = document.getElementById("container-wave");
      localStorage.getItem("wave") === "on"
        ? ((containerWave.innerHTML = showWave("useWave", "class-wave")),
          selectOpacityWave())
        : (containerWave.innerHTML = "");
    });
  
    /************************Display wave************************/
    if (localStorage.getItem("wave") !== null) {
      let containerWave = document.getElementById("container-wave");
      localStorage.getItem("wave") === "on"
        ? (containerWave.innerHTML = showWave("useWave", "class-wave"))
        : (containerWave.innerHTML = "");
    }
    let containerWaveCustom = document.getElementById("container-wave-custom");
    containerWaveCustom.innerHTML = showWave(
      "useWaveCustom",
      "class-wave-custom"
    );
    selectOpacityWave();
    /************************Submit language************************/
    $("#submitlanguage").on("click", function () {
      let langue = $("#languageselection option:selected").val();
      modifyCookie("language", langue);
      selectLang();
    });
    /************************Submit autoload************************/
    let btnSwitch = document.getElementById("btn-switch"),
      tabBtnSwitch = btnSwitch.getElementsByTagName("input");
    if (getCookie("ftp")) modifyCookie("ftp", "noactive");
    for (let i = 0; i < tabBtnSwitch.length; ++i) {
      let id = tabBtnSwitch[i].id;
      displaySwitch(id);
      document.getElementById(id).addEventListener("click", function () {
        if (id === "ftp") inject_payload("ftp");
        selectorSwitch(id);
      });
    }
    //displayFan();
    /************************Selector temp fan************************/
    /*document.getElementById("inputfan").addEventListener("input", function (e) {
      let level = e.target.value;
      if (getCookie("fancontrol")) modifyCookie("fancontrol", level);
      document.getElementById("outputfan").innerHTML = readCookie("fancontrol");
    });
  
    $("#submitfan").on("click", function () {
      inject_payload("fancontrol");
    });*/
  });