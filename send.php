<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name = strip_tags($_POST["name"]);
  $email = strip_tags($_POST["email"]);
  $phone = strip_tags($_POST["phone"]);
  $message = strip_tags($_POST["message"]);

  $to = "contato@galltech.com.br"; // SEU EMAIL
  $subject = "Novo contato pelo site - GallTech";

  $body = "
  Nome: $name\n
  Email: $email\n
  WhatsApp: $phone\n\n
  Mensagem:\n$message
  ";

  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($to, $subject, $body, $headers)) {
  header("Location: index.html?success=1");
  exit;
} else {
  header("Location: index.html?success=0");
  exit;
}

}
?>