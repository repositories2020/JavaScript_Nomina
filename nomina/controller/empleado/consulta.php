
<?php
    include ('../../model/mysql.php');
    $empleado = $_POST['empleado'];
    $pdo = new db();

    $datosempleado = $pdo->mysql->prepare("SELECT * FROM empleado WHERE id_Empleado = $empleado");
    $datosempleado->execute();
    $empleados = $datosempleado->fetch();

    if ($empleado === $empleados['id_Empleado']) {
        echo json_encode( $empleados['Nombre'] );
    }else {
        echo json_encode('invalido');
    }

?>