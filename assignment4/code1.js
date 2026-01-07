function swapTheme() {
    const app = document.getElementById("app");
    const swapButton = document.getElementById("swap");

    if (app.className === "day") {
        app.className = "night";
        swapButton.className = "button_night";
    } else {
        app.className = "day";
        swapButton.className = "button_day";
    }
}