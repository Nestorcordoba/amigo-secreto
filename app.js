// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

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
  }

  //Funcion para limpiar input amigo
  function limpiarCaja(){
    document.querySelector('#amigo').value='';
        
    }

    // Función para verificar si un nombre existe en el array
  function nombreExiste(nombre){
    return nombres.includes(nombre);
  }
             

                 
                  
              
         