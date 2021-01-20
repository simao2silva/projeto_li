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

function calc() {
    //função de calculo do valor inicial do investimento sem reforço
    var num = parseFloat(document.getElementById('valinvest').value);
    var juro = document.getElementById('juro_1').value;
    var valjuro = document.getElementById('valjuro_1').value;
    var anos = document.getElementById('year_1').value;
    var check = isNaN(num);
    if (anos != "" && valjuros != "" && check != true) {
        switch (juro) {
            case "composto":
                var valjuros = (num / Math.pow((1 + (valjuro / 100)), anos));
                valjuros = parseFloat(valjuros.toFixed(2));
                document.getElementById("resultado_1").value = valjuros + "€";
                break;
            case "simples":
                var valjuros = num / (1 + ((valjuro / 100) * anos));
                valjuros = parseFloat(valjuros.toFixed(2));
                document.getElementById("resultado_1").value = valjuros + "€";
                break;
        }
    } else {
        document.getElementById("resultado_1").value = " ";
    }
}
function apagartabela() {
    var contar = document.getElementById("myTable").rows.length;
    if (contar > 1) {
        for (i = totalRowCount; i > 0; i--) {
            document.getElementById("myTable").deleteRow(i);
        }
    }
}

