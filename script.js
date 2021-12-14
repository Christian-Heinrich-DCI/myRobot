// Größe des "Spielfeldes" und eines Raster-Feldes
const width = 900;
const height = 500;
const gridSize = 50;

// Startwerte
const startX = 0;
const startY = 0;
const startView = "east";

// Robot-Objekt
const bot = {
  posX: startX,
  posY: startY,
  // Blick-Richtung (north, east, south, west)
  view: startView,
};

// Move robot one step in direction it is "looking"
function move() {
  if (bot.view == "north" && bot.posY >= gridSize) {
    bot.posY -= gridSize;
  } else if (bot.view == "east" && bot.posX <= width - gridSize) {
    bot.posX += gridSize;
  } else if (bot.view == "south" && bot.posY <= height - gridSize) {
    bot.posY += gridSize;
  } else if (bot.view == "west" && bot.posX >= gridSize) {
    bot.posX -= gridSize;
  } else {
    console.log("ERROR... illegal move!");
  }
  update(); // Nur für Programmierung
}

// rotates robot 90° clockwise
function rotate() {
  if (bot.view == "north") {
    bot.view = "east";
  } else if (bot.view == "east") {
    bot.view = "south";
  } else if (bot.view == "south") {
    bot.view = "west";
  } else if (bot.view == "west") {
    bot.view = "north";
  } else {
    console.log("ERROR... illegal rotation!");
  }
  update(); // Nur für Programmierung
}

function reset() {
  bot.posX = startX;
  bot.posY = startY;
  bot.view = startView;
  update(); // Nur für Programmierung
}

// Nur für Programmierung
function update() {
  document.getElementById("posX").innerHTML = bot.posX;
  document.getElementById("posY").innerHTML = bot.posY;
  document.getElementById("view").innerHTML = bot.view;
}
