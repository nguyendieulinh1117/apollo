$(".header__banner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  arrows: false,
});

$(".feedback__main--box").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: `<span class="btn-arrow btn-prev"><img src="./images/arrow-left.svg"/></span>`,
  nextArrow: `<span class="btn-arrow btn-next"><img src="./images/arrow-right.svg"/></span>`,
  infinite: true,
  fade: true,
  asNavFor: ".feedback__main--nav",
});

$(".feedback__main--nav").slick({
  slidesToShow: 5,
  centerMode: true,
  focusOnSelect: true,
  asNavFor: ".feedback__main--box",
  arrows: false,
  dots: false,
  centerPadding: 0,
});

$(document).ready(function () {
  if ($(".vision__main--left--item").length > 0) {
    $(".vision__main--left--item .vision__title").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").next(".vision__content").slideUp();
      } else {
        $(".vision__main--left--item .vision__title").removeClass("active");
        $(".vision__main--left--item .vision__content").slideUp();
        $(this).toggleClass("active").next(".vision__content").slideToggle();
      }
      $(".vision__main--right .vision__main--right--box").removeClass("active");
      $(
        `.vision__main--right .vision__main--right--box:eq(${$(this)
          .parent()
          .index()})`
      ).addClass("active");
    });
    $(".vision__main--left--item .vision__title").first().trigger("click");
    $(".vision__main--right .vision__main--right--box")
      .first()
      .addClass("active");
  }
});
