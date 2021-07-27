class Dustbin{
      constructor(x, y, width, height) {
    var options = {
      isStatic:true,
      restitution: 0,
      friction: 1,
      density: 0.1
    };

    this.body = Bodies.circle(x, y, height, options);
    this.width = width;
    this.height = height;
   //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display() {
    //rectMode(CENTER);
    

    // push();
    //  translate(pos.x, pos.y);
    // rotate(angle);
   // 
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.height);
   // image(this.image, 0, 0, this.width, this.height);
    // pop();
  }
}


