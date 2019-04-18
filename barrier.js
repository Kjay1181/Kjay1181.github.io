
function barrier(){
 
  this.x= w+100;
  this.y= Math.floor(Math.random()*h);
  this.leftPull=.7;
  this.velocity=7;
  this.width=100;
  this.height=100;
 

  this.show=function(){
   
    image(imgFour,this.x,this.y,this.width,this.height);
  }

  this.update=function(){//makes the ball fall down
  this.velocity+= this.leftPull;
  this.x-=this.velocity;
 if (this.x <0){
  
   this.velocity=0;
   this.x= w+100;
  this.y= Math.floor(Math.random()*h);
 }
  }
      

}