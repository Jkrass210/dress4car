export function DropdownType1() {

  const ROOT = '.drop-down-type-1'
  const BTN = '.drop-down-type-1__btn'
  const INPUT = '.drop-down-type-1__input'
  const ITEM = '.drop-down-type-1__item'
  const CHOICE = '.drop-down-type-1__choice'

  if (!document.querySelector(ROOT)) return

  const closeAll = () => {
    document
      .querySelectorAll(`${ROOT}.active`)
      .forEach(el => el.classList.remove('active'))
  }

  // новая функция
  const setSelected = (dropdown) => {
    const input = dropdown.querySelector(INPUT)
    const items = dropdown.querySelectorAll(ITEM)

    if (!input) return

    const value = input.value.trim()

    items.forEach(item => {
      const text = item.textContent.trim()

      if (text === value) {
        item.classList.add('selected')
      } else {
        item.classList.remove('selected')
      }
    })
  }

  document.addEventListener('click', (e) => {
    
    const btn = e.target.closest(BTN)
    const item = e.target.closest(ITEM)

    // открыть / закрыть dropdown
    if (btn) {

      e.preventDefault()

      const dropdown = btn.closest(ROOT)
      const isActive = dropdown.classList.contains('active')

      closeAll()

      if (!isActive) {
        dropdown.classList.add('active')

        // проверка при открытии
        setSelected(dropdown)
      }

      return
    }

    // выбор пункта
    if (item) {

      const dropdown = item.closest(ROOT)
      const input = dropdown.querySelector(INPUT)

      if (input) {
        input.value = item.textContent.trim()
        input.dispatchEvent(new Event('input', { bubbles: true }))
      }

      // обновляем selected
      setSelected(dropdown)

      dropdown.classList.remove('active')
      return
    }

    // клик вне dropdown
    if (!e.target.closest(CHOICE)) {
      closeAll()
    }

  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAll()
    }
  })

  // первичная инициализация (если уже есть value)
  document.querySelectorAll(ROOT).forEach(dropdown => {
    setSelected(dropdown)
  })

}