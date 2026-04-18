export function initSwiper() {
  // Общие параметры для всех слайдеров
  const commonOptions = {};

  // Инициализация всех слайдеров с базовыми параметрами
  const sliders = document.querySelectorAll('.swiper');

  const swiperInstances = {};

  sliders.forEach((slider) => {
    // Проверка типа элемента
    if (slider instanceof HTMLElement) {
      // Уникальные параметры для каждого слайдера через класс
      let uniqueOptions = { ...commonOptions };

      if (slider.classList.contains('swiper-hero')) {

        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: 1,
          //observer: true,
          //observeParents: true,
          speed: 600,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          navigation: {
            nextEl: '.hero .swiper-btn-type-1.--next',
            prevEl: '.hero .swiper-btn-type-1.--prev',
          },
          pagination: {
            el: '.swiper-hero-pagination',
            clickable: true,
          },
        };
      }

      if (slider.classList.contains('swiper-products')) {
        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: 2,
          spaceBetween: 12,
          //observer: true,
          //observeParents: true,
          breakpoints: {
            800: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            }
          },
          navigation: {
            nextEl: slider.querySelector('.swiper-btn-type-1.--next'),
            prevEl: slider.querySelector('.swiper-btn-type-1.--prev'),
          },
        }
      }

      if (slider.classList.contains('swiper-card-products')) {
        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: 1,
          observer: true,
          observeParents: true,
          speed: 600,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },

          pagination: {
            el: '.swiper-card-products-pagination',
            clickable: true,
          },

          breakpoints: {
            1000: {
              allowTouchMove: false,
            }
          },

          on: {
            init: function () {

              const bullets = this.pagination.el.querySelectorAll('.swiper-pagination-bullet');

              bullets.forEach((bullet, index) => {
                bullet.addEventListener('mouseenter', () => {
                  this.slideTo(index);
                });
              });

            }
          }
        }
      }

      if (slider.classList.contains('swiper-reviews')) {
        uniqueOptions = {
          ...uniqueOptions,
          //loop: true,
          slidesPerView: 1,
          spaceBetween: 16,
          //observer: true,
          //observeParents: true,
          slideToClickedSlide: true,
          watchSlidesProgress: true,
          breakpoints: {
            750: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 24,
              //centeredSlides: true,
            }
          },
          navigation: {
            nextEl: slider.querySelector('.swiper-btn-type-1.--next'),
            prevEl: slider.querySelector('.swiper-btn-type-1.--prev'),
          },
        }
      }

      if (slider.classList.contains('swiper-modal-reviews')) {
        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: 1,
          observer: true,
          observeParents: true,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },

          navigation: {
            nextEl: slider.querySelector('.--next'),
            prevEl: slider.querySelector('.--prev'),
          },

          pagination: {
            el: slider.querySelector('.swiper-modal-reviews-pagination'),
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
              return `
                <span class="${currentClass}"></span>
                <span class="separator">из</span>
                <span class="${totalClass}"></span>
              `;
            },
          },
        }
      }

      if (slider.classList.contains('swiper-gallery-preview')) {
        uniqueOptions = {
          ...uniqueOptions,
          grabCursor: true,
          //loop: true,
          slidesPerView: 1,
          spaceBetween: 16,
          //observer: true,
          //observeParents: true,
          slideToClickedSlide: true,
          watchSlidesProgress: true,
          breakpoints: {
            750: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 24,
              //centeredSlides: true,
            }
          },

        }
      }

      if (slider.classList.contains('swiper-gallery')) {
        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: 1,
          //loop: true,
          observer: true,
          observeParents: true,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          allowTouchMove: false, // отключает свайп
          navigation: {
            nextEl: slider.querySelector('.swiper-gallery__swiper-nav .--next'),
            prevEl: slider.querySelector('.swiper-gallery__swiper-nav .--prev'),
          },
        }
      }

      if (slider.classList.contains('swiper-choice')) {
        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: 2.1,
          spaceBetween: 12,
          breakpoints: {
            500: {
              slidesPerView: 3,
            },
            750: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: 5,
            }
          },
          //loop: true,
          observer: true,
          observeParents: true,

          navigation: {
            nextEl: slider.querySelector('.--next'),
            prevEl: slider.querySelector('.--prev'),
          },
        }
      }

      if (slider.classList.contains('swiper-gallery-item')) {
        uniqueOptions = {
          ...uniqueOptions,
          slidesPerView: 1,
          //loop: true,
          observer: true,
          observeParents: true,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          navigation: {
            nextEl: slider.querySelector('.--next'),
            prevEl: slider.querySelector('.--prev'),
          },
        }
      }

      // Инициализируем слайдер с уникальными параметрами
      const swiper = new Swiper(slider, uniqueOptions);

      if (slider.classList.contains('swiper-reviews')) {
        swiperInstances.reviewsPreview = swiper;
      }

      if (slider.classList.contains('swiper-modal-reviews')) {
        swiperInstances.reviewsModal = swiper;
      }

      if (slider.classList.contains('swiper-gallery-preview')) {
        swiperInstances.galleryPreview = swiper;
      }

      if (slider.classList.contains('swiper-gallery')) {
        swiperInstances.galleryMain = swiper;
      }
    }


  });

  // связываем
  if (swiperInstances.reviewsPreview && swiperInstances.reviewsModal) {
    swiperInstances.reviewsPreview.on('click', function (swiper) {

      const index = swiper.clickedIndex;

      if (index !== undefined) {
        swiperInstances.reviewsModal.slideTo(index);
      }

    });
  }

  // синхронизация gallery
  if (swiperInstances.galleryPreview && swiperInstances.galleryMain) {
    swiperInstances.galleryPreview.on('click', function (swiper) {

      const index = swiper.clickedIndex;

      if (index !== undefined) {
        swiperInstances.galleryMain.slideTo(index);
      }

    });
  }
}