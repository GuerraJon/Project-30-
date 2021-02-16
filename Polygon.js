class Polygon {
    constructor(x, y, width, height){
        (x,y);
        var options = {
            isStatic:false
        }

        this.image = loadImage("polygon.png");

        polygon = Bodies.circle(50,200,20);
        World.add(world,polygon); 
    }

    display(){
        push();
        imageMode (CENTER);
        image (polygon_img, polygon.position.x, polygon.position.y,40,40);
        pop();
    }
    
};