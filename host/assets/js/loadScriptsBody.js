
function loadScriptsJS(){

  const scriptsBody = [
    /*"language",
    "style",
    "paramsModal",
    "bubbleInfos",
    
    "showWave",*/
    "finished",
    
    "loadExploits",
    "bubbleInfos",
    "selectorSwitch",
    "startTime",
    "displayDynamic",
    "textSlide",
    "customTheme",
    "buildHtml",
    "displayFan", 
    "showModal", 
    "requestIp"
  ];
  for (i = 0; i < scriptsBody.length; i++) {
    let element = document.createElement("script");
    element.src = "../../assets/js/" + scriptsBody[i] + ".js";
    document.body.appendChild(element);
  }
}
function loadBootstrap() {
  let element = document.createElement("script");
  element.src = "../../assets/bootstrap/bootstrap.min.js";
  document.body.appendChild(element);
}

$(document).ready(function () {
    loadScriptsJS();
});
