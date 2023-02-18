document.querySelector("form").addEventListener("submit",loginFn);
let loginUser = JSON.parse(localStorage.getItem("credentials"))
// console.log(loginUser)
function loginFn(){
    event.preventDefault();
    var enteredname = document.querySelector("#username").value;
    var enteredPass = document.querySelector("#password").value;
    for(let i = 0;i<loginUser.length;i++){
        if(loginUser[i].username === enteredname && loginUser[i].password === enteredPass){
            alert("successfull");
            window.location.href = "quiz.html";
            break;
        }
        else{
            alert("login failed")
        }
    }
}