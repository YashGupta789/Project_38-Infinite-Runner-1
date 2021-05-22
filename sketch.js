var fuelLeft=1000;
var rocket, rocketImage;
var fuel,planets,astroid;
var bg, world, gameOver;
var gameState = "start";

function preload(){
    bg = loadImage("b.jpg");
}

function setup(){
  createCanvas(displayWidth,displayHeight-110);

  rocket = createSprite(800,500,120,120);
  rocket.shapeColor = rgb(0,255,255);

  fuelGroup = createGroup();
  astroidGroup = createGroup();
  planetGroup = createGroup();

}

function draw(){
  background(43,58,138);

  camera.position.x = displayWidth/2;
  camera.position.y = rocket.y;

  image(bg,0,-displayHeight*4,displayWidth,displayHeight*5);

  push();
  fill(255,0,0);
  textSize(25);
  text("Fuel Left : "+fuelLeft,100,camera.position.y-300);
  pop();

  if(gameState === "start"){
      if(keyIsDown(UP_ARROW)){
        rocket.y = rocket.y-6;
      }

      if(keyIsDown(LEFT_ARROW)){
        rocket.x = rocket.x-6;
      }

      if(keyIsDown(RIGHT_ARROW)){
        rocket.x = rocket.x+6;
      }

      fuels();
      astroids();
      planets();
    }

  if(rocket.isTouching(fuelGroup)){
     console.log("Rockets Have Touched Fuel");
     fuelLeft = fuelLeft+200;
     fuelGroup.destroyEach();
    }

  if(fuelLeft===0){
     gameState = "end";
   } 

  if(rocket.isTouching(astroidGroup)){
     console.log("Rockets Have Touched Astroids");
     gameState = "end";
   }

  if(rocket.isTouching(planetGroup)){
     console.log("Rocket Have Touched Planets");
     gameState = "end";
  }

  drawSprites();
}

function fuels(){
  fuel = createSprite(-600,-300,50,50);
  fuel.shapeColor= rgb(210, 161, 62);
  if(frameCount%200===0){
     fuel.x = random(300,1500);
     fuel.y = camera.position.y-500;
  }
  fuelGroup.add(fuel);
  if(fuel.y>camera.position.y+500){
     fuel.destroy();
  }
}

function astroids(){
  astroid = createSprite(-500,-100,80,80);
  astroid.shapeColor= rgb(0, 0, 0);
  if(frameCount%80===0){
     astroid.x = random(300,1500);
     astroid.y = camera.position.y-500;
  }
  astroidGroup.add(astroid);
  if(astroid.y>camera.position.y+500){
    astroid.destroy();
 }
}

function planets(){
  planet = createSprite(-400,0,100,100);
  planet.shapeColor= rgb(50, 0, 255);
  if(frameCount%150===0){
     planet.x = random(300,1400);
     planet.y = camera.position.y-500;
  }
  planetGroup.add(planet);
  if(planet.y>camera.position.y+500){
    planet.destroy();
 }
}
