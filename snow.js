class Snow{
    constructor(x, y, r) {
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':1,
            'density':2
            
        }
       
        this.r=r
        
        this.image = loadImage("snow4.webp");
        this.body= Bodies.circle(x,y,this.r,options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}