function setup() {
  createCanvas(480,800);
 //createSprite(400, 200, 50, 50);
  ground=new Ground(240,700,400,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}