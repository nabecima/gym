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
      if (body.innerWidth() < 1000) {
        body.toggleClass("is-active");
      }
    });
    navItem.on("click", function () {
      burger.removeClass("is-active");
      drawer.toggleClass("is-active");
      if (body.innerWidth() < 1000) {
        body.toggleClass("is-active");
      }
    });
  }

  $(window).on("resize", function () {
    const body = $("#body");

    if (body.innerWidth() > 1001 && body.hasClass("is-active")) {
      body.removeClass("is-active");
    }
  });
});
