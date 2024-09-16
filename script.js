// Inicializamos el arreglo 'personas', que contendrá los datos de las personas encuestadas.
// Si hay datos almacenados previamente en localStorage, los cargamos; de lo contrario, creamos un array vacío.
let personas = JSON.parse(localStorage.getItem("personas")) || [];

// Función para agregar una nueva persona al sistema.
function agregarPersona() {
    // Capturamos los valores de los campos del formulario usando los IDs definidos en el archivo HTML.
    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const correo = document.getElementById("correo").value;
    const ciudadResidencia = document.getElementById("ciudadResidencia").value;
    const ciudadOrigen = document.getElementById("ciudadOrigen").value;
    const cancion1 = document.getElementById("cancion1").value;
    const cancion2 = document.getElementById("cancion2").value;
    const cancion3 = document.getElementById("cancion3").value;

    // Validación básica: Si los campos obligatorios están vacíos, mostramos un mensaje y salimos de la función.
    // Solo se requiere que algunos campos específicos sean obligatorios (por ejemplo, la primera canción).
    if (!nombre || !cedula || !fechaNacimiento || !correo || !ciudadResidencia || !cancion1) {
        alert("Por favor, llena todos los campos obligatorios.");
        return; // Detenemos la ejecución si los datos no son válidos.
    }

    // Creamos un objeto que representa a la persona con todos los datos capturados, incluyendo las canciones.
    // Si una canción no fue ingresada, usamos el valor predeterminado "N/A".
    const persona = {
        nombre,
        cedula,
        fechaNacimiento,
        correo,
        ciudadResidencia,
        ciudadOrigen,
        canciones: [
            cancion1,
            cancion2 || "N/A", // Si no se ingresó, asignamos "N/A".
            cancion3 || "N/A"
        ]
    };

    // Agregamos el objeto 'persona' al arreglo 'personas'.
    personas.push(persona);

    // Guardamos el array 'personas' actualizado en localStorage, convirtiéndolo a formato JSON.
    localStorage.setItem("personas", JSON.stringify(personas));

    // Limpiamos el formulario después de agregar una persona, para que quede listo para nuevos datos.
    document.getElementById("personaForm").reset();

    // Informamos al usuario que la persona fue agregada correctamente.
    alert("Persona agregada exitosamente.");
}

// Función para consultar la información de una persona específica, usando su posición en el arreglo 'personas'.
function consultarPersona() {
    // Obtenemos la posición ingresada por el usuario desde el formulario.
    const posicion = parseInt(document.getElementById("posicion").value);

    // Validamos que la posición ingresada sea un número válido y que esté dentro del rango del arreglo 'personas'.
    if (isNaN(posicion) || posicion < 0 || posicion >= personas.length) {
        // Si no es válida, mostramos un mensaje de error y salimos de la función.
        document.getElementById("resultadoConsulta").innerText = "Posición inválida.";
        return;
    }

    // Si la posición es válida, obtenemos la persona correspondiente del arreglo 'personas'.
    const persona = personas[posicion];

    // Preparamos una cadena de texto con todos los datos de la persona para mostrar al usuario.
    let resultado = `
        Nombre: ${persona.nombre} \n
        Cédula: ${persona.cedula} \n
        Fecha de Nacimiento: ${persona.fechaNacimiento} \n
        Correo: ${persona.correo} \n
        Ciudad de Residencia: ${persona.ciudadResidencia} \n
        Ciudad de Origen: ${persona.ciudadOrigen} \n
        Canciones Favoritas: \n
        1. ${persona.canciones[0]} \n
        2. ${persona.canciones[1]} \n
        3. ${persona.canciones[2]}
    `;

    // Mostramos el resultado en un elemento del DOM (con el ID 'resultadoConsulta').
    document.getElementById("resultadoConsulta").innerText = resultado;
}

// Esta función se ejecuta cuando se carga la página web.
// Verifica si hay personas guardadas previamente en 'localStorage' y alerta al usuario en caso afirmativo.
window.onload = function () {
    // Si hay personas cargadas en el array (es decir, si no está vacío), mostramos un mensaje.
    if (personas.length > 0) {
        alert("Se han cargado los datos almacenados previamente.");
    }
};
