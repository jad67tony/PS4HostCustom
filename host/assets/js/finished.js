function reception() {
  const e = document.getElementById("cs-loader");
  setInnerText(message, home[0][readCookie("language")].injectwell),
    displayBlock(e),
    setTimeout(function () {
      setInnerText(message, home[0][readCookie("language")].start_pl),
        setTimeout(function () {
          removeScript(), displayNone(e), setInnerText(message, "");
        }, 3e3);
    }, 3e3);
}

function finished() {
  console.log(sessionStorage.getItem("exploit"));
  fetch(PAYLOAD(), { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      /*const e = document.getElementById("jailbreak"),
        t = document.getElementById("cs-loader"),
        loader = document.getElementById("loader-jb");


      if (sessionStorage.getItem("jb702") == "ok") exploit = "jb702";




      switch (exploit) {
        case "jailbreak":
          179 == main_ret || 0 == main_ret
            ? (displayJb(), (exploit = null))
            : (setInnerText(message, home[0][readCookie("language")].jbfailed),
              addInnerHTML(
                e,
                '<span class="red">' +
                  home[0][readCookie("language")].failed +
                  "</span>"
              ),
              (exploit = null),
              removeScript());
          displayNone(loader);
          break;
        case "jb702":
          displayNone(loader);
          exploit = null;
          displayJb();
          break;
        case "ftp":
          let l = JSON.parse(getCookie("PS4")),
            m = document.getElementById("ipps4");
          setInnerHTML(
            m,
            `<div class="lan">FTP : <span class="green">Actif<br></span>${l[0]} : ${l[1]}:1337 </div>`
          ),
            setTimeout(function () {
              setInnerText(message, home[0][readCookie("language")].ftp);
            }, 500);
          break;
        case "installFix":
          setInnerText(message, home[0][readCookie("language")].installfix),
            displayBlock(t),
            (exploit = "endFix");
          break;
        case "endFix":
          setInnerText(message, home[0][readCookie("language")].endfix),
            setTimeout(function () {
              displayNone(t), setInnerText(message, "");
            }, 1e3);
          break;
        case "binloader":
          setInnerText(
            message,
            home[0][readCookie("language")].wait_pl_binloader
          );
          break;
        case "DumperKernel":
          setInnerText(message, home[0][readCookie("language")].dumperkernel),
            displayBlock(t),
            setTimeout(function () {
              setInnerText(message, ""), displayNone(t);
            }, 1e3);
          break;

        default:
          reception(exploit);
      }*/
    });
}
