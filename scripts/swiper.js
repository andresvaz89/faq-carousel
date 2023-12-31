const swiper = new Swiper('.swiper', {
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints:{
        1301:{
            direction: 'vertical',
            loop: true,
            slidesPerView: 3,
        },
        769:{
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4,
        },
        300:{
            direction: 'horizontal',
            loop: true,
            slidesPerView: 3,
        }
    }
  });

