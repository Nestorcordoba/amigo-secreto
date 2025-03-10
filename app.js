// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
  let contador = 0;
  let nombres=[];
  function agregarAmigo(){
    // Capturamos los valores ingreados en el input llamado 'amigo'
    const valorElemento = document.getElementById("amigo").value;
    
    // validamos si el nombre ingresado ya existe en el array e informamos con un alert
    if(nombreExiste(valorElemento)){
    alert(`El nombre "${valorElemento}" ya existe en la lista.`);
    //llamamos a la funcion 'LimpiarCaja' para resetaer a vacio luego del alert
    limpiarCaja();
    return;
    }
    //Validar la entrada para asegurarnos que no se ingresen vacios;
    
        if(valorElemento ===""){
        
        alert("Por favor, inserte un nombre .");
      
    }
    // si el nombre no exite en el array lo guardamos en el mismo.
    else{
        nombres.push(valorElemento);

    } 
    
   
   //llamamos a la funcion 'LimpiarCaja' para resetaer a vacio 
   limpiarCaja();
  crearListaNombres();
  
  } 



  agregarAmigo();

  function crearListaNombres(){
    // // Seleccionar la lista id 'listaAmigos' <lu> donde agregaremos la nueva lista <li> creada
    const seleccionElementoLista = document.getElementById("listaAmigos");
  
    // Limpiar la lista existente
    seleccionElementoLista.innerHTML = '';
  
    // Recorrer el array de nombres
    for (let i = 0; i < nombres.length; i++) {
      // por cada nombre almacenado en el array 'nombres' crear un elemento <li>
    
      const nuevoElementoLi = document.createElement('li');
    
      // Agregar el nuevo elemento <li> al elemento seleccionado id 'listaAmigos'.
      seleccionElementoLista.appendChild(nuevoElementoLi);
      nuevoElementoLi.innerHTML = `Amigo secreto ${i+1}: ${capitalizarNombre(nombres[i])}`;
      
      // subtitulo que informa en la etiqueta h3 cuantos amigos fueron ingresados hasta el momento
      const elementoHTML = document.querySelector('h3');
      elementoHTML.innerHTML=` ${i+1} ${(i === 0) ? 'amigo secreto ingresado' : ' amigos secretos ingresados'} `;
      contador ++;
      // Agregar el nombre como texto del <li>
      
      

    }
    console.log(seleccionElementoLista);
    
  }
   
       //Funcion para limpiar input amigo
  function limpiarCaja(){
    document.querySelector('#amigo').value='';
        
    }

    // Función para verificar si un nombre existe en el array
  function nombreExiste(nombre){
    return nombres.includes(nombre);
  }
  
  function sortearAmigo(){
    //nsorteamos los nombres ingresados en el array
    let indiceAmigoSorteado =  Math.floor(Math.random() * nombres.length);
    // validar que el array no este vacio
      if(nombres != ''){
        // obtenemos el nombre a traves del indice
        const nombreAmigoSorteado = capitalizarNombre(nombres[indiceAmigoSorteado]);
        // seleccionamos elemento que mostrará el nombre sorteado
        const contElementoSorteado = document.getElementById("resultado");
        //crear nuevo elemento que contendrá el nombre sorteado
        const nuevoElementoLi2 = document.createElement('li');
        // Agregamos el elemento a la lista de resultados
        contElementoSorteado.appendChild(nuevoElementoLi2);
        console.log("Indice sorteado", indiceAmigoSorteado);
        console.log("nombre sorteado", nombreAmigoSorteado);
        // mostramos el nombre sorteado en la lista creada
        nuevoElementoLi2.innerHTML = `El amigo secreto sorteado es: ${nombreAmigoSorteado}`; 
        reset(nombres,[]);
        document.getElementById('botonSortearAmigo').setAttribute('disabled',true); 
        
    }
  }
  sortearAmigo();

  // Función para capitalizar la primera letra de un nombre
  function capitalizarNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function reset(variable,valor){
   variable = valor;
}

                  
              
         