function displayFirmware() {
    const e = document.getElementById("firmware");
    "9.99" === checkFw()
      ? setInnerHTML(e, '<span class="firmware">Spoof: ' + checkFw() + "</span>")
      : setInnerHTML(e, '<span class="firmware">' + checkFw() + "</span>");
  }
  function displayJb() {
    const e = document.getElementById("jailbreak");
    const f = document.getElementById("exploit");
    setInnerHTML(e, '<span class="green"> OK</span>');
    setInnerText(f, getCookie("jb").split(".")[0]);
  }
  $(document).ready(function () {
    displayFirmware();
  });