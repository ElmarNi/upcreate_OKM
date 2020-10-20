$("header .menu-bar a").click(function (e) {
  e.preventDefault();
  $("header nav").addClass("active");
});