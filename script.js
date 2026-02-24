const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

// load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeSwitch.checked = true;
}

//Toggle theme on switch change
themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
        body.classList.add("dark")
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});