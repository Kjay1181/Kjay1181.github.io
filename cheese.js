function cheese(){
  this.x=Math.floor(Math.random()*w);
  this.y=Math.floor(Math.random()*h);
  this.width=50;
  this.height=50;
  this.count=0;
  this.show=function(){
    
    image(heart,this.x,this.y,this.width,this.height);
  }
 this.score=function(){
   d= dist(this.x, this.y, jumper.x, jumper.y);
   if (d<50){
     this.count++;
      this.x=Math.floor(Math.random()*w);
   }
     
   }
 this.range= function(){
   if (this.x===0 || this.y===h+10){
     this.x=Math.floor(Math.random()*w);
  this.y=Math.floor(Math.random()*h);
   
   }
   if(this.x===w+100 ||this.y===0){
     this.x=Math.floor(Math.random()*w);
  this.y=Math.floor(Math.random()*h);
   }
 }
  
}

