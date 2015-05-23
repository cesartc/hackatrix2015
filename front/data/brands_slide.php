<?php
	
	// $id_parent = $_POST["id_parent"];
	// $id =0;

	$data = array(
		(object)[
			'id' => 1,
			'image_thumb'=>'brand1.jpg',
			'slug'=>'don-vittorio',

		],
		(object)[
			'id' => 1,
			'image_thumb'=>'brand4.jpg',
			'slug'=>'aceite-primor',

		],
		(object)[
			'id' => 1,
			'image_thumb'=>'brand2.jpg',
			'slug'=>'detergente-ace',

		],
		(object)[
			'id' => 1,
			'image_thumb'=>'brand3.jpg',
			'slug'=>'san-mateo',

		],
	);

	// var_dump((object)$data);	
	
	echo json_encode($data);

?>