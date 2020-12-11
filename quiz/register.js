let x = document.getElementById('login');
let y = document.getElementById('register');
let z = document.getElementById('btn');
let modal = document.getElementById('modal');
let loginBtn = document.getElementById('login-btn');

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

loginBtn.addEventListener('click', () => {
  
  // if(userPresent(users)){
  // } else {
  //   modal.style.visibility = 'visible';
  // }
  modal.style.visibility = 'hidden';
  
  

});

const submitRegistration = () => {

};

