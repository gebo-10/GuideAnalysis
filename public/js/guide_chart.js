function GenBarChart(element,data){
	var ctx = document.getElementById(element).getContext("2d");
	var num_label=new Array();
	for (var i = 0; i <= data.length; i++) {
		num_label[i]=i+1+"";
	}
	var microBar = new Chart(ctx).Bar({
		labels: num_label,
		datasets: [{
			fillColor : "rgba(239,241,245,1)",
			strokeColor : "rgba(0,0,0,0)",
			highlightFill: "rgba(230,233,240,255)",
			data: data
		},
		]
	}, {
		animation: true,
		showScale: true ,
		scaleShowGridLines : false,
		barShowStroke: false,
		tooltipXPadding: 10,
		tooltipYPadding: 6,
		tooltipFontSize: 18,
		tooltipFontStyle: 'bold',
		// Boolean - If we want to override with a hard coded scale
		scaleOverride: false,

		// ** Required if scaleOverride is true **
		// Number - The number of steps in a hard coded scale
		scaleSteps: 2,
		// Number - The value jump in the hard coded scale
		scaleStepWidth: 1,
		// Number - The scale starting value
		scaleStartValue: 0,
	});
	return microBar;
}

function GenLineChart(element,data){
	var ctx = document.getElementById(element).getContext("2d");
	var num_label=new Array();
	for (var i = 0; i <= data.length; i++) {
		num_label[i]=i+1+"";
	}
    var all_data = {
		labels: num_label,
		datasets: [
			{
			label: "guide",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: data
			},
			// {
			// label: "My Second dataset",
			// fillColor: "rgba(151,187,205,0.2)",
			// strokeColor: "rgba(151,187,205,1)",
			// pointColor: "rgba(151,187,205,1)",
			// pointStrokeColor: "#fff",
			// pointHighlightFill: "#fff",
			// pointHighlightStroke: "rgba(151,187,205,1)",
			// data: [28, 48, 40, 19, 86, 27, 90]
			// }
		]
	};

	var myLineChart = new Chart(ctx).Line(all_data, {bezierCurve: true});
	return myLineChart;
}

var global_data={}
function GenStepList(global_data){
	var data=new Array();
	for (var i = 0; i < global_data.length; i++) {
		data[i]=global_data[i].step;
	}
	return data;
}
$(document).ready(function(){
	var chart=GenBarChart("chart",[10]);
	$("p").click(function(){
		$(this).hide();
	});
	

	$("#filter").submit(function(e){
		var options = {
			url: $("#filter").attr("action"),
			type: 'post',
			dataType: 'text',
			data: $("#filter").serialize(),
			success: function (data) {
				//alert(data);
				data=JSON.parse(data);
				global_data=data;
				$('#guide_table').bootstrapTable('load', data);
				var chart_select=$('#chart_select').val();
				chart.destroy();
				var chart_data=GenStepList(global_data);
				if (chart_select==1) {
					chart=GenBarChart("chart",chart_data);
				}else{
					chart=GenLineChart("chart",chart_data);
				}
			}
		 };
		 $.ajax(options);
		 return false;
	});
	//GenBarChart("chart",[10, 5, 1, 6, 7, 8, 10]);
	//GenLineChart("chart",[10, 5, 1, 6, 7, 8, 10]);

	
	$('#guide_table').bootstrapTable({
		pagination: true,
		search: true, //显示搜索框
		//url: "duoBaoActivityList", 
    	dataType: "json",
    	sidePagination: "client", //服务端处理分页
	    
	    columns: [
	    {
	        field: 'id',
	        title: 'ID'
	    }, 
	    {
	        field: 'time',
	        title: '时间'
	    },
	    {
	        field: 'name',
	        title: '名字'
	    }, 
	    {
	        field: 'user_id',
	        title: 'user_id'
	    },
	    {
	        field: 'guide',
	        title: 'guide'
	    },
	    {
	        field: 'unit',
	        title: 'unit'
	    }, 
	    {
	        field: 'step',
	        title: 'step'
	    }
	    ],

	});


	// data=[{
	//         id: 1,
	//         name: 'Item 1',
	//         price: '$1'
	//     }, {
	//         id: 2,
	//         name: 'Item 2',
	//         price: '$2'
	//     },];
	// $('#guide_table').bootstrapTable('load', data);
	

});

	
