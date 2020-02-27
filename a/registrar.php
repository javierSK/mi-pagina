<?php
include 'cn.php';
$nombre = $_POST["nombre"];
$correo = $_POST["Correo"];
$direccion = $_POST["Direccion"];
$region = $_POST["Region"];
$comuna = $_POST["Comuna"];
$monto = $_POST["Monto"];
$telefono = $_POST["Telefono"];

$insertar = "INSERT INTO socios(nombre, correo, direccion, region, comuna, monto, telefono) VALUES('$nombre', '$correo', '$direccion', '$region', '$comuna', '$monto', '$telefono')";


$verificar = mysqli_query($conexion, "SELECT * FROM socios WHERE correo = '$correo'");
if(mysqli_num_rows($verificar) > 0){
    echo '<script>
    alert("El correo ya está registrado");
    window.history.go(-1);
    </script>';
    exit;
}



$resultado = mysqli_query($conexion, $insertar);
if (!$resultado) {
    echo '<script>
    alert("Error al registrarse");
    window.history.go(-1);
    </script>';
}
else
{
    echo '<script>
    alert("Formulario enviado");
    window.history.go(-1);
    </script>';
}

mysqli_close($conexion);