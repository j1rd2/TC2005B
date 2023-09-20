const accion_asincrona = (id) => {
    
    //Token de proteccion csrf
    const csrf = document.getElementById('_csrf').value;

    console.log(id);

    //Funcion que manda la peticion asincrona
    fetch('/tienda/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'csrf-token': csrf
        },
        body: JSON.stringify({id: id})
    }).then(result => {
        console.log(result);
        return result.json(); // Regresa una promesa
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
};

//document.getElementById('miBoton').click = accion_asincrona;