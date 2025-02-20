var button = document.querySelector('.additional-menu__button')
var brand = document.querySelectorAll('.brand__list_display-js')

var addClicker = function (brands) {
	button.addEventListener('click', function () {
		if (brands.style.display == 'none') {
			;(brands.style.display = 'flex'),
				(button.textContent = 'Скрыть'),
				button.classList.toggle('additional-menu__button_click')
		} else {
			;(brands.style.display = 'none'),
				(button.textContent = 'Показать все'),
				button.classList.remove('additional-menu__button_click')
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
