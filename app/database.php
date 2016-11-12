<?php
	// STARTS A SESSION; MUST BE AT THE TOP OR ELSE CREATES COOKIES
	session_start();

	// htmlentities() -> REPLACES ALL HTML SPECIAL CHARACTERS WITH ENTITY CODE
	// strip_tags() -> REMOVES ALL HTML SPECIAL CHARACTERS
	// nl2br() -> REPLACES NEW LINE CHARACTERS WITH LINE BREAKS <BR>
	// $password = "secret";
	// $hash_format = "$2y$10$";
	// $salt = "Salt22CharactersOrMore";
	// $format_and_salt = $hash_format . $salt;
	// $hash = crypt($password, $format_and_salt);
	// echo $hash . "<br>";
	// $hash = crypt($password, $hash);
	// echo $hash2
	// hash1 and hash2 are the same because crypt only takes the first 22 chars
	// of the salt and ignores the rest

	$dbhost = "localhost";
	$dbuser = "widget_cms";
	$dbpass = "password";
	$dbname = "widget_corp";
	$dbconnection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
	if (mysqli_connect_errno())
	{
		die("Database connection failed " . mysqli_connect_error() . " (" . mysqli_connect_errno . ")");
	} else echo "CONNECTED TO DATABASE<br>";

	// OBTAINS THE MOST RECENT ID INSERTED INTO THE RECORD IN THIS CONNECTION
	$id = mysqli_insert_id($dbconnection);

	// DATABASE SELECT (READ) QUERY
	$query = "SELECT * ";
	$query .= "FROM subjects ";
	$query .= "WHERE visible = 1 ";
	$query .= "ORDER BY position ASC";
	echo "Select query: " . $query . "<br>";

	$preparedQuery = "SELECT id,first_name,last_name FROM users WHERE username = ? AND password = ?";
	// PREPARED STATEMENT FOR EASIER PREPARATION INSTEAD OF 
	// CONSTANTLY RETYPING QUERY
	// JUST CHANGE VARIABLES
	$statement = mysqli_prepare($dbconnection, $preparedQuery);

	// BINDS THE PARAMETERS TO THE ?
// 	mysqli_stmt_bind_param($statement, 'ss', 'username', 'password');
// 	mysqli_stmt_execute($statement);
// 	mysqli_stmt_bind_result($statement, $id, $username, $password);
// 	mysqli_stmt_fetch($statement);
// 	mysqli_stmt_close();

	$menu_name = "Temp menu name";
	$position = 4;
	$visible = 1;

	// ESCAPE STRING FOR SPECIAL CHARACTERS --- IMPORTANT
	$menu_name = mysqli_real_escape_string($dbconnection, $menu_name);

	// INSERT QUERY
	$insert = "INSERT INTO subjects (menu_name, position, visible) ";
	$insert .= "VALUES ('{$menu_name}', {$position}, '{$visible}')";
	echo "Insert query: " . $insert . "<br>";

	$update = "UPDATE subjects SET ";
	$update .= "menu_name = '{$menu_name}' ";
	$update .= "position = {$position} ";
	$update .= "visible = {$visible} ";
	$update .= "WHERE id = {$id}";
	echo "Update query: " . $update . "<br>";

	$delete = "DELETE FROM subjects ";
	$delete .= "WHERE id = {$id} ";
	$delete .= "LIMIT 1";
	echo "Delete query: " . $delete . "<br>";

	$result = mysqli_query($dbconnection, $query);

	// TEST QUERY ERROR, SHOW HOW MANY ROWS CHANGED
	if ($result || mysqli_affected_rows($dbconnection) == 1) echo "SUCCESS.<br>";
	else die("Database query failed: " . mysqli_error($dbconnection));

	// GET THE NUMBER OF ROWS IN THE RESULT SET
	echo "Number of rows: " . mysqli_num_rows($result) . "<br>";
	
	// USE QUERIED DATA
	while($row = mysqli_fetch_assoc($result))
	{
		echo $row["id"] . "<br>";
		echo $row["menu_name"] . "<br>";
		echo $row["position"] . "<br>";
		echo $row["visible"] . "<br>";
		echo "<br>";
	}

	mysqli_free_result($result);
?>

<?php
	if (isset($dbconnection)) 
		mysqli_close($dbconnection);
?>