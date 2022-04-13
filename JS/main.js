// FAQ JS
//currently use this to pull all the question answers from the FAQ.json file
let question = document.getElementById("FAQ-main");
FAQ();
function FAQ(e) {
    fetch("../JSON/FAQ.json")
        .then((res) => res.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                let FAQ = `
                        <div class="FAQ-question">
                            <h2 class="FAQ-question-title">${data[i].question}</h2><hr>
                            <p class="FAQ-question-answer">${data[i].Answer}</p>
                        </div>`;
                question.innerHTML += FAQ;
            }
        })
        .catch((err) => console.log(err));
}

// JS for user LOGIN
let form = document.getElementById("form");
let welcome = document.getElementById("welcome");
//if there is a form then add event listener
if (form) form.addEventListener("submit", getCredentials);
//function to get the credentials
//then checks if form is filled, if it is then is redirects to the dashboard
function getCredentials(e) {
    e.preventDefault();
    let user = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;
    console.log(user, pass);
    if (user === "" || pass === "") {
        alert("Please fill in all the fields");
    } else {
        window.location.href = "../docs/dashboard.html";
        alert("Welcome Back " + user);
    }
}

//JS for user SIGNUP
//Constructor to create a new user, takes in the first name, last name, username, password and birthday
class User {
    constructor(fName, lName, username, pass, birthday) {
        this.fName = fName;
        this.lName = lName;
        this.username = username;
        this.pass = pass;
        this.birthday = birthday;
    }
}
let signUp = document.getElementById("register");
//if there is a form, then add an event listener
if (signUp) signUp.addEventListener("submit", newUser);
//function to add a new user
function newUser(e) {
    e.preventDefault();
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let username = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;
    let birthday = document.getElementById("birthday").value;
    if (fName === "" ||lName === "" ||username === "" ||pass === "" ||birthday === "") {
        alert("Please fill in all the fields");
    } else {
        //create a new user
        const user = new User(fName, lName, username, pass, birthday);
        console.log(user);
        alert("Welcome to Task Bud" + ' ' +user.fName);
        window.location.href = "../docs/login.html";
    }
}
