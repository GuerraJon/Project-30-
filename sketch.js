const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9;
var ground1, ground2, ground3; 
var engine, world;
var slingShot, polygon; 
var gameState = "onSling";


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //Ground bodies here:
    ground1 = new Ground(600,395,1201,15);

    ground2 = new Ground(600,295,245,15);

    ground3 = new Ground(1000,200,245,15)

    //Lower Level Plaform Blocks here:

    //Level one:
    block  = new Box(510,275,30,40);
    block2 = new Box(540,275,30,40);
    block3 = new Box(570,275,30,40);
    block4 = new Box(600,275,30,40);
    block5 = new Box(630,275,30,40); 
    block6 = new Box(660,275,30,40);
    block7 = new Box(690,275,30,40);

    //level two:
    block8 = new Box(540,235,30,40);
    block9 = new Box(570,235,30,40);
    block10 = new Box(600,235,30,40);
    block11 = new Box(630,235,30,40);
    block12 = new Box(660,235,30,40);
    

    //level three:
    block13 = new Box(570,195,30,40);
    block14 = new Box(600,195,30,40);
    block15 = new Box(630,195,30,40);

    //Final level:
    block16 = new Box(600,155,30,40);

    //second platform:

    //level 1:
    cube1 = new Box(940,170,30,40);
    cube2 = new Box(970,170,30,40);
    cube3 = new Box(1000,170,30,40);
    cube4 = new Box(1030,170,30,40);
    cube5 = new Box(1060,170,30,40);

    //level 2:
    cube6 = new Box(970,130,30,40);
    cube7 = new Box(1000,130,30,40);
    cube8 = new Box(1030,130,30,40)

    //level 3:
    cube9 = new Box(1000,90,30,40);

    //Polygon:
    polygon = Polygon (200,200,10,10)  

    //Slingshot:
    slingShot = new SlingShot (this.polygon,{x:100, y:200});

}

function draw(){
    Engine.update(engine);
    background("black");

    ground1.display();
    ground2.display();
    ground3.display();
    
    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    cube1.display();
    cube2.display();
    cube3.display();
    cube4.display();
    cube5.display();
    cube6.display();
    cube7.display();
    cube8.display();
    cube9.display();

    polygon.display();
    
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed (){
    if (keyCode === 32){     
        slingShot.attach(polygon.body);
    }
}