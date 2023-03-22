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