const button = document.querySelector('.additional-menu__button')
const brand = document.querySelectorAll('.brand__list')

const addClicker = function (brands) {
	button.addEventListener('click', function () {
		button.classList.toggle('additional-menu__button_click')
		if (brands.style.display === 'none') {
			;(brands.style.display = 'flex'), (button.textContent = 'Показать все')
		} else {
			;(brands.style.display = 'none'), (button.textContent = 'Скрыть')
		}
	})
}

for (var i = 0; i < brand.length; i++) {
	addClicker(brand[i])
}
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
