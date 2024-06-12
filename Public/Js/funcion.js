


let clientes =[{
    "id": 1 ,
    "nombre":  "Juan",
    "appaterno":  "Lopez",
    "apmaterno": "Orozco",
    "fecha" : new Date('02/02/1998').toLocaleDateString(),
    "direccion" : "Tepeaca",
    "telefono" : 5478123265,
    "correo" : "Juan@gmail.com",
  },
  {   
    "id": 2 ,
    "nombre":  "Pedro",
    "appaterno":  "Pinos",
    "apmaterno": "Garcia",
    "fecha" :"1998-02-02" ,
    "direccion" : "Puebla",
    "telefono" : 6518446512,
    "correo" : "Pedro@gmail.com",
  },
  {   
    "id": 3 ,
    "nombre":  "Susana",
    "appaterno":  "Lara",
    "apmaterno": "Puga",
    "fecha" :"2000-12-09" ,
    "direccion" : "Puebla",
    "telefono" : 6842866565,
    "correo" : "Susana@gmail.com",
  }]

$(document).ready(function(){
             
  let table = document.getElementById("Tabla1"); 
  for (let i = 0; i < clientes.length; i++) {

    var row = table.insertRow(-1);
    row.id ='tr-'+ clientes[i].id;
    var fila = clientes[i];
    var idfila = fila.id;
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    
    var edit='<i onclick="obtenerClienteById('+idfila+')" style="margin: 0px 16px; color: green;" class="bi bi-pencil" type="button"></i>';
    var Bor= '<i onclick="eliminarFila('+idfila+')" type="button" id="btnborrar" style="color: red;" class="borrar bi bi-trash" data-bs-toggle="modal" data-bs-target="#eliminar"></i>';
       
    cell1.innerHTML = fila.id;
    cell2.innerHTML = fila.nombre;
    cell3.innerHTML = fila.appaterno;
    cell4.innerHTML = fila.apmaterno;
    cell5.innerHTML = fila.fecha;
    cell6.innerHTML = fila.direccion;
    cell7.innerHTML = fila.telefono;
    cell8.innerHTML = fila.correo;
    cell9.innerHTML = [edit + "   " + Bor];

  }    

}
);

// inicio de funcion AgregarFila

var nfilas = clientes.length;

function AgregarFila() {

nfilas++
var table2 = document.getElementById("Tabla1");

var row2 = table2.insertRow(-1);
row2.id ='tr-'+ nfilas;
            
var id= nfilas;
var idfila=id;
var Nom= $("#Nombre").val();
var ApP= $("#Ap_Patreno").val();
var ApM= $("#Ap_Materno").val();
var Cor= $("#Correo").val();
var Dir= $("#Direccio").val();
var Fc= $("#F_Nacimiento").val();
var Tel= $("#Telefono").val();
const nuevoObj={id: id , nombre: Nom , appaterno: ApP , apmaterno: ApM , fecha: Fc , direccion: Dir , telefono: Tel , correo : Cor , };
clientes.push(nuevoObj);
console.log(Nom);
var edit='<i onclick="obtenerClienteById('+idfila+')" style="margin: 0px 16px; color: green;" class="bi bi-pencil" type="button"></i>';
var Bor= '<i onclick="eliminarFila('+idfila+')" type="button" id="btnborrar" style="color: red;" class="borrar bi bi-trash" data-bs-toggle="modal" data-bs-target="#eliminar"></i>';

var cell1 = row2.insertCell(0);
var cell2 = row2.insertCell(1);
var cell3 = row2.insertCell(2);
var cell4 = row2.insertCell(3);
var cell5 = row2.insertCell(4);
var cell6 = row2.insertCell(5);
var cell7 = row2.insertCell(6);
var cell8 = row2.insertCell(7);
var cell9 = row2.insertCell(8);

cell1.innerHTML = id;
cell2.innerHTML = Nom;
cell3.innerHTML = ApP;
cell4.innerHTML = ApM;
cell5.innerHTML = Fc;
cell6.innerHTML = Dir;
cell7.innerHTML = Tel;
cell8.innerHTML = Cor;
cell9.innerHTML = [edit + "   " + Bor];

document.getElementById("Nombre").value = "";
document.getElementById("Ap_Patreno").value = "";
document.getElementById("Ap_Materno").value = "";
document.getElementById("Correo").value = "";
document.getElementById("Direccio").value = "";
document.getElementById("F_Nacimiento").value = "";
document.getElementById("Telefono").value = "";

$('#añadir').modal('hide')
     
}

// inicio de funcion encontrar id



function obtenerClienteById(idfila) {
//console.log("este es mi id "+ idfila);


const result = clientes.find(({ id }) => id == idfila);
$("#ENombre").val(result.nombre);
$("#EAp_Patreno").val(result.appaterno);
$("#EAp_Materno").val(result.apmaterno);
$("#EFecha").val(result.fecha);
$("#EDireccion").val(result.direccion);
$("#ETelefono").val(result.telefono);
$("#ECorreo").val(result.correo);

$('#editar').modal('show');
console.log(result);
$("#btneditar").attr("data-idcliente", idfila );
}

// inicio de funcion borrar

function editar(e) {
var data = e.dataset;
var idfila = data.idcliente;


console.log("dentro de la funcion" + idfila);
/*console.log( clientes[idfila-1]);
var fila = clientes[idfila-1];

var Nom = $("#ENombre").val();
var ApP = $("#EAp_Patreno").val();
var ApM = $("#EAp_Materno").val();
var Cor = $("#ECorreo").val();
var Dir = $("#EDireccio").val();
var Fc = $("#EF_Nacimiento").val();
var Tel = $("#ETelefono").val();

 fila.nombre = Nom; 
 fila.appaterno = ApP;
  fila.apmaterno = ApM;
  fila.correo = Cor;
  fila.direccion = Dir;
  fila.fecha = Fc;
  fila.telefono = Tel;
  console.log( clientes[idfila-1]);*/











}

// inicio de funcion borrar

function eliminarFila(id) {
$('#tr-'+ id).remove();
}


