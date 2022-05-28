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

function getDouble(arr) {
	let saveArr = ["@", "."];
	let counterAt = 0;
	let counterDot = 0;

	for(i = 0; i < saveArr.length; ++i) {
		for(j = 0; j < arr.length; ++j) {
			if (saveArr[i] == arr[j]) {
				if (i == 0) {
					++counterAt;
				}
				if (i == 1) {
					++counterDot;
				}
			}
		}
	}

	if ((counterAt > 1 || counterDot < 1) || counterAt < 0) {
		return true;
	} else {
		return false;
	}
}

function checkString() {
	var checkName = document.getElementById("name-input").value;
	var checkEmail = document.getElementById("email-input").value;
	var checkMessage = document.getElementById("message-input").value;

	if (checkName == "") {
		alert("Name must be filled!");
		return false;
	}

	if (checkEmail == "") {
		alert("Email must be filled!");
		return false;
	}

	if (checkMessage == "") {
		alert("Message can not be blank!");
		return false;
	}

	if (checkEmail.indexOf("@") < 0) {
		alert("Invalid email!");
		return false;
	}

	if (getDouble(checkEmail)) {
		alert("Invalid email");
		return false;
	}

	return true;
}

function driver() {
	if (checkString()) {
		alert("We'll reply your message, please wait :D");
	}
}

navigationSlide();