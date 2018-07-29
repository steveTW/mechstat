google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var data = document.getElementById("stat_table");
	  
	console.log(data);
	var view = new google.visualization.DataView(data);
	console.dir(data);
	view.setColumns([0, 1,
						{	calc: "stringify",
							sourceColumn: 0,
							type: "string",
							role: "annotation" },
						2]);
						

	var options = {
		title: "Density of Precious Metals, in g/cm^3",
		width: 600,
		height: 400,
		bar: {groupWidth: "95%"},
		legend: { position: "none" },
	};
	var chart = new google.visualization.BarChart(document.getElementById("bar_chart"));
	chart.draw(view, options);
  }