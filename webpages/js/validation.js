function validateForm()
{
	var x = document.forms["myForm"]["uname"].value;
	var y = document.forms["myForm"]["pass"].value;
	var z = document.getElementById('error');
			
	if (x.trim()=="")
	{
		alert("Username can't be empty");
		z.style.color = "red";
		z.innerHTML = "* Empty Username";
		uname.style.border = "3px solid red"; 
		return false;
	}
	else if (x.length<=2 || x.length>8)
	{
		alert("Username must be greater than 2 characters or less than 9 characters");
		z.style.color = "red";
		z.innerHTML = z.innerHTML = "* Invalid Username";
		uname.style.border = "3px solid red";
		return false;
	}
	else if (x==y)
	{
		alert("Username & Password shouldn't be same");
		z.style.color = "red";
		z.innerHTML = z.innerHTML = "* Invalid Password";
		pass.style.border = "3px solid red";
		return false;
	}
	else
		return true;
}