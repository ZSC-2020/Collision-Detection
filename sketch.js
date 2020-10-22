var box1,box2;
function setup() {
  createCanvas(1200,1200);
box1 =  createSprite(600, 600, 100, 100);
box2 =  createSprite(600, 300, 100, 100);
 box1.shapeColor="pink";
 box2.shapeColor="blue";

 box2.debug=true
 box1.debug=true
}

function draw() {
  background(255,255,0); 
  box1.x=World.mouseX;
  box1.y=World.mouseY;
  if(box1.x-box2.x<box1.width/2+box2.width/2 
    &&box2.x-box1.x<box1.width/2+box2.width/2
    && box1.y-box2.y<box1.height/2+box2.height/2
    &&box2.y-box1.y<box1.height/2+box2.height/2){
    box1.shapeColor="green";
    box2.shapeColor="purple";
  }
else {
  box1.shapeColor="pink";
  box2.shapeColor="blue";
}
  drawSprites();
}