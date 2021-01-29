var tom, tomImage, fixedRect, jerryImage;

function preload(){
  
  tomImage = loadImage("tomOne.png");
  jerryImage = loadImage("jerryOne.png");
}

function setup() {
  createCanvas(1200,800);
  tom = createSprite(400, 800, 80, 30);
  tom.addImage(tomImage);   
  tom.debug = true;  
  tom.velocityY = -5;                                                                                                                                                                                                                                                              
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0);  
  
  

  if(fixedRect.x - tom.x < fixedRect.width/2 + tom.width/2
    && tom.x - fixedRect.x < tom.width/2 + fixedRect.width/2){
      tom.velocityX = tom.velocityX *(-1);
      fixedRect.velocityX = fixedRect.velocityX *(-1);
    }
  if( fixedRect.y - tom.y < fixedRect.height/2 + tom.height/2
    && tom.y - fixedRect.y < tom.height/2 + fixedRect.height/2){
      tom.velocityY = tom.velocityY *(-1);
      fixedRect.velocityY = fixedRect.velocityY *(-1);
    }
    

    
  
  drawSprites();

  
}