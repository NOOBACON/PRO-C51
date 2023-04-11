var direção, player, enemyG, coin, playerCoin;
var coinImg, playerImg, minionImg, minion2Img, runnerImg; 
var heavyImg, miniBossImg, miniBossHeavyImg, bossImg;
var shoot, shootG, wave = 1;
function setup() {
  createCanvas(windowWidth,windowHeight);
  playerImg = loadImage("assets/player.png");
  minionImg = loadImage("assets/minion.png");
  minion2Img = loadImage("assets/minion_v2.png");
  runnerImg = loadImage("assets/runner.png");
  heavyImg = loadImage("assets/heavy.png");
  player = createSprite(width/15, height/2, width/20 ,width/20);
  direção = createSprite(width/2, height/2, 50 ,50);
  shootG = new Group()
}

function draw() {
  background(0,50,150);  
  
  player.addImage("player", playerImg);
  player.scale = 0.3;
  
  //direção.visible = false
  if(keyDown("UP") && direção.y > 50){
    direção.y = direção.y - 15;
  }
  if(keyDown("DOWN") && direção.y < height-50){
    direção.y = direção.y + 15;
  }
  player.velocityY = (direção.y - player.y)/12
  if(keyWentDown("SPACE")){
    shoot = createSprite(player.x+100,player.y,10,10);
    shoot.shapeColor = rgb(50,150,255); 
    shoot.velocityX = 8;
    shoot.lifetime = 400;
    shootG.add(shoot);
  }
  drawSprites();
}