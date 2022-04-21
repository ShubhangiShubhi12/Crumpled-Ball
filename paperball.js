class Paperball {

    constructor(x,y,r){
        var ball_options = {
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y,this.r/2,ball_options)
        World.add(world,this.body)


    }
    
    display(){
        var paperPos = this.body.position
        push()
        translate(paperPos.x,paperPos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill("yellow")
        ellipse(0,0,this.r,this.r)
        pop()


    }


}