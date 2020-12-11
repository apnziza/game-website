

class Signup {
  constructor(users){
    this.firstName = document.querySelector('#first-name');
    this.lastName = document.querySelector('#last-name');
    this.email = document.querySelector('#email');
    this.password = document.querySelector('#password');
    this.confirmPassword = document.querySelector('#confirm-password');
    this.signup = document.querySelector('#sign-up');
    this.user = {}
    this.users = users;
    this.signup.addEventListener('click', this.registerUser.bind(this));
  }

  registerUser(){
    const firstNameInput = this.firstName.value;
    const lastNameInput = this.lastName.value;
    const emailInput = this.email.value;
    const passwordInput = this.password.value;
    const confirmPasswordInput = this.confirmPassword.value;

    if (passwordInput !== confirmPasswordInput) {
      alert("Confirm password and the password should be the same!");
      return;
    } else {
      this.user = {
        firstName: firstNameInput,
        lastName : lastNameInput,
        email : emailInput,
        password : passwordInput
      };
      this.users.push(this.user);
      window.localStorage.setItem('users', JSON.stringify(this.users));
    }

  }
}

export default Signup;