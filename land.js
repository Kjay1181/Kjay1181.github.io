function land(){
    this.x=0;
    this.y=h*.25;
    this.height=h;
    this.width=w;
    this.show=function(){
        fill(color("red"));
        rect(this.x,this.y,this.width,this.height);

    }
    
}

 
 
