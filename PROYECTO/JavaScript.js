let entradas = [

  {
    "serviciosOfertados":[
        {
            "nombreServicio": "servicio1",
            "descripcionServicio": "descripcion del servicio1",
            "valorServicio": "1000",
            "imagen": "derecccion/delaimagen.jpg"
        },
        {
            "nombreServicio": "servicio2",
            "descripcionServicio": "descripcion del servicio2",
            "valorServicio": "2000",
            "imagen": "derecccion/delaimagen.jpg"
        },
        {
            "nombreServicio": "servicio3",
            "descripcionServicio": "descripcion del servicio3",
            "valorServicio": "3000",
            "imagen": "derecccion/delaimagen.jpg"
        },
        {
            "nombreServicio": "servicio4",
            "descripcionServicio": "descripcion del servicio4",
            "valorServicio": "4000",
            "imagen": "derecccion/delaimagen.jpg"
        }
    ]
}

]




function functionLogin(){

    alert("Se debe enlazar la pagina de Login");
}

function buscarElemento () {
    let palabraBusqueda = document.getElementById("buscadorServicioTexto").value;
   
    if (palabraBusqueda != ""){
        alert("El elemento Sera Buscado");
        console.log( palabraBusqueda);
    }
    else{
        alert("Introdusca un valor de busqueda");
    }
}

