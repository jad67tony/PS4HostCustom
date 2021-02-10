let user_agent = function() {
  let ua = navigator.userAgent,
  client = ua.substring(ua.indexOf("(") + 1, ua.indexOf(") Apple") - 5);
  return "PlayStation 4";
  //return client;
}

let checkFw = function () {
  let ua = navigator.userAgent;
  let fwVersion = ua.substring(ua.indexOf("5.0 (") + 19, ua.indexOf(") Apple"));
  return fwVersion = "6.72";
  //return fwVersion;
};

(function () {
  if(user_agent() != "PlayStation 4"){
    alert("vous n'êtes pas sur un système PS4 les fonctions ont été désactivé");
    document.location.href = 'index.html'
  }
  
})();