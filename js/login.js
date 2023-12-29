var loginEmail = document.getElementById("loginEmail");
var logninPassword = document.getElementById("logninPassword");

var msg = document.getElementById("incorrect");

function login() {
  var user = JSON.parse(localStorage.getItem("appUsers"));

  if (loginEmail.value && logninPassword.value) {
    if (
      loginEmail.value === user.email &&
      logninPassword.value === user.password
    ) {
      msg.classList.add("text-success");
      msg.textContent = "Success";

      localStorage.setItem("sessionUsername", user.name);

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } else {
      msg.textContent = "email or password are not correct";
      msg.className = "text-danger";
      setTimeout(() => {
        msg.textContent = "";
      }, 3000);
    }
  } else {
    msg.textContent = "All fields are required";
    msg.className = "text-danger";
    setTimeout(() => {
      msg.textContent = "";
    }, 3000);
  }
}
