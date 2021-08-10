class ComputerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.collapse = false;
    this.image = loadImage("./assets/computerArcher.png");

    World.add(world, this.body);

    Matter.Body.setAngle(this.body, PI / 2); // -90 degree
  }
    
    display() {
          var pos = this.body.position;
           var angle = this.body.angle;
             
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
           image(this.image, 0, 0, this.width, this.height);
           pop();
    }
   shoot(archerAngle)
  {
        var velocity =p5.Vector.fromAngle(archerAngle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body, { x: velocity.x, y:velocity.y});
  }

    }



            

