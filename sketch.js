var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
 // spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale = 0.5;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();//
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    if(invisibleBlockGroup.isTouching(ghost)){
      ghost.destroy();
    }
    if(ghost.x>500){
      ghost.x=500;
    }
    if(ghost.x<100){
      ghost.x=100;
    }
    spawnDoors();
    drawSprites();
}
function spawnDoors() {
  
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(120,400);
    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    invisibleBlock.y = door.y;

    
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

   
   
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;

    
   
    doorsGroup.add(door);
    invisibleBlock.debug = true;
    invisibleBlock.visible = false;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}
