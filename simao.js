function aparecer(x) {
           switch (x) {
               case 2:
               document.getElementsByClassName("a1")[0].style.display = "none";
           document.getElementsByClassName("a0")[0].style.display = "block";
           document.getElementsByClassName("a2")[0].style.display = "none";
           document.getElementsByClassName("a3")[0].style.display = "none";
                   break;
               case 3:
               document.getElementsByClassName("a1")[0].style.display = "none";
           document.getElementsByClassName("a0")[0].style.display = "none";
           document.getElementsByClassName("a2")[0].style.display = "block";
           document.getElementsByClassName("a3")[0].style.display = "none";
           
                   break;
               case 4: 
               document.getElementsByClassName("a1")[0].style.display = "none";
           document.getElementsByClassName("a0")[0].style.display = "none";
           document.getElementsByClassName("a2")[0].style.display = "none";
           document.getElementsByClassName("a3")[0].style.display = "block";
          
                   break;
           
               default:
               document.getElementsByClassName("a1")[0].style.display = "block";
           document.getElementsByClassName("a0")[0].style.display = "none";
           document.getElementsByClassName("a2")[0].style.display = "none";
           document.getElementsByClassName("a3")[0].style.display = "none";
                   break;
           }
    }    

    function calc(){
    var num = parseFloat(document.getElementById('inicial1').value);
    var taxa = document.getElementById('taxa1').value;
    var anos = document.getElementById('ano1').value;
    var final = document.getElementById('valor1').value;
    var check = isNaN(num);
    if (anos != "" && taxa != "" && final !="" && check != true){
        var num = (final / Math.pow (anos * (taxa / 100)));
        document.getElementById("resultado1").value = num + "€";
    } else {
        document.getElementById("resultado1").value = "";
    }
    }