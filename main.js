$(document).ready(function(){
    new Swiper(".best-seller", {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            768: {
                centeredSlides: false,
            },
        },
        navigation: {
            nextEl: ".swiper-best-seller-button-next",
            prevEl: ".swiper-best-seller-button-prev",
          },
    });
    new Swiper(".testimonials", {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            768: {
                centeredSlides: false,
            },
        },
        navigation: {
            nextEl: ".swiper-testimonials-button-next",
            prevEl: ".swiper-testimonials-button-prev",
          },
    });
    $(".my-rating").starRating({
        totalStars: 5,
        starShape: 'rounded',
        hoverColor: '#F2BC1B',
        activeColor: '#F2BC1B',
        strokeWidth: 10,
        starSize: 16
    });
    $(".rating-review").starRating({
        totalStars: 5,
        starShape: 'rounded',
        hoverColor: '#F2BC1B',
        activeColor: '#F2BC1B',
        strokeWidth: 10,
        starSize: 18
    });
})