const button = document.querySelector('.additional-menu__button')
const brand = document.querySelectorAll('.brand__list')
brand.forEach(brand => {
	button.addEventListener('click', function () {
		button.classList.toggle('additional-menu__button_click')
		brand.classList.toggle('brand__list_display-tabletjs'),
			brand.classList.toggle('brand__list_display-dekstopjs')
		if (button.textContent === 'Скрыть') {
			button.textContent = 'Показать все'
		} else {
			button.textContent = 'Скрыть'
		}
	})
})

/*if () {
		button.textContent = 'Показать все'
	} else {
		button.textContent = 'Скрыть'
	}
})*/

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 1.2,
	spaceBetween: 16,
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
})
