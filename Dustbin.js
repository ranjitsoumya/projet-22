class Dustbin{
    constructor(x,y,width,hight){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(x,y,this.width,this.hight,options);
       this.width = width;
       this.hight = hight;
       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255, 255, 255, 0.5);
        rect(pos.x, pos.y, this.width, this.height);
      }
}