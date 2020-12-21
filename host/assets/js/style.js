let level = 0;
let version = "3.0.4";
let exploit = null;
let infobubble = document.getElementById("infobubble");
let menuList = document.getElementById("menulist");
let infohen = document.getElementById("infohen");
let boxip = document.getElementById("boxip");
const title = document.getElementsByTagName("title");

const csLoader = document.getElementById("cs-loader");
const firmware = document.getElementById("firmware");
const displayLangue = document.getElementById("language");
const choiceLang = document.getElementById("choicelangue");
const overlay = document.getElementById("cache-overlay");
/****************************************************************/

function injection() {
  setInnerText(message, home[0][defaultLangue].inject);
}

function reception() {
  setInnerText(message, home[0][defaultLangue].injectwell);
}
let scrollings = [];
scrolling = [scrolls];
for (let i = 0; i < scrolling.length; i++) {
  scrollings[i] = JSON.parse(scrolling[i]);
}
let payloads = [];
pl = [
  pls,
  miraoff,
  binloader,
  todex,
  linux,
  miratempreport,
  dumpkernel,
  kernelclock,
  backupdtb,
  restoredtb,
  historY,
  browser,
  cachebackup,
  cacherestore,
  henoffvr,
  dumper,
  app2usb,
  rifs,
  webrte,
  fakeusb,
  desabler,
  enabler,
  ps4trainer,
  pkgi,
];
for (let i = 0; i < pl.length; i++) {
  payloads[i] = JSON.parse(pl[i]);
}
let home = [];
datas = [data];
for (let i = 0; i < datas.length; i++) {
  home[i] = JSON.parse(datas[i]);
}

/**********************Display IP*************************************/

function displayIp(address) {
  address.forEach((key) => {
    let object = key;
    for (const property in object) {
      if (property === "PS4" && user_agent() === "PlayStation 4") {
        getCookie("PS4") === null
          ? createCookie(property, object[property])
          : modifyCookie(property, object[property]);
        boxip.innerHTML += `<span id="ipps4" class="lan">${property} : ${getCookie(
          "PS4"
        )}</span>`;
      } else if (user_agent() === "PlayStation 4") {
        boxip.innerHTML += `<div class="lan">${property} : ${object[property]}</div>`;
        fanProgress.innerHTML +=
          '<div class="lan">Cache : <span class="red">' +
          home[0][defaultLangue].nocached +
          "</span></div>";
      }
    }
  });
}
/**********************Request for IP*************************************/

function requestIp() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://${location.host}/ip/${user_agent()}`, true);
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let address = JSON.parse(xhr.response);
        displayIp(address);
      } else {
        if (getCookie("PS4")) {
          boxip.innerHTML += `<div id="ipps4" class="lan">PS4 : ${getCookie(
            "PS4"
          )}</div>`;
          fanProgress.innerHTML +=
            '<div class="lan">Cache : <span class="green">' +
            home[0][defaultLangue].cached +
            "</span></div>";
        } else {
          boxip.innerHTML += '<div class="lan">PS4 : N/A</div>';
          fanProgress.innerHTML +=
            '<div class="lan">Cache : <span class="green">' +
            home[0][defaultLangue].cached +
            "</span></div>";
        }
      }
    }
  };
  xhr.send(null);
}
/***********************Firmware not compatible***********************/

if (alertfirmware === true) {
  if (getCookie("spoof") !== "yes") {
    if (document.getElementById("menulist") != null) {
      displayBlock(overlay);
      displayNone(menuList);
      setInnerHTML(
        message,
        '<div class="red">' +
          home[0][defaultLangue].badFw +
          checkFw() +
          home[0][defaultLangue].badFw2 +
          "</div>"
      );
      setTimeout(function () {
        displayNone(overlay);
        setInnerHTML(
          message,
          '<div class="red">' +
            home[0][defaultLangue].desactivateHost +
            "</div>"
        );
      }, 6000);
    }
  }
}
/********************Receipt notification payload*******************/

function pl_loaded() {
  if (exploit === "Binloader")
    setInnerText(message, home[0][defaultLangue].wait_pl_binloader);
  else reception();
  setTimeout(function () {
    setInnerText(message, home[0][defaultLangue].start_pl);

    setTimeout(function () {
      if (exploit === "Binloader")
        setInnerText(message, home[0][defaultLangue].relaunchBinloader);
      else
        setInnerText(message, exploit + " " + home[0][defaultLangue].ready_pl);

      if (
        exploit === "Mira Officiel" ||
        exploit === "Mira non Officiel" ||
        exploit === "newhenvtx" ||
        (exploit === "newhenvtx" && getCookie("spoof") === "yes")
      )
        setInnerText(message, home[0][defaultLangue].restartNavigator);
      setTimeout(function () {
        displayNone(csLoader);
        setInnerText(message, "");
      }, 3000);
      if (exploit === "Binloader") exploit = null;
    }, 5000);
  }, 5000);
}
/**************************Injection completed*************************/
function finished() {
  switch (exploit) {
    case "ftp":
      document.getElementById("ipps4").innerHTML =
        '<div class="lan">FTP :' +
        getCookie("PS4") +
        ':1337 <span class="green">Actif</span></div>';
      break;
    case "Mira Officiel":
      pl_loaded();
      removeScript();
      break;
    case "Mira non Officiel":
      pl_loaded();
      removeScript();
      break;
    case "Binloader":
      pl_loaded();
      removeScript();
      break;
    case "Jailbreak":
      if (main_ret == 179 || main_ret == 0) {
        displayNone(csLoader);
        setInnerText(message, "");
        firmware.innerHTML +=
          '<div class="lan">Jailbreak <span class="green">OK</span></div>';
        exploit = null;
        autoLoad();
      } else {
        setInnerText(message, home[0][defaultLangue].jbfailed);
        firmware.innerHTML +=
          '<div class="lan">Jailbreak <span class="red">' +
          home[0][defaultLangue].failed +
          "</span></div>";
        exploit = null;
        removeScript();
      }
      break;
    default:
      pl_loaded();
      removeScript();
      break;
  }
}
/****************************Firmware display****************** */
function displayFirmware() {
  if (checkFw() === "8.00" || checkFw() === "9.99") {
    setInnerHTML(
      firmware,
      '<span class="firmware">Spoof:' + " " + checkFw() + "</span>"
    );
    firmware.innerHTML +=
      '<div class="lan">Jailbreak <span class="green">OK</span></div>';
  } else
    setInnerHTML(
      firmware,
      '<span class="firmware">Firmware:' + " " + checkFw() + "</span>"
    );
}
/***********************Jailbreak***************************/
function load_JB() {
  exploit = "Jailbreak";
  setTimeout(function () {
    let func = JB("jb");
    newScript(func);
  }, 500);
}
/***********************Cookie Spoof***************************/
function spoofed() {
  if (getCookie("spoof") === null) createCookie("spoof", "yes");
  else modifyCookie("spoof", "yes");
}
/***********************Mirahen***************************/
function load_mira(version) {
  setTimeout(function () {
    injection();
    displayBlock(csLoader);
    setTimeout(function () {
      let func2 = SCMIRA("c-code"),
        func1;
      if (version == "noofficial") {
        exploit = home[0][defaultLangue].miraNoOfficial;
        func1 = SCMIRA("noofficial");
      } else if (version == "official") {
        exploit = home[0][defaultLangue].miraOfficial;
        func1 = SCMIRA("official");
      } 
      newScript(func1);
      newScript(func2);

      spoofed();
    }, 1000);
  }, 1000);
}
/***********************Payload***************************/
function inject_payload(payload) {
  exploit = payload;
  if (payload === "ftp") {
    setTimeout(function () {
      displayNone(message);
      displayNone(csLoader);
      loadPayload(payload);
    }, 100);
  } else {
    displayBlock(csLoader);
    
    if (payload === "pkgi") {
      exploit = "pkgi";
      let func2 = PKGI("c-code")
      func1 = PAYLOAD("pkgi");
      newScript(func1);
      newScript(func2);
    } else {
      loadPayload(payload);
    }
  }
}
/***********************Binloader***************************/
function load_binloader() {
  if (exploit != null) {
    exploit = null;
    setInnerText(message, home[0][defaultLangue].relaunch_for_mira);
    setTimeout(function () {
      setInnerText(message, home[0][defaultLangue].quit_navigator);
      setTimeout(function () {
        setInnerText(message, "");
      }, 6000);
    }, 6000);
  } else {
    exploit = "Binloader";
    injection();
    displayBlock(csLoader);
    setTimeout(function () {
      setInnerText(message, home[0][defaultLangue].wait_pl);
      setTimeout(function () {
        setInnerText(message, home[0][defaultLangue].wait_pl_binloader);
        setTimeout(function () {
          let func = BINLOADER("c-code");
          newScript(func);
        }, 500);
      }, 3000);
    }, 1000);
  }
}

/************************Title and build definition**********************/
function loadHTML() {
  if (menuList) {
    title[0].innerHTML =
      "PS4HostCS" +
      " V " +
      version +
      " " +
      plLangue() +
      " " +
      home[0][defaultLangue].compagnie;
    setInnerHTML(menuList, buildHTML());
  }
}
/*******************Info bubble ********************************* */
function GetId(id) {
  return document.getElementById(id);
}
let cmpti = false;
function showBubble(text) {
  if (cmpti == false) {
    GetId("infoBubble").style.visibility = "visible";
    GetId("infoBubble").innerHTML = text;
    cmpti = true;
  }
}
function hideBubble() {
  if (cmpti == true) {
    GetId("infoBubble").style.visibility = "hidden";
    cmpti = false;
  }
}
////////////////////////////////////////////////////////
function display_bubble() {
  let tabMenu = document.getElementById("menu"),
    tabBtn = tabMenu.getElementsByClassName("custom-btn btn");
  if (getCookie("bubble") === "active") {
    for (let i = 0, iMax = tabBtn.length; i < iMax; ++i) {
      let id = tabBtn[i].id;
      document.getElementById(id).addEventListener("mouseover", function () {
        let j = i + 1;
        showBubble(
          '<div class=""><span>' +
            payloads[j].title +
            "<br></span><span>" +
            payloads[j].version +
            "<br></span><span>" +
            payloads[j].updated +
            "<br></span><span>" +
            payloads[j].firmware +
            "<br></span><span>" +
            payloads[j].description[defaultLangue] +
            "<br></span><span>" +
            payloads[j].author +
            "<br></span><span>" +
            payloads[j].url +
            "<br></span></div>"
        );
      });
      document.getElementById(id).addEventListener("mouseout", function () {
        hideBubble();
      });
    }
  } else {
    for (let i = 0, iMax = tabBtn.length; i < iMax; ++i) {
      let id = tabBtn[i].id;
      document.getElementById(id).addEventListener("mouseover", function () {
        hideBubble();
      });
    }
  }
}
/****************************Autoload***************************** */
function autoLoad() {
  let tabCookie = ["newhenvtx", "noofficial", "fancontrol"],
    next = false;
  for (let i = 0; i < tabCookie.length; i++) {
    if (getCookie(tabCookie[i]) === "active") {
      if (next === false) {
        /*if (tabCookie[i] === "noofficial") {
          load_mira("noofficial");
        } else {*/
          inject_payload(tabCookie[i]);
       /* }*/
        next = true;
      } else {
        setTimeout(function () {
          inject_payload(tabCookie[i]);
        }, 10000);
      }
    }
  }
}
/**********************Display button autoload********************** */
function displaySwitch(id) {
  let btnSwitch = document.getElementById(`btn-switch-${id}`);
  getCookie(id) === "active"
    ? (btnSwitch.classList.remove("slider-red"),
      btnSwitch.classList.add("slider-green"),
      btnSwitch.classList.add("checked-green"))
    : (btnSwitch.classList.remove("checked-green"),
      btnSwitch.classList.remove("slider-green"),
      btnSwitch.classList.add("slider-red"));
  if (id === "bubble") display_bubble();
}

function selectorSwitch(id) {
  if (getCookie(id) === null) createCookie(id, "noactive");
  getCookie(id) === "noactive"
    ? modifyCookie(id, "active")
    : modifyCookie(id, "noactive");
  displaySwitch(id);
}
/*******************Build Menu**********************************/
function buildHTML() {
  let t = document.getElementById("content-title");
  setInnerHTML(t, '<h1 id="title">PS4HostCS JB</h1>');
  let buildHTML =
    '<ul id="menu">' +
    '<li id="li0"><a href="#" class="deroulant" id="scrolling_menu0">' +
    scrollings[0][defaultLangue].exploit +
    '</a><ul class="submenu" id="submenu0">' +
    '<li><a id="miraoff" href="#" class="custom-btn btn" onclick="load_mira(\'official\');return false">' +
    payloads[0][defaultLangue].mira2 +
    "</a></li>" +
    '<li><a id="binloader" href="#" class="custom-btn btn" onclick="load_binloader();return false">' +
    payloads[0][defaultLangue].binload +
    "</a></li>" +
    '<li><a id="todex" href="#" class="custom-btn btn" onclick="inject_payload(\'Todex\');return false">' +
    payloads[0][defaultLangue].dex +
    "</a></li>" +
    '<li><a id="linux" href="#" class="custom-btn btn" onclick="inject_payload(\'Linux\');return false">' +
    payloads[0][defaultLangue].linux +
    "</a></li></ul></li>" +
    '<li id="li1"><a href="#" class="deroulant" id="scrolling_menu1">' +
    scrollings[0][defaultLangue].system +
    '</a><ul class="submenu" id="submenu1">' +
    '<li><a id="miratempreport" href="#" class="custom-btn btn" onclick="inject_payload(\'Miratempreport\');return false">' +
    payloads[0][defaultLangue].miratempreport +
    "</a></li>" +
    '<li><a id="dumpkernel" href="#" class="custom-btn btn" onclick="inject_payload(\'DumperKernel\');return false">' +
    payloads[0][defaultLangue].dumperkernel +
    "</a></li>" +
    '<li><a id="kernelclock" href="#" class="custom-btn btn" onclick="inject_payload(\'KernelClock\');return false">' +
    payloads[0][defaultLangue].kernelclock +
    "</a></li>" +
    '<li><a id="backupdtb" href="#" class="custom-btn btn" onclick="inject_payload(\'BackupDTB\');return false">' +
    payloads[0][defaultLangue].backupDTB +
    "</a></li>" +
    '<li><a id="restoredtb" href="#" class="custom-btn btn" onclick="inject_payload(\'RestoreDTB\');return false">' +
    payloads[0][defaultLangue].restoreDTB +
    "</a></li></ul></li>" +
    '<li id="li2"><a href="#" class="deroulant" id="scrolling_menu2">' +
    scrollings[0][defaultLangue].nav +
    '</a><ul class="submenu" id="submenu2">' +
    '<li><a id="historY" href="#" class="custom-btn btn" onclick="inject_payload(\'History\');return false">' +
    payloads[0][defaultLangue].history +
    "</a></li>" +
    '<li><a id="browser" href="#" class="custom-btn btn" onclick="inject_payload(\'Browser\');return false">' +
    payloads[0][defaultLangue].browser +
    "</a></li>" +
    '<li><a id="cachebackup" href="#" class="custom-btn btn" onclick="inject_payload(\'AppCacheBackup\');return false">' +
    payloads[0][defaultLangue].hostbackup +
    "</a></li>" +
    '<li><a id="cacherestore" href="#" class="custom-btn btn" onclick="inject_payload(\'AppCacheRestaure\');return false">' +
    payloads[0][defaultLangue].hostrestore +
    "</a></li></ul></li>" +
    '<li id="li3"><a href="#" class="deroulant" id="scrolling_menu3">' +
    scrollings[0][defaultLangue].app +
    '</a><ul class="submenu" id="submenu3">' +
    '<li><a id="henoffvr" href="#" class="custom-btn btn" onclick="inject_payload(\'newhenvtx\');return false">' +
    payloads[0][defaultLangue].henvtx +
    "</a></li>" +
    '<li><a id="dumper" href="#" class="custom-btn btn" onclick="inject_payload(\'Dumper\');return false">' +
    payloads[0][defaultLangue].dumper +
    "</a></li>" +
    '<li><a id="app2usb" href="#" class="custom-btn btn" onclick="inject_payload(\'App2usb\');return false">' +
    payloads[0][defaultLangue].app2usb +
    "</a></li>" +
    '<li><a id="rifs" href="#" class="custom-btn btn" onclick="inject_payload(\'rifs\');return false">' +
    payloads[0][defaultLangue].rifs +
    "</a></li>" +
    '<li><a id="webrte" href="#" class="custom-btn btn" onclick="inject_payload(\'WebRTE\');return false">' +
    payloads[0][defaultLangue].webrte +
    "</a></li>" +
    '<li><a id="fakeusb" href="#" class="custom-btn btn" onclick="inject_payload(\'fakeusb\')">' +
    payloads[0][defaultLangue].fakeusb +
    "</a></li></ul></li>" +
    '<li id="li4"><a href="#" class="deroulant" id="scrolling_menu4">' +
    scrollings[0][defaultLangue].update +
    '</a><ul class="submenu" id="submenu4">' +
    '<li><a id="desabler" href="#" class="custom-btn btn" onclick="inject_payload(\'Desabler\');return false">' +
    payloads[0][defaultLangue].enabler +
    "</a></li>" +
    '<li><a id="enabler" href="#" class="custom-btn btn" onclick="inject_payload(\'Enabler\');return false">' +
    payloads[0][defaultLangue].desabler +
    "</a></li></ul></li>" +
    '<li id="li5"><a href="#" class="deroulant" id="scrolling_menu5">' +
    scrollings[0][defaultLangue].ps4trainer +
    '</a><ul class="submenu" id="submenu5">' +
    '<li><a id="ps4trainer" class="custom-btn btn" href="http://ps4trainer.com/Trainer/index.html">' +
    payloads[0][defaultLangue].ps4trainer +
    "</a></li></ul></li>" +
    '<li id="li6"><a href="#" class="deroulant" id="scrolling_menu6">' +
    "Homebrew" +
    '</a><ul class="submenu" id="submenu6">' +
    '<li><a id="pkgi" href="#" class="custom-btn btn" onclick="inject_payload(\'pkgi\');return false">PkgI' +
    "</a></li></ul></li>";
  return buildHTML;
}
function showWave(id, type) {
  let buildWave =
    '<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">' +
    "<defs>" +
    '<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />' +
    "</defs>" +
    '<g class="parallax">' +
    `<use id="${id}0" class="${type}" style="opacity:${localStorage.getItem(
      `${id}0opac`
    )}" xlink:href="#gentle-wave" x="48" y="0" fill=` +
    localStorage.getItem("colorWave0") +
    " />" +
    `<use id="${id}1" class="${type}" style="opacity:${localStorage.getItem(
      `${id}1opac`
    )}" xlink:href="#gentle-wave" x="48" y="3" fill=` +
    localStorage.getItem("colorWave1") +
    " />" +
    `<use id="${id}2" class="${type}" style="opacity:${localStorage.getItem(
      `${id}2opac`
    )}" xlink:href="#gentle-wave" x="48" y="5" fill=` +
    localStorage.getItem("colorWave2") +
    " />" +
    `<use id="${id}3" class="${type}" style="opacity:${localStorage.getItem(
      `${id}3opac`
    )}" xlink:href="#gentle-wave" x="48" y="7" fill=` +
    localStorage.getItem("colorWave3") +
    " />" +
    "</g>" +
    "</svg>";
  return buildWave;
}

function showBackground() {
  let element = document.createElement("div");
  element.innerHTML = '<div id="imgback"></div>';
  return element;
}
function showModal() {
  let modalTitle = document.getElementById("modaltitle");
  let modalLanguage = document.getElementById("modallanguage");
  let submitLanguage = document.getElementById("submitlanguage");
  let submitWave = document.getElementById("submitwave");
  let modalBackground = document.getElementById("modalbackground");
  let submitBackground = document.getElementById("submitbackground");
  let modalQuit = document.getElementById("modalquit");
  modalTitle.innerText = home[0][defaultLangue].modaltitle;
  modalLanguage.innerText = home[0][defaultLangue].modallangue;
  submitLanguage.innerText = home[0][defaultLangue].submitlanguage;
  submitWave.innerText = home[0][defaultLangue].submitwave;
  modalBackground.innerText = home[0][defaultLangue].modalbackground;
  submitBackground.innerText = home[0][defaultLangue].submitbackground;
  modalQuit.innerText = home[0][defaultLangue].modalquit;
  $("#paramsModal").modal("toggle");
}

function marqueelike() {
  $(".messagedefilant").each(function () {
    var texte = $(this).html();
    $(this).html("<div><span>" + texte + "</span></div>");
  });
}
let time = 0;
function timeout() {
  setTimeout(function () {
    if (time === 0) {
      $("#textInfo").text(home[0][defaultLangue].textslide0);
      time++;
    } else if (time === 1) {
      $("#textInfo").text(home[0][defaultLangue].textslide1);
      time++;
    } else if (time === 2) {
      $("#textInfo").text(home[0][defaultLangue].textslide2);
      time++;
    } else if (time === 3) {
      $("#textInfo").text(home[0][defaultLangue].textslide3);
      time++;
    } else if (time === 4) {
      $("#textInfo").text(home[0][defaultLangue].textslide4);
      time = 0;
    }

    marqueelike();
    setTimeout(function () {
      timeout();
    }, 1000);
  }, 2500);
}
/************************Display hour************************/
function startTime() {
  let today = new Date().toTimeString();
  today = today.split("G");
  document.getElementById("clock").innerHTML = today[0];
}
/************************Change Color Btn************************/
function selectorColorBtn() {
  let userSelection = document.getElementsByClassName("custom-btn btn");
  for (let i = 0; i < userSelection.length; i++) {
    localStorage.getItem("btnColor") === "null"
      ? (document.getElementById(userSelection[i].id).style.background = null)
      : (userSelection[i].style.background = localStorage.getItem("btnColor"));
    userSelection[i].addEventListener("mouseover", function () {
      localStorage.getItem("btnColorHover") === "null"
        ? (document.getElementById(userSelection[i].id).style.background = null)
        : $(`#${userSelection[i].id}`).css(
            "backgroundColor",
            localStorage.getItem("btnColorHover")
          );
    });
    userSelection[i].addEventListener("mouseout", function () {
      localStorage.getItem("btnColor") === "null"
        ? (document.getElementById(userSelection[i].id).style.background = null)
        : $(`#${userSelection[i].id}`).css(
            "backgroundColor",
            localStorage.getItem("btnColor")
          );
    });
  }
  $("#btn1-cust").css("backgroundColor", localStorage.getItem("btnColor"));
  $("#btn2-cust").css("backgroundColor", localStorage.getItem("btnColorHover"));
}
/************************Save color btn and btn hover************************/
function cookieBtn(hex) {
  localStorage.setItem("btnColor", hex);
}
function cookieBtnHover(hex) {
  localStorage.setItem("btnColorHover", hex);
}
///////////////////////////////////////////////
function cookieBtn1Transparent() {
  localStorage.setItem("btnColor", "null");
  let userSelection = document.getElementsByClassName("custom-btn btn");
  for (let i = 0; i < userSelection.length; i++) {
    userSelection[i].style.background = null;
  }
  localStorage.getItem("btnColor") === "null"
    ? (document.getElementById("btn1-cust").style.background = null)
    : $("#btn1-cust").css("backgroundColor", localStorage.getItem("btnColor"));
}
//////////////////////////////////////////////
function cookieBtn2Transparent() {
  localStorage.setItem("btnColorHover", "null");
  localStorage.getItem("btnColor") === "null"
    ? (document.getElementById("btn2-cust").style.background = null)
    : $("#btn2-cust").css(
        "backgroundColor",
        localStorage.getItem("btnColorHover")
      );
  selectorColorBtn();
}
/************************Save color background************************/
function cookieBackground(hex) {
  localStorage.setItem("baColor", hex);
}
/************************Save color footer************************/
function cookieFooter(hex) {
  localStorage.setItem("foColor", hex);
}

/************************Save color menu************************/
function cookieMenuText(hex) {
  localStorage.setItem("menuColor", hex);
}


/************************Change color wave************************/
function cookieWave(hex, i) {
  localStorage.setItem(`colorWave${i}`, hex);
  document.getElementById(`useWaveCustom${i}`).setAttribute("fill", hex);
  document.getElementById(`useWave${i}`).setAttribute("fill", hex);
}
/************************Change opacity wave************************/
function changeOpacityWave(elemOpacityWaveCustom, elemOpacityWave) {
  let elemInputRange = document.querySelectorAll('input[class="range"]'),
    elemOutputRange = document.querySelectorAll('output[class="outrange"]');
  for (i = 0; i < elemInputRange.length; ++i) {
    let inputId = elemInputRange[i].id,
      outputId = elemOutputRange[i].id,
      idWaveCustom = elemOpacityWaveCustom[i].id,
      idWave = elemOpacityWave[i].id;
    document.getElementById(inputId).addEventListener("input", function (e) {
      let num = e.target.value / 100,
        nb = num.toFixed(1);
      localStorage.getItem(`${outputId}val`) === null
        ? localStorage.setItem(`${outputId}val`, nb)
        : localStorage.setItem(`${outputId}val`, nb);
      document.getElementById(outputId).value = localStorage.getItem(
        `${outputId}val`
      );
      localStorage.getItem(`${idWaveCustom}opac`) === null
        ? localStorage.setItem(`${idWaveCustom}opac`, nb)
        : localStorage.setItem(`${idWaveCustom}opac`, nb);
      document
        .getElementById(idWaveCustom)
        .setAttribute(
          "style",
          "opacity:" + localStorage.getItem(`${idWaveCustom}opac`)
        );
      if (elemOpacityWave !== "null") {
        document
          .getElementById(idWave)
          .setAttribute(
            "style",
            "opacity:" + localStorage.getItem(`${idWaveCustom}opac`)
          );
      }
    });
  }
}

/************************Select opacity wave************************/
function selectOpacityWave() {
  let elemOpacityWave = document.getElementsByClassName("class-wave"),
    elemOpacityWaveCustom = document.getElementsByClassName(
      "class-wave-custom"
    ),
    elemInputRange = document.querySelectorAll('input[class="range"]'),
    elemOutputRange = document.querySelectorAll('output[class="outrange"]');
  for (i = 0; i < elemOutputRange.length; ++i) {
    let inputIdVal = elemInputRange[i].id,
      outputIdVal = elemOutputRange[i].id;
    if (localStorage.getItem(`${outputIdVal}val`) === null) {
      localStorage.setItem(`${outputIdVal}val`, "0.5");
    }
    document.getElementById(inputIdVal).value =
      localStorage.getItem(`${outputIdVal}val`) * 100;
    document.getElementById(outputIdVal).value = localStorage.getItem(
      `${outputIdVal}val`
    );
  }
  if (
    localStorage.getItem("wave") === null ||
    localStorage.getItem("wave") === "off"
  ) {
    let elemOpacityWaveCustom = document.getElementsByClassName(
      "class-wave-custom"
    );
    changeOpacityWave(elemOpacityWaveCustom, "null");
  } else {
    for (i = 0; i < elemOutputRange.length; ++i) {
      let idWaveCustom = elemOpacityWaveCustom[i].id;
      let idWave = elemOpacityWave[i].id;
      document
        .getElementById(idWave)
        .setAttribute(
          "style",
          "opacity:" + localStorage.getItem(`${idWaveCustom}opac`)
        );
    }
    changeOpacityWave(elemOpacityWaveCustom, elemOpacityWave);
  }
}

function displayFan() {
  let fanProgress = document.getElementById("fanprogress");
  
  
  let barfan =
    '<input id="inputfan" class="rangefan" type="range" min="40" max="80" step="1" /><output id="outputfan" style="color:red"></output><button id="submitfan">Valider</button>';
  setInnerHTML(fanProgress, barfan);
  document
    .getElementById("inputfan")
    .setAttribute("value", readCookie("fancontrol"));
  document.getElementById("outputfan").innerHTML = readCookie("fancontrol");
  let submitFan = document.getElementById("submitfan");
  submitFan.setAttribute("style", `color:${localStorage.getItem("footerColor")}`);
}


function selectorMenuText(){
 let menuLink = document.querySelectorAll('a[class="deroulant"]');

   for (let i = 0; i < menuLink.length; ++i) {
    menuLink[i].setAttribute("style", `color:${localStorage.getItem("menuColor")}`);
  }
}
function cookieMenuText(hex) {
  localStorage.setItem("menuColor", hex);
  selectorMenuText();
}
function selectorLinkBtn(){
  let linkBtn = document.querySelectorAll('a[class="custom-btn btn"]');
    for (let i = 0; i < linkBtn.length; ++i) {
      linkBtn[i].setAttribute("style", `color:${localStorage.getItem("btnLinkColor")}`);
   }
 }
function cookieLinkBtn(hex) {
  localStorage.setItem("btnLinkColor", hex);
  selectorLinkBtn();
}
function selectorFooterText(){
  let footerColor = document.getElementById("footer");
  let submitFan = document.getElementById("submitfan");
  if(submitFan)submitFan.setAttribute("style", `color:${localStorage.getItem("footerColor")}`);
  footerColor.setAttribute("style", `color:${localStorage.getItem("footerColor")}`);
  

 }
function cookieFooterText(hex) {
  localStorage.setItem("footerColor", hex);
  selectorFooterText();
}

$(document).ready(function () {
  loadHTML();
  startTime();
  timeout();
  requestIp();
  createTempDefault(78);
  displayFirmware();

  /************************Button parameter************************/
  onkeydown = function (e) {
    if (e.key === "!") {
      showModal();
    }
    if (e.keyCode === 117) {
      showModal();
    }
  };

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
  localStorage.getItem("baColor") === null
    ? (localStorage.setItem("baColor", "#00307f"),
      $("body").css("backgroundColor", localStorage.getItem("baColor")))
    : $("body").css("backgroundColor", localStorage.getItem("baColor"));
  $("#colorBackground").css("backgroundColor", localStorage.getItem("baColor"));

  /************************Default color footer************************/
  localStorage.getItem("foColor") === null
    ? (localStorage.setItem("foColor", "#00307f"),
      $("footer").css("backgroundColor", localStorage.getItem("foColor")))
    : $("footer").css("backgroundColor", localStorage.getItem("foColor"));
  $("#colorFooter").css("backgroundColor", localStorage.getItem("foColor"));

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
  displayFan();
  /************************Selector temp fan************************/
  document.getElementById("inputfan").addEventListener("input", function (e) {
    let level = e.target.value;
    if (getCookie("fancontrol")) modifyCookie("fancontrol", level);
    document.getElementById("outputfan").innerHTML = readCookie("fancontrol");
  });

  $("#submitfan").on("click", function () {
    inject_payload("fancontrol");
  });
});
/*
Copyright(c) 2018 - 2020 Jad67tony, https: //github.com/Jad67tony/PS4HostCS

    Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files(the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and / or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

    The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
