const readButton = document.getElementById("read-btn");
const notifNumber = document.getElementById("three");
const redDot = document.getElementsByClassName("red-dot");
const newNotifBackground = document.getElementsByClassName("notification-card-b");

readButton.addEventListener("click", markAsRead);

function markAsRead() {
    notifNumber.innerHTML = 0;
    redDot[0].style.display = "none";
    redDot[1].style.display = "none";
    redDot[2].style.display = "none";
    newNotifBackground[0].style.background = "none";
    newNotifBackground[1].style.background = "none";
    newNotifBackground[2].style.background = "none";
}