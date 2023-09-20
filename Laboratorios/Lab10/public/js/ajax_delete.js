const accion_asincrona = (id) => {
    //const mensaje = document.getElementById('mensaje').value;
    
    //Token de proteccion csrf

    const csrf = document.getElementById('_csrf').value;

    //Funcion que manda la peticion asincrona
    fetch('/tienda/delete', {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/json',
            'csrf-token': csrf
        }
        //body: JSON.string(data)
    }).then(result => {

    }).catch(err => {
        console.log(err);
    });
};

//document.getElementById('miBoton').click = accion_asincrona;