var swiper = new Swiper(".codepenSwiper", {
  
  slidesPerView: 1,
  spaceBetween: 50,

  grid: {
    rows: 2,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 650px
    650: {
      slidesPerView: 2,
    }
  }
});

var swiper2 = new Swiper(".designSwiper", {
  
  slidesPerView: 1,
  spaceBetween: 50,

  grid: {
    rows: 2,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

 // Responsive breakpoints
 breakpoints: {
    // when window width is >= 650px
    650: {
      slidesPerView: 2,
    },

    900: {
      // when window width is >= 900px
      slidesPerView: 3,
    },
  }
});