<?php 
	// trae los links del css de la plantilla
    include ('includes/links.php');
    session_start();
	$validacion = '';
	
	include ("../model/mysql.php");

    if (isset($_POST['id'])) {
        $usuario=$_POST['id'];
		$contrasena=$_POST['clave'];
        $pdo = new db();   
        $cuentas = $pdo->mysql->query("select * from usuario where Usuario='$usuario' and  Clave='$contrasena'");
        foreach($cuentas as $cuenta)
        {
            $_SESSION['sesion'] = $usuario;

            header("Location: nomina.php");
        }
        $validacion ="<div class='alert alert-danger mt-2'><center><strong>Ojo!</strong> el usuario o contraseña es incorrecta.</div>" ;
		
	}
	
?>
<body class="bg-light">
	
	<div class="limiter" id="login" style="">
		<div class="container-login100">
			<div class="wrap-login100">
                <form action="index.php" method="POST">
					<span class="login100-form-title p-b-26">
						Bienvenido
					</span>
					<span class="login100-form-title p-b-48">
						<i class="zmdi zmdi-font"></i>
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Usuario invalido">
						<input class="input100" type="text" id="usuario" name="id">
						<span class="focus-input100" data-placeholder="Usuario"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Entre Contraseña">
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<input class="input100" type="password" name="clave" id="contraseña">
						<span class="focus-input100" data-placeholder="Contraseña"></span>
					</div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
                            <div class="login100-form-bgbtn"></div>
                            <!-- "Onclick” en un elemento HTML sirve para especificar la funcion de javascript a ejecutar de "login.js". -->
							<button class="login100-form-btn" id="anular">
								Ingresar
							</button>
                        </div>
                        <?php echo $validacion; ?>
                    </div>
                </form>
			</div>
		</div>
	</div>
	
	<div id="dropDownSelect1"></div>

	<script src="js/main.js"></script>
	
	<script src="plantilla/vendor/jquery/jquery-3.2.1.min.js"></script>

	<?php
		// trae los links del js de la planilla
    	include ('includes/footer.php');
	?>
</body>
</html>