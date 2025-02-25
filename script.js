const button = document.querySelector('.additional-menu__button')
const brand = document.querySelector('.swiper-wrapper')

button.addEventListener('click', function () {
	button.classList.toggle('additional-menu__button_click')
	brand.classList.toggle('swiper-wrapperjs')
	if (brand.classList.contains('swiper-wrapperjs')) {
		button.textContent = 'Скрыть'
	} else {
		button.textContent = 'Показать Все'
	}
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
