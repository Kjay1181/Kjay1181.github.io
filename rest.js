 var tax = 1.04712;
 var subtotal=[];
 var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
    if (this.readyState ==4 && this.status== 200){
    var menuData= JSON.parse(this.responseText);//gets the json file and saves its as mydata
        
      }
    };
    xmlhttp.open("GET","bento.json",true);
    xmlhttp.send();
document.getElementById("name").innerHTML=menuData.lumpia[0].type;
    //do this function when a criteria is met
    //4 means ready
    //200 means ok
   
  
  function buyItem(){
    var order= document.getElementById("userInput").value;
    var price= order*2.00;
    var total=document.getElementById("quantity").innerHTML= "you ordered"+" "+"$"+price+ " of Banana Lumpia";
    subtotal.push(total);
  }
  
  function nextPage(){
    var subtotal=[];
    document.getElementById("display").innerHTML=subtotal;
  }