var ver = 'vertodo';



/* Muestra los datos basicos en una tabla y con un boton que se encuentra en esta,
en forma de modal muestra todos los datos incluyendo operaciones de la nomina*/
function todo() {
  ver = 'vertodo';
  // Se llama la función de borrarTabla()
  borrarTabla();

  /* Con la etiqueta getElementById devuelve una lista de elementos con un nombre determinado. 
  Busca en todo el documento (index.html), el nombre de la etiqueta (myTable, thead). */
  var tableThead = document.getElementById('myTable').getElementsByTagName('thead')[0];
  // Con  la varible  insertRow, inserta una nueva fila en la tabla.
  var newRowHead   = tableThead.insertRow(tableThead.rows.length);
  
  //El método newRowHead.insertCell() inserta una nueva celda con el siguinte encabezado.
  newRowHead.insertCell(0).innerHTML+="Cedula" ;
  newRowHead.insertCell(1).innerHTML+="Nombre" ;
  newRowHead.insertCell(2).innerHTML+="Sueldo" ;
  newRowHead.insertCell(3).innerHTML+="Dias" ;
  newRowHead.insertCell(4).innerHTML+="Mes" ;
  newRowHead.insertCell(5).innerHTML+="" ;
  newRowHead.insertCell(6).innerHTML+="" ;




  
  for (let i = 0; i < cc.length; i++) {
    //Se agrega una fila tbody, que obtiene una referencia a ella y la agrega allí.
    var tableTbody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    // Insertar una fila en la tabla en la última fila
    var newRow   = tableTbody.insertRow(tableTbody.rows.length);

    //El método newRow.insertCell() inserta una nueva celda.
    newRow.insertCell(0).innerHTML+= cc[i];
    newRow.insertCell(1).innerHTML+= nombre[i];
    newRow.insertCell(2).innerHTML+= sueldo[i];
    newRow.insertCell(3).innerHTML+= dias[i];;
    newRow.insertCell(4).innerHTML+= mes[i];;

    var boton1 = "<button type='button'class='btn btn-info bot' data-toggle='modal'";
    var boton2 = "data-target='#myModal' id='"+ i +"'";
    var boton3 = "onclick='buscar("+ i +")'><i class='fas fa-info-circle'></i></button>";
    
    var boton4 = "<a type='button'class='btn btn-danger'";
    var boton5 = "href='../controller/nomina/eliminar.php?id="+ id_Nomina[i] +"'>";
    var boton6 = "<i class='fas fa-info-circle'></i></a>";

    var boton = boton1 + boton2 + boton3;
    
    /*Inserta nueva cell con el contenido al final de una fila de tabla con  
    insertCell(5) = "boton" */
    newRow.insertCell(5).innerHTML+= boton;

    boton = boton4 + boton5 + boton6;
    newRow.insertCell(6).innerHTML+= boton;


  }

}
/* Realiza todas las operaciones de la nómina*/
function operacion(num) {
  
  let smlv = 877803;

  let basico = (sueldo[num]*dias[num])/30;

  let transporte = 102854;
  if (sueldo[num] < (smlv * 2)) {
      transporte = (transporte*dias[num])/30;
  }else{
      transporte = 0;
  }

  let valorHora = sueldo[num]/240;

  let vhed = 1.25*valorHora*(hed[num]);
  let vhen = 1.75*valorHora*(hen[num]);
  let vhedd = 2*valorHora*(hedd[num]);
  let vhedn = 2.5*valorHora*(hedn[num]);
  let vhrn = 1.35*valorHora*(hrn[num]);
  let totalExtras = vhed + vhen + vhedd + vhedn + vhrn;
  let totalDesvengado = totalExtras + transporte + basico;
  let saludEmpleado = (totalDesvengado - transporte)*4/100;
  let pensionEmpleado = saludEmpleado;
  let cantidadSmlv  = totalDesvengado / smlv;
  let fondoSolidario = fondo(cantidadSmlv, totalDesvengado);

  let uvt = 35607;
  let baseLiquidacion = totalDesvengado  - saludEmpleado -pensionEmpleado - fondoSolidario;
  let exedente25 = baseLiquidacion * 0.75;
  let uvt2 = exedente25  / uvt;
  let refuenteSalarial =  0;

  if (uvt2 > 2300) {
    refuenteSalarial = ((uvt2 - 2300)*0.39 + 770)*uvt;
  }else if (uvt2 > 945) {
    refuenteSalarial = ((uvt2 - 945)*0.37 + 268)*uvt;
  }else if (uvt2 > 640) {
    refuenteSalarial = ((uvt2 - 640)*0.35 + 162)*uvt;
  }else if (uvt2 > 360) {
    refuenteSalarial = ((uvt2 - 360)*0.33 + 69)*uvt;
  }else if (uvt2 > 150) {
    refuenteSalarial = ((uvt2 - 150)*0.28 + 10)*uvt;
  }else if (uvt2 > 95) {
    refuenteSalarial = ((uvt2 - 95)*0.19)*uvt;
  }

  let deducidoTotal = saludEmpleado + pensionEmpleado + fondoSolidario + refuenteSalarial;
  let netoPagar = deducidoTotal + totalDesvengado;
  let saludParafiscal = (totalDesvengado - transporte)*8.5/100;
  let pensionParafiscal = (totalDesvengado - transporte)*12/100;
  let arp =  (totalDesvengado - transporte)*0.522/100;
  let sena = (totalDesvengado - transporte)*2/100;
  let icbf = (totalDesvengado - transporte)*3/100;
  let cajas= (totalDesvengado - transporte)*4/100;
  let totalParafiscales = saludParafiscal + pensionParafiscal + arp + sena + icbf + cajas;

  let prima = totalDesvengado*dias[num]/360;
  let vacaciones  = sueldo[num] * dias[num]/720;
  let cesantias = totalDesvengado*dias[num]/360;
  let intCesantias = (cesantias * 0.12 * dias[num])/360;
  let totalPrestaciones = prima + cesantias + vacaciones + intCesantias;
  
  let datos = [basico, transporte, valorHora, vhed, vhen, vhedd, vhedn, vhrn, totalExtras, 
    totalDesvengado, saludEmpleado, pensionEmpleado, cantidadSmlv, fondoSolidario, 
    uvt, refuenteSalarial, deducidoTotal, netoPagar, saludParafiscal, 
    pensionParafiscal, arp, sena, icbf, cajas, totalParafiscales, prima, vacaciones,
    cesantias, intCesantias, totalPrestaciones, uvt2, baseLiquidacion];

  // Retorna la función
  return (datos); 
  
}
/* Muestra todos los datos de la nomina en un modal*/
function buscar(num) {
  let modal = document.getElementById('idmodal');

  let datos = operacion(num);
  modal.innerHTML+= "<h2>Datos del empleado<br>";
  modal.innerHTML = "<b>Cedula :</b> " + cc[num] + "<br>";
  modal.innerHTML+= "<b>Nombre :</b> " + nombre[num] + "<br>";
  modal.innerHTML+= "<b>Sueldo :</b> " + sueldo[num] + "<br>";
  modal.innerHTML+= "<b>Dias :</b> " + dias[num] + "<br>";
  modal.innerHTML+= "<b>Mes :</b> " + mes[num] + "<br><hr>";
  modal.innerHTML+= "<b>horas hed :</b> " + Math.round(hed[num]) + " <b>valor : </b> " + Math.round(datos[3]) + " <br>";
  modal.innerHTML+= "<b>horas hen :</b> " + Math.round(hen[num]) + " <b>valor : </b> " + Math.round(datos[4]) + " <br>";
  modal.innerHTML+= "<b>horas hedd :</b> " + Math.round(hedd[num]) + " <b>valor : </b> " + Math.round(datos[5]) + " <br>";
  modal.innerHTML+= "<b>horas hedn :</b> " + Math.round(hedn[num]) + " <b>valor : </b> " + Math.round(datos[6]) + " <br>";
  modal.innerHTML+= "<b>horas hrn :</b> " + Math.round(hrn[num]) + " <b>valor : </b> " + Math.round(datos[7]) + " <br>";
  modal.innerHTML+= "<b>basico :</b> " + Math.round(datos[0]) + "<br>";
  modal.innerHTML+= "<b>valorHora :</b> " + Math.round(datos[2]) + "<br><hr>";
  modal.innerHTML+= "<b>transporte :</b> " + Math.round(datos[1]) + "<br>";
  modal.innerHTML+= "<b>totalExtras :</b> " + Math.round(datos[8]) + "<br>";
  modal.innerHTML+= "<b>totalDesvengado :</b> " + Math.round(datos[9]) + "<br>";
  modal.innerHTML+= "<b>saludEmpleado :</b> " + Math.round(datos[10]) + "<br>";
  modal.innerHTML+= "<b>pensionEmpleado :</b> " + Math.round(datos[11]) + "<br>";
  modal.innerHTML+= "<b>fondoSolidario :</b> " + Math.round(datos[13]) + "<br>";
  modal.innerHTML+= "<b>uvt :</b> " + Math.round(datos[30]) + "<br>";
  modal.innerHTML+= "<b>baseLiquidacion :</b> " + Math.round(datos[31]) + "<br>";
  modal.innerHTML+= "<b>refuenteSalarial :</b> " + Math.round(datos[15]) + "<br>";
  modal.innerHTML+= "<b>deducidoTotal :</b> " + Math.round(datos[16]) + "<br>";
  modal.innerHTML+= "<b>netoPagar :</b> " + Math.round(datos[17]) + "<br><hr>";
  modal.innerHTML+= "<h2>Parafiscales<br>";
  modal.innerHTML+= "<b>saludParafiscal :</b> " + Math.round(datos[18]) + "<br>";
  modal.innerHTML+= "<b>pensionParafiscal :</b> " + Math.round(datos[19]) + "<br>";
  modal.innerHTML+= "<b>arp :</b> " + Math.round(datos[20]) + "<br>";
  modal.innerHTML+= "<b>sena :</b> " + Math.round(datos[21]) + "<br>";
  modal.innerHTML+= "<b>icbf :</b> " + Math.round(datos[22]) + "<br>";
  modal.innerHTML+= "<b>cajas :</b> " + Math.round(datos[23]) + "<br>";
  modal.innerHTML+= "<b>totalParafiscales :</b> " + Math.round(datos[24]) + "<br><hr>";
  modal.innerHTML+= "<h2>Prestaciones<br>";
  modal.innerHTML+= "<b>prima :</b> " + Math.round(datos[25]) + "<br>";
  modal.innerHTML+= "<b>vacaciones :</b> " + Math.round(datos[26]) + "<br>";
  modal.innerHTML+= "<b>cesantias :</b> " + Math.round(datos[27]) + "<br>";
  modal.innerHTML+= "<b>intCesantias :</b> " + Math.round(datos[28]) + "<br>";
  modal.innerHTML+= "<b>totalPrestaciones :</b> " + Math.round(datos[29]) + "<br><hr>";
}

/* Función de apropìapones, presupuesto de gastos se compondrá de los gastos de funcionamiento,
 del servicio de la deuda pública y de los gastos de inversión */
function apropiaciones() {
  ver = 'verapropiaciones';
  borrarTabla();

   /* Con la etiqueta getElementById devuelve una lista de elementos con un nombre determinado. 
  Busca en todo el documento (index.html), el nombre de la etiqueta (myTable, thead). */
  var tableThead = document.getElementById('myTable').getElementsByTagName('thead')[0];
    // Con  la varible  insertRow, inserta una nueva fila en la tabla.
  var newRowHead   = tableThead.insertRow(tableThead.rows.length);
  
    //El método newRowHead.insertCell() inserta una nueva celda con el siguinte encabezado.
  newRowHead.insertCell(0).innerHTML+="Cedula" ;
  newRowHead.insertCell(1).innerHTML+="Nombre" ;
  newRowHead.insertCell(2).innerHTML+="ARP" ;
  newRowHead.insertCell(3).innerHTML+="SENA" ;
  newRowHead.insertCell(4).innerHTML+="ICBF" ;
  newRowHead.insertCell(5).innerHTML+="CAJAS" ;
  newRowHead.insertCell(6).innerHTML+="SALUD" ;
  newRowHead.insertCell(7).innerHTML+="PENSION" ;
  newRowHead.insertCell(8).innerHTML+="TOTAL" ;
  newRowHead.insertCell(9).innerHTML+="MES" ;

  for (let i = 0; i < cc.length; i++) {   

    /* Con la etiqueta getElementById devuelve una lista de elementos con un nombre determinado. 
    Busca en todo el documento (index.html), el nombre de la etiqueta (myTable, tbody). */
    var tableTbody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    // Insertar una fila en la tabla en la última fila
    var newRow   = tableTbody.insertRow(tableTbody.rows.length);
    
    let datos = operacion(i);

    //El método newRowHead.insertCell() inserta una nueva celda.
    newRow.insertCell(0).innerHTML+= cc[i];
    newRow.insertCell(1).innerHTML+= nombre[i];
    newRow.insertCell(2).innerHTML+= datos[20];
    newRow.insertCell(3).innerHTML+= Math.round(datos[21]);
    newRow.insertCell(4).innerHTML+= Math.round(datos[22]);
    newRow.insertCell(5).innerHTML+= Math.round(datos[23]);
    newRow.insertCell(6).innerHTML+= Math.round(datos[18]);
    newRow.insertCell(7).innerHTML+= Math.round(datos[19]);
    newRow.insertCell(8).innerHTML+= Math.round(datos[24]);
    newRow.insertCell(9).innerHTML+= mes[i];
  }
}

/* Función para calcular el pago por Las horas extras, los recargos nocturnos, los recargos dominicales y festivos, 
son conceptos que están sujetos la jornada laboral ordinaria del trabajador.*/
function horasExtra() {
  ver = 'verhorasExtra';
  borrarTabla();

    /* Con la etiqueta getElementById devuelve una lista de elementos con un nombre determinado. 
    Busca en todo el documento (index.html), el nombre de la etiqueta (myTable, tbody). */
  var tableThead = document.getElementById('myTable').getElementsByTagName('thead')[0];
  // Insertar una fila en la tabla en la última fila
  var newRowHead   = tableThead.insertRow(tableThead.rows.length);

    //El método newRowHead.insertCell() inserta una nueva celda con el siguinte encabezado.
  newRowHead.insertCell(0).innerHTML+="Cedula" ;
  newRowHead.insertCell(1).innerHTML+="Nombre" ;
  newRowHead.insertCell(2).innerHTML+="hed" ;
  newRowHead.insertCell(3).innerHTML+="hen" ;
  newRowHead.insertCell(4).innerHTML+="hedd" ;
  newRowHead.insertCell(5).innerHTML+="hedn" ;
  newRowHead.insertCell(6).innerHTML+="hrn" ;
  newRowHead.insertCell(7).innerHTML+="totalExtras" ;
  newRowHead.insertCell(8).innerHTML+="Mes" ;


  for (let i = 0; i < cc.length; i++) {

    /* Con la etiqueta getElementById devuelve una lista de elementos con un nombre determinado. 
    Busca en todo el documento (index.html), el nombre de la etiqueta (myTable, tbody). */
    var tableTbody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    // Insertar una fila en la tabla en la última fila
    var newRow   = tableTbody.insertRow(tableTbody.rows.length);
    
    let datos = operacion(i);

    //El método newRowHead.insertCell() inserta una nueva celda.
    newRow.insertCell(0).innerHTML+= cc[i];
    newRow.insertCell(1).innerHTML+= nombre[i];
    newRow.insertCell(2).innerHTML+= datos[3];
    newRow.insertCell(3).innerHTML+= Math.round(datos[4]);
    newRow.insertCell(4).innerHTML+= Math.round(datos[5]);
    newRow.insertCell(5).innerHTML+= Math.round(datos[6]);
    newRow.insertCell(6).innerHTML+= Math.round(datos[7]);
    newRow.insertCell(7).innerHTML+= Math.round(datos[8]);
    newRow.insertCell(8).innerHTML+= mes[i];

  }
}

/* Función de neto que permite ver una tabla con los siguientes columnas en una tabla 
(Cedula, Nombre, Sueldo, Devengado, Deducido, Neto, Mes) */
function neto() {
  ver = 'verneto';
  borrarTabla();

  /* Con la etiqueta getElementById devuelve una lista de elementos con un nombre determinado. 
  Busca en todo el documento (index.html), el nombre de la etiqueta (myTable, thead). */
  var tableThead = document.getElementById('myTable').getElementsByTagName('thead')[0];
  // Con  la varible  insertRow, inserta una nueva fila en la tabla.
  var newRowHead   = tableThead.insertRow(tableThead.rows.length);
  
  // El método newRowHead.insertCell() inserta una nueva celda con el siguinte encabezado.
  newRowHead.insertCell(0).innerHTML+="Cedula" ;
  newRowHead.insertCell(1).innerHTML+="Nombre" ;
  newRowHead.insertCell(2).innerHTML+="Sueldo" ;
  newRowHead.insertCell(3).innerHTML+="Devengado" ;
  newRowHead.insertCell(4).innerHTML+="Deducido" ;
  newRowHead.insertCell(5).innerHTML+="Neto" ;
  newRowHead.insertCell(6).innerHTML+="Mes" ;


  for (let i = 0; i < cc.length; i++) {

    /* Con la etiqueta getElementById devuelve una lista de elementos con un nombre determinado. 
    Busca en todo el documento (index.html), el nombre de la etiqueta (myTable, tbody). */
    var tableTbody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    // Insertar una fila en la tabla en la última fila
    var newRow   = tableTbody.insertRow(tableTbody.rows.length);
    
    let datos = operacion(i);
    
    // El método newRowHead.insertCell() inserta una nueva celda.
    newRow.insertCell(0).innerHTML+= cc[i];
    newRow.insertCell(1).innerHTML+= nombre[i];
    newRow.insertCell(2).innerHTML+= sueldo[i];
    newRow.insertCell(3).innerHTML+= Math.round(datos[9]);
    newRow.insertCell(4).innerHTML+= Math.round(datos[16]);
    newRow.insertCell(5).innerHTML+= Math.round(datos[17]);
    newRow.insertCell(6).innerHTML+= mes[i];

  }
}

/* Fondo de Solidaridad pensional es un descuento que se le realiza a 
personas que ganan más de cuatro salarios mínimos legales vigentes ($2.577. 400)*/
function fondo(salario, desvengado) {
  var fondoSolidario = 0;
  if (salario >= 4 && salario < 16) {
    fondoSolidario = (desvengado*1)/100;
  }else{
    if (salario >= 16 && salario < 17) {
      fondoSolidario = (desvengado*1.2)/100;
    }else{
      if (salario > 17 && salario < 18) {
        fondoSolidario = (desvengado*1.4)/100;
      }else{
        if (salario > 18 && salario < 19) {
          fondoSolidario = (desvengado*1.6)/100;
        }else{
          if (salario > 19 && salario < 20) {
            fondoSolidario = (desvengado*1.8)/100;
          }else{
            if (salario > 20) {
              fondoSolidario = (desvengado*1.4)/100;
            }
          } 
        }
      }
    }
  }

  // Retorna la función
  return (fondoSolidario);
}

// Esta función permite cuando el Usuiario cambie de vista este elimine la tabla.
function borrarTabla() {
  document.getElementById('tbody').innerHTML = "";
  document.getElementById('thead').innerHTML = "";
}


todo();
