// Arreglo para almacenar las personas (desde localStorage si existen)
let personas = JSON.parse(localStorage.getItem("personas")) || [];

// Función para agregar una persona al arreglo y guardarla en localStorage
function agregarPersona() {
    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const correo = document.getElementById("correo").value;
    const ciudadResidencia = document.getElementById("ciudadResidencia").value;
    const ciudadOrigen = document.getElementById("ciudadOrigen").value;
    const cancion1 = document.getElementById("cancion1").value;
    const cancion2 = document.getElementById("cancion2").value;
    const cancion3 = document.getElementById("cancion3").value;

    // Validación simple
    if (!nombre || !cedula || !fechaNacimiento || !correo || !ciudadResidencia || !cancion1) {
        alert("Por favor, llena todos los campos obligatorios.");
        return;
    }

    // Crear objeto persona
    const persona = {
        nombre,
        cedula,
        fechaNacimiento,
        correo,
        ciudadResidencia,
        ciudadOrigen,
        canciones: [
            cancion1,
            cancion2 || "N/A", // Si no se ingresa, valor predeterminado
            cancion3 || "N/A"
        ]
    };

    // Agregar persona al array
    personas.push(persona);

    // Guardar el array actualizado en localStorage
    localStorage.setItem("personas", JSON.stringify(personas));

    // Limpiar formulario
    document.getElementById("personaForm").reset();
    alert("Persona agregada exitosamente.");
}

// Función para consultar una persona por su posición
function consultarPersona() {
    const posicion = parseInt(document.getElementById("posicion").value);

    if (isNaN(posicion) || posicion < 0 || posicion >= personas.length) {
        document.getElementById("resultadoConsulta").innerText = "Posición inválida.";
        return;
    }

    const persona = personas[posicion];

    // Mostrar los datos de la persona
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

    document.getElementById("resultadoConsulta").innerText = resultado;
}

// Función para cargar datos desde localStorage al iniciar la página
window.onload = function () {
    if (personas.length > 0) {
        alert("Se han cargado los datos almacenados previamente.");
    }
};
