window.onload = checkLogin;//Check to see if user is logged in already

            function checkLogin(){
                if(sessionStorage.loggedInusername !== undefined){
                    //Extract details of logged in user
                    let usrObj = JSON.parse(localStorage[sessionStorage.loggedInusername]);
                    
                    //Say hello to logged in user
                    document.getElementById("loginPara").innerHTML = usrObj.username + " logged in.";
                }
            }
			
            
            let cookies = document.cookie;

            function login(){
                //Get user name
                let username = document.getElementById("uname").value;
                let password = document.getElementById("psw").value;
                //User does not have an account
                if(localStorage[username] === undefined){
                    //Inform user that they do not have an account
                    document.getElementById("loginFailure").innerHTML = "Username not recognized. If you do not have an account,please create one.";
                    return; //Do nothing else
                }
				
                else{//User has an account
                    let usrObj = JSON.parse(localStorage[username]);//Convert to object
                    let password = document.getElementById("psw").value;
                    if(password === usrObj.password){//Successful login
                        document.getElementById("loginPara").innerHTML = "Welcome " + usrObj.username + " !";
						//Redirect to Game Page
						location.assign("gamepage.html")
                        document.getElementById("loginFailure").innerHTML = "";//Clear any login failures
                        sessionStorage.loggedInusername = usrObj.username;
                    }
                    else{
                        document.getElementById("loginFailure").innerHTML = "Password not correct. Please try again.";
                    }
                }
			}
			function logout(){
               localStorage.clear();
               header.innerHTML = "Welcome!";
           }
			