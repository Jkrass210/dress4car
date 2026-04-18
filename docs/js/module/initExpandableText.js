export function initExpandableText() {
  const containers = document.querySelectorAll('.js-expandable-box');
  let currentlyOpenContainer = null;

  containers.forEach(container => {
    const descElement = container.querySelector('.js-expandable-text');
    const buttonElement = container.querySelector('.js-expandable-btn');

    // Проверяем наличие элементов
    if (!descElement || !buttonElement) {
      return;
    }

    // Проверяем высоту элемента
    const descHeight = descElement.scrollHeight;
    const maxHeight = 117;

    if (descHeight > maxHeight) {
      // Если высота превышает 90px - добавляем класс и вешаем обработчик
      descElement.classList.add('hidden-desc');

      buttonElement.addEventListener('click', function () {
        const isHidden = descElement.classList.contains('hidden-desc');

        if (isHidden) {
          // Закрываем предыдущий открытый блок
          if (currentlyOpenContainer && currentlyOpenContainer !== container) {
            const prevDesc = currentlyOpenContainer.querySelector('.js-expandable-text');
            const prevButton = currentlyOpenContainer.querySelector('.js-expandable-btn');

            if (prevDesc && prevButton) {
              prevDesc.classList.add('hidden-desc');
              prevButton.textContent = 'Читать полностью';
            }
          }

          // Открываем текущий текст
          descElement.classList.remove('hidden-desc');
          buttonElement.textContent = 'Скрыть';
          currentlyOpenContainer = container;
        } else {
          // Закрываем текущий текст
          descElement.classList.add('hidden-desc');
          buttonElement.textContent = 'Читать полностью';
          currentlyOpenContainer = null;
        }
      });
    } else {
      // Если высота меньше 90px - скрываем кнопку
      buttonElement.classList.add('hidden');
    }
  });
}