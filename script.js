const button = document.querySelector('.additional-menu__button')
const brand = document.querySelectorAll('.swiper-slide')

button.addEventListener('click', function () {
	brand.forEach(brand => {
		button.classList.toggle('additional-menu__button_click')
		brand.classList.toggle('swiper-slide_display-tablejs')
		brand.classList.toggle('swiper-slide_display-dekstopjs')

		if (brand.classList.contains('swiper-slide_display-tablejs')) {
			button.textContent = 'Скрыть'
		} else {
			button.textContent = 'Показать Все'
		}
	})
})

const screenWidth = window.innerWidth
if (screenWidth <= 767) {
	const swiper = new Swiper('.swiper', {
		// Optional parameters

		slidesPerView: 1.3,
		spaceBetween: 16,
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	})
}
