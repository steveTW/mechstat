google.load('visualization', '1', {
    packages: ['table']
});

var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1Iwp4XiIxIjaAvbN-BcZSHbKAWPqjgLBD_ge2hIIF7PY&output=html&usp=sharing');
	
    query.setQuery('SELECT A, B, C, D, G, H label A "Mech", B "Kill", C "Death", D "K/D ratio", G "Win", H "Lost"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('stat_table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);