<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'bavaria@hotmail.gr';
    $subject = 'New Contact Form Submission';
    $body = "Όνομα: $name\nEmail: $email\n\nΜήνυμα:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo '<p>Το μήνυμα εστάλη επιτυχώς!</p>';
    } else {
        echo '<p>Η αποστολή του μηνύματος απέτυχε. Παρακαλώ δοκιμάστε ξανά.</p>';
    }
}
?>
