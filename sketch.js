var bullet, weight, speed;
var wall, thickness;

function setup() {
  createCanvas(1000,400);
  wall = createSprite(800, 200, width, height);
  bullet = createSprite(100,100,30,10);
  bullet.shapeColor = "white";
  wall.width = 20;
  wall.height = 300;
  
}

function draw() {
  background(80,80,80);
  
  wallThickness = random(20, 80);
  bulletSpeed = random(220, 320);
  bulletWeight = random(50, 120);
  bullet.velocityX = 5;

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(wallThickness*wallThickness*wallThickness);
  }
  
  if (damage >= 10) {
    wall.shapeColor = "red";  
}    

if (damage < 12.43 && damage > 3.68) {
  wall.shapeColor = "yellow";
}

if (damage <= 3.68) {
  wall.shapeColor = "green"
}     
  
  drawSprites();
}