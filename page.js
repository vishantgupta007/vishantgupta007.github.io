// for toggling dark-mode
const navBar = document.querySelector(".nav-links");
const themeMode = document.querySelector(".toggle-mode");

themeMode.addEventListener("click", () => {
	document.body.classList.toggle("dark");
});

const crossBar = document.querySelector(".cross");

// for opening side-bar

const bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
	navBar.classList.add("open-menu");
	bars.style.display = "none";
	crossBar.style.display = "block";
});

// for opening closing side-bar

crossBar.addEventListener("click", () => {
	navBar.classList.remove("open-menu");
	bars.style.display = "block";
	crossBar.style.display = "none";
});
