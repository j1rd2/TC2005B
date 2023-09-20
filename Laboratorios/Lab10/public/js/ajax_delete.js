const accion_asincrona = (id) => {
    
    //Token de proteccion csrf
    const csrf = document.getElementById('_csrf').value;

    console.log(id);

    //Funcion que manda la peticion asincrona
    fetch('/delete', {
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

        let html = "";

        html += `<div class="grid grid-cols-4 justify-items-center gap-4">`
            if (productos.length > 0) { 
                for (let producto of productos) {
           html+= ` <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <div>
                            <img class="w-full" src="/uploads/`+ producto.imagen +`">
                        </div>
                        <div class="px-6 py-4">`+ producto.marca +`
                            <p><a href="/productos/`+ producto.id +`">`+ producto.nombre +` </a></p>
                        </div>
                        <br>
                        <div class="px-6 py-4">
                            <a href="/tienda/` + producto.id + `">` + producto.modelo +` </a>
                        </div>
                        <br>
                        <div class="px-6 py-4">` +  producto.anio + `</div>
                        <br>
                        <div class="px-6 py-4">
                            ` +  producto.descripcion + `
                        </div>
                        <button class="bg-sky-900 hover:bg-blue-700 text-stone-50 py-2 px-4 rounded cursor-pointer mx-auto">Comprar</button>
                        <button class="bg-sky-900 hover:bg-blue-700 text-stone-50 py-2 px-4 rounded cursor-pointer mx-auto" onclick="accion_asincrona('` + producto.id + `')">Eliminar</button>
                    </div>`;
                    } 
                } else { 
            html += `<h1> No hay productos registrados </h1>`
                }
            html += `</div>`
        
        document.getElementById("productos").innerHTML = html;

    }).catch(err => {
        console.log(err);
    });
};

//document.getElementById('miBoton').click = accion_asincrona;