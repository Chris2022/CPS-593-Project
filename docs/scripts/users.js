import 
{ fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } from './main.js'

const loginForm = document.getElementById("form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const pswd = document.getElementById("pass").value;
  fetchData('/users/login', {username: name, password: pswd}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "dashboard.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#form p.error").innerHTML = errText;
    document.getElementById("pass").value = "";
    console.log(`Error! ${errText}`)
  });
}

const regForm = document.getElementById("register");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const first = document.getElementById("fName").value;
  const last = document.getElementById("lName").value;
  const pswd = document.getElementById("pass").value;
  const birth = document.getElementById("birthday").value;

  fetchData('/users/register', {username: name,firstname: first, lastname: last ,password: pswd, birthdate: birth}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "dashboard.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#register p.error").innerHTML = errText;
    document.getElementById("pass").value = "";
    console.log(`Error! ${errText}`)
  });
}

let user = getCurrentUser();
let welcome = document.getElementById("welcome");
welcome.innerHTML = `${user.firstname} ${user.lastname}`;