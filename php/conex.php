<?php
function conn() {
$server ="localhost";
$user = "";
$pass = "";
$db ="";
$conectar = mysqli_connect($server, $user, $pass, $db);
return $conectar;
}
?>