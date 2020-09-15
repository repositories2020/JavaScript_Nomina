<?php 
    session_start();
    if (!($_SESSION['sesion'])) {
        header("Location: index.php");
    }
    require("../model/mysql.php");
    require('includes/links.php');
    require('../controller/nomina/consultar.php');
?>
<body class="bg-light">

<nav class=" navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand text-white">
        <h2>Aplicación JS Nómina</h2>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <!-- "Onclick” en un elemento HTML sirve para especificar la funcion de javascript a ejecutar de "app.js". -->
                <button class="nav-link" onclick="todo()">Todo</button>
            </li>
            <li class="nav-item">
                <!-- "Onclick” en un elemento HTML sirve para especificar la funcion de javascript a ejecutar de "app.js". -->
                <button class="nav-link" onclick="horasExtra()">Horas Extra</button>
            </li>
            <li class="nav-item">
                <!-- "Onclick” en un elemento HTML sirve para especificar la funcion de javascript a ejecutar de "app.js". -->
                <button class="nav-link" onclick="apropiaciones()">Apropiaciones</button>
            </li>
            <li class="nav-item">
                <!-- "Onclick” en un elemento HTML sirve para especificar la funcion de javascript a ejecutar de "app.js". -->
                <button class="nav-link" onclick="neto()">Netos</button>
            </li>
            <li class="nav-item">
                <!-- "Onclick” en un elemento HTML sirve para especificar la funcion de javascript a ejecutar de "app.js". -->
                <a class="nav-link" href='includes/cerrar.php'>Cerrar Sesion</a>
            </li>

        </ul>
    </div>
</nav>
<div id="recogerDatos" class="recogerDatos">
</div>
<div class="container-fluid my-4" > 
    <div class="row ml-0" id="formulario">
        <div class="col-lg-4 card px-0 shadow">
            <div class="card-header text-center w-100">
                <h3 class="h2">Formulario Nomina</h3>
                
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addEmpleado">
                      Registrar Empleado
                </button><br>
                <?php include ('includes/modal.php'); ?>
            </div>  
            <div class="card-body">
                <form id="formulario1" action="../controller/nomina/guardar.php" method="POST">
                    <h5 class="mb-2 class-font-weight">Datos del empleado</h5><!-- Button trigger modal -->
                    
                    
                    <div class="border shadow-sm p-3 ">
                        <div class="form-group">
                            <label for="cc">Número de documento:</label>
                            
                            <select value="" class="form-control" id="cc" name="empleado">
                            <?php
                                $pdo = new db();
                                $empleados = $pdo->mysql->query("select * from empleado");
                                foreach($empleados as $empleado)
                                {
                                ?>
                                    <option value="<?php echo $empleado['id_Empleado']; ?>"><?php echo $empleado['Documento'];?></option>
                                <?php
                                }
                                ?>
                            </select>    
                            <div class="met-3" id="respuesta2"></div><br>
                        </div>
                        <div class="form-group">
                            <label for="nombre">Nombre y apellido:</label>
                            <input type="text" class="form-control nombreform" value= "" id="nombre" readonly>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-7">
                                <label for="sueldo">Sueldo mensual :</label>
                                <input type="number" name="sueldo" class="form-control" id="sueldo" placeholder="Ingrese el sueldo mensual">
                            </div>
                            <div class="form-group col-sm-5">
                                <label for="dias">Dias:</label>
                                <input type="number" name="dias" class="form-control" id="dias" placeholder="# Días">
                            </div> 
                        </div>
                    </div>
                    <hr>
                    <h5 class="mb-2 class-font-weight">
                        Horas extras
                    </h5>
                    <div class="border shadow-sm p-3 mb-3">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label for="hed">Diurnas:</label>
                                <input type="number" name="hed" class="form-control" id="hed" placeholder="# de horas">
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="hen">Nocturnas:</label>
                                <input type="number" name="hen" class="form-control" id="hen" placeholder="# Horas">
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="hedd">Diurnas dominicales:</label>
                                <input type="number" name="hedd" class="form-control" id="hedd" placeholder="# Horas">
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="hedn">Nocturnas dominicales:</label>
                                <input type="number" name="hedn" class="form-control" id="hedn" placeholder="# Horas">
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="hrn">hrn:</label>
                                <input type="number" name="hrn" class="form-control" id="hrn" placeholder="# Horas">
                            </div>       
                            <div class="form-group col-sm-6">
                                <label for="mes">Mes:</label>
                                <input type="date" name="mes" class="form-control" id="mes">
                            </div>       
                        </div>
                    </div>
                    <div class="row justify-content-around ml-0 mr-0 w-100">
                        <div class="col-md-12 w-100 px-0 font-weight-bold" id="error"></div>
                        <!-- "Onclick” en un elemento HTML sirve para especificar la funcion de javascript a ejecutar de "app.js". -->
                        <button type="submit" class="btn btn-success col-md-12" onclick="guardar()" id="botonto">Guardar</button>                   
                    </div>
                </form>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="row">
                <div class="col-md-6">
                    <input class="form-control" id="myInput" type="text" placeholder="Cedula">
                </div>
                <div class="col-md-6">
                    <input class="form-control" id="myInput2" type="text" placeholder="mes">
                </div>
            </div>
            <br>
            <table class="table myTable2 table-hover table-striped table-bordered" id="myTable">
                <thead id ="thead">
                </thead>
                <tbody id="tbody">
                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- The Modal -->
<div class="modal" id="myModal">
    <div class="modal-dialog ">
    <div class="modal-content">
    
        <!-- Modal Header -->
        <div class="modal-header">
        <h4 class="modal-title">Detalles</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body" id="idmodal">
        
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
    </div>
    </div>
</div>



    <!-- Archivos JS -->
    <script src="js/empleado.js"></script>
    <!-- Atributo script externo -->
    <script src="js/app.js"></script>
    <script src="plantilla/vendor/jquery/jquery-3.2.1.min.js"></script>    

    <!--  Atributo script externo -->
    <script src="js/validacion.js"></script>


	<?php
		// trae los links del js de la planilla
    	include ('includes/footer.php');
	?>
</body>
</html>
