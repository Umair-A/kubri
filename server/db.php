<?php

// MySQL database configuration
$host = "localhost"; // MySQL server hostname
$username = "root"; // MySQL username
$password = ""; // MySQL password
$database = "kubri-test"; // MySQL database name

// Create a connection to the MySQL database
$conn = mysqli_connect($host, $username, $password, $database);

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Connection successful
echo "Connected to the MySQL database successfully.";

// Close the connection
mysqli_close($conn);

?>
