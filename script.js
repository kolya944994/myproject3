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

let swiperInstance = null

function manageSwiper() {
	const screenWidth = window.innerWidth

	if (screenWidth <= 767) {
		if (!swiperInstance) {
			swiperInstance = new Swiper('.swiper', {
				slidesPerView: 1.3,
				spaceBetween: 16,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			})
		}
	} else {
		if (swiperInstance) {
			swiperInstance.destroy(true, true)
			swiperInstance = null
		}
	}
}

manageSwiper()
window.addEventListener('resize', manageSwiper)
