// window.addEventListener("scroll", function () {
//   console.log("hello");
// });

// window.addEventListener("load",function(){

// })
// window.addEventListener("load", function () {
//   $(".loading").fadeOut(1000, function () {
//     $("body").css("overflow", "visible");
//   });
// });

$(document).ready(function () {
  const topSection = $("#about").offset().top;
  $(window).scroll(function () {
    console.log("hello");
    if ($(window).scrollTop() > topSection) {
      $("nav").addClass("bg-light");
      $("nav .nav-link").css("color", "#333");
      $(".scroll-up").fadeIn(500).css("display", "flex");
    } else {
      $("nav").removeClass("bg-light");
      $("nav .nav-link").css("color", "white");
      $(".scroll-up").fadeOut(500);
    }
  });

  $(".scroll-up").click(function () {
    // $(window).scrollTop(0);
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $('.nav-link[href^="#"]').click(function () {
    const link = $(this).attr("href");
    const heightTop = $(link).offset().top;
    $("html, body").animate({ scrollTop: heightTop }, 500);
  });
  $(".loading").fadeOut(1000, function () {
    $("body").css("overflow", "visible");
  });

  $(".coloring-box span").eq(0).css("background-color", "rgba(255,0,0)");
  $(".coloring-box span").eq(1).css("background-color", "rgba(0,255,0)");
  $(".coloring-box span").eq(2).css("background-color", "rgba(0,0,255)");
  $(".coloring-box span").eq(3).css("background-color", "rgba(150,150,150)");
  $(".coloring-box span").eq(4).css("background-color", "rgba(200,0,100)");

  $(".coloring-box span").click(function () {
    const color = $(this).css("background-color");
    $("h2,h1").css("color", color);
  });

  const boxWidth = $(".coloring-box").outerWidth();
  $(".spinner").click(function () {
    if ($(".coloring-box").css("left") == "0px") {
      $(".coloring-box").animate({ left: -boxWidth }, 1000);
    } else {
      $(".coloring-box").animate({ left: 0 }, 1000);
    }
  });
});
