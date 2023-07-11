<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

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

// Route: "/universal_symbols"
if ($_SERVER['REQUEST_URI'] === '/kubri/server/index.php/universal_symbols') {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Retrieve the form data
        $universalSymbols = json_decode(file_get_contents('php://input'), true);
        
        // Prepare the INSERT query
        $queryInsertUniversalSymbols = "INSERT INTO universal_symbols (`universal_symbols`, `security`, `base`, `quote`, `categories`, `isin`, `description`, `digits`, `exposure_multiplyer`, `sessions`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        // Prepare the statement
        $stmt = mysqli_prepare($conn, $queryInsertUniversalSymbols);
        
        // Bind the values to the statement
        mysqli_stmt_bind_param($stmt, "ssssssssss", $universalSymbols['universal_symbols'], $universalSymbols['security'], $universalSymbols['base'], $universalSymbols['quote'], $universalSymbols['categories'], $universalSymbols['isin'], $universalSymbols['description'], $universalSymbols['digits'], $universalSymbols['exposure_multiplyer'], $universalSymbols['sessions']);
        
        // Execute the statement
        $result = mysqli_stmt_execute($stmt);
        
        if ($result) {
            header('Content-Type: application/json');
            echo json_encode("Data inserted successfully");
        } else {
            header('Content-Type: application/json');
            echo json_encode(mysqli_error($conn));
        }
    } else {
        $queryUniversalSymbols = "SELECT universal_symbols, security, base, quote, categories, isin, description, digits, exposure_multiplyer, sessions FROM universal_symbols";
        $resultUniversalSymbols = mysqli_query($conn, $queryUniversalSymbols);
        
        if ($resultUniversalSymbols) {
            $dataUniversalSymbols = mysqli_fetch_all($resultUniversalSymbols, MYSQLI_ASSOC);
            header('Content-Type: application/json');
            echo json_encode($dataUniversalSymbols);
        } else {
            header('Content-Type: application/json');
            echo json_encode(mysqli_error($conn));
        }
    }
}

if ($_SERVER['REQUEST_URI'] === '/kubri/server/index.php/securities') {
    $querySecurities = "SELECT securities, description FROM securities";
    $resultSecurities = mysqli_query($conn, $querySecurities);
    
    if ($resultSecurities) {
        $dataSecurities = mysqli_fetch_all($resultSecurities, MYSQLI_ASSOC);
        header('Content-Type: application/json');
        echo json_encode($dataSecurities);
    } else {
        header('Content-Type: application/json');
        echo json_encode(mysqli_error($conn));
    }
}

// Close the connection
mysqli_close($conn);
?>
