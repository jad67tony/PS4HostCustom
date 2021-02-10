function loadScripts() {
  const scriptsHead = [
    "add-rmScript",
    "location",
    "checkSystem",
    "cookies",
    "choiceLangue",
    "blockElem", 
    "jb672"
  ];
  for (i = 0; i < scriptsHead.length; i++) {
    let element = document.createElement("script");
    element.src = '../../assets/js/' + scriptsHead[i] + '.js';
    document.getElementsByTagName("head")[0].appendChild(element);
  }
}

$(document).ready(function () {
    loadScripts()
});
