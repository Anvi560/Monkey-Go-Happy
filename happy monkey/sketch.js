
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
   monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
   bananaImage = loadImage("banana.png");
   obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,370);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;  
}


function draw() {
  background(255);
  
  if(keyDown("space") && monkey.y >= 190){
     monkey.velocityY = -12;
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x < 150){
    ground.x = width/2;
     }
  
  monkey.collide(ground);
  
 food();
 obstacles();
 drawSprites(); 
  
  var survivalTime = 0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score :" + score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalYime = Math.ceil(frameCount/frameRate());
  text("Survival Time :" + survivalTime,100,50);
}

function food(){
  if(frameCount % 80 == 0){
  banana = createSprite(400,180,10,40);
  banana.y = Math.round(random(120,220));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -4;
  banana.lifetime = 180;
 } 
}

function obstacles(){
  if(frameCount % 300 == 0){
  obstacle = createSprite(400,320,10,40);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;
  obstacle.velocityX = -4;
  obstacle.lifetime = 180;
 } 
}













