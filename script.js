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
  const swipers = {};

  // 1. Swiper 초기화
  $('.sec03 .mySwiper-2').each(function () {
    const $this = $(this);
    const id = $this.closest('li').attr('id');

    swipers[id] = new Swiper(this, {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 600,
      observer: true,
      observeParents: true,
      // 중요: 처음에 모든 스와이퍼를 활성화하되, 
      // 공유 컨트롤러와의 충돌을 방지하기 위해 나중에 하나만 남깁니다.
      navigation: {
        nextEl: ".sec03 .slider-control .swiper-button-next",
        prevEl: ".sec03 .slider-control .swiper-button-prev"
      },
      pagination: {
        el: '.sec03 .slider-control .swiper-pagination',
        clickable: true
      },
      on: {
        init: function () {
          updateThumb(this);
        },
        slideChange: function () {
          updateThumb(this);
        }
      }
    });
  });

  function updateThumb(swiperInst) {
    const $wrap = $(swiperInst.el).closest('.soopsori_banner');
    $wrap.find('.thumb').removeClass('current');
    $wrap.find('.thumb').eq(swiperInst.activeIndex).addClass('current');
  }

  // 2. [필살기] 활성 탭만 컨트롤러 독점시키기
  function activateSwiper(tabId) {
    // 모든 스와이퍼의 컨트롤 기능을 잠시 끔 (충돌 방지)
    Object.keys(swipers).forEach(key => {
      swipers[key].disable(); 
      $(swipers[key].pagination.el).hide(); // 일단 페이지네이션 숨김
    });

    // 선택된 탭의 스와이퍼만 깨우기
    const activeSwiper = swipers[tabId];
    if (activeSwiper) {
      activeSwiper.enable(); // 기능 활성화
      $(activeSwiper.pagination.el).show(); // 페이지네이션 보이기
      activeSwiper.update(); 
      activeSwiper.pagination.render();
      activeSwiper.pagination.update();
    }
  }

  // 초기 실행 (3번 탭 활성화)
  const initialTab = $('.sec03 .best_tab li.on').data('tab') || 'best-3';
  $('.sec03 .best_con > ul > li').removeClass('current');
  $('#' + initialTab).addClass('current');
  
  setTimeout(function() {
    activateSwiper(initialTab);
  }, 300); // CSS transition 시간을 고려해 약간 넉넉히

  // 3. 탭 클릭 이벤트
  $('.sec03 .best_tab li').on('click', function (e) {
    e.preventDefault();
    const tabId = $(this).data('tab');

    $('.sec03 .best_tab li').removeClass('on');
    $(this).addClass('on');

    $('.sec03 .best_con > ul > li').removeClass('current');
    $('#' + tabId).addClass('current');

    activateSwiper(tabId);
  });

  // 썸네일 클릭 (기존과 동일)
  $('.sec03 .soopsori_banner_tab .thumb').on('click', function () {
    const index = $(this).data('index');
    const tabId = $(this).closest('li[id]').attr('id');
    if (swipers[tabId]) swipers[tabId].slideTo(index);
  });
});

  // 5. sec04 탭 (ONLY FOR YOU)
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