function removeScript() {
  let head = document.getElementsByTagName("head")[0],
    scripts = head.getElementsByTagName("script");
  for (let i = scripts.length; i > 0; i--) {
    head.removeChild(scripts[i - 1]);
  }
}

function newScript(func) {
  let element = document.createElement("script");
  element.src = func;
  return document.getElementsByTagName("head")[0].appendChild(element);
}
