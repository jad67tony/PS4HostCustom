function displayFan(data) {
  let fan = document.getElementById("fanprogress");
  setInnerHTML(
    fan,
    '<input id="inputfan" class="rangefan" type="range" min="45" max="85" step="1" /><output id="outputfan" style="color:red"></output><button id="submitfan">Valider</button>'
  ),
    document
      .getElementById("inputfan")
      .setAttribute("value", readCookie("fancontrol"));
  document.getElementById("outputfan").innerHTML = readCookie("fancontrol");
}

function dataDisplayFan() {
  fetch(CONFIG(), { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (getCookie("fancontrol") === null)
        createCookie("fancontrol", data["Config"][0].temp);
      displayFan(data);
    });
}

$(document).ready(function () {
  dataDisplayFan();
 let exist_input_fan = setInterval(function () {
    if ($("#inputfan").length) {
      clearInterval(exist_input_fan);
      $("#inputfan").bind("input", function (e) {
        if (getCookie("fancontrol")) modifyCookie("fancontrol", e.target.value);
        document.getElementById("outputfan").innerHTML = readCookie("fancontrol");
      });
      $("#submitfan").bind("click", function () {

        //inject_payload("fancontrol");
      });
    }
  }, 100);
});
