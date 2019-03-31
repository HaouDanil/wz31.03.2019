<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<body>
<?php
function send_mail()
{
$name = htmlspecialchars($_REQUEST['name']);
}
{
$email = htmlspecialchars($_REQUEST['email']);
}
{

}
$message = ''.$_REQUEST['style'].''.$_REQUEST['home_cooking'].'<br><b>Телефон: </b>'.$_REQUEST['phone'].'<br><b>E-mail: </b>'.$_REQUEST['mail'];

include "class.phpmailer.php";// подключаем класс

$mail = new PHPMailer();
$mail->From = 'zakaz@' . $_SERVER['HTTP_HOST'];
$mail->FromName = 'zakaz@' . $_SERVER['HTTP_HOST'];
$mail->AddAddress('info@himuglemet.ru');
$mail->IsHTML(true);
$mail->Subject = '[Новый заказ] Заказ на гироскутеры';

if(isset($_FILES['files']))
{
if($_FILES['files']['error'] == 0)
{
$mail->AddAttachment($_FILES['files']['tmp_name'],$_FILES['files']['name']);
}
}
$mail->Body = $message;
if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);
{
echo '';
}
if (!empty($_POST['submit'])) send_mail();
?>
<html>
<script type="text/javascript">
			setTimeout('location.replace("success")', 0001);
		</script> 

</html>
</body>
</html>