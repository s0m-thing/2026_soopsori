console.clear();

// header top-bar bg
$('.top-bar .top-bar__menu-box-1 > ul > li.block').hover(
  function () {
    $('header').addClass('active');
  },
  function () {
    $('header').removeClass('active');
  }
);


// sec03 swiper + tab

$(document).ready(function () {
  let activeBestSwiper = null;



  // sec03 안의 swiper 각각 1번만 생성
  $(".sec03 .mySwiper-2").each(function () {
    const swiperEl = this;

    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 600,
      allowTouchMove: true,
      keyboard: {
        enabled: true
      },
      navigation: {
        nextEl: ".sec03 .slider-control > .swiper-button-next",
        prevEl: ".sec03 .slider-control > .swiper-button-prev"
      },
      pagination: {
        el: ".sec03 .slider-control .swiper-pagination",
        clickable: true

      },
      on: {
        init: function () {
          const $wrap = $(swiperEl).closest(".soopsori_banner");
          $wrap.find(".thumb").removeClass("current");
          $wrap.find(".thumb").eq(this.activeIndex).addClass("current");

          // 처음 current로 보이는 탭의 swiper 저장

          if ($(swiperEl).closest(".best_con > ul > li").hasClass("current")) {
            activeBestSwiper = this;
          }
        },

        slideChange: function () {
          const $wrap = $(swiperEl).closest(".soopsori_banner");

          $wrap.find(".thumb").removeClass("current");
          $wrap.find(".thumb").eq(this.activeIndex).addClass("current");
        }
      }
    });

    $(swiperEl).data("swiperInstance", swiper);
  });

  // 왼쪽 BEST 탭 클릭
  $(".sec03 .best_tab li").on("click", function (e) {
    e.preventDefault();
    const tabId = $(this).data("tab");

    $(".sec03 .best_tab li").removeClass("on");
    $(this).addClass("on");
    $(".sec03 .best_con > ul > li").removeClass("current");
    $("#" + tabId).addClass("current");

    activeBestSwiper = $("#" + tabId)
      .find(".mySwiper-2")
      .data("swiperInstance");

    if (activeBestSwiper) {
      activeBestSwiper.update();

      // pagination 다시 갱신
      if (activeBestSwiper.pagination) {
        activeBestSwiper.pagination.render();
        activeBestSwiper.pagination.update();
      }
    }
  });

  // 오른쪽 썸네일 클릭
  $(".sec03 .soopsori_banner_tab .thumb").on("click", function () {
    const index = $(this).data("index");
    const $banner = $(this).closest(".soopsori_banner");
    const swiper = $banner.find(".mySwiper-2").data("swiperInstance");

    $(this).siblings().removeClass("current");
    $(this).addClass("current");

    if (swiper) {
      swiper.slideTo(index);
    }
  });

  // sec04 tab
  $('.sec04 .goods_tab_tit .tab_link').on('click', function (e) {
    e.preventDefault();
    const tabId = $(this).data('tab');

    $('.sec04 .goods_tab_tit .tab_link').removeClass('current');
    $(this).addClass('current');

    $('.sec04 .goods_tab_con .goods_tab_box').removeClass('current');
    $('#' + tabId).addClass('current');
  });
});


// sec01 mySwiper-1
var swiper1 = new Swiper(".mySwiper-1", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".sec01 > .slider-control > .swiper-scrollbar",
  },
  pagination: {
    el: ".sec01 > .slider-control > .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".sec01 > .slider-control > .swiper-button-next",
    prevEl: ".sec01 > .slider-control > .swiper-button-prev"
  }
});


// sec05 mySwiper-3
var swiper3 = new Swiper(".mySwiper-3", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".sec05 > .slider-control > .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".sec05 > .slider-control > .swiper-button-next",
    prevEl: ".sec05 > .slider-control > .swiper-button-prev",
  },
});


// sec06 mySwiper-4
var swiper4 = new Swiper(".mySwiper-4", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: ".sec06 > .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".sec06 > .swiper-button-next",
    prevEl: ".sec06 > .swiper-button-prev",
  },
});


// sec08 mySwiper-5
var swiper5 = new Swiper(".mySwiper-5", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".visit-slide .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".visit-slide .swiper-button-next",
    prevEl: ".visit-slide .swiper-button-prev",
  },
});