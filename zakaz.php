<?
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
$name = $_POST['name'];
$tel = $_POST['tel'];
$emailz = $_POST['email'];
$comment = $_POST['comment'];
{
$email="info@himuglemet.ru"; // ----------почта, куда отправляем письмо info@himuglemet.ru
$headers  =  'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-type: text/html; charset=UTF-8' . "\r\n";
$headers .=  'From: zakaz@'.$_SERVER['HTTP_HOST'] . "\r\n"; // ------- адрес отправителя, это заголовок письма, менять не обязательно
$message    = "
<b>Клиент:</b><br>
<br>Имя: ".$name."
<br>Телефон: ".$tel."
<br>Почта: ".$emailz."
<br>Ком.: ".$comment."
<hr>
<br>Ссылка: ".@$_SERVER['HTTP_REFERER']."
<br>IP-адрес посетителя: ".@$_SERVER['REMOTE_ADDR']."
";

$mail=mail($email, $subject, $message, $headers);

$headers  =  'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-type: text/html; charset=UTF-8' . "\r\n";
$headers .=  'From: zakaz@'.$_SERVER['HTTP_HOST'] . "\r\n"; // ---------------------- адрес отправителя, это заголовок письма, менять не обязательно
$subject    = "[ Спасибо за оформленный заказ Cvb.biz ]"; // ----------------------------------------- тема письма
$message    = "
<b>Спасибо за оформленный заказ! </b>
<br><br>
Форма: <b> ".$whatf." </b>
<br>
В нашем интернет магазине Гироскутеров <b>Cvb.biz</b>. 
<br>
Для подтверждения и уточнения деталей заявки в течении 1 часа в рабочее время с Вами свяжется наш Менеджер. 
<br>
Убедительная просьба не выключайте Ваш мобильный телефон на него перезвонит наш менеджер. 
<br>
Примечание: Работаем с <b>9 до 19-00</b>. 
<br>
Если заказ оформлен во вне рабочее время наш менеджер позвонит к Вам на следующий день.
";
$mail=mail($emailz, $subject, $message, $headers);
}
?>
