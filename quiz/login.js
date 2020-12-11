
class Login{
  constructor(currentUsers){
    this.email = document.querySelector('#login-email');
    this.password = document.querySelector('#login-password');
    this.login = document.querySelector('#login');
    this.currentUsers = currentUsers;
    this.login.addEventListener('click', this.loginUser.bind(this));
  }

  loginUser(){
    const emailInput = this.email.value;
    const passwordInput = this.password.value;

    const users = this.currentUsers;

    for(let i=0; i < users.length; i++){
      if (users[i].email === emailInput){
        if (users[i].password === passwordInput) {
          alert('Signed In Successfully!');
          break;
        }else {
          alert('There was an error with your log in info!');
          break;
        }
      } else {
        alert("This user doesn't exist!");
        break;
      }
    }     
  }
}

export default Login;