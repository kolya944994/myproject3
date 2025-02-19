var button = document.querySelector('.additional-menu__button')
var brand = document.querySelector('.brand')

button.addEventListener('click', function () {
	if (brand.style.display === 'grid')
		(brand.style.display = 'none'),
			(button.textContent = 'Показать все'),
			button.classList.toggle('additional-menu__button_click')
	else
		(brand.style.display = 'grid'),
			(button.textContent = 'Скрыть'),
			button.classList.remove('additional-menu__button_click')
})

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
})
