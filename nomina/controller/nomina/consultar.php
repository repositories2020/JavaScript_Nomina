<?php

    $todo = array();
    $cc = array();
    $nombre = array();
    $sueldo = array();
    $dias = array();
    $hed = array();
    $hen = array();
    $hedd = array();
    $hedn = array();
    $hrn = array();
    $mes = array();
    $id_Nomina = array();

    $pdo = new db();
    $nominas = $pdo->mysql->query("SELECT * FROM nomina n, empleado e WHERE n.Empleado = e.id_Empleado");

    foreach($nominas as $nomina)
    {

        array_push($cc, $nomina['Documento']);
        array_push($nombre, $nomina['Nombre']);
        array_push($sueldo, $nomina['Salario']);
        array_push($dias, $nomina['DiasTrabajados']);
        array_push($hed, $nomina['Hed']);
        array_push($hen, $nomina['Hen']);
        array_push($hedd, $nomina['Hedd']);
        array_push($hedn, $nomina['Hedn']);
        array_push($hrn, $nomina['Hrn']);
        array_push($mes, $nomina['FechaNomina']);
        array_push($id_Nomina, $nomina['id_Nomina']);
    }
    array_push($todo, implode(",", $cc));
    array_push($todo, implode(",", $nombre));
    array_push($todo, implode(",", $sueldo));
    array_push($todo, implode(",", $dias));
    array_push($todo, implode(",", $hed));
    array_push($todo, implode(",", $hen));
    array_push($todo, implode(",", $hedd));
    array_push($todo, implode(",", $hedn));
    array_push($todo, implode(",", $hrn));
    array_push($todo, implode(",", $mes));
    array_push($todo, implode(",", $id_Nomina));

    $objSon=json_encode($todo);

?>
<script>
    var jjson=eval(<?php echo $objSon; ?>)

        function dividirCadena(cadenaADividir,separador) {
        var arrayDeCadenas = cadenaADividir.split(separador);
        return arrayDeCadenas;
    }

    var coma = ",";

    var cc = dividirCadena(jjson[0], coma);
    console.log(cc);
    var nombre = dividirCadena(jjson[1], coma);
    console.log(nombre);
    var sueldo = dividirCadena(jjson[2], coma);
    console.log(sueldo);
    var dias = dividirCadena(jjson[3], coma);
    console.log(dias);
    var hed = dividirCadena(jjson[4], coma);
    console.log(hed);
    var hen = dividirCadena(jjson[5], coma);
    console.log(hen);
    var hedd = dividirCadena(jjson[6], coma);
    console.log(hedd);
    var hedn = dividirCadena(jjson[7], coma);
    console.log(hedn);
    var hrn = dividirCadena(jjson[8], coma);
    console.log(hrn);
    var mes = dividirCadena(jjson[9], coma);
    console.log(mes);
    var id_Nomina = dividirCadena(jjson[10], coma);
    console.log(id_Nomina);
</script>