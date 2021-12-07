$(function () {
  drawer();

  function drawer() {
    const burger = $("#burger");
    const drawer = $("#drawer");
    const body = $("#body");
    const navItem = $(".l-header__item");
    burger.on("click", function () {
      $(this).toggleClass("is-active");
      drawer.toggleClass("is-active");
      body.toggleClass("is-active");
    });
    navItem.on("click", function () {
      burger.removeClass("is-active");
      drawer.toggleClass("is-active");
      body.toggleClass("is-active"); 
    });
  }
});
