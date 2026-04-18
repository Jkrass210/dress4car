export function initWorkDescPreview() {

  const PREVIEW = '.js-desc-preview'
  const BOX = '.js-box-desc'
  const TITLE = '.js-data-title'
  const DESC = '.js-data-desc'

  const box = document.querySelector(BOX)

  console.log(box)

  if (!box) return

  const titleEl = box.querySelector(TITLE)
  const descEl = box.querySelector(DESC)

  console.log(titleEl, descEl)

  if (!titleEl || !descEl) return


  // функция обновления текста
  const updateContent = (el) => {

    const title = el.dataset.title
    const desc = el.dataset.desc

    if (title) titleEl.textContent = title
    if (desc) descEl.textContent = desc

  }


  // установка первого элемента при загрузке
  const firstPreview = document.querySelector(PREVIEW)

  if (firstPreview) {
    updateContent(firstPreview)
  }


  // делегирование клика
  document.addEventListener('click', (e) => {

    

    const preview = e.target.closest(PREVIEW)

    console.log(preview)

    if (!preview) return

    updateContent(preview)

  })

}