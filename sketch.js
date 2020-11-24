
 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 var rain , man , t1 , t2 ,t3 , t4 ;
  var engine , world  ;
  var drops = [];
  var maxdrops = 300;
  var thunderframe = 0

function preload (){

  manA = loadAnimation ("man/walking_1.png","man/walking_2.png","man/walking_3.png",
              "man/walking_4.png","man/walking_5.png","man/walking_6.png","man/walking_7.png",
              "man/walking_8.png");

  t1 = loadImage ("thunder/1.png")
  t2 = loadImage ("thunder/2.png")
  t3 = loadImage ("thunder/3.png")
  t4 = loadImage ("thunder/4.png") 
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
 // ground = new Ground(width/2,height,width,20);
  umbrella = new Umbrella (420,390,200);
  mansp = createSprite (400,500,150,150);
  mansp.addAnimation ("walking", manA);
  for (var i = 0 ; i < maxdrops ; i++){
  drops.push(new Rain(random (0 , 800),random(0,800)))

  }

}
function draw() {
    background("black");
    Engine.update(engine);
    for (var i = 0 ; i < maxdrops ; i++){
      drops [i].display();
    
    }
    for (var i = 0 ; i < maxdrops ; i++){
    
      drops [i].updateY();
    }
    
  drawSprites();
}
