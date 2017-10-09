<?php

	$json = array(
		array(
	        "specialty" => "Lamb Salad with Fregola",
	        "revenue" => 634202,
	        "star" => 4,
	        "patrons" => 70,
	        "visits" => 90,
	        "type" => 1,
	        "transactions" => 2346
	    ),
	    array(
	        "specialty" => "Smoked Pork Jowl with Pickles",
	        "revenue" => 634202,
	        "star" => 5,
	        "patrons" => 99,
	        "visits" => 128,
	        "type" => 2,
	        "transactions" => 2346
	    ),
	    array(
	        "specialty" => "Scallop Sashimi with Meyer Lemon Confit",
	        "revenue" => 634202,
	        "star" => 3,
	        "patrons" => 20,
	        "visits" => 70,
	        "type" => 5,
	        "transactions" => 2346
	    ),
	    array(
	        "specialty" => "Lamb Salad with Fregola",
	        "revenue" => 634202,
	        "star" => 4,
	        "patrons" => 70,
	        "visits" => 90,
	        "type" => 1,
	        "transactions" => 2346
	    ),
	    array(
	        "specialty" => "Smoked Pork Jowl with Pickles",
	        "revenue" => 634202,
	        "star" => 5,
	        "patrons" => 99,
	        "visits" => 128,
	        "type" => 2,
	        "transactions" => 2346
	    ),
	    array(
	        "specialty" => "Scallop Sashimi with Meyer Lemon Confit",
	        "revenue" => 634202,
	        "star" => 3,
	        "patrons" => 20,
	        "visits" => 70,
	        "type" => 5,
	        "transactions" => 2346
	    )
	);

?>


<!DOCTYPE html>
<html>
<head>
	<title>Action</title>
</head>
<body>

	<ul id="test">
		<li class="item" loop="50">
			<h4>{specialty}</h4>
			<p><strong> Revenue: </strong> {revenue}</p>
			<p><strong> Patrons: </strong> {patrons}</p>
		</li>
	</ul>

	<script type="text/javascript">
		var lists = <?php echo json_encode( $json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE ); ?>
	</script>
	<script type="text/javascript" src="js/action.js"></script>
	<script type="text/javascript" src="js/app.js"></script>



</body>
</html>