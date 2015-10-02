<?php
require_once("./include/membersite_config.php");

if (!$fgmembersite->CheckLogin()) {
    $fgmembersite->RedirectToURL("login.php");
    exit;
}
// PHP code used by the application to save the data
// Author: Dr. Arghir-Nicolae Moldovan

	// Setup the database connection
	$conx = mysqli_connect("localhost","root","password","testdb");

	// Check connection
	if (mysqli_connect_errno()){
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	
	// Get data posted with Ajax
        //$username =
        echo "User ".$_SESSION["name_of_user"];
        
	$username 		= $_POST["username"];
	$score 				= $_POST["score"];

	// Save data to database
	$query = "INSERT INTO Scores
                SET username = '$username'
                , score = '$score'
                , ts = CURRENT_TIMESTAMP
                ON DUPLICATE KEY UPDATE
                ts = if('$score'>score,CURRENT_TIMESTAMP,ts), score = if ('$score'>score, '$score', score);";
        
                
                
                
                $saveData = mysqli_query($conx, $query);

	if($saveData){
		echo "Data was saved successfully!";
	}
	else{
		echo "Error saving the data!";
	}

	mysqli_close($conx)
?>