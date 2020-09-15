<?php
    session_start();
    require("../../model/mysql.php");


	if ($_POST){
		
		$pdo = new db();
		$nomina = $pdo->mysql->query("select id_Nomina from nomina order by id_Nomina asc");
		foreach($nomina as $nominas)
		{
			$ip= $nominas['id_Nomina'];
		}
		$id = $ip+1;

		echo $id;

		$pdo = new db();
		$empleado 	= $_POST["empleado"];
		$salario 	= $_POST["sueldo"];
		$dias 		= $_POST["dias"];
		$hed 		= $_POST["hed"];
		$hen 		= $_POST["hen"];
		$hedd 		= $_POST["hedd"];
		$hedn 		= $_POST["hedn"];	
		$hrn 		= $_POST["hrn"];
		$mes 		= $_POST["mes"];


		
		try
		{
			$pdo->mysql->beginTransaction();

			$pst = $pdo->mysql->prepare("insert into nomina() values(:id,:empleado,:salario,:dias,:hed,:hen,:hedd,:hedn,:hrn,:mes)");
			$pst->bindParam(":id", $id, PDO::PARAM_INT);
			$pst->bindParam(":empleado", $empleado, PDO::PARAM_INT);
			$pst->bindParam(":salario", $salario, PDO::PARAM_INT);
			$pst->bindParam(":dias", $dias, PDO::PARAM_INT);
			$pst->bindParam(":hen", $hen, PDO::PARAM_INT);
			$pst->bindParam(":hed", $hed, PDO::PARAM_INT);
			$pst->bindParam(":hedd", $hedd, PDO::PARAM_INT);
			$pst->bindParam(":hedn", $hedn, PDO::PARAM_INT);
			$pst->bindParam(":hrn", $hrn, PDO::PARAM_INT);
			$pst->bindParam(":mes", $mes, PDO::PARAM_STR);
	

			$pst->execute();
			$pdo->mysql->commit();

            header("Location:../../view/nomina.php"); 
		}
		catch(PDOException $ex)
		{
			$pdo->mysql->rollback();
			echo "El nomina no pudo ser guardado.";
			echo "<a href='#' onclick=javascript:window.history.back()>Regresar</a>"; 
		}

	}