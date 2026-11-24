
localStorage.setItem("email", "test@gmail.com");
localStorage.setItem("password", "12345");

function login() {
  let e = document.getElementById("email").value;
  let p = document.getElementById("password").value;

  document.getElementById("msg").innerHTML =
    (e === localStorage.getItem("email") &&
     p === localStorage.getItem("password"))
    ? "Login Successful"
    : "Invalid email or password";
}
