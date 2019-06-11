const navSlide = () => {
	const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	const menuLinks = document.querySelectorAll('.menu a');
	
	
	hamburger.addEventListener('click', () => {
		//toggle nav
		menu.classList.toggle('menu-active');

		//animate links
		menuLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `menuFade 0.5s ease forwards ${index / 5 + 0.3}s`;

			}
		});

		//hamburger animation 
		hamburger.classList.toggle('toggle');	
	});

}

navSlide();


