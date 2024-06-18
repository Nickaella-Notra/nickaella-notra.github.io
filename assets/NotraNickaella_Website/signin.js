// Nickaella A. Notra
// WD-201

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('eError');
var pass_error = document.getElementById('pError');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated()
{
	if (email.value.length < 10)
	{
		email.style.border = "1px solid #BF5757";
		email.style.color = "#BF5757";
		email_error.style.display = "block";
		email.focus();
		return false;

	}
	if (password.value.length < 6) 
	{
		password.style.border = "1px solid #BF5757";
		password.style.color = "#BF5757";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}


}
function email_Verify()
{
	if (email.value.length >= 8)
	{
		email.style.border = "1px solid #231F20";
		email.style.color = "#231F20";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify()
{
	if (password.value.length >= 5) 
	{
		password.style.border = "1px solid #231F20";
		password.style.color = "#231F20";
		pass_error.style.display = "none";
		return true;
	}
}

