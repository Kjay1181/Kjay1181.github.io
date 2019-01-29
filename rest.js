var tax = 1.04712;

 var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
    if (this.readyState ==4 && this.status== 200){
    var myData= JSON.parse(this.responseText);//gets the json file and saves its as mydata
        document.getElementById("name").innerHTML=myData.lumpia[0].price;
      }
    };
    xmlhttp.open("GET","bento.json",true);
    xmlhttp.send();

    //do this function when a criteria is met
    //4 means ready
    //200 means ok
   
  
  function buyItem(){
    var order= document.getElementById("userInput").value;
    var price= order*2.00;
    var total=document.getElementById("quantity").innerHTML= "you ordered"+" "+"$"+price+ " of Banana Lumpia";
  
  }
  
  function nextPage(){
       var x=document.getElementById("userInput").value;//finds the value when button is clicked
      localStorage.setItem("lumpia",x);// set the value
      location.href="results.html";
  }