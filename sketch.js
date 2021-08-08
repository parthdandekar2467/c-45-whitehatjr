var background1, background2, background3, background4, satellite1_up, satellite2_down, satellite3_right, satellite4_left;
var earth, jupiter, callisto, earth1;

var allPlayers, playerCount;
var player, game, form;
var satellite, jupiter, callisto, pluto, sun, sun_image, blackHole, blackhole_image;

var asteroid1, asteroid2, asteroid3, asteroid4, asteroid5

var database;

var gameState = 0;
var playerCount = 0;
var distanceX = 0;
var distanceY = 0;


function preload()
{
  background1 = loadImage("images/Dbg1.jpg");
  background2 = loadImage("images/Dbg2.jpg");
  background3 = loadImage("images/Dbg3.jpg");
  background4 = loadImage("images/Dbg4_long.jpg");

  satellite1_up = loadImage("images/satellite_image.png");
  satellite2_down = loadImage("images/satellite_down.jpg");
  satellite3_right = loadImage("images/satellite_right.jpg");
  satellite4_left = loadImage("images/satellite_left.jpg");

  satellite11_up = loadImage("images/satellite2_up.png");
  satellite22_down = loadImage("images/satellite2_down.png");
  satellite33_right = loadImage("images/satellite2_right.png");
  satellite44_left = loadImage("images/satellite2_left.png");

  jupiter_image = loadAnimation("images/jupiter.gif");
  callisto_image = loadAnimation("images/callisto.jpg");
  pluto_image = loadAnimation("images/pluto_planet.gif");

  earth = loadAnimation("images/earth.gif");
  sun_image = loadAnimation("images/sun7.gif");

  blackhole_image = loadAnimation("images/blackholeimage.gif");
}

function setup() {
  createCanvas(1480,displayHeight);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  //createSprite(400, 200, 50, 50);

  /*earth1 = createSprite(300, 740, 10, 10);
  earth1.addImage(earth);
  earth1.scale = 0.1;
  

  sat = createSprite(300, 700, 10, 10);
  sat.addImage(satellite1_up);
  sat.scale = 0.3;*/
        satellite = createSprite(displayWidth/2, 200, 10, 10);
        satellite.addAnimation("satellite_spinning", satellite1_up);
        satellite.scale = 0.3;
        

 
}

function draw()
{

  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  
  
  
  //console.log(satellite.x)
  //console.log(satellite.y)
  drawSprites();
}