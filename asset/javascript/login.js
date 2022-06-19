const loginForm = document.getElementById("login_form");
const logininput = document.getElementById("login_input");
const logiDiv = document.getElementById("login_div");
const contentDiv = document.getElementById("content_div");
const userName = document.getElementById("user_name");


function loginCheck() {
    const localStorageUserName = localStorage.getItem("username");

    if (localStorageUserName === null) {
        logiDiv.classList.toggle("display");
        contentDiv.classList.toggle("hidden");
    } else {
        userName.innerHTML = userName.innerText + "<br><br>" + localStorageUserName + " :)";
        logiDiv.style.display = "none";
        contentDiv.classList.toggle("display");
    }
}

function login(userName) {
    localStorage.setItem("username", userName);
    loginCheck();
}

function inputcheck(event) {
    event.preventDefault();
    const userName = logininput.value;

    if(userName === ""){
        alert("이름을 입력해주세요.");
    }else {
        login(userName);
    }
}

function logout() {
    localStorage.removeItem("username");
    location.reload(true);
}

loginCheck();
loginForm.addEventListener("submit", inputcheck);