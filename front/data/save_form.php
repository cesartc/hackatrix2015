
<?php

	$server_message = "Gracias por escribirnos";
	$data = array(
			'ok' => true, // return true if the note is saved
			'message'=> $server_message, // is the note is not saved, return the error message
		);

	echo json_encode($data);

?>