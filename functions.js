graficoNum = "C"; graficoAtual = "C"; $(document).ready(function () { $(".euro").maskMoney({ symbol: '€ ', showSymbol: true, thousands: '.', decimal: ',', symbolStay: true }).keyup(function (e) { atualiza(e); }); $(".pct").maskMoney({ thousands: '.', decimal: ',', symbolStay: true }).keyup(function (e) { atualiza(e); }); $(".periodo").maskMoney({ thousands: '', decimal: '', symbolStay: true, precision: 0 }).keyup(function (e) { atualiza(e); }); $("#sctPeriodo").change(function () { atualiza(); }); atualiza(); }); function getValue(campo) {
    if (jQuery(campo).val() == undefined || jQuery(campo).val() == "")
        return 0; else
        return parseFloat(jQuery(campo).val().replace("€ ", "").replace(".", "").replace(".", ","));
}
function atualiza(e) {
    if (e != undefined || e != null) {
        var keycode = e.keyCode ? e.keyCode : e.which; if (keycode == 8 || keycode == 8) {
            setTimeout("atualiza()", 2000)
            return;
        }
    }
    var valorInicial = getValue("#txtValorInicial"); var totalComposto = valorInicial; var totalSimples = valorInicial; var totalAcumulado = valorInicial; var valorPeriodo = getValue("#txtValorPeriodo"); var pct = getValue("#txtPct"); var periodo = getValue("#txtPeriodo"); if ($("#sctPeriodo").val() == "anos")
        periodo = periodo * 12; totalSimples = (valorPeriodo + (valorPeriodo * pct / 100)) * periodo; totalSimples = totalSimples + valorInicial; var jsonPeriodo = ""; var jsonValores = ""; var jsonValoresSimples = ""; for (var x = 0; x <= periodo; x++) { if (x == 0) { jsonPeriodo += '"0"'; jsonValoresSimples += '[0.00,0.00,0.00]'; jsonValores += '[' + totalComposto + ',' + totalAcumulado + ',0.00]'; } else { totalAcumulado = totalAcumulado + valorPeriodo; totalComposto = ((totalComposto + valorPeriodo) + (totalComposto * pct / 100)*0.16); jsonPeriodo += ',"' + x + '"'; jsonValoresSimples += ',[' + (totalAcumulado + ((valorPeriodo * pct / 100)) * x).toFixed(2) + ',' + totalAcumulado.toFixed(2) + ',' + ((valorPeriodo * pct / 100) * x).toFixed(2) + ']'; jsonValores += ',[' + totalComposto.toFixed(2) + ',' + (totalAcumulado).toFixed(2) + ',' + (totalComposto - totalAcumulado).toFixed(2) + ']'; } }
    if (totalComposto == "Infinity")
        totalComposto = "Infinito"; $("#spanTotalInvestidoSimples,#spanTotalInvestidoComposto").text( Formata(totalAcumulado.toFixed(2).replace(".", ""))); $("#spanTotalSimples").text( Formata(totalSimples.toFixed(2).replace(".", ""))); $("#spanTotalComposto").text( Formata(totalComposto.toFixed(2).replace(".", ""))); $("#spanTotalJurosSimples").text( Formata((totalSimples - (valorInicial + (valorPeriodo * periodo))).toFixed(2).replace(".", ""))); $("#spanTotalJurosComposto").text( Formata(((totalComposto - (valorInicial + (valorPeriodo * (periodo))))).toFixed(2).replace(".", ""))); if (periodo >= 12)
        graficoNum = "L"; else
        graficoNum = "C"; if (jQuery("#idJuro").val() == "JS")
        desenhargrafico('{"dia":[' + jsonPeriodo + '],"alternativa":["Dinheiro acumulado","Dinheiro investido","Total em juros"],"votos":[' + jsonValoresSimples + ']}', periodo); else
        desenhargrafico('{"dia":[' + jsonPeriodo + '],"alternativa":["Dinheiro acumulado","Dinheiro investido","Total em juros"],"votos":[' + jsonValores + ']}', periodo);
}
function Formata(valor) {
    vr = valor; tam = vr.length; dec = 2; if ((tam > dec) && (tam <= 5)) { valor = vr.substr(0, tam - 2) + "," + vr.substr(tam - dec, tam); }
    if ((tam >= 6) && (tam <= 8)) { valor = vr.substr(0, tam - 5) + "." + vr.substr(tam - 5, 3) + "," + vr.substr(tam - dec, tam); }
    if ((tam >= 9) && (tam <= 11)) { valor = vr.substr(0, tam - 8) + "." + vr.substr(tam - 8, 3) + "." + vr.substr(tam - 5, 3) + "," + vr.substr(tam - dec, tam); }
    if ((tam >= 12) && (tam <= 14)) { valor = vr.substr(0, tam - 11) + "." + vr.substr(tam - 11, 3) + "." + vr.substr(tam - 8, 3) + "." + vr.substr(tam - 5, 3) + "," + vr.substr(tam - dec, tam); }
    if ((tam >= 15) && (tam <= 17)) { valor = vr.substr(0, tam - 14) + "." + vr.substr(tam - 14, 3) + "." + vr.substr(tam - 11, 3) + "." + vr.substr(tam - 8, 3) + "." + vr.substr(tam - 5, 3) + "," + vr.substr(tam - 2, tam); }
    return valor;
}