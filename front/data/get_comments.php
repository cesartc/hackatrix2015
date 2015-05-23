<?php
	
	// $id_parent = $_POST["id_parent"];
	// $id =0;

	$data = array(
		(object)[
			'id' => 1,
			'id_parent'=>1,
			'author'=>'Maria',
			'comment' => '<p>Lorem ipsum d sdf sdf sdfdsfolor sit amet,sd sdf sdf  consectetur adipiscing elit, 
			sed do eiusmod temporal incididunt</p>',

		],
		(object)[
			'id' => 2,
			'id_parent'=>1,
			'author'=>'Ana Paula',
			'comment' => '<p>Lorem ipsum dolor sit amet,sd sdf sdf  consecfd fdgdgdf gtetur adipiscing elit, 
			sed do eiusmod temporal incididunt</p>',

		],
		(object)[
			'id' => 3,
			'id_parent'=>2,
			'author'=>'Cecilia',
			'comment' => '<p>Lorem ipsum dolor sit amet,samet,sd sdf sdf  consectetur adipisd sdf sdf  consectetur adipiscing elit, 
			sed do eiusmod temporal incididunt</p>',

		],
		(object)[
			'id' => 4,
			'id_parent'=>2,
			'author'=>'Carmen Rosa',
			'comment' => '<p>Lorem ipsum dolor sit ame  dolor sit ame  dolor sit amet,sd sdf sdf  consectetur adipiscing elit, 
			sed do eiusmod temporal incididunt</p>',

		],
		(object)[
			'id' => 4,
			'id_parent'=>3,
			'author'=>'Estefania',
			'comment' => '<p>Lorem ipsum dolor sit amet,sd sdf sdf  consectetur adipiscing elit, 
			sed do eiusmod temporal incididunt</p>',

		],
	);

	// var_dump((object)$data);	
	




	echo json_encode($data);

?>