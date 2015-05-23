<?php
	
	// $id_parent = $_POST["id_parent"];
	// $id =0;

	$data = array(
		(object)[
			'id' => 1,
			'title'=>'brand1.jpg',
			'photo'=>'foto 1',

		],
		(object)[
			'id' => 1,
			'title'=>'brand2.jpg',
			'photo'=>'foto 1',

		],
		(object)[
			'id' => 1,
			'title'=>'brand3.jpg',
			'photo'=>'foto 1',

		],
		(object)[
			'id' => 1,
			'title'=>'brand4.jpg',
			'photo'=>'foto 1',

		],
	);

	// var_dump((object)$data);	
	
	echo json_encode($data);

?>