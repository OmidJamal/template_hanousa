
// for scroll Back to Top
$(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
        console.log("hi")
        $('#topBtn a').css({
            'bottom': "20px"
        })
    } else {
        $('#topBtn a').css({
            'bottom': '-100px'
        });
    }
});

$(document).ready(function () {
    $('#topBtn a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        });
    });
});


$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 700
    })
});
//---------------------------------------------

// reveal js
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");

        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
//-----------------------------------------------------------

// navigation Lisiner in responsive screen 
var barBtn = document.getElementById('barBtn');
barBtn.addEventListener('click', function showNavBar() {
    let navUl = document.getElementById('navUl');
    // console.log(navUl);
    if (navUl.style.height == "309px") {
        navUl.style.height = "0px";
    } else {
        navUl.style.height = "309px";
        navUl.style.transition = "height .5s ease";
    }

});
//------------------------------------------------


// Search Box evant is here show and hide 
var s_btn = document.getElementById('s-btn');
s_btn.addEventListener('click', function (e) {
    e.preventDefault();
    let search_box = document.getElementById('search-box');
    search_box.style.height = "100px";
});

var close_btn = document.getElementById('clse-btn');
close_btn.addEventListener('click', function () {
    let search_box = document.getElementById('search-box');
    search_box.style.height = "0px";
})

//----------------------------------------------------------------

var slides = document.querySelectorAll(".slideItmes");
var btns = document.querySelectorAll('.btn-n');
var h1 = document.querySelectorAll("#h-t");
var mor_info = document.querySelectorAll('.more-info');
var contact_us = document.querySelectorAll('.contact-us');
let currentSlide = 1;

var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });

        h1.forEach((animate) => {
            animate.classList.remove('animate__animated', 'animate__fadeInDownBig')
        });
        mor_info.forEach((animate) => {
            animate.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-1s');
        });
        contact_us.forEach((animate) => {
            animate.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');
        });
    });


    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    h1[manual].classList.add('animate__animated', 'animate__fadeInDownBig',);
    mor_info[manual].classList.add('animate__animated', 'animate__fadeInDown', 'animate__delay-1s');
    contact_us[manual].classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// auto play slider code\
var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let animate__animated = document.getElementsByClassName('animate__animated');
    let animate__fadeInDownBig = document.getElementsByClassName('animate__fadeInDownBig');
    let animate__fadeInDown = document.getElementsByClassName('animate__fadeInDown');
    let animate__fadeInLeft = document.getElementsByClassName('animate__fadeInLeft');
    let animate__delay_1s = document.getElementsByClassName('animate__delay-1s');
    let i = 1;
    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');

            });
            [...animate__animated].forEach((activeted) => {
                activeted.classList.remove('animate__animated');
            });
            [...animate__fadeInDownBig].forEach((ani_fade) => {
                ani_fade.classList.remove('animate__fadeInDownBig');
            });
            [...animate__fadeInDown].forEach((ani_fade) => {
                ani_fade.classList.remove('animate__fadeInDown');
            });
            [...animate__fadeInLeft].forEach((ani_fade) => {
                ani_fade.classList.remove('animate__fadeInLeft');
            });
            [...animate__delay_1s].forEach((ani_fade) => {
                ani_fade.classList.remove('animate__delay-1s');
            });




            slides[i].classList.add('active');
            btns[i].classList.add('active');
            h1[i].classList.add('animate__animated', 'animate__fadeInDownBig');
            mor_info[i].classList.add('animate__animated', 'animate__fadeInDown', 'animate__delay-1s');
            contact_us[i].classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();
//---------------------------------------------------------



var swiper = new Swiper(".cerSwiper", {
    slidesPerView: 4,
    spaceBetween: 150,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        500: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 150,
        }
    },
});

var swiper = new Swiper(".dentistSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      300:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1400:{
        slidesPerView: 4,
        spaceBetween:30,
      }
    },
  });

  var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992:{
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400:{
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
  });

  var swiper = new Swiper(".clientSwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });