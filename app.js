const readButton = document.getElementById("read-btn");
const notifNumber = document.getElementById("three");
console.log(readButton);

readButton.addEventListener("click", markAsRead);

function markAsRead() {
    notifNumber.innerHTML = 0;
}