class Ghost{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: true
        }
       this.width = width;
       this.x=x;
       this.y=y;
       this.height= height;
       this.body = Bodies.rectangle(x,y,height,width, options);
       this.ghost1= loadImage("ghost1.png");
       this.ghost2 = loadImage("ghost2.png");
       this.ghost3 = loadImage("ghost3.png");
       this.ghost4 = loadImage("ghost4.png");
       World.add(world, this.body);
    }
    

    display(){
        var angle = this.body.angle;
        g1 = createSprite(this.x,this.y);
        g1.scale= 0.051;
        g1.addImage(this.ghost4);
        
      /*  g2 = createSprite(1000,400);
        g2.scale= 0.15;
        g3 = createSprite(1000,400);
        g3.scale=0.05;
        g4 = createSprite(1000,400);
        g4.scale=0.05;
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: g1.addImage(this.ghost1);
                  break;
          case 2: g2.addImage(this.ghost2);
                  break;
          case 3: g3.addImage(this.ghost3);
                  break;
          case 4:g4.addImage(this.ghost4);
                  break;
          default: break;
          }
      */ push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        //image(this.rand, 0,0,this.width,this.height);
        pop();
    }
}