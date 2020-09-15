<!-- Modal -->
<div class="modal fade" id="addEmpleado" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registrar Empleado</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="../controller/empleado/registrar.php" method="post">

            <div class="mb-3">
              <label class="form-label">Documento</label>
              <input required type="number" min="0" pattern="[0-9]{7,10}" title="Solo se acepta numeros" class="form-control" name="Documento" autocomplete="off" placeholder="Ingrese el documento">
            </div>
            <div class="mb-3">
              <label class="form-label">Nombres</label>
              <input type="text" pattern="[A-Za-z ]{3,30}" title="Solo se acepta letras" class="form-control" name="Nombre" autocomplete="off" placeholder="Ingrese nombres" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Apellidos</label>
              <input  type="text" pattern="[A-Za-z ]{3,30}" title="Solo se acepta letras" class="form-control" name="Apellido" autocomplete="off" placeholder="Ingrese apellidos" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Dirección</label>
              <input  type="text" maxlength="70" class="form-control" name="Direccion" autocomplete="off"placeholder="Ingrese la dirección" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Telefono</label>
              <input required type="number" min="0" pattern="[0-9]{7,10}" title="Solo se acepta numeros" class="form-control" name="Telefono" autocomplete="off" placeholder="Ingrese el telefono">
            </div>
                        
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  style="cursor: pointer;" data-dismiss="modal">Cerrar</button>
        <input type="submit" class="btn btn-primary" style="cursor: pointer;" value="Registrar">
        </form>
      </div>
    </div>
  </div>
</div>   