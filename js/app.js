//header carousel
$(".header__banner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  arrows: false,
});
//feedback carousel
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
//vision accordion
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

// journey tab
$(document).ready(function () {
  var currentTab = 0;

  $(".journey__wrapper--tabs li").on("click", function () {
    $(".journey__wrapper--tabs li").removeClass("activeLeftToRight");
    $(".journey__wrapper--tabs li").removeClass("activeRightToLeft");
    $(".journey__wrapper--tabs li").removeClass("hiddenRightToLeft");
    $(".journey__wrapper--tabs li").removeClass("hiddenLeftToRight");
    let index = $(".journey__wrapper--tabs li").index(this);
    var id = $(this).attr("data-tab");
    $(".journey__wrapper--content--tab").removeClass("active");
    if (index > currentTab) {
      $(this).addClass("activeLeftToRight");
      $(".journey__wrapper--tabs li")
        .eq(currentTab)
        .addClass("hiddenLeftToRight");
    } else if (index < currentTab) {
      $(this).addClass("activeRightToLeft");
      $(".journey__wrapper--tabs li")
        .eq(currentTab)
        .addClass("hiddenRightToLeft");
    }

    $(id).addClass("active");
    currentTab = index;
  });
  $(".journey__wrapper--tabs li").first().addClass("activeLeftToRight");
  $(".journey__wrapper--content--tab").first().addClass("active");
});

//teacher carousel
$(".teacher__main--box").slick({
  prevArrow: `<span class="btn-arrow btn-prev"><img src="./images/arrow-left.svg"/></span>`,
  nextArrow: `<span class="btn-arrow btn-next"><img src="./images/arrow-right.svg"/></span>`,
  arrows: true,

  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});
