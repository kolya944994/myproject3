const button = document.querySelector('.additional-menu__button')
const brand = document.querySelectorAll('.brand__list')

button.addEventListener('click', function () {
	brand.forEach(brand => {
		button.classList.toggle('additional-menu__button_click')
		brand.classList.toggle('brand__list_display-tabletjs')
		brand.classList.toggle('brand__list_display-dekstopjs')
		if (button.textContent === 'Скрыть') {
			button.textContent = 'Показать все'
		} else {
			button.textContent = 'Скрыть'
		}
		console.log(brand)
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
