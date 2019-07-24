function eventinsert(event){
	if (event.which == null) { // IE
		if (event.keyCode < 32) return null; // спец. символ
		return String.fromCharCode(event.keyCode)
	}

	if (event.which != 0 && event.charCode != 0) { // все кроме IE
		if (event.which < 32) return null; // спец. символ
		return String.fromCharCode(event.which); // остальные
	}

  return null; // спец. символ
}
