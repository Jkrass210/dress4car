export function initTableScroll() {
  const boxes = document.querySelectorAll('.js-box-table');

  // если нет ни одного элемента — выходим
  if (!boxes.length) return;

  boxes.forEach((box) => {
    // функция обновления для конкретного элемента
    const updateScrollState = () => {
      const scrollLeft = box.scrollLeft;
      const maxScrollLeft = box.scrollWidth - box.clientWidth;

      // если скролла нет
      if (maxScrollLeft <= 0) {
        box.classList.add('scroll-start', 'scroll-end');
        return;
      }

      // начало
      if (scrollLeft <= 0) {
        box.classList.add('scroll-start');
        box.classList.remove('scroll-end');
        return;
      }

      // конец
      if (scrollLeft >= maxScrollLeft) {
        box.classList.add('scroll-end');
        box.classList.remove('scroll-start');
        return;
      }

      // середина
      box.classList.remove('scroll-start', 'scroll-end');
    };

    // первичная инициализация
    updateScrollState();

    // слушатель скролла
    box.addEventListener('scroll', updateScrollState);

    // обновление при ресайзе
    window.addEventListener('resize', updateScrollState);
  });
}