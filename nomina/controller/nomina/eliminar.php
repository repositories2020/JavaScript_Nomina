<?php
    session_start();
    require("../../model/mysql.php");

    if ($_GET)
    {
        $pdo = new db();
        $id = $_GET["id"];

        try
        {
            $pdo->mysql->beginTransaction();
            $pst = $pdo->mysql->prepare("DELETE FROM nomina WHERE id_Nomina=:id");
            $pst->bindParam(":id", $id, PDO::PARAM_INT);
            $pst->execute();

            $pdo->mysql->commit();
            header("Location:../../view/nomina.php");    
        }
        catch(PDOException $ex)
        {
            $pdo->mysql->rollback();
            echo "La nomina no pudo ser registrada.<br>".$ex->getMessage();
            echo "<a href='#' onclick=javascript:window.history.back()>Regresar</a>"; 
        }
    }
?>