
  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
    if (this.readyState ==4 && this.status== 200){
    var mydata= JSON.parse(this.responseText);//gets the json file and says its as mydata
        document.getElementById("ingredents").innerHTML="mydata";
      }
    };
    xmlhttp.open("GET","bento.json",true);
    xmlhttp.send();
    //do this function when a criteria is met
    //4 means ready
    //200 means ok
   
    function addItem()
    {
      var x=document.getElementById("userInput").value;
       
    }
    function total(){
      localStorage.setItem("quantity",x)
        location.href="total.html";
    }