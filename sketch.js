
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new Paper(200,620,30)
	ground = new Ground(800,690,1600,30)

	boxPosition = width/2-100
	 boxY = 630
	boxPosition = 1000
	 boxleftSprite=createSprite(boxPosition, boxY, 20,100); 
	 boxleftSprite.shapeColor=color(255,0,0); 
	 boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	  World.add(world, boxLeftBody);
	   boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
		boxBase.shapeColor=color(255,0,0);
		 boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
		  World.add(world, boxBottomBody); 
		  boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
		   boxleftSprite.shapeColor=color(255,0,0); 
		   boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
		    World.add(world, boxRightBody);

  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("pink")
  paper1.display();
  ground.display();

  
  
  drawSprites();
 
}
function keyPressed(){
	if ( keyCode === 32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x : 100,y : -100 })
	}


}


