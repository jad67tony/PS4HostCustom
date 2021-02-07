let time = 0;

function marqueelike() {
  $(".scrollingMessage").each(function () {
    var e = $(this).html();
    $(this).html("<div><span>" + e + "</span></div>");
  });
}

function timeout(data) {
  setTimeout(function () {
    0 === time
      ? ($("#textInfo").text(
          data["Textslide"][0][readCookie("language")][0].textslide1
        ),
        time++)
      : 1 === time
      ? ($("#textInfo").text(
          data["Textslide"][0][readCookie("language")][0].textslide2
        ),
        time++)
      : 2 === time
      ? ($("#textInfo").text(
          data["Textslide"][0][readCookie("language")][0].textslide3
        ),
        time++)
      : 3 === time &&
        ($("#textInfo").text(
          data["Textslide"][0][readCookie("language")][0].textslide4
        ),
        (time = 0)),
      marqueelike(),
      setTimeout(function () {
        timeout(data);
      }, 1e3);
  }, 2500);
}
function dataTextSlide() {
  fetch(HOME(), { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      timeout(data);
    });
}

$(document).ready(function () {
    dataTextSlide()
});
