class Box{
    constructor(x,y,width,hieght){
     var options={
     restitution:0.04
    }
    this.body=Bodies.rectangle(x,y,width,hieght,options)
    this.width=width
    this.hieght=hieght
    World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.hieght)
        pop();
    }
}