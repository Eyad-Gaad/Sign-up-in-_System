"use strict"
// 1- HTML Document Selection And variables decleration.
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let sign_btn = document.getElementById("sign-up");
let log_btn = document.getElementById("log-in");
let span = document.getElementsByTagName("span");
let eye = document.getElementById("eye");
let noeye = document.getElementById("noeye");
let alternative = document.getElementsByTagName("a");
let account = document.getElementsByTagName("p");
const nameRegex = /^[A-Za-z][A-Za-z ]{1,13}[A-Za-z]$/; // Name Regular Expression.
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/; // Email Regular Expression.
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/; // Password Regular Expression.
let users = [];
function checkExist(){
    if(localStorage.getItem("users")!=null){
        return JSON.parse(localStorage.getItem("users"));
    }
    else{
        return false;
    }
}

// 2- Events
userName.addEventListener("input",function(e){
    if(userName.value==""){
        userName.classList.remove("is-invalid");
        userName.classList.remove("is-valid");
        userName.classList.add("border-white");
        span[0].classList.add("d-none");
    }
    else if(nameRegex.test(userName.value) == true){
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        userName.classList.add("border-success");
        userName.classList.replace("border-danger","border-success");
        span[0].classList.add("d-none");
    }
    else{
        userName.classList.remove("is-valid");
        userName.classList.add("is-invalid");
        userName.classList.replace("border-white","border-danger");
        userName.classList.replace("border-success","border-danger");
        span[0].classList.remove("d-none");
    }
})
userEmail.addEventListener("input",function(e){
    account[1].classList.add("d-none");
    if(userEmail.value==""){
        userEmail.classList.remove("is-invalid");
        userEmail.classList.remove("is-valid");
        userEmail.classList.add("border-white");
        span[1].classList.add("d-none");
    }
    else if(emailRegex.test(userEmail.value) == true){
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        userEmail.classList.add("border-success");
        userEmail.classList.replace("border-danger","border-success");
        span[1].classList.add("d-none");
        span[2].classList.add("d-none");
    }
    else{
        userEmail.classList.remove("is-valid");
        userEmail.classList.add("is-invalid");
        userEmail.classList.replace("border-white","border-danger");
        userEmail.classList.replace("border-success","border-danger");
        span[1].classList.remove("d-none");
    }
})
userPassword.addEventListener("input",function(e){
    account[1].classList.add("d-none");
    if(userPassword.value==""){
        userPassword.classList.remove("is-invalid");
        userPassword.classList.remove("is-valid");
        userPassword.classList.add("border-white");
        span[3].classList.add("d-none");
    }
    else if(PasswordRegex.test(userPassword.value) == true){
        userPassword.classList.remove("is-invalid");
        userPassword.classList.add("is-valid");
        userPassword.classList.add("border-success");
        userPassword.classList.replace("border-danger","border-success");
        span[3].classList.add("d-none");
    }
    else{
        userPassword.classList.remove("is-valid");
        userPassword.classList.add("is-invalid");
        userPassword.classList.replace("border-white","border-danger");
        userPassword.classList.replace("border-success","border-danger");
        span[3].classList.remove("d-none");
    }
})
noeye.addEventListener("click",function(e){
    noeye.classList.add("d-none");
    eye.classList.remove("d-none");
    userPassword.type = "text";
})
eye.addEventListener("click",function(e){
    eye.classList.add("d-none");
    noeye.classList.remove("d-none");
    userPassword.type = "password";
})
alternative[0].addEventListener("click",function(e){
    sign_btn.classList.add("d-none");
    userName.classList.add("d-none");
    account[2].classList.add("d-none");
    account[3].classList.remove("d-none");
    log_btn.classList.remove("d-none");
    userName.classList.remove("is-invalid");
userName.classList.remove("is-valid");
userName.classList.add("border-white");
span[0].classList.add("d-none");
userEmail.classList.remove("is-invalid");
userEmail.classList.remove("is-valid");
userEmail.classList.add("border-white");
span[1].classList.add("d-none");
userPassword.classList.remove("is-invalid");
userPassword.classList.remove("is-valid");
userPassword.classList.add("border-white");
span[3].classList.add("d-none");
userName.value=null;
userEmail.value=null;
userPassword.value=null;
})
alternative[1].addEventListener("click",function(e){
    log_btn.classList.add("d-none");
    account[3].classList.add("d-none");
    account[2].classList.remove("d-none");
    userName.classList.remove("d-none");
    sign_btn.classList.remove("d-none");
    userName.classList.remove("is-invalid");
userName.classList.remove("is-valid");
userName.classList.add("border-white");
span[0].classList.add("d-none");
userEmail.classList.remove("is-invalid");
userEmail.classList.remove("is-valid");
userEmail.classList.add("border-white");
span[1].classList.add("d-none");
userPassword.classList.remove("is-invalid");
userPassword.classList.remove("is-valid");
userPassword.classList.add("border-white");
span[3].classList.add("d-none");
account[1].classList.add("d-none");
userName.value=null;
userEmail.value=null;
userPassword.value=null;
})
sign_btn.addEventListener("click",function(e){
    e.preventDefault();
    if(userName.value==""){
        userName.classList.remove("is-valid");
        userName.classList.add("is-invalid");
        userName.classList.replace("border-white","border-danger");
        userName.classList.replace("border-success","border-danger");
        span[0].classList.remove("d-none");
    }
    if(userEmail.value==""){
        userEmail.classList.remove("is-valid");
        userEmail.classList.add("is-invalid");
        userEmail.classList.replace("border-white","border-danger");
        userEmail.classList.replace("border-success","border-danger");
        span[1].classList.remove("d-none");
    }
    if(userPassword.value==""){
        userPassword.classList.remove("is-valid");
        userPassword.classList.add("is-invalid");
        userPassword.classList.replace("border-white","border-danger");
        userPassword.classList.replace("border-success","border-danger");
        span[3].classList.remove("d-none");
    }
    if(nameRegex.test(userName.value) == true && emailRegex.test(userEmail.value) == true && PasswordRegex.test(userPassword.value) == true){
        let user = {
            username : userName.value,
            useremail : userEmail.value,
            userpassword : userPassword.value,
            userCheck : false
        }
        if(checkExist() == false){
            users.push(user);
            localStorage.setItem("users",JSON.stringify(users));
            userName.value=null;
            userEmail.value=null;
            userPassword.value=null;
            userName.classList.remove("is-invalid");
            userName.classList.remove("is-valid");
            userName.classList.add("border-white");
            span[0].classList.add("d-none");
            userEmail.classList.remove("is-invalid");
            userEmail.classList.remove("is-valid");
            userEmail.classList.add("border-white");
            span[1].classList.add("d-none");
            userPassword.classList.remove("is-invalid");
            userPassword.classList.remove("is-valid");
            userPassword.classList.add("border-white");
            span[3].classList.add("d-none");
            sign_btn.classList.add("d-none");
            userName.classList.add("d-none");
            account[2].classList.add("d-none");
            account[3].classList.remove("d-none");
            log_btn.classList.remove("d-none");
        }
        else if(checkExist() != false){
            function checkEmail(){
                let check;
                for(let i = 0;i<checkExist().length;i++){
                    if(user.useremail==checkExist()[i].useremail){
                        check = true;
                        break;
                    }
                }
                return check;
            }
            if(checkEmail()== true){
                userEmail.classList.remove("is-valid");
                userEmail.classList.add("is-invalid");
                userEmail.classList.replace("border-white","border-danger");
                userEmail.classList.replace("border-success","border-danger");
                span[2].classList.remove("d-none");
            }
            else{
                let oldStorage = JSON.parse(localStorage.getItem("users"))
                users = oldStorage;
                users.push(user);
                localStorage.setItem("users",JSON.stringify(users));
                userName.value=null;
                userEmail.value=null;
                userPassword.value=null;
                userName.classList.remove("is-invalid");
                userName.classList.remove("is-valid");
                userName.classList.add("border-white");
                span[0].classList.add("d-none");
                userEmail.classList.remove("is-invalid");
                userEmail.classList.remove("is-valid");
                userEmail.classList.add("border-white");
                span[1].classList.add("d-none");
                userPassword.classList.remove("is-invalid");
                userPassword.classList.remove("is-valid");
                userPassword.classList.add("border-white");
                span[3].classList.add("d-none");
                sign_btn.classList.add("d-none");
                userName.classList.add("d-none");
                account[2].classList.add("d-none");
                account[3].classList.remove("d-none");
                log_btn.classList.remove("d-none");
            }
        }
    }
})
log_btn.addEventListener("click",function(e){
    e.preventDefault()
    let log_info = {
        useremail : userEmail.value,
        userpassword : userPassword.value,
    }
    let storage = JSON.parse(localStorage.getItem("users"));
    if(storage==null){
        account[1].classList.remove("d-none");
        userEmail.classList.remove("is-invalid");
        userEmail.classList.remove("is-valid");
        userEmail.classList.add("border-white");
        span[1].classList.add("d-none");
        userPassword.classList.remove("is-invalid");
        userPassword.classList.remove("is-valid");
        userPassword.classList.add("border-white");
        span[3].classList.add("d-none");
        userName.value=null;
        userEmail.value=null;
        userPassword.value=null;
    }else{
        for(let i =0;i<storage.length;i++){
            if(log_info.useremail==storage[i].useremail && log_info.userpassword==storage[i].userpassword){
                storage[i].userCheck = true;
                localStorage.setItem("users",JSON.stringify(storage));
                window.location.href = "home.html";
                userName.value=null;
                userEmail.value=null;
                userPassword.value=null;
                userEmail.classList.remove("is-valid");
                userPassword.classList.remove("is-valid");
                userEmail.classList.replace("border-success","border-white");
                userPassword.classList.replace("border-success","border-white");
                break;
            }
            else{
                account[1].classList.remove("d-none");
                userEmail.classList.remove("is-invalid");
                userEmail.classList.remove("is-valid");
                userEmail.classList.add("border-white");
                span[1].classList.add("d-none");
                userPassword.classList.remove("is-invalid");
                userPassword.classList.remove("is-valid");
                userPassword.classList.add("border-white");
                span[3].classList.add("d-none");
                userName.value=null;
                userEmail.value=null;
                userPassword.value=null;
            }
        }
    }
})
