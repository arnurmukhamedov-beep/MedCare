const isAdmin = localStorage.getItem("isAdmin");

if (isAdmin === "true") {
document.getElementById("adminBtn").style.display = "inline-flex";
}