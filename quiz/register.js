const x = document.getElementById('login');
const y = document.getElementById('register');
const z = document.getElementById('btn');
const modal = document.getElementById('modal');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');


let users = [];
let currentUsers = JSON.parse(window.localStorage.getItem('users'));
if (currentUsers !== null){
  users = [...currentUsers];
}

const register = () => {
  x.style.left = '-400px';
  y.style.left = '50px';
  z.style.left = '110px';
};

const login = () => {
  x.style.left = '50px';
  y.style.left = '450px';
  z.style.left = '0px';
};

const userPresent = (users) => {
  const email = document.getElementById('login-email');
  const password = document.getElementById('login-password');
  let result = false;

  for(let i=0; i < users.length; i++){
    if (users[i].email === email.value){
      if (users[i].password === password.value) {
        alert('Signed In Successfully!');
        result = true;
        break;
      }else {
        alert('There was an error with your log in info!');
        result = false;
        break;
      }
    } else {
      alert("This user doesn't exist!");
      result = false;
      break;
    }
  }   

  return result;
};

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if(userPresent(users)){
    modal.style.visibility = 'hidden';
  }   

});

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('register-email');
  const password = document.getElementById('register-password');
  const confirmPassword = document.getElementById('confirm-password');

  if (password.value !== confirmPassword.value) {
    alert("Confirm password and the password should be the same!");
    return;
  } else {
    const user = {
      firstName: firstName.value,
      lastName : lastName.value,
      email : email.value,
      password : password.value
    };
    users.push(user);
    window.localStorage.setItem('users', JSON.stringify(users));
    modal.style.visibility = 'hidden';
  }

});


