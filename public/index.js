const NAVBAR_SELECTED_BG_COLOR = "#222222";
var elements = {};

window.onload = function() {
    let navbuttons = document.getElementsByClassName("navbar-button");
    elements.rostersButton = navbuttons[0];
    elements.scheduleButton = navbuttons[1];
    elements.watchButton = navbuttons[2];
    elements.interestButton = navbuttons[3];
    elements.homeButton = document.getElementsByClassName("home-logo-button")[0];
    elements.navBar = document.getElementById("navbar");
    elements.homePage = document.getElementById("home");
    elements.rostersPage = document.getElementById("rosters");
    elements.schedulePage = document.getElementById("schedule");
    elements.watchPage = document.getElementById("watch");
    elements.interestPage = document.getElementById("interest-form");

    buttonHome();
}

//Button onclick functions
function buttonHome() {
    console.log("home button pressed!");
    decolorNavbarButtons();
    elements.homeButton.style.backgroundColor = NAVBAR_SELECTED_BG_COLOR;
    elements.navBar.style.boxShadow = "0px 5px 5px var(--color-yellow)";
    elements.homePage.style.display = "block";

}

function buttonRosters() {
    console.log("rosters button pressed!");
    decolorNavbarButtons();
    elements.rostersButton.style.color = "var(--color-yellow)";
    elements.rostersButton.style.backgroundColor = NAVBAR_SELECTED_BG_COLOR;
    elements.rostersPage.style.display = "block";
}

function buttonSchedule() {
    console.log("schedule button pressed!");
    decolorNavbarButtons();
    elements.scheduleButton.style.color = "var(--color-yellow)";
    elements.scheduleButton.style.backgroundColor = NAVBAR_SELECTED_BG_COLOR;
    elements.schedulePage.style.display = "block";
}

function buttonWatch() {
    console.log("watch button pressed!");
    decolorNavbarButtons();
    elements.watchButton.style.color = "var(--color-yellow)";
    elements.watchButton.style.backgroundColor = NAVBAR_SELECTED_BG_COLOR;
    elements.watchPage.style.display = "block";
}
function buttonInterest() {
    console.log("interest form button pressed!");
    decolorNavbarButtons();
    elements.interestButton.style.color = "var(--color-yellow)";
    elements.interestButton.style.backgroundColor = NAVBAR_SELECTED_BG_COLOR;
    elements.interestPage.style.display = "block";
}

//misc. functions
function decolorNavbarButtons() {
    elements.rostersButton.style.color = "";
    elements.scheduleButton.style.color = "";
    elements.watchButton.style.color = "";
    elements.interestButton.style.color = "";
    elements.rostersButton.style.backgroundColor = "";
    elements.scheduleButton.style.backgroundColor = "";
    elements.watchButton.style.backgroundColor = "";
    elements.interestButton.style.backgroundColor = "";
    elements.homeButton.style.backgroundColor = "";
    elements.navBar.style.boxShadow = "";
    elements.homePage.style.display = "";
    elements.rostersPage.style.display = "";
    elements.schedulePage.style.display = "";
    elements.watchPage.style.display = "";
    elements.interestPage.style.display = "";
}

function setCssProperty(name, value) {
    document.querySelector(':root').style.setProperty(name, value);
}