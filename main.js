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
        spaceBetween: 10,
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
      var swiperThumbs2 = new Swiper(".product-zoom", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
    new Swiper(".product-zoom2", {
        spaceBetween: 10,
        thumbs: {
          swiper: swiperThumbs2,
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

    //check-cart
    const cartIcon = document.querySelector('.cart-icon');
    const cartEmpty = document.querySelector('.cart-empty');
    const cartCount = document.querySelector('.cart-count');
    const count = parseInt(cartCount.textContent, 10);
    const cart = document.querySelector('.cart');
    const cartItems = document.querySelector('.cart-items');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeBtn = document.querySelector('.close-btn');

    function toggleCartState() {
    if (count > 0) {
            cartEmpty.style.display = 'none';
            cartItems.style.display = 'block';
        } else {
            cartEmpty.style.display = 'block';
            cartItems.style.display = 'none';
        }
    }

    function openCart() {
        cart.classList.toggle('open');
        cartOverlay.classList.toggle('show');
        document.body.classList.add('lock-scroll'); // Khóa cuộn trang
    }
    function closeCart() {
        cart.classList.remove('open');
        cartOverlay.classList.remove('show');
        document.body.classList.remove('lock-scroll'); // Mở khóa cuộn trang
    }
    cartIcon.addEventListener('click', openCart);
    cartOverlay.addEventListener('click', closeCart);
    closeBtn.addEventListener('click', closeCart);
    
    toggleCartState();
})

    const minRange = document.getElementById('min-range');
    const maxRange = document.getElementById('max-range');
    const minValue = document.getElementById('min-value');
    const maxValue = document.getElementById('max-value');

    // function setSliderValues() {
    // const min = parseInt(minRange.value);
    // const max = parseInt(maxRange.value);

    // if (min > max) {
    //     const temp = minRange.value;
    //     minRange.value = maxRange.value;
    //     maxRange.value = temp;
    // }

    // minValue.textContent = `$${parseFloat(minRange.value).toLocaleString('en-US', {
    //     minimumFractionDigits: 2,
    //     maximumFractionDigits: 2
    // })}`;

    // maxValue.textContent = `$${parseFloat(maxRange.value).toLocaleString('en-US', {
    //     minimumFractionDigits: 2,
    //     maximumFractionDigits: 2
    // })}`;
    // }

    // // Gọi hàm setSliderValues() khi thanh kéo thay đổi giá trị
    // minRange.addEventListener('input', setSliderValues);
    // maxRange.addEventListener('input', setSliderValues);

    // Gọi hàm setSliderValues() khi trang được tải
    // setSliderValues();
    

