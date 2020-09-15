
// Recibe le id de index.html
var formulario = document.getElementById('formulario');
//Recibe el id de error
var error = document.getElementById('error');

/* Esta función permite validar que todos los campos esten correctamente ingresados */
function validar() {
    // Recibe los datos de los inputs mediante getElementById().
    vvcc = document.getElementById("cc").value;
    vvnombre = document.getElementById("nombre").value;
    vvsueldo = document.getElementById("sueldo").value;
    vvdias = document.getElementById("dias").value;
    vvhed = document.getElementById("hed").value;
    vvhen = document.getElementById("hen").value;
    vvhedd = document.getElementById("hedd").value;
    vvhedn = document.getElementById("hedn").value;
    vvhrn = document.getElementById("hrn").value;
    
    // Condicionales para validar que los campos no están vacíos.
    if (vvsueldo < 0) {
      document.getElementById("sueldo").value = 0;
    }
    if (vvdias < 0) {
      document.getElementById("dias").value = 0;
    }
    if (vvhed < 0) {
      document.getElementById("hed").value = 0;
    }
    if (vvhen < 0) {
      document.getElementById("hen").value = 0;
    }
    if (vvhedd < 0) {
      document.getElementById("hedd").value = 0;
    }
    if (vvhedn < 0) {
      document.getElementById("hedn").value = 0;
    }
    if (vvhrn < 0) {
      document.getElementById("hrn").value = 0;
    }

    // Mensaje de error de que los campos están vacíos.
    if (vvcc == "" || vvnombre == "" || vvsueldo == "" || vvdias == "" || vvhrn == "" || vvhedn == "" || vvhedd == "" || vvhen == "" || vvhed == "") {
        document.getElementById("botonto").hidden = "true";
        error.innerHTML = "<div class='alert alert-danger text-center'>Inserte todos los datos para calcular nómina</div>";
    } else {
        // Muestra el botón (Guardar) si los campos no están vacíos
        document.getElementById("botonto").hidden = false;
        error.innerHTML = "";
    }
}

validar();
//Se registra un evento en el formulario addEventListener()
formulario.addEventListener('keyup', function() {
    validar();
});
//Se registra un evento en el formulario con addEventListener()
formulario.addEventListener('click', function() {
    validar();
});

/* Aquí está el código fuente para realizar una búsqueda de elementos en una tabla, 
mediante cedula. */
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  /* Aquí está el código fuente para realizar una búsqueda de elementos en una tabla, 
  mediante mes.*/
  $(document).ready(function(){
    $("#myInput2").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".myTable2 tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
