<?php

session_start();

include('db_connect.php');
$msg = false;
if(isset($_POST['user_name'])) {
    $user_name = $_POST['user_name'];
    $user_password = $_POST['user_password'];

    $query = "select * from user where user = '"  .$user_name.  "' AND password = '"  .$user_password.  "'limit 1";
    $result = mysqli_query($con , $query);

    if (mysqli_num_rows($result)==1) {
        header('Location: welcome.php');
    } else {
        $msg = "Incorrect Password";
    }
}
?>


<!-- if(isset($_POST['user_name'])): This line checks if the 'user_name' parameter is set in the POST data. It ensures that the form has been submitted and the 'user_name' field is not empty.


$user_name = $_POST['user_name'];: This line retrieves the 'user_name' from the POST data and assigns it to the variable $user_name.
$user_password = $_POST['user_password'];: This line retrieves the 'user_password' from the POST data and assigns it to the variable $user_password.


$query = "select * from user where user = '" .$user_name. "' AND password = '" .$user_password. "'limit 1";: This line constructs a SQL query string.


$result = mysqli_query($con , $query);: This line executes the SQL query using mysqli_query. The result is stored in the variable $result. This result is a resource that can be used to fetch data from the query.


if (mysqli_num_rows($result) == 1): This line checks if the number of rows returned by the query is equal to 1. In your context, it's checking if there is a user with the specified username and password. If there is exactly one matching row, it indicates a successful login.



header('Location: welcome.php');: If the login is successful, this line redirects the user to the 'welcome.php' page.
$msg = "Incorrect Password";: If the login is unsuccessful (no matching user found), this line sets a message indicating that the password is incorrect. -->



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <title>Music Website Login</title>
</head>

<body>
    <header>
        <div class="left_bx1">
            <div class="content">
                <form method="post">
                    <h3>Login</h3>
                    <div class="card">
                        <label for="name">Name</label>
                        <input type="text" name="user_name" placeholder="Enter Your Username...">
                    </div>
                    <div class="card">
                        <label for="password">Password</label>
                        <input type="password" name="user_password" placeholder="Enter Your Password...">
                    </div>
                    <input type="submit" value="Login" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" id=""><span>Remember Me</span>
                    </div>
                    <p>Dont't have an account yet? <a href="signup.php"> Sign Up </a></p>
                </form>
            </div>
        </div>


        <div class="right_bx1">
            <img src="login_png.jpg" alt="">
            <!-- <h3>Incorrect Password</h3> -->
            <?php
            echo ('<h3>'.$msg.'</h3>');
            ?>
        </div>
    </header>
</body>