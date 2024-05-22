function toggleMenu() {
    var menu = document.getElementById("menuItems");
    menu.classList.toggle("hidden");
}

function toggleDropdown(id) {
var dropdownContent = document.getElementById(id);
dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";
}