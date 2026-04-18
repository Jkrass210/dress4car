import { testWebP } from './module/testWebP.js';
import { initDropDownType1 } from './module/initDropDownType1.js';
import { DropdownType1 } from './module/DropdownType1.js';
import { initMobileMenu } from './module/initMobileMenu.js';
import { initSwiper } from './module/swiper.js';
import { initModal } from './module/initModal.js';
import { initFormValidation } from './module/initFormValidation.js';
import { initWorkDescPreview } from './module/initWorkDescPreview.js';
import { initTabsType5 } from './module/initTabsType5.js';
import { initScrollBox } from './module/initScrollBox.js';
import { initDetailCardSwiper } from './module/initDetailCardSwiper.js';
import { initCounter } from './module/initCounter.js';
import { initTabs1 } from './module/initTabs1.js';
import { initTableScroll } from './module/initTableScroll.js';

//import { initExpandableText } from './module/initExpandableText.js';

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
    console.log("выполнился webp")
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

if (document.querySelectorAll('.drop-down-tipe-1').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initDropDownType1();
    });
  })();
}

if (document.querySelectorAll('.header__bottom').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initMobileMenu();
    });
  })();
}

if (document.querySelectorAll('.swiper').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initSwiper();
    });
  })();
}

if (document.querySelectorAll('.modal').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initModal();
    });
  })();
}

if (document.querySelectorAll('.js-form').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initFormValidation();
    });
  })();
}

if (document.querySelectorAll('.drop-down-type-1').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      DropdownType1();
    });
  })();
}

if (document.querySelectorAll('.js-desc-preview').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initWorkDescPreview();
    });
  })();
}

if (document.querySelectorAll('.js-tabs-type-5').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initTabsType5();
    });
  })();
}

if (document.querySelectorAll('.js-scroll-box').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollBox();
    });
  })();
}

if (document.querySelectorAll('.detail-card__box-swiper').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initDetailCardSwiper();
    });
  })();
}

if (document.querySelectorAll('.counter').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initCounter();
    });
  })();
}

if (document.querySelectorAll('.js-tabs-1').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initTabs1();
    });
  })();
}

if (document.querySelectorAll('.js-box-table').length) {
  (function () {
    document.addEventListener('DOMContentLoaded', () => {
      initTableScroll();
    });
  })();
}