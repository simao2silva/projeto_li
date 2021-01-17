var grafico = new google.visualization.ColumnChart(document.getElementById('visualization'));
        function desenhargrafico(jsonData, periodo) {

            if (graficoNum != graficoAtual) {
                if (graficoNum == "C") {
                    graficoAtual = "C";
                    grafico = new google.visualization.ColumnChart(document.getElementById('visualization'));
                } else {
                    graficoAtual = "L";
                    grafico = new google.visualization.LineChart(document.getElementById('visualization'));
                }
            }

            data = $.parseJSON(jsonData);
            var datatable = new google.visualization.DataTable();

            datatable.addColumn('string', 'Data');
            for (var i = 0; i < data.alternativa.length; i++) {
                datatable.addColumn('number', data.alternativa[i]);
            }

            datatable.addRows(data.dia.length);
            for (var i = 0; i < data.dia.length; i++) {
                datatable.setCell(i, 0, data.dia[i]);
            }

            for (var i = 0; i < data.dia.length; i++) {
                var teste = data.votos[i];
                for (var x = 0; x < data.alternativa.length; x++) {
                    datatable.setCell(i, x + 1, teste[x]);
                }
            }

            var formatter = new google.visualization.NumberFormat({ suffix: ' €' });
            formatter.format(datatable, 1);
            formatter.format(datatable, 2);
            formatter.format(datatable, 3);

            grafico.draw(datatable, { fontSize: 11, animation: { duration: 1000, easing: 'in' }, chartArea: { left: 50, width: 430, height: 200 } });

        }