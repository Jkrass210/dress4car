export function initDetailCardSwiper() {
  const containers = document.querySelectorAll('.detail-card__box-swiper');

  if (!containers.length) return;

  containers.forEach(function (container) {

    const mainEl = container.querySelector('.swiper-main-detail');
    const previewEl = container.querySelector('.swiper-preview-detail');

    if (!mainEl || !previewEl) return;

    const prevBtn = container.querySelector('.--prev');
    const nextBtn = container.querySelector('.--next');

    // --- PREVIEW SLIDER ---
    const previewSwiper = new Swiper(previewEl, {
      slidesPerView: 4,
      spaceBetween: 12,
      watchSlidesProgress: true,
      slideToClickedSlide: true,

      /*breakpoints: {
        992: {
          spaceBetween: 12,
        },
      },*/

      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
    });

    // --- MAIN SLIDER ---
    new Swiper(mainEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 600,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },

      thumbs: {
        swiper: previewSwiper,
      },
    });

  });
}