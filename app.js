// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
  let contador = 0;
  let nombres=[];
  function agregarAmigo(){
    // Capturamos los valores ingreados en el input llamado 'amigo'
    const valorElemento = document.getElementById("amigo").value;
    
    // validamos si el nombre ingresado ya existe en el array e informamos con un alert
    if(nombreExiste(valorElemento) ){
    alert(`El nombre "${valorElemento}" ya existe en la lista.`);
    //llamamos a la funcion 'LimpiarCaja' para resetaer a vacio luego del alert
    limpiarCaja();
    return;
    }
    //Validar la entrada para asegurarnos que no se ingresen vacios;
    else {
        if(valorElemento == ''){
        
        alert("Por favor, inserte un nombre .");
      // en el caso de que se ingrese un nombre agregarlo al array llamado 'nombres'
    }
    // si el nombre no exite en el array lo guardamos en el mismo.
    else{
        nombres.push(valorElemento);

    } 
    
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
      nuevoElementoLi.textContent = `Amigo secreto ${i+1}: ${nombres[i]}`;
      
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
    let indiceAmigoSorteado =  Math.floor(Math.random() * nombres.length);
    
      if(nombres.length > 0){
        
        
        const nombreAmigoSorteado = nombres[indiceAmigoSorteado];
        const contElementoSorteado = document.getElementById("resultado");
        const nuevoElementoLi2 = document.createElement('li');
        
        contElementoSorteado.appendChild(nuevoElementoLi2);
        console.log("Indice sorteado", indiceAmigoSorteado);
        console.log("nombre sorteado", nombreAmigoSorteado);
        nuevoElementoLi2.innerHTML = nombreAmigoSorteado;

        
        
      
    }
    
   
  }
  sortearAmigo();
                  
              
         