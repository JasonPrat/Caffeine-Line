function navigationSlide() {
	const burger = document.querySelector('.burger');
	const navigation = document.querySelector('.navigation-links');
	const navigation_links = document.querySelectorAll('.navigation-links li');
	burger.addEventListener('click', () => {
		navigation.classList.toggle('navigation-activation');
		navigation_links.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navigation-link-fade 0.5s ease forwards ${index / 7 + 0.2}s`;
			}
		});
		burger.classList.toggle('toggle');
	});
}

function beveragesDropDown() {
	document.getElementById("beverages-dropdown-content").classList.toggle("show-beverages-dropdown-content");
}

function dessertDropDown() {
	document.getElementById("dessert-dropdown-content").classList.toggle("show-dessert-dropdown-content");
}

window.onclick = function(e) {
	if (!e.target.matches('.beverages-button') && !e.target.matches('.dessert-button')) {
		var beverages_dropdown = document.getElementById("beverages-dropdown-content");
		if (beverages_dropdown.classList.contains('show-beverages-dropdown-content')) {
			beverages_dropdown.classList.remove('show-beverages-dropdown-content');
		}

		var dessert_dropdown = document.getElementById("dessert-dropdown-content");
		if (dessert_dropdown.classList.contains('show-dessert-dropdown-content')) {
			dessert_dropdown.classList.remove('show-dessert-dropdown-content');
		}
	}
}

$('.slideshow div:gt(0)').hide();

setInterval(function() {
	$('.slideshow div:first')
	.fadeOut(1000)
	.next()
	.fadeIn(1000)
	.end()
	.appendTo('.slideshow');
}, 5000);

navigationSlide();