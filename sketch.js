
var m
var p

function setup() {
  createCanvas(800,400);
  
  m=createSprite(400, 200, 50, 50);
  m.shapeColor= "teal";

  p=createSprite(200, 300, 50, 50);
  p.shapeColor= "blue";
}

function draw() {
  background("purple"); 
  
  p.x = mouseX;
  p.y = mouseY;

  if(m.x-p.x<m.width/2+p.width/2
    &&p.x-m.x<p.width/2+m.width/2
    &&m.y-p.y<m.height/2+p.height/2
    &&p.y-m.y<p.height/2+m.height/2){
    m.shapeColor = "orange";
    p.shapeColor = "orange";
  }
else{
  m.shapeColor = "teal";
    p.shapeColor = "blue";
}
  drawSprites();
}
