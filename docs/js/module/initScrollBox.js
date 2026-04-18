export function initScrollBox() {
  const scrollBox = document.querySelector('.js-scroll-box');

  // Проверка существования элемента
  if (!scrollBox) return;

  const updateScrollState = () => {
    const scrollTop = scrollBox.scrollTop;
    const scrollHeight = scrollBox.scrollHeight;
    const clientHeight = scrollBox.clientHeight;

    // В начале
    if (scrollTop <= 0) {
      scrollBox.classList.add('scroll-start');
    } else {
      scrollBox.classList.remove('scroll-start');
    }

    // В конце
    if (scrollTop + clientHeight >= scrollHeight) {
      scrollBox.classList.add('scroll-end');
    } else {
      scrollBox.classList.remove('scroll-end');
    }
  };

  // Первичная проверка состояния
  updateScrollState();

  // Событие скролла
  scrollBox.addEventListener('scroll', updateScrollState, { passive: true });
}