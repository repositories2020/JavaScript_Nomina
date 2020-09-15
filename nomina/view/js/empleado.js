var empleadocc = document.getElementById('cc');
var nombreform = document.getElementById('nombre');

empleadocc.addEventListener('click', function(event) {
    var datos = new FormData(formulario1);




    fetch('../controller/empleado/consulta.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(data => {
            nombreform.value = `${data}`
        });
});