document.querySelector("form").addEventListener("submit",signup);
let userData = JSON.parse(localStorage.getItem("credentials")) || []
function signup(){
    event.preventDefault();
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    // console.log(username,password)
    let obj = {
        username: username,
        password: password
    }
    userData.push(obj)
    localStorage.setItem("credentials", JSON.stringify(userData))
    window.location.href="Login.html"
}