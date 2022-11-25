// smooth scroll
$("#aboutNav").click(function (e) {
  $("html", "body").animate({
    scrollTop: $("#about").offset().top,
  });
});

$("#priceNav").click(function (e) {
  $("html", "body").animate({
    scrollTop: $("#price").offset().top,
  });
});

$("#serviceNav").click(function (e) {
  $("html", "body").animate({
    scrollTop: $("#service").offset().top,
  });
});

$("#contactNav").click(function (e) {
  $("html", "body").animate({
    scrollTop: $("#contact").offset().top,
  });
});

// display button on scroll
let goUp = document.getElementById("#btn-goTop");

// read if the window on scroll
window.onscroll = function () {
  scrollWindow();
};

function scrollWindow() {
  if ($("body").scrollTop > 30 || document.documentElement.scrollTop > 30) {
    $("#btn-goTop").css("display", "block");
  } else {
    $("#btn-goTop").css("display", "none");
  }
}

// function back to top
function goUpContent() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// validation before submit form
function confirmSubmit() {
  let confirmSubmit = confirm("Anda yakin mengirimkan pesan ini?");
  if (confirmSubmit) {
    alert("Pesan anda telah terkirim");
  } else {
    alert("Pesan anda batal dikirim");
  }
}
