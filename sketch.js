
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
monkey=createSprite(100,300,30,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  monkey.lifetime=-1;
  
  ground=createSprite(400,350,1000,10);
  ground.velocityX=-4;
  ground.lifetime=-1;

FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  score=0;
}

function draw() {
background('white');
  Food();
  obstacle();
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  if(keyDown("space")&&monkey.y>100){
    monkey.velocityY=-12;
  }
  textSize(20);
  score=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+score,100,50);
  drawSprites();
}
function Food(){
  if(frameCount%80==0){
  banana=createSprite(400,180,20,20);
    banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
 banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=-1;
    FoodGroup.add(banana);
}
}

function obstacle(){
  if(frameCount%300==0){
 var obstacle=createSprite(400,310,30,30);
    obstacle.velocityX=-4;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.lifetime=-1;
    obstacleGroup.add(obstacle);
  }
}