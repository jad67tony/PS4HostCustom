function showModal(data) {
  let a = document.getElementById("modaltitle"),
    b = document.getElementById("modallanguage"),
    c = document.getElementById("submitlanguage"),
    f = document.getElementById("modalwave"),
    g = document.getElementById("submitwave"),
    h = document.getElementById("modalbackground"),
    i = document.getElementById("submitbackground"),
    j = document.getElementById("modalquit");
  (a.innerText = data["Modal"][0][readCookie("language")].modaltitle),
    (b.innerText = data["Modal"][0][readCookie("language")].modallangue),
    (c.innerText = data["Modal"][0][readCookie("language")].submit),
    (f.innerText = data["Modal"][0][readCookie("language")].modalwave),
    (g.innerText = data["Modal"][0][readCookie("language")].submit),
    (h.innerText = data["Modal"][0][readCookie("language")].modalbackground),
    (i.innerText = data["Modal"][0][readCookie("language")].submit),
    (j.innerText = data["Modal"][0][readCookie("language")].modalquit);
  if (checkFw() === "6.72") {
    let d = document.getElementById("modaljb"),
      e = document.getElementById("submitjb");
    (d.innerText = data["Modal"][0][readCookie("language")].modaljb),
      (e.innerText = data["Modal"][0][readCookie("language")].submit);
  }

  $("#paramsModal").modal("toggle");
}

function dataModal() {
  fetch(HOME(), { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      showModal(data);
    });
}
$(document).ready(function () {
  onkeydown = function (e) {
    if (e.key === "!") {
      dataModal();
    }
    if (e.keyCode === 117) {
      dataModal();
    }
  };
});
