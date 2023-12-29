var signinName = document.getElementById("signinName");
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");

var msg = document.getElementById("incorrect");

function signup() {
  if (signinName.value && signinEmail.value && signinPassword.value) {
    localStorage.setItem(
      "appUsers",
      JSON.stringify(
        {
          name: signinName.value,
          email: signinEmail.value,
          password: signinPassword.value,
        },
      )
    );

    window.location.href =  "login.html"

  } else {

    msg.textContent = "All fields are required";
    setTimeout(() => {
      msg.textContent = "";
    }, 3000);
  }
}
