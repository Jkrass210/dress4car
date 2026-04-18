export function initDropDownType1() {
  const dropDowns = document.querySelectorAll('.drop-down-tipe-1');
  if (!dropDowns.length) return;

  dropDowns.forEach((dropDown) => {
    const btn = dropDown.querySelector('.drop-down-tipe-1__btn');
    const box = dropDown.querySelector('.drop-down-tipe-1__box');
    const groupElem = dropDown.querySelector('.drop-down-tipe-1__group-elem');
    const closeButtons = dropDown.querySelectorAll('.drop-down-tipe-1-close');

    // Проверяем наличие обязательных элементов
    if (!btn || !box || !groupElem) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') close();
    };

    const handleOutsideClick = (e) => {
      if (!groupElem.contains(e.target) && !btn.contains(e.target)) {
        close();
      }
    };

    const open = () => {
      btn.classList.add('active');
      box.classList.add('active');
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('click', handleOutsideClick);
    };

    const close = () => {
      btn.classList.remove('active');
      box.classList.remove('active');
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('click', handleOutsideClick);
    };

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      box.classList.contains('active') ? close() : open();
    });

    // Если есть кнопки закрытия — вешаем обработчик на каждую
    if (closeButtons.length) {
      closeButtons.forEach((closeBtn) => {
        closeBtn.addEventListener('click', close);
      });
    }
  });
}