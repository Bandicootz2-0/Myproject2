
var stickman,stickmanAnimation;
var boxes, spikes;
var ground;


function preload() {
  backgroundImage = loadImage("./assets/bg.png");
  stickmanAnimation= loadAnimation("./assets/S1.png", "./assets/S2.png", "./assets/S3.png", "./assets/S4.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  stickman= createSprite(60, height-100);
  stickman.addAnimation("stick", stickmanAnimation);
  stickman.scale= 0.65;

  ground= createSprite(60,height-20,width,10);
  
}

function draw() {
  background("yellow");
  
  spawnBoxes();

  stickman.collide(ground);

  if(keyDown("space")) {
    stickman.velocity.y= -10;
    console.log("hi");
  }
  stickman.velocity.y+=0.5;

  drawSprites();
}


function spawnBoxes() {
  if(frameCount%300 == 0) {
    boxes= createSprite(width+10, height-80);
    boxes.velocity.x= -2;
    boxes.lifetime= 800;
  }
}