const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pacImg;
var pacman;
var g1, g2, g3, g4, maze ;
var f1, f2, f3, f4, f5, f6;
var score=0;
var gameState = 0;
var gameOver;

function preload(){
    pacImg = loadImage("Pacman.jpg");
    pac2Img = loadImage("Pacman2.jpg")
    ghost1 = loadImage("ghost1.png");
    ghost2 = loadImage("ghost2.png");
    ghost3 = loadImage("ghost4.png");
    ghost4 = loadImage("ghost3.png");
    fruit1 = loadImage("apple.png");
    fruit2 = loadImage("banana.png");
    fruit3 = loadImage("blueberry.png");
    fruit4 = loadImage("cherry.png");
    fruit5 = loadImage("strawberry.png");
    fruit6 = loadImage("orange.png");
    done = loadImage("gameOver.png");
}

function setup(){
   createCanvas(1100,500);
   edges = createEdgeSprites();
   engine = Engine.create();
   world = engine.world;

   gameOver=createSprite(550,250,30,30);
   gameOver.shapeColor = "black";

   pacman = createSprite(50,40,20,20);
   pacman.addImage("pacImg", pac2Img);
   pacman.scale= 0.05;

   g1 = createSprite(1000,400,40,40);
   g1.addImage(ghost1);
   g1.scale=0.1;
   g1.velocityX = 4;
   g1.velocityY= -4;

   g2 = createSprite(630,50,40,40);
   g2.addImage(ghost2);
   g2.scale=0.15;
   g2.velocityX= 3;
   g2.velocityY= -4;

   g3 = createSprite(80,460,40,40);
   g3.addImage(ghost3);
   g3.scale=0.042;
   g3.velocityX = 3;
   g3.velocityY= -2;

   g4 = createSprite(550,450,40,40);
   g4.addImage(ghost4);
   g4.scale=0.05;
   g4.velocityX = -4;
   g4.velocityY= 2;

   f1 = createSprite(530,320,30,30);
   f1.addImage(fruit1);
   f1.scale= 0.09;

   f2 = createSprite(400,40,30,30);
   f2.addImage(fruit2);
   f2.scale=0.15;

   f3 = createSprite(90,450,30,30);
   f3.addImage(fruit3);
   f3.scale=0.35;
   
   f4 = createSprite(650,40,30,30);
   f4.addImage(fruit4);
   f4.scale=0.12;

   f5 = createSprite(1000,450,30,30);
   f5.addImage(fruit5);
   f5.scale=0.08;

   f6 = createSprite(800,260,30,30);
   f6.addImage(fruit6);
   f6.scale=0.12;

   

   m1= createSprite(0,70,200,20);
   m1.shapeColor="blue";
   m2 = createSprite(280,70,200,20);
   m2.shapeColor="blue";
   m3 = createSprite(480,60,20,120);
   m3.shapeColor="blue";
   m4 = createSprite(590,0,20,220);
   m4.shapeColor="blue";
   m5 = createSprite(730,100,290,20);
   m5.shapeColor="blue";
   m6 = createSprite(865, 150, 20,100);
   m6.shapeColor="blue";
   m7 = createSprite(890,190,160,20);
   m7.shapeColor="blue";
   m8 = createSprite(200,180,200,20);
   m8.shapeColor="blue";
   m9 = createSprite(240,350,20,180);
   m9.shapeColor="blue";
   m10 = createSprite(560,415,350,20);
   m10.shapeColor="blue";
   m11 = createSprite(670,260,20,170);
   m11.shapeColor="blue";
   m12 = createSprite(100,350,70,70);
   m12.shapeColor="blue";
   m14 = createSprite(900,330,200,20);
   m14.shapeColor="blue";
   m15= createSprite(350,270,200,20);
   m15.shapeColor="blue";
   


}

function draw(){
    background(0);

if(gameState===0){
    pacman.bounceOff(edges[0]);
    pacman.bounceOff(edges[1]);
    pacman.bounceOff(edges[2]);
    pacman.bounceOff(edges[3]);
    pacman.bounceOff(m1);
    pacman.bounceOff(m2);
    pacman.bounceOff(m3);
    pacman.bounceOff(m4);
    pacman.bounceOff(m5);
    pacman.bounceOff(m6);
    pacman.bounceOff(m7);
    pacman.bounceOff(m8);
    pacman.bounceOff(m9);
    pacman.bounceOff(m10);
    pacman.bounceOff(m11);
    pacman.bounceOff(m12);
    pacman.bounceOff(m14);
    pacman.bounceOff(m15);
     
    g1.bounceOff(edges[0]);
    g1.bounceOff(edges[1]);
    g1.bounceOff(edges[2]);
    g1.bounceOff(edges[3]);
    g1.bounceOff(m1);
    g1.bounceOff(m2);
    g1.bounceOff(m3);
    g1.bounceOff(m4);
    g1.bounceOff(m5);
    g1.bounceOff(m6);
    g1.bounceOff(m7);
    g1.bounceOff(m8);
    g1.bounceOff(m9);
    g1.bounceOff(m10);
    g1.bounceOff(m11);
    g1.bounceOff(m12);
    g1.bounceOff(m14);
    g1.bounceOff(m15);

    g2.bounceOff(edges[0]);
    g2.bounceOff(edges[1]);
    g2.bounceOff(edges[2]);
    g2.bounceOff(edges[3]);
    g2.bounceOff(m1);
    g2.bounceOff(m2);
    g2.bounceOff(m3);
    g2.bounceOff(m4);
    g2.bounceOff(m5);
    g2.bounceOff(m6);
    g2.bounceOff(m7);
    g2.bounceOff(m8);
    g2.bounceOff(m9);
    g2.bounceOff(m10);
    g2.bounceOff(m11);
    g2.bounceOff(m12);
    g2.bounceOff(m14);
    g2.bounceOff(m15);

    g3.bounceOff(edges[0]);
    g3.bounceOff(edges[1]);
    g3.bounceOff(edges[2]);
    g3.bounceOff(edges[3]);
    g3.bounceOff(m1);
    g3.bounceOff(m2);
    g3.bounceOff(m3);
    g3.bounceOff(m4);
    g3.bounceOff(m5);
    g3.bounceOff(m6);
    g3.bounceOff(m7);
    g3.bounceOff(m8);
    g3.bounceOff(m9);
    g3.bounceOff(m10);
    g3.bounceOff(m11);
    g3.bounceOff(m12);
    g3.bounceOff(m14);
    g3.bounceOff(m15);

    g4.bounceOff(edges[0]);
    g4.bounceOff(edges[1]);
    g4.bounceOff(edges[2]);
    g4.bounceOff(edges[3]);
    g4.bounceOff(m1);
    g4.bounceOff(m2);
    g4.bounceOff(m3);
    g4.bounceOff(m4);
    g4.bounceOff(m5);
    g4.bounceOff(m6);
    g4.bounceOff(m7);
    g4.bounceOff(m8);
    g4.bounceOff(m9);
    g4.bounceOff(m10);
    g4.bounceOff(m11);
    g4.bounceOff(m12);
    g4.bounceOff(m14);
    g4.bounceOff(m15);

    g1.bounce(g2);
    g1.bounce(g3);
    g1.bounce(g4);
    g2.bounce(g1);
    g2.bounce(g4);
    g2.bounce(g3);
    g3.bounce(g1);
    g3.bounce(g2);
    g3.bounce(g4);
    g4.bounce(g1);
    g4.bounce(g2);
    g4.bounce(g3);

    pacman.bounceOff(f1);
    pacman.bounceOff(f2);
    pacman.bounceOff(f3);
    pacman.bounceOff(f4);
    pacman.bounceOff(f5);
    pacman.bounceOff(f6);

  

    if(keyDown(LEFT_ARROW)){
       pacman.addImage("pacImg", pacImg);
        pacman.x = pacman.x - 4; }
    
    if(keyDown(RIGHT_ARROW)){
        pacman.addImage("pac2Img", pac2Img);
        pacman.x = pacman.x + 4; }
        
    if(keyDown(UP_ARROW)){
        pacman.addImage("pac2Img", pac2Img);
        pacman.y = pacman.y - 4; }

    if(keyDown(DOWN_ARROW)){
        pacman.addImage("pac2Img", pac2Img);
        pacman.y = pacman.y + 4; }
    

    if(pacman.isTouching(f1)){
        score = score + 150;
        f1.destroy();}

    if(pacman.isTouching(f2)){
        score = score + 200;
        f2.destroy();}

    if(pacman.isTouching(f3)){
        score = score + 150;
        f3.destroy();}

    if(pacman.isTouching(f4)){
        score = score + 200;
        f4.destroy();}

    if(pacman.isTouching(f5)){
        score = score + 100;
        f5.destroy();}

    if(pacman.isTouching(f6)){
        score = score + 200;
        f6.destroy();}

    drawSprites();
    textSize(24);
    fill("white");
    text("Score: "+score,950,50);
  }

 if(pacman.isTouching(g1) || pacman.isTouching(g2) || pacman.isTouching(g3) || pacman.isTouching(g4)){
     gameState= 1;
 }

if(gameState===1){
   
    textFont("TimesNewRoman")
    textSize(100);
    fill("yellow")
    text("Game Over!!!", 250,250); 
    
    textFont("TimesNewRoman")
    textSize(35);
    fill("yellow")
    text("Reload page to try again", 350,350); 
    
}

if(score>=1000){
    pacman.destroy();
    m1.destroy();
    m2.destroy();
    m3.destroy();
    m4.destroy();
    m5.destroy();
    m6.destroy();
    m7.destroy();
    m8.destroy();
    m9.destroy();
    m10.destroy();
    m11.destroy();
    m12.destroy();
    m14.destroy();
    m15.destroy();
    g1.destroy();
    g2.destroy();
    g3.destroy();
    g4.destroy();

    textFont("TimesNewRoman")
    textSize(100);
    fill("yellow")
    text("You Win!!!", 260,250); 
    
    textFont("TimesNewRoman")
    textSize(35);
    fill("yellow")
    text("Reload page to play again :)", 350,350);    
}

} 

