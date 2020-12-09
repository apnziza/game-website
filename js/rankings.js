        
		//Loads ranking table into page
        function loadRankingTable(){
            let str = "<table><tr><th>Name</th><th>Score</th></tr>";
            for(let key of Object.keys(localStorage)){
                let usrObj = JSON.parse(localStorage[key]);
                str += "<tr><td>" + usrObj.username + "</td><td>" + usrObj.userScore + "</td></tr>";
            }
            str += "</table>";
            document.getElementById("Ranking").innerHTML = str;
        }

        
        //Updates logged in user's score
        function updateScore(){
            let newScore = document.getElementById("UpdateScore").value;
            if(sessionStorage.loggedInusername !== undefined){
                    //Extract details of logged in user
            let usrObj = JSON.parse(localStorage[sessionStorage.loggedInusername]);
            if(usrObj.userScore < newScore){
                    usrObj.userScore = newScore;
                    localStorage[usrObj.username] = JSON.stringify(usrObj);
                }

            }
        }

        //Checks login and loads ranking table when page loads
        window.onload = ()=> {
            //Check login
            if(sessionStorage.loggedInUser !== undefined){
                document.getElementById("Greeting").innerHTML = "Hello " + sessionStorage.loggedInUser;
            }
            loadRankingTable();
        }
		 function updateScore(){
            let newScore = document.getElementById("UpdateScore").value;
            if(sessionStorage.loggedInUser !== undefined){
                let usr = JSON.parse(localStorage[sessionStorage.loggedInUser]);
                if(usr.userScore < newScore){
                    usr.userScore = newScore;
                    localStorage[usr.name] = JSON.stringify(usr);
                }

            }
        }


        //Logs user out
        function logout(){
            sessionStorage.loggedInUser = undefined;
        }
 
        //Registers user
        function login(){
            let username = document.getElementById("uname").value;
            let password = document.getElementById("psw").value;

            let usrObj = {
                username: username,
                password: password,
                userScore: 0
            }
            localStorage[name] = JSON.stringify(usrObj);
        }