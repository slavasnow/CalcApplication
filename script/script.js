function insert(num){
	document.form.textviev.value = document.form.textviev.value + num;
	document.form.textviev.value = document.form.textviev.value + getChar;
}

function ravno(){
	var exp = document.form.textviev.value;
	if(exp){
		document.form.textviev.value = eval(exp);
	}
}

function clean(){
	document.form.textviev.value = "";
}

function back(){
	var exp = document.form.textviev.value;
	document.form.textviev.value = exp.substring(0, exp.length - 1); 
}