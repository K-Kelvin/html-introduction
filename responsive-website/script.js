const toggleBtn = document.getElementById("toggle-menu");

function toggleNavigationMenu() {
    const navigationMenu = document.querySelector("aside.left");
    navigationMenu.classList.toggle("hidden");
}

function closeNavigationMenu() {
    const navigationMenu = document.querySelector("aside.left");
    navigationMenu.classList.add("hidden");
}

toggleBtn.onclick = toggleNavigationMenu;
