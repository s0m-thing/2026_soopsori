console.clear();

// top-bar bg
$('.top-bar .top-bar__menu-box-1 > ul > li.block').hover(function(){
  $('header').addClass('active');
}, function() {
  $('header').removeClass('active');
});



// $('.goods-list-con .goods_tab_con ul .item_con a').hover(function(){
//   let $this = $(this);

//   $this.parent().sibling().addClass('active');
// }, function() {
//   $this.parent().sibling().removeClass('active');
// });


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
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: ".sec03 > .swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".sec03 > .swiper-button-next",
        prevEl: ".sec03 > .swiper-button-prev"
    }
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

