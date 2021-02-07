$(document).ready(function () {

  function affiche(a) {


    console.log(a["TabMenu"][0]["French"][0].$id);
  }
  function test() {
    fetch("../../assets/lang/payload.json", { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        affiche(data);
      });
  }

  test();

  //console.log(data["TabMenu"][0]["French"][0].$id);
  /*
  let payload = "../../assets/lang/payload.json";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", payload, false);
  xhr.send("");
  let data_payload = xhr.responseText;
  let json_data_payload = JSON.parse(data_payload);
  //alert(json_data_payload["TabMenu"][0]["French"][0].$id);
  //alert(json_data_payload["TabMenu"][0]["French"][5].description);

  let home = "../../assets/lang/home.json";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", home, false);
  xhr.send("");
  let data_home = xhr.responseText;
  //let json_data_home = JSON.parse(data_home);
  //console.log(json_data_home["Datas"][0]["Home"][0]["French"][0].webkitWait);*/
});
