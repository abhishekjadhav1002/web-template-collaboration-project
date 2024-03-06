let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active');
}


window.onscroll = () => {
    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('active');
    }
    else {
        document.querySelector('header').classList.remove('active');
    }
}

let modechanger = document.querySelector('#mode-changer');

modechanger.onclick = () => {
    modechanger.classList.toggle('fa-sun');
    if (modechanger.classList.contains('fa-sun')) {
        document.querySelector('body').classList.add('active');
    }
    else {
        document.querySelector('body').classList.remove('active');
    }
}
var swiper = new Swiper(".product-slider", {
    slidesPerView:3,
    loop:true,
    spaceBetween:10,
    autoplay:{
        delay: 4000,
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
var swiper = new Swiper(".review-slider", {
    slidesPerView:3,
    loop:true,
    spaceBetween:10,
    autoplay:{
        delay: 4000,
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