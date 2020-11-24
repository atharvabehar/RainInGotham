class Umbrella {
    constructor(x, y, r ) {
  
        var options ={
            restitution:0.1,
            friction : 0.05,
            isStatic: true
        }
        this.r= r
      
        this.body = Bodies.circle(x, y, this.r,options);       
        
        World.add(world, this.body);
  
    }
}