
var car, wall,speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  car = createSprite(50,200,50,50);
  car.debug = true;
  car.shapeColor = "green";
  car.velocityX = 3;

  wall = createSprite(1500,200,60,height/2)
  wall.debug = true;
  wall.shapeColor = "black";
}

function draw() {
  background(255,255,255);  

  car.velocityX = 3;

   isTouching();

   if(car.isTouching(wall)){
     car.velocityX = 0;
     car.velocityY = 0;

   }

    
  

  if (wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;

    if (deformation >180){
      car.shapeColor=color(255,0,0);
    }

    if (deformation <180 && deformation>100){
      car.shapecolor=color(230,230,0);
    }

    if (deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }

  



  drawSprites();
}

//Making the is touching command
function isTouching(car, wall){

  if (wall.x - car.x <(wall.width + car.width)/2 && car.x - wall.x <(wall.width + car.width) /2
  && wall.y - car.y <(wall.height + car.height)/2 && car.y - wall.y <(car.height + wall.height) /2){

   return true;

  }
else {return false};

}