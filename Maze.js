class Maze{
    constructor(x,y, width, height){
        var options={
            isStatic: true,
        }
        this.width = width;
        this.height= height;
        this.body = Bodies.rectangle(x,y,height,width,options);
        World.add(world, this.body);
    }
 
    display(){
        var angle = this.body.angle;
        maze = createSprite(0,0,this.width,this.height);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue");
        rect(0,0,this.width,this.height);
        pop();
        
        
    }


   










}