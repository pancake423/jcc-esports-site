const NUM_ARTICLES = 1;
const NAVBAR_SELECTED_BG_COLOR = "#222222";
var elements = {};

window.addEventListener('DOMContentLoaded', (event) => {
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
    
    elements.owScheduleButton = document.getElementById("ow-schedule-selector");
    elements.r6ScheduleButton = document.getElementById("r6-schedule-selector");
    elements.rlScheduleButton = document.getElementById("rl-schedule-selector");
    elements.smScheduleButton = document.getElementById("sm-schedule-selector");
    
    elements.owSchedulePage = document.getElementById("schedule-overwatch");
    elements.r6SchedulePage = document.getElementById("schedule-rainbowsix");
    elements.rlSchedulePage = document.getElementById("schedule-rocketleague");
    elements.smSchedulePage= document.getElementById("schedule-smash");
    
    elements.owRosterPage = document.getElementById("roster-overwatch");
    elements.r6RosterPage = document.getElementById("roster-rainbowsix");
    elements.rlRosterPage = document.getElementById("roster-rocketleague");
    elements.smRosterPage= document.getElementById("roster-smash");
    
    elements.owRosterButton = document.getElementById("ow-roster-selector");
    elements.r6RosterButton = document.getElementById("r6-roster-selector");
    elements.rlRosterButton = document.getElementById("rl-roster-selector");
    elements.smRosterButton = document.getElementById("sm-roster-selector");

    buttonHome();
    getScheduleData();
    getRosterData();
    buttonShowHide(NUM_ARTICLES - 1);
});

//Button onclick functions
function buttonHome() {
    decolorNavbarButtons();
    elements.homeButton.style.backgroundColor = NAVBAR_SELECTED_BG_COLOR;
    elements.navBar.style.boxShadow = "0px 5px 5px var(--color-yellow)";
    elements.homePage.style.display = "block";

}

function buttonRosters() {
    decolorNavbarButtons();
    elements.rostersButton.style.color = "var(--color-yellow)";
    elements.rostersButton.style.backgroundColor = NAVBAR_SELECTED_BG_COLOR;
    elements.rostersPage.style.display = "block";
}

function buttonSchedule() {
    decolorNavbarButtons();
    elements.scheduleButton.style.color = "var(--color-yellow)";
    elements.scheduleButton.style.backgroundColor = NAVBAR_SELECTED_BG_COLOR;
    elements.schedulePage.style.display = "block";
}

function buttonWatch() {
    decolorNavbarButtons();
    elements.watchButton.style.color = "var(--color-yellow)";
    elements.watchButton.style.backgroundColor = NAVBAR_SELECTED_BG_COLOR;
    elements.watchPage.style.display = "block";
}
function buttonInterest() {
    decolorNavbarButtons();
    elements.interestButton.style.color = "var(--color-yellow)";
    elements.interestButton.style.backgroundColor = NAVBAR_SELECTED_BG_COLOR;
    elements.interestPage.style.display = "block";
}
function buttonOverwatchSchedule() {
    decolorScheduleIcons();
    elements.owScheduleButton.className = "icon-selected";
    elements.owSchedulePage.style.display = "block";
}
function buttonRocketleagueSchedule() {
    decolorScheduleIcons();
    elements.rlScheduleButton.className = "icon-selected";
    elements.rlSchedulePage.style.display = "block";
}
function buttonRainbowsixSchedule() {
    decolorScheduleIcons();
    elements.r6ScheduleButton.className = "icon-selected";
    elements.r6SchedulePage.style.display = "block";
}
function buttonSmashSchedule() {
    decolorScheduleIcons();
    elements.smScheduleButton.className = "icon-selected";
    elements.smSchedulePage.style.display = "block";
}
function buttonOverwatchRoster() {
    decolorRosterIcons();
    elements.owRosterButton.className = "icon-selected";
    elements.owRosterPage.style.display = "flex";
}
function buttonRocketleagueRoster() {
    decolorRosterIcons();
    elements.rlRosterButton.className = "icon-selected";
    elements.rlRosterPage.style.display = "flex";
}
function buttonRainbowsixRoster() {
    decolorRosterIcons();
    elements.r6RosterButton.className = "icon-selected";
    elements.r6RosterPage.style.display = "flex";
}
function buttonSmashRoster() {
    decolorRosterIcons();
    elements.smRosterButton.className = "icon-selected";
    elements.smRosterPage.style.display = "flex";
}
function buttonShowHide(id) {
    /*
    shows the corresponding article. ID is the index of "article-content" elements, but reversed. (zero is the last element,
    one is second to last, etc.) also flips the corresponding button from show to hide or vice versa.
    */
   let buttons = document.getElementsByClassName("show-more-less");
   let button = buttons[buttons.length - 1 - id];

   let articles = document.getElementsByClassName("article-content");
   let article = articles[articles.length - 1 - id];

   if (button.innerHTML == "Show More") {
       button.innerHTML = "Show Less";
       article.style.display = "block";
   } else {
       button.innerHTML = "Show More";
       article.style.display = "none";
   }
}
//utility functions
function addScheduleEntry(game, date, team1, t1score, team2, t2score) {
    let matchdate = document.createElement("p");
    matchdate.className = "date";
    matchdate.innerHTML = date;
    
    let teams = document.createElement("p");
    teams.className = "teams";
    teams.innerHTML = team1 + " - " + team2;

    let team1score = document.createElement("p");
    team1score.className = "score";
    team1score.innerHTML = t1score;

    let team2score = document.createElement("p");
    team2score.className = "score";
    team2score.innerHTML = t2score;

    
    let scheduleEntry = document.createElement("div");
    scheduleEntry.className = "entry";
    scheduleEntry.appendChild(matchdate);
    scheduleEntry.appendChild(team1score);
    scheduleEntry.appendChild(teams);
    scheduleEntry.appendChild(team2score);

    let parentGameElement = "";
    if (game == "overwatch") {
        parentGameElement = document.getElementById("schedule-overwatch");
    } else if (game == "rocketleague") {
        parentGameElement = document.getElementById("schedule-rocketleague");
    } else if (game == "smash") {
        parentGameElement = document.getElementById("schedule-smash");
    } else if (game == "rainbowsix") {
        parentGameElement = document.getElementById("schedule-rainbowsix");
    } else {
        return(`Unrecognized game name: '${game}'`);
    }
    parentGameElement.appendChild(scheduleEntry);
}
function addPlayerEntry(game, gamertag, realname, role, pfp="default.jpg") {
    let playerEntry = document.createElement("div");
    playerEntry.className = "player";

    let playerPfp = document.createElement("img");
    playerPfp.className = "pfp";
    playerPfp.src = "assets/" + pfp;

    let nameBlock = document.createElement("div");
    nameBlock.className = "player-name-block";

    let gamerTag = document.createElement("p");
    gamerTag.className = "gamertag";
    if (role == "captain") {
        gamerTag.innerHTML = gamertag + " ★";
    } else if (role == "sub") {
        gamerTag.innerHTML = gamertag + " ˢ";
    } else {
        gamerTag.innerHTML = gamertag;
    }

    let realName = document.createElement("p");
    realName.className = "real-name";
    realName.innerHTML = realname;

    nameBlock.appendChild(gamerTag);
    nameBlock.appendChild(realName);

    playerEntry.appendChild(playerPfp);
    playerEntry.appendChild(nameBlock);

    let parentGameElement = "";
    if (game == "overwatch") {
        parentGameElement = document.getElementById("roster-overwatch");
    } else if (game == "rocketleague") {
        parentGameElement = document.getElementById("roster-rocketleague");
    } else if (game == "smash") {
        parentGameElement = document.getElementById("roster-smash");
    } else if (game == "rainbowsix") {
        parentGameElement = document.getElementById("roster-rainbowsix");
    } else {
        return (`Unrecognized game name: '${game}'`);
    }
    parentGameElement.appendChild(playerEntry);

}
function addLabel(game, type, labelcontent) {
    let label = 0;
    if (type == "label") {
        label = document.createElement("p");
        label.innerHTML = `<b>${labelcontent}</b>`;
        label.className = "label";
    } else {
        label = document.createElement("h1");
        label.innerHTML = labelcontent;
        label.className = "label";
    }
    
    let parentGameElement = "";
    if (game == "overwatch") {
        parentGameElement = document.getElementById("schedule-overwatch");
    } else if (game == "rocketleague") {
        parentGameElement = document.getElementById("schedule-rocketleague");
    } else if (game == "smash") {
        parentGameElement = document.getElementById("schedule-smash");
    } else if (game == "rainbowsix") {
        parentGameElement = document.getElementById("schedule-rainbowsix");
    } else {
        throw Error(`Unrecognized game name: '${game}'`);
    }
    parentGameElement.appendChild(label);
}
function addGameHeader(game, labelcontent) {
    let label = document.createElement("h1");
    label.innerHTML = labelcontent;
    label.className = "label";
    
    let parentGameElement = "";
    if (game == "overwatch") {
        parentGameElement = document.getElementById("roster-overwatch");
    } else if (game == "rocketleague") {
        parentGameElement = document.getElementById("roster-rocketleague");
    } else if (game == "smash") {
        parentGameElement = document.getElementById("roster-smash");
    } else if (game == "rainbowsix") {
        parentGameElement = document.getElementById("roster-rainbowsix");
    } else {
        throw Error(`Unrecognized game name: '${game}'`);
    }
    parentGameElement.appendChild(label);
}
function getScheduleData() {
    //reads the data contained in the SCHEDULE variable
    let entries = SCHEDULE.split(";");
    for (let i = 0; i < entries.length; i++) {
        entries[i] = entries[i].split(",");
        for (let j = 0; j < entries[i].length; j++) {
            entries[i][j] = entries[i][j].trim();
        }
        let game = entries[i][0];
        if (entries[i][1] == "label" || entries[i][1] == "header") {
            //add label function
            let labelcontent = entries[i][2];
            addLabel(game, entries[i][1], labelcontent);
        } else {
            //add schedule entry function
            let date = entries[i][1];
            let team1 = entries[i][2];
            let team1score = entries[i][3];
            let team2 = entries[i][4];
            let team2score = entries[i][5];

            addScheduleEntry(game, date, team1, team1score, team2, team2score);
        }
    }
}
function getRosterData() {
    //reads the data contained in the ROSTERS variable
    let entries = ROSTERS.split(";");
    for (let i = 0; i < entries.length; i++) {
        entries[i] = entries[i].split(",");
        for (let j = 0; j < entries[i].length; j++) {
            entries[i][j] = entries[i][j].trim();
        }
        let game = entries[i][0];
        if (entries[i][1] == "header") {
            //add header function
            let labelcontent = entries[i][2];
            addGameHeader(game, labelcontent);
        } else {
            //add roster entry function
            let gamertag = entries[i][1];
            let realname = entries[i][2];
            let role = entries[i][3];
            let pfp = entries[i][4];

            addPlayerEntry(game, gamertag, realname, role, pfp);
        }
    }
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
    elements.homePage.style.display = "none";
    elements.rostersPage.style.display = "";
    elements.schedulePage.style.display = "";
    elements.watchPage.style.display = "";
    elements.interestPage.style.display = "";
}

function setCssProperty(name, value) {
    document.querySelector(':root').style.setProperty(name, value);
}
function decolorScheduleIcons() {
    elements.owScheduleButton.className = "icon";
    elements.rlScheduleButton.className = "icon";
    elements.r6ScheduleButton.className = "icon";
    elements.smScheduleButton.className = "icon";
    elements.owSchedulePage.style.display = "";
    elements.rlSchedulePage.style.display = "";
    elements.r6SchedulePage.style.display = "";
    elements.smSchedulePage.style.display = "";
}
function decolorRosterIcons() {
    elements.owRosterButton.className = "icon";
    elements.rlRosterButton.className = "icon";
    elements.r6RosterButton.className = "icon";
    elements.smRosterButton.className = "icon";
    elements.owRosterPage.style.display = "";
    elements.rlRosterPage.style.display = "";
    elements.r6RosterPage.style.display = "";
    elements.smRosterPage.style.display = "";
}