function startTime() {
    let e = new Date().toTimeString();
    (e = e.split("G")), (document.getElementById("clock").innerHTML = e[0]);
  }
  $(document).ready(function () {
    startTime();
  });