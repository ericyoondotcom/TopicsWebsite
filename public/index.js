const themelink = document.getElementById("theme-link");
const togglecheckbox = document.getElementById("toggle-checkbox");

function toggleTheme() {
    themelink.setAttribute("href", togglecheckbox.checked ? "themes/retro.css" : "themes/modern.css");
}
