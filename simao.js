function aparecer(x) {
           switch (x) {
               case 2:
               document.getElementsByClassName("a1")[0].style.display = "none";
           document.getElementsByClassName("a0")[0].style.display = "block";
           document.getElementsByClassName("a2")[0].style.display = "none";
           document.getElementsByClassName("a3")[0].style.display = "none";
           document.getElementsByClassName("a5")[0].style.backgroundImage = "url('none')";
                   break;
               case 3:
               document.getElementsByClassName("a1")[0].style.display = "none";
           document.getElementsByClassName("a0")[0].style.display = "none";
           document.getElementsByClassName("a2")[0].style.display = "block";
           document.getElementsByClassName("a3")[0].style.display = "none";
           document.getElementsByClassName("a5")[0].style.backgroundImage = "url('none')";
                   break;
               case 4: 
               document.getElementsByClassName("a1")[0].style.display = "none";
           document.getElementsByClassName("a0")[0].style.display = "none";
           document.getElementsByClassName("a2")[0].style.display = "none";
           document.getElementsByClassName("a3")[0].style.display = "block";
           document.getElementsByClassName("a5")[0].style.backgroundImage = "url('none')";
                   break;
           
               default:
               document.getElementsByClassName("a1")[0].style.display = "block";
           document.getElementsByClassName("a0")[0].style.display = "none";
           document.getElementsByClassName("a2")[0].style.display = "none";
           document.getElementsByClassName("a3")[0].style.display = "none";
                   break;
           }
    }    

    var x;
    function valorfinal1(){
        x=document.getElementById("valor1").value;
        console.log(x);  
    }
    var t;
    function ano1(){
        t=document.getElementById("ano1").value;
        console.log(t);  
    }
    var y;
    function taxa1(){
        y=document.getElementById("taxa1").value;
        console.log(y);  
    }