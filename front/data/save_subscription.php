<?php

	$server_message = "Gracias por subscribirte";
	// $server_message = "Email ya registrado";

	$data = array(
			'ok' => true, // return true if the comment is saved
			'message'=> $server_message, // is the comment is not saved, return the error message
		);

	echo json_encode($data);

?>