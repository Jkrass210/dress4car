export function initCounter() {
  const counters = document.querySelectorAll('.counter');

  // Проверка наличия счетчиков
  if (!counters.length) return;

  counters.forEach(counter => {
    const input = counter.querySelector('.counter__input');
    const btnPlus = counter.querySelector('.plus');
    const btnMinus = counter.querySelector('.minus');

    // Проверка всех элементов внутри конкретного счетчика
    if (!input || !btnPlus || !btnMinus) return;

    btnPlus.addEventListener('click', () => {
      let value = parseInt(input.value) || 0;
      input.value = value + 1;
    });

    btnMinus.addEventListener('click', () => {
      let value = parseInt(input.value) || 0;

      // защита от ухода в минус (если нужно — можно убрать)
      if (value > 1) {
        input.value = value - 1;
      }
    });
  });
}