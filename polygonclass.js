class Polygon{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.body= Bodies.circle(x,y,20,options);
        this.image= loadImage("polygon.png");
        World.add(world,this.body);
     
    }
    display(){
        var pos= this.body.position;
        var angle= this.body.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,40,40);
        pop();
    }
}