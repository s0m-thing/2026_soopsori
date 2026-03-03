console.clear();

// top-bar bg
$('.top-bar .top-bar__menu-box-1 > ul > li.block').hover(function(){
  $('header').addClass('active');
}, function() {
  $('header').removeClass('active');
});

// sec04 탭메뉴
$(document).ready(function(){
	
  //버튼을 눌렀을때 동작을 하시오!
	$('goods-list-con .goots_tab_tit .tab_link').click(function(){
		var tab_id = $(this).attr('data-tab');

    //어떠한동작? ul.tabs에 li와 .tab-content를 초기화 하시오!!
		$('goods-list-con .goods_tab_con > .goods_tab_box').removeClass('current');
		$('.goods_tab_box').removeClass('current');
    
    //ul.tabs의 li의 css를 활성화 하고
    //data-tab 값을 확인해서 탭의 내용을 띄워줌
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

}) 

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

