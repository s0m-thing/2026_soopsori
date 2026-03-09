console.clear();

// top-bar bg
$('.top-bar .top-bar__menu-box-1 > ul > li.block').hover(function(){
  $('header').addClass('active');
}, function() {
  $('header').removeClass('active');
});

// sec04 탭메뉴
$(document).ready(function () {
  let activeBestSwiper = null;
  const bestSwipers = [];

  // sec03 안의 swiper 각각 생성
  $('.sec03 .mySwiper-2').each(function (index) {
    const swiperEl = this;

    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      speed: 600,
      allowTouchMove: true,
      on: {
        init: function () {
          const $wrap = $(swiperEl).closest('.soopsori_banner');
          $wrap.find('.thumb').removeClass('current');
          $wrap.find('.thumb').eq(this.activeIndex).addClass('current');
        },
        slideChange: function () {
          const $wrap = $(swiperEl).closest('.soopsori_banner');
          $wrap.find('.thumb').removeClass('current');
          $wrap.find('.thumb').eq(this.activeIndex).addClass('current');
        }
      }
    });

    $(swiperEl).data('swiperInstance', swiper);
    bestSwipers.push(swiper);

    // 처음 보이는 current 탭의 swiper를 active로 저장
    if ($(swiperEl).closest('.best_con > ul > li').hasClass('current')) {
      activeBestSwiper = swiper;
    }
  });

  // 왼쪽 BEST 탭 클릭
  $('.sec03 .best_tab li').on('click', function (e) {
    e.preventDefault();

    const tabId = $(this).data('tab');

    $('.sec03 .best_tab li').removeClass('on');
    $(this).addClass('on');

    $('.sec03 .best_con > ul > li').removeClass('current');
    $('#' + tabId).addClass('current');

    // 현재 열린 탭 안의 swiper를 active로 변경
    activeBestSwiper = $('#' + tabId).find('.mySwiper-2').data('swiperInstance');
    if (activeBestSwiper) {
      activeBestSwiper.update();
    }
  });

  // 오른쪽 썸네일 클릭
  $('.sec03 .soopsori_banner_tab .thumb').on('click', function () {
    const index = $(this).data('index');
    const $banner = $(this).closest('.soopsori_banner');
    const swiper = $banner.find('.mySwiper-2').data('swiperInstance');

    $(this).siblings().removeClass('current');
    $(this).addClass('current');

    if (swiper) {
      swiper.slideTo(index);
    }
  });

  // 바깥 공통 prev / next 버튼
  $('.sec03 .slider-control .swiper-button-next').on('click', function () {
    if (activeBestSwiper) activeBestSwiper.slideNext();
  });

  $('.sec03 .slider-control .swiper-button-prev').on('click', function () {
    if (activeBestSwiper) activeBestSwiper.slidePrev();
  });
});

// swiper
// sec01 mySwiper-1
var swiper = new Swiper(".mySwiper-1", {
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


// sec03 mySwiper-2
const swipers = [];

$(".mySwiper-2").each(function (index, el) {
  swipers[index] = new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: { enabled: true },

    pagination: {
      el: ".sec03 .swiper-pagination",
      clickable: true
    },

    navigation: {
      nextEl: ".sec03 .swiper-button-next",
      prevEl: ".sec03 .swiper-button-prev"
    }
  });
});


// sec05 mySwiper-3
var swiper = new Swiper(".mySwiper-3", {
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
$(function () {

  // 1) 카테고리별 swiper 생성해서 저장
  const swipers = {
    "best-1": new Swiper(".mySwiper-2-1", {
      loop: false,
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      pagination: { el: ".swiper-pagination", clickable: true },
    }),
    "best-2": new Swiper(".mySwiper-2-2", {
      loop: false,
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      pagination: { el: ".swiper-pagination", clickable: true },
    }),
    // best-3~5도 만들면 여기에 추가
  };

  // 현재 활성 탭
  let activeTab = "best-1";

  // 2) 왼쪽 탭 클릭 → best_con의 해당 li 보이기
  $(".best_tab li").on("click", function (e) {
    e.preventDefault();

    const tabId = $(this).data("tab");
    activeTab = tabId;

    // 탭 UI
    $(".best_tab li").removeClass("on");
    $(this).addClass("on");

    // 콘텐츠 show/hide
    $(".best_con > ul > li").removeClass("current");
    $("#" + tabId).addClass("current");

    // 숨김→표시 전환 후 swiper 레이아웃 업데이트(중요)
    if (swipers[tabId]) {
      swipers[tabId].update();
      swipers[tabId].pagination.render();
      swipers[tabId].pagination.update();
    }
  });

  // 3) 오른쪽 썸네일 클릭 → 해당 카테고리 swiper의 해당 슬라이드로 이동
  $(".best_con").on("click", ".soopsori_banner_tab .thumb", function () {
    const idx = Number($(this).data("index"));

    // 썸네일 UI
    const $tabBox = $(this).closest(".soopsori_banner_tab");
    $tabBox.find(".thumb").removeClass("current");
    $(this).addClass("current");

    // 현재 활성 카테고리 swiper 이동
    if (swipers[activeTab]) {
      swipers[activeTab].slideTo(idx);
    }
  });

});

var swiper = new Swiper(".mySwiper-4", {
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
var swiper = new Swiper(".mySwiper-5", {
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

