var tom, tomImage, jerry, jerryImage;

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
  jerry = createSprite(400,100,50,80);
  jerry.shapeColor = "green";
  jerry.debug = true;
  jerry.velocityY = 5;
}

function draw() {
  background(0);  
  
  

  if(fixedRect.x - tom.x < jerry.width/2 + tom.width/2
    && tom.x - jerry.x < tom.width/2 + jerry.width/2){
      tom.velocityX = tom.velocityX *(-1);
      jerry.velocityX = jerry.velocityX *(-1);
    }
  if( jerry.y - tom.y < jerry.height/2 + tom.height/2
    && tom.y - jerry.y < tom.height/2 + jerry.height/2){
      tom.velocityY = tom.velocityY *(-1);
      jerry.velocityY = jerry.velocityY *(-1);
    }
    

    
  
  drawSprites();

  
}
