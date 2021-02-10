var garden,gardenImage,cat,catImage,catImage2,catImage3;
var mouse,mouseImage,mouseImage2,mouseImage3,edge;

function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");

    catImage = loadImage("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage3 = loadImage("images/cat4.png");
    
    mouseImage = loadImage("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
    
    garden = createSprite(400,300);
    garden.addImage(gardenImage);
    garden.scale = 1;

    cat = createSprite(700,550,20,20)
    cat.addImage(catImage);
    cat.scale = 0.1;

    mouse = createSprite(100,550,20,20);
    mouse.addImage(mouseImage);
    mouse.scale = 0.1;

    edge = createSprite(80,550,20,70);
    

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    edge.visible = false;

    if(cat.isTouching(edge)){
        coloide();
    }

      keyPressed()
    drawSprites();

}

function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImage2);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouse",mouseImage2);
      mouse.changeAnimation("mouse");
  }

}

function coloide(){
    cat.addAnimation("cat",catImage3);
    cat.changeAnimation("cat");
    cat.velocityX = 0;

    mouse.addAnimation("mouse_finding",mouseImage3);
    mouse.changeAnimation("mouse_finding");
}