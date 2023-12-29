var user = localStorage.getItem("sessionUsername");
var username = document.getElementById("username")


if (user) {
    username.textContent = user
} else {
    window.location.href = "login.html"
}

function logout () {
    localStorage.removeItem("sessionUsername");

}
