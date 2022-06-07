var login = document.getElementsByClassName("login")[0]
var logMessage = document.getElementsByClassName("log")[0]
var regMessage = document.getElementsByClassName("reg")[0]
var register = document.getElementsByClassName("registration")[0]

function logClick () {

  login.style.display = "block"
  register.style.display = "none"
}

function regClick () {

  login.style.display = "none "
  register.style.display = "block"

}