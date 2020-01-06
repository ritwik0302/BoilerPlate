var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 50);
fixedRect.shapeColor= "red";
fixedRect.debug=true;
movingRect=createSprite(200,200,150,150);
movingRect.shapeColor= "yellow";
movingRect.debug=true;


  
}


  
function draw() {
  background(0);  
movingRect.y=World.mouseY;
movingRect.x=World.mouseX;
if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor= "red";
  fixedRect.shapeColor= "yellow";

 
}

else{
  movingRect.shapeColor= "yellow";
  fixedRect.shapeColor= "red";
}
  drawSprites();

}

function isTouching (object1, object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2&&
    object2.y-object1.y<object1.height/2+object2.height/2&&
    object1.y-object2.y<object1.height/2+object2.height/2){

      return true;

    }
  
  else {
    return false;

  }
}

