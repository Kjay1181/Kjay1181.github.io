var speed=7;// speed of the ship
function platform(){
  this.x=0-100;//starts off of the screen
 this.y= Math.floor(Math.random()*h);// random point on the y axis
  this.width=100;
  this.height=100;
  this.show=function(){
    
    image(imgTwo,this.x,this.y,this.width,this.height);
  }
  this.update=function(){//makes the ball fall down
 this.x= this.x+speed;
 if (this.x > w){
  
  speed=-speed;
  
 }
  
    
  }
this.reverse= function(){
  if(this.x<0){

speed=7;
  }

}

}
