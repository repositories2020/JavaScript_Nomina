<?php
    session_start();
    require("../../model/mysql.php");

	if ($_POST){
		
		$pdo = new db();
		$empleado = $pdo->mysql->query("select id_Empleado from empleado order by id_Empleado asc");
		foreach($empleado as $empleados)
		{
			$ip= $empleados['id_Empleado'];
		}
		$id = $ip+1;
		echo $id;

		$pdo = new db();
		$documento 	= $_POST["Documento"];
		$nombre 	= $_POST["Nombre"];
		$apellido 		= $_POST["Apellido"];
		$direccion 		= $_POST["Direccion"];
		$telefono 		= $_POST["Telefono"];	

		
		try
		{
			$pdo->mysql->beginTransaction();

			$pst = $pdo->mysql->prepare("insert into Empleado() values(:id,:documento,:nombre,:apellido,:direccion,:telefono)");
			$pst->bindParam(":id", $id, PDO::PARAM_INT);
			$pst->bindParam(":documento", $documento, PDO::PARAM_INT);
			$pst->bindParam(":nombre", $nombre, PDO::PARAM_STR);
			$pst->bindParam(":apellido", $apellido, PDO::PARAM_STR);
			$pst->bindParam(":direccion", $direccion, PDO::PARAM_STR);
			$pst->bindParam(":telefono", $telefono, PDO::PARAM_INT);
	

			$pst->execute();
			$pdo->mysql->commit();

            header("Location:../../view/nomina.php"); 
		}
		catch(PDOException $ex)
		{
			$pdo->mysql->rollback();
			echo "El empleado no pudo ser guardado.";
			echo "<a href='#' onclick=javascript:window.history.back()>Regresar</a>"; 
		}

	}