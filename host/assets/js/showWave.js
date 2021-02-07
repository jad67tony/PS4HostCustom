function showWave(e, t) {
    return (
      '<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs><g class="parallax">' +
      `<use id="${e}0" class="${t}" style="opacity:${localStorage.getItem(
        `${e}0opac`
      )}" xlink:href="#gentle-wave" x="48" y="0" fill=` +
      localStorage.getItem("colorWave0") +
      " />" +
      `<use id="${e}1" class="${t}" style="opacity:${localStorage.getItem(
        `${e}1opac`
      )}" xlink:href="#gentle-wave" x="48" y="3" fill=` +
      localStorage.getItem("colorWave1") +
      " />" +
      `<use id="${e}2" class="${t}" style="opacity:${localStorage.getItem(
        `${e}2opac`
      )}" xlink:href="#gentle-wave" x="48" y="5" fill=` +
      localStorage.getItem("colorWave2") +
      " />" +
      `<use id="${e}3" class="${t}" style="opacity:${localStorage.getItem(
        `${e}3opac`
      )}" xlink:href="#gentle-wave" x="48" y="7" fill=` +
      localStorage.getItem("colorWave3") +
      " /></g></svg>"
    );
  }