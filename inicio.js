function guardar() {
    console.log("into conexion");
    $.ajax({
        type: "POST",
        url: "inicio.php?id=2",
        data: { nombre: "Juan ", apellido: "Perez ", opcion: "guardar"},
        datatype: 'json'
})
.done(function (e) {
   
    console.log("ok: " + JSON.stringify(e));
})
.fail(function () {
    console.log("fallo");
})

}


function modificar() {
    console.log("into conexion");
    $.ajax({
        type: "POST",
        url: "inicio.php?id=2",
        data: { nombre: "Juan ", apellido: "Perez ", opcion: "modificar"},
        datatype: 'json'
})
.done(function (e) {
   
    console.log("ok: " + JSON.stringify(e));
})
.fail(function () {
    console.log("fallo");
})

}