// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos de JSON que queremos mostrar

const container = document.getElementById("container"); // Ponemos a través del id el elemento donde vamos a colocar la info. 

function showData(dataArray) {             // recibe como parámetro un array con los datos a mostrar en el DOM
    for (const item of dataArray) {       // El for itera sobre los elementos del array
      container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Al innerHTML del elemento, en este caso "container", se concatena a través de "backtricks `${ } cada párrafo de la manera que queremos mostrarlo 
  }
}

fetch (DATA_URL)                          // Le pasa por parámetro la variable que contiene la URL de JSON.
    .then(response => {
        if (!response.ok) {              // Verifica si la respuesta fue exitosa
            throw new Error('Error al obtener los datos');
        }
        return response.json();         // convierte los datos de la respuesta como JSON
    })
    .then(data => {
      showData(data.students);                  // Llama a la función showData y accede a la propiedad "students" de JSON para mostrar los datos en el DOM
       
    })
    .catch(error => {
        console.error('Hubo un problema con el fetch:', error);
    });