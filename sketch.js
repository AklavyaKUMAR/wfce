
var  ground , paper1 ;
var wallSprite , wall2Sprite , wall3Sprite ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


 
function setup() {
  createCanvas(1200, 600);
  
  engine = Engine.create();
	world = engine.world;


	paper1 = new Paper(500,400,20);
	ground = new Ground(600 , 500 ,1200 , 20 );
  
  wallSprite=createSprite(900 , 485 , 150,10);
	wallSprite.shapeColor=color("red")

	wall2Sprite=createSprite(820 , 445,10,90);
	wall2Sprite.shapeColor=color("red")

	wall3Sprite=createSprite(980 , 445 , 10 , 90);
	wall3Sprite.shapeColor=color("red")


   
    Engine.run(engine);
  
}


function draw() {
  background(0);
  paper1.display();
  ground.display();
 
  drawSprites();
}



