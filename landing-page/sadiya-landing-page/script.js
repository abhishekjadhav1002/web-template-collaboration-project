const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

var swiper = new Swiper(".product-slider", {
    slidesPerView:3,
    loop:true,
    spaceBetween:10,
    autoplay:{
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        550:{
            slidesPerView: 2,
        },
        800:{
            slidesPerView: 3,
        },
        1000:{
            slidesPerView: 3,
        },
    },
  });
