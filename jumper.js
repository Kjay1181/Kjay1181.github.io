function jumper(){
     this.x=500;
     this.y=h;
     this.gravity=0.5;// the force of gravity
     this.lift=-10;//opposing force of gravity
     this.velocity=0;// speed of gravity
     this.width=100;
  this.height=100;
      this.show=function(){
      
      image(user,this.x,this.y,this.width,this.height);
     
      }
        
      
      this.up=function(){
        this.velocity+=this.lift;//when I go up im gonna impose the gravity by negative ten
        
      }
        this.move= function(){
            if(keyIsDown(65) && (this.x > 0)){//when a button is pressed moves left
        this.x-=10;
        
      }
    if (keyIsDown(68)&& (this.x< w-0)){//when d button is pressed moves right
      this.x+=10;
    }
      
    }
  

        
        this.update=function(){//makes the ball fall down
          this.velocity+= this.gravity;
          this.y+=this.velocity;
          this.velocity*=0.9;
          if(this.y > h){// stops on the floor
            this.y= h;
            this.velocity=0;
          }
          if (this.y<0){//stops on the ceiling
         this.y=0;
          this.velocity=0;
          
          }
        }
      }
    function keyPressed(){//reserved name in order to press a key call this name
      if (keyCode===32){
      jumper.up();
    }
      
    }
    }