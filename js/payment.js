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

function verifyCCNUM(arr) {
	if (arr.length != 19) {
		return false;
	}
	for(i = 0; i < arr.length; ++i) {
		if (((i != 4 && i != 9) && i != 14)) {
			if (arr[i] >= '0' && arr[i] <= '9') {
				continue;
			} else {
				return false;
			}
		} else if (((i == 4 || i == 9) || i == 14)) {
			if (arr[i] == '-') {
				continue;
			} else {
				return false;
			}
		}
	}
	return true
}

function verifyCVV(arr) {
	if (arr.length != 3) {
		return false;
	}
	for(i = 0; i < arr.length; ++i) {
		if (arr[i] >= '0' && arr[i] <= '9') {
			continue;
		} else {
			return false;
		}
	}
	return true;
}

function checkString() {
	var checkName = document.getElementById("name_input").value;
	var checkEmail = document.getElementById("email_input").value;
	var checkCity = document.getElementById("city_input").value;
	var checkAddress = document.getElementById("address_input").value;
	var checkPayment = document.getElementById("payment_method").value;
	var checkAgree = document.getElementById("agree").checked;

	if (!checkAgree) {
		alert("You must agree to the terms and condition!");
		return false;
	}

	if (checkName == "") {
		alert("Name must be filled!");
		return false;
	}

	if (checkEmail == "") {
		alert("Email can not be blank!");
		return false;
	}

	if (checkEmail.indexOf("@") < 0) {
		alert("Invalid email");
		return false;
	}

	if (getDouble(checkEmail)) {
		alert("Invalid email");
		return false;
	}

	if (checkCity == "") {
		alert("City must be filled!");
		return false;
	}

	if (checkAddress == "") {
		alert("Address must be filled!");
		return false;
	}

	if (checkPayment == 0) {
		alert("Select payment method!");
		return false;
	} else if (checkPayment == 2) {
		var checkCardName = document.getElementById("card_name_input").value;
		var checkCCNum = document.getElementById("ccnum_input").value;
		var checkValidityMonth = document.getElementById("validity_input_month").value;
		var checkValidityYear = document.getElementById("validity_input_year").value;
		var checkCVV = document.getElementById("cvv_input").value;

		if (checkCardName == "") {
			alert("Name on the credit card must be filled!");
			return false;
		}

		if (checkCCNum == "") {
			alert("Credit card number must be filled!");
			return false;
		}

		if (!verifyCCNUM(checkCCNum)) {
			alert("Invalid credit card number")
			return false;
		}

		if (checkValidityMonth == 0) {
			alert("Credit card validity date must be filled!");
			return false;
		}

		if (checkValidityYear == 0) {
			alert("Credit card validity date must be filled!");
			return false;
		}

		if (checkCVV == "") {
			alert("CVV must be filled!");
			return false;
		}

		if (!verifyCVV(checkCVV)) {
			alert("Invalid CVV");
			return false;
		}
	}

	return true;
}

function driver() {
	if (checkString()) {
		alert("Your order has been proceed, please wait :D");
	}
}

function show_visa_payment(divID, element) {
	document.getElementById(divID).style.display = element.value == 2? 'block' : 'none';
}

navigationSlide();