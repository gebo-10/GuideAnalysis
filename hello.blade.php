<!DOCTYPE html>
<html>
    <head>
        <title>指引分析</title>

 		<script src="{{ URL::asset('/js/Chart.min.js') }}"></script>
        <script src="{{ URL::asset('/js/jquery-3.1.1.min.js') }}"></script>

        
        <link rel="stylesheet" href="{{ URL::asset('/bootstrap/bootstrap-theme.min.css') }}">
        <link rel="stylesheet" href="{{ URL::asset('/bootstrap/bootstrap.min.css') }}">
        <script src="{{ URL::asset('/bootstrap/bootstrap.min.js') }}"></script>

        <link rel="stylesheet" href="{{ URL::asset('/table/bootstrap-table.min.css') }}">
		<script src="{{ URL::asset('/table/bootstrap-table.min.js') }}"></script>
		<script src="{{ URL::asset('/table/bootstrap-table-zh-CN.min.js') }}"></script>

        <script src="{{ URL::asset('/js/guide_chart.js') }}"></script>
    </head>
    <body>
    	<div>
    		<form id="filter" method="post" action="{{ action('GuideCtrl@GetData') }}">
    			<select id ="chart_select" name="chart_type">
					<!-- <option value="0">使用图表</option> -->
					<option value="1">使用柱状图</option>
					<option value="2">使用线图</option>
				</select>
    			名字<input type="text" name="name">
    			user_id<input type="text" name="user_id">
    			unit<input type="text" name="unit">
    			step<input type="text" name="step">
    			<input type="submit">
    		</form>
    	</div>
		

	
		<table id="guide_table" data-pagination="true" paginationLoop="true" pageSize="2">
		   
		</table>
		<div>
			<div>
				<canvas id="chart" height="300px" width="800px"></canvas>
			</div>
		</div>
    </body>

</html>