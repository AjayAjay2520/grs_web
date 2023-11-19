<?php
// Include your database connection code from 'config.php'
include_once 'config.php';

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve and sanitize data from the request
  $username = $_POST['username'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Check if the user already exists with the provided email
  $checkUserQuery = "SELECT * FROM user_details WHERE email = '$email'";
  $checkUserResult = $conn->query($checkUserQuery);

  if ($checkUserResult->num_rows > 0) {
    // User already exists, show an alert message
    echo json_encode(array('msg' => 'User with the same email already exists.'));
  } else {
    // User does not exist, proceed with inserting the data
    $sql = "INSERT INTO user_details (username, email, subject, message) VALUES ('$username', '$email', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
      // Data inserted successfully
      echo json_encode(array('success' => true));
    } else {
      // Error occurred
      echo json_encode(array('msg' => 'An error occurred while saving the data.'));
    }
  }

  $conn->close();
}
?>
