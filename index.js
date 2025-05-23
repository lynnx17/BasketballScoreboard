const scoreGuestEl = document.getElementById("scorenguest");
const scoreHomeEl  = document.getElementById("scorenhome");
let scoreGuest = 0;

function plusEenGuest() {
  scoreGuest += 1;
  updateGuestDisplay();
}

function plusTweeGuest() {
  scoreGuest += 2;
  updateGuestDisplay();
}

function plusDrieGuest() {
  scoreGuest += 3;
  updateGuestDisplay();
}

function updateGuestDisplay() {
  scoreGuestEl.textContent = scoreGuest;
}

function saveGuest() {
  scoreHomeEl.textContent = scoreGuest;
}

let scoreHome = 0;

function plusEenHome() {
  scoreHome += 1;
  updateHomeDisplay();
}

function plusTweeHome() {
  scoreHome += 2;
  updateHomeDisplay();
}

function plusDrieHome() {
  scoreHome += 3;
  updateHomeDisplay();
}

function updateHomeDisplay() {
  scoreHomeEl.textContent = scoreHome;
}

function saveHome() {
  scoreHomeEl.textContent = scoreHome;
}

function reset() {
  scoreGuest = 0;
  scoreHome = 0;
  updateGuestDisplay();
  updateHomeDisplay();
}
