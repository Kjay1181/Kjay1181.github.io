function cheese(){
  this.x=Math.floor(Math.random()*w);
  this.y=100;
  this.width=50;
  this.height=50;
  this.count=0;
  this.show=function(){
    
    image(imgThree,this.x,this.y,this.width,this.height);
  }
 this.score=function(){
   d= dist(this.x, this.y, jumper.x, jumper.y);
   if (d<50){
     this.count++;
      this.x=Math.floor(Math.random()*w);
   }
     
   }
 }

