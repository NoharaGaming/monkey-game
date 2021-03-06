
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 500);
  monkey = createSprite(50,160,450,70);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2
  monkey.x = 70
  monkey.y = 400
   monkey.velocityY = 0
  ground = createSprite(300,470,600,20);
  
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
    score = 0;
}


function draw() {
background("orange")
  text("Survival Time: "+ score, 250,50);
  
  if(keyDown("space")&& monkey.y >= 370) {
        monkey.velocityY = -20;
  }
    score = score + Math.round(frameCount/100);
      //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  
    obstaclesGroup.debug = true
   
  //spawn the clouds
    spawnBananas();
 spawnObstacle();
  monkey.debug = true
  monkey.collide(obstaclesGroup);
  monkey.collide(ground);
  drawSprites();
}

function spawnBananas() {
  //write code here to spawn the bananas
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
  FoodGroup.add(banana);
  }
}



function spawnObstacle() {
  //write code here to spawn the bananas
  if (frameCount % 180 === 0) {
    var obstacle = createSprite(600,420,40,10);
     
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
   obstacle.velocityX = -6;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
  
    
    //add each banana to the group
  obstaclesGroup.add(obstacle);
  }
}




