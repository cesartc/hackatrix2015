<?php

	

	$data = array(
			'ok' => true, // return true if the comment is saved
			'message'=> 'Error interno del servidor', // is the comment is not saved, return the error message
		);

	echo json_encode($data);

?>