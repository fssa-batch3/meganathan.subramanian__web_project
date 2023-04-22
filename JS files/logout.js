
// logout
let log_out = document.getElementById("log-out");
let active_user = localStorage.getItem("activeUser");
log_out.addEventListener("click", (e) => {
    const log_Out = delete active_user;
    localStorage.setItem("activeUser", log_Out);
    window.location.href = "/Pages/Account/login.html";
    alert("Thank you visiting our website");
});




