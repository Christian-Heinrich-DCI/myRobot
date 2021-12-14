// Größe des "Spielfeldes" und eines Raster-Feldes
const width = 900;
const height = 500;
const gridSize = 50;

const cursorColor = "#1DE9B6";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.fillStyle = cursorColor;

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
  } else if (bot.view == "east" && bot.posX <= width - 2 * gridSize) {
    bot.posX += gridSize;
  } else if (bot.view == "south" && bot.posY <= height - 2 * gridSize) {
    bot.posY += gridSize;
  } else if (bot.view == "west" && bot.posX >= gridSize) {
    bot.posX -= gridSize;
  } else {
    console.log("ERROR... illegal move!");
  }
  update();
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
  update();
}

function reset() {
  bot.posX = startX;
  bot.posY = startY;
  bot.view = startView;
  update();
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("posX").innerHTML = bot.posX;
  document.getElementById("posY").innerHTML = bot.posY;
  document.getElementById("view").innerHTML = bot.view;
  context.fillRect(bot.posX, bot.posY, gridSize, gridSize);
  //   drawView();
}

function drawView() {
  ctx.beginPath();
  ctx.moveTo(bot.posX + gridSize / 2, bot.posY + gridSize / 2);
  ctx.lineTo(bot.posX + gridSize / 2, bot.posY);
  // context.fillStyle = "#000";
  ctx.stroke();
  // context.fillStyle = cursorColor;
}

update();
