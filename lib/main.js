$(document).ready(function () {
  jQuery.fn.clickOutside = function (callback) {
    var $me = this;
    $(document).mouseup(function (e) {
      if (!$me.is(e.target) && $me.has(e.target).length === 0) {
        callback.apply($me);
      }
    });
  };

  $("#large-screens .menu-bar a").click(function (e) {
    e.preventDefault();
    $("#large-screens nav").toggleClass("active");
    $(this).find("img").first().toggleClass("d-none");
    $(this).find("img").last().toggleClass("d-none");
    $("#large-screens .overlay").toggleClass("active");
  });
  $("#small-screens .menu-bar a").click(function (e) {
    e.preventDefault();
    $("#small-screens nav").slideToggle("fast");
    $(this).find("img").first().toggleClass("d-none");
    $(this).find("img").last().toggleClass("d-none");
  });
  $('#large-screens').clickOutside(function () {
    $("#large-screens .overlay").removeClass("active");
    $("#large-screens nav").removeClass("active");
    $("#large-screens .menu-bar a").find("img").first().removeClass("d-none");
    $("#large-screens .menu-bar a").find("img").last().addClass("d-none");
  });
  $('#small-screens').clickOutside(function () {
    $("#small-screens nav").slideUp("fast");
    $("#small-screens .menu-bar a").find("img").first().removeClass("d-none");
    $("#small-screens .menu-bar a").find("img").last().addClass("d-none");
  });
  $("#mainPageContent .owl-carousel").owlCarousel({
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      680: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});