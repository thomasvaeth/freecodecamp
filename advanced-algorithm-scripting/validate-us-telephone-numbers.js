// Return true if the passed string is a valid US phone number.
function telephoneCheck(str) {
	var exp = /^1?(-|\s)?(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)?\d{4}$/;
	return exp.test(str);
}

telephoneCheck("555-555-5555");