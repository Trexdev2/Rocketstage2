var rocket, asteroid, star, rocket_img, asteroid_img, star_img;
var sound1;
var ground;
var sky, sky_img;


function preload(){
  rocket_img=loadImage("rocket.png");
  asteroid_img=loadImage("asteroid.png");
  star_img=loadImage("star.png");
  sound1=loadSound("countdown.mp3");
  sky_img=loadImage("lightsky.jpg");
  
}

function setup() {
  createCanvas(1600,1600);

  sky=createSprite(800,750,1600,1600);
  sky.addImage("sky", sky_img);
  sky.scale=4.7;
  sky.velocityY=-5;

  rocket=createSprite(750,1550,50,50);
  rocket.addImage("rocket", rocket_img);
  rocket.scale=0.2;

  ground=createSprite(750,1600,1600,50);
  ground.shapeColor="brown";
  
}

function draw() {
 background("lightblue");
  if (keyDown("q")){
    sound1.loop();  
  }
  if (keyDown("e")){
    rocket.velocityY=-5;
  }
  if (sky.y<0){
    sky.y=sky.height/2;
  }

  
  
  drawSprites();
}

function spawnStars(){

}

function spawnAsteroids(){
  
}





