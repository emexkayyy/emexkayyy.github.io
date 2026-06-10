const button = document.getElementById("hoome");

button.addEventListener("click", () => {
    open("/hoome/hoome.html", "_self")
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello");
});