 var tax = 1.04712;
 var $= document;
 var lumpia=[];
 var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
    if (this.readyState ==4 && this.status== 200){
    var menuData= JSON.parse(this.responseText);//gets the json file and saves its as mydata
        $.getElementById("bananaTitle").innerHTML=menuData.lumpia[0].type;
        $.getElementById("bananaPrice").innerHTML=menuData.lumpia[0].price;
      }
    };
    xmlhttp.open("GET","bento.json",true);
    xmlhttp.send();

    //do this function when a criteria is met
    //4 means ready
    //200 means ok
   
  
  function buyItem(){
    var order= $.getElementById("userInput").value;
    var price= order*2.00;
    var total=$.getElementById("quantity").innerHTML= "you ordered"+" "+"$"+price+ " of Banana Lumpia";
    document.getElementById("userInput").value="";//clears the input box
      var li= document.createElement('li');
      var newText=document.createTextNode(total);
    li.appendChild(newText);
      var olTag=document.getElementById("recipt");
      olTag.appendChild(li);
  }
    
  
  function nextPage(){
 
   var x=$.getElementById("userInput").value;//finds the value when button is clicked
      localStorage.setItem("lumpia",x);// set the value
      location.href="results.html";
      
  }