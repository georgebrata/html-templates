<?php
//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    require 'vendor/autoload.php';
    require 'config.php';

    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = $config['host'];
        $mail->SMTPAuth = true;
        $mail->Username = $config['username'];
        $mail->Password = $config['password'];
        $mail->SMTPSecure = $config['secure'];
        $mail->Port = $config['port'];

        //Recipients
        $mail->setFrom($config['from'], $config['fromName']);
        $mail->addAddress($config['sendTo']);
        $mail->addAddress($_POST['email']);

        //Content
        $mail->isHTML(true);
        $mail->Subject = $_POST['subject'];
        $mail->Body    = '<p>Name: ' . $_POST['name'] . "</p>"
        . "<p>Email: " . $_POST['email'] . "</p>"
        . "<p>Message: " . $_POST['message'] . "</p>";

        $mail->send();
        echo json_encode(['status' => true, "data" => 'Message has been sent']);
    } catch (Exception $e) {
        echo json_encode(['status' => false, "data" => "Message could not be sent\nMailer Error: " . $mail->ErrorInfo]);
    }
}else{
    echo "<h1>Access forbidden, kids!</h1>";
}