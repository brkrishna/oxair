function toggleMenuDropdown() {
    var menu = document.getElementById("menuItemstwo");
    menu.classList.toggle("hidden");
}

function toggleDropdownnext(id) {
var dropdownContent = document.getElementById(id);
dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";
}