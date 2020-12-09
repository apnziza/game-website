function storeUser(){
	//Creating the user objects that shall be stored.
       var usrObject = {};
				usrObject.username = document.getElementById("uname").value;
				usrObject.phone = document.getElementById ("phone").value;
				usrObject.birthday = document.getElementById ("birthday").value;
				usrObject.streetaddress = document.getElementById("address").value;
				usrObject.country = document.getElementById("country").value;
				usrObject.email = document.getElementById("email").value;
                usrObject.password = document.getElementById("psw").value;
				usrObject.repeatpassword = document.getElementById("psw-repeat").value;
				usrObject.userScore = 0;
                //if user password and confirm password are the same, alert user
				if (usrObject.password != usrObject.repeatpassword) {
					alert("Passwords do not match");
					return false;
				}
				//if user name is blank, alert user
				else if (usrObject.username == "") {
					alert("Username can not be blank!");
					return false;
				}
				//if user password blank, alert user
				else if (usrObject.password == "") {
					alert("Password can not be blank!");
					return false;
				}
				else {
                //Store information about the user.
                localStorage[usrObject.username] = JSON.stringify(usrObject);
                //Tell the user the result
                document.getElementById("Result").innerHTML = "<b>Registration successful!</b>";
				window.location.assign("gamepage.html")
				}
 } 