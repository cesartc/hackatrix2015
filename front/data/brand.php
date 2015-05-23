<?php
	
	// $id = $_POST["id"];
	$id =0;

	if (isset($_POST["slug"])) {
		$slug = $_POST['slug'];		
	}elseif ( isset($_GET["slug"]) ) {
		$slug = $_GET['slug'];	
	}




	$data = array(
		'don-vittorio' =>(object)[
				'id' => 1,				
				'title' => 'Don Vittorio',
				'logo' => 'logo1.jpg',
				'image' => 'brand1.jpg',
				'header_color' => '#000000',
				'description' => '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitrlabore et dolore magna aliquyam erat,</p>',
				'arrange' => '1',		
				'products' =>[
								[
									'name'=>'Fideos Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Pasta Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Fideos Codito Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Fideo delgado',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
							],	
		],
		'aceite-primor' =>(object)[
				'id' => 1,				
				'title' => 'Aceite primor',
				'logo' => 'logo4.png',
				'image' => 'brand4.jpg',
				'header_color' => '#f3e994',
				'description' => '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitrlabore et dolore magna aliquyam erat,</p>',
				'arrange' => '1',		
				'products' =>[
								[
									'name'=>'Fideos Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Pasta Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Fideos Codito Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Fideo delgado',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
							],	
		],
		'agua-san-mateo' =>(object)[
				'id' => 1,				
				'title' => 'Agua san mateo',
				'logo' => 'logo3.jpg',
				'image' => 'brand3.jpg',
				'header_color' => '#ffffff',
				'description' => '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitrlabore et dolore magna aliquyam erat,</p>',
				'arrange' => '1',		
				'products' =>[
								[
									'name'=>'Fideos Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Pasta Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Fideos Codito Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Fideo delgado',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
							],	
		],
		'detergente-ace' =>(object)[
				'id' => 1,				
				'title' => 'Detergente ace',
				'logo' => 'logo2.jpg',
				'image' => 'brand2.jpg',
				'header_color' => '#f26523',
				'description' => '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitrlabore et dolore magna aliquyam erat,</p>',
				'arrange' => '1',		
				'products' =>[
								[
									'name'=>'Fideos Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Pasta Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Fideos Codito Don Vitorrio',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
								[
									'name'=>'Fideo delgado',
									'description'=>'Fideos Don Vitorrio',
									'image'=>'pack.jpg',
								],
							],	
		],



	);



	// var_dump($data[$id]);	
	echo json_encode($data[$slug]);

?>