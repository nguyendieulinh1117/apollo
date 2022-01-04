$(".header__banner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7230,
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
