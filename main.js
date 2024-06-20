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
    new Swiper(".top-selling", {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            768: {
                centeredSlides: false,
            },
        },
        navigation: {
            nextEl: ".swiper-top-selling-button-next",
            prevEl: ".swiper-top-selling-button-prev",
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
    var swiperThumbs = new Swiper(".product-detail", {
        spaceBetween: 30,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
    new Swiper(".product-detail2", {
        spaceBetween: 10,
        thumbs: {
          swiper: swiperThumbs,
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
    new Swiper('.mix-match', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-mix-match-pagination',
        },
    });
})
        let counterValue = 1;

        function increaseValue() {
            counterValue++;
            updateCounter();
        }

        function decreaseValue() {
            if (counterValue > 1) {
                counterValue--;
                updateCounter();
            }
        }

        function updateCounter() {
            document.getElementById('counter').innerText = counterValue;
            document.getElementById('decrease').disabled = counterValue === 1;
        }

        // Initialize the counter display
        updateCounter();

        const minRange = document.getElementById('min-range');
const maxRange = document.getElementById('max-range');
const minValue = document.getElementById('min-value');
const maxValue = document.getElementById('max-value');

function setSliderValues() {
    const min = parseInt(minRange.value);
    const max = parseInt(maxRange.value);

    if (min > max) {
        const temp = minRange.value;
        minRange.value = maxRange.value;
        maxRange.value = temp;
    }

    minValue.textContent = `$${parseFloat(minRange.value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;

    maxValue.textContent = `$${parseFloat(maxRange.value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}

// Gọi hàm setSliderValues() khi thanh kéo thay đổi giá trị
minRange.addEventListener('input', setSliderValues);
maxRange.addEventListener('input', setSliderValues);

// Gọi hàm setSliderValues() khi trang được tải
setSliderValues();
