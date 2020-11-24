class Rain {
  constructor(x, y) {

      var options ={
          restitution:0.1,
          friction : 0.05
      }
      this.r= 5
    
      this.body = Bodies.circle(x, y, this.r,options);       
      this.color = "aqua";
      World.add(world, this.body);

  }
  display(){

      
      noStroke();
      fill("aqua")
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y, 2,this.r);
    
  }
    updateY(){
      if (this.body.position.y > 800 ){
        Matter.Body.setPosition (this.body, {x: random (0,800), y : random (0,800)})
    
    }

    

  }
};

