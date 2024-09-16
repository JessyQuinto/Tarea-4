# Encuesta de Gustos Musicales

## Descripción General

Este proyecto es una solución simple para una emisora que desea conocer los gustos musicales de algunas personas encuestadas. La aplicación permite registrar información personal de los encuestados, así como sus canciones favoritas, y almacena estos datos temporalmente en el navegador usando localStorage. Además, permite consultar a las personas por su posición en la lista.

## Características

- Registro de información personal de los encuestados:
  - Nombre
  - Cédula
  - Fecha de Nacimiento
  - Correo Electrónico
  - Ciudad de Residencia
  - Ciudad de Origen
- Registro de hasta 3 canciones favoritas por persona
- Almacenamiento temporal de los registros en el navegador mediante localStorage
- Consulta de los datos de las personas por su posición en el vector de encuestados

## Estructura del Proyecto

El proyecto está dividido en tres archivos principales:

- `index.html`: Define la estructura del formulario para ingresar los datos y el botón para consultar personas.
- `style.css`: Contiene los estilos básicos para mejorar la apariencia del formulario y la página.
- `script.js`: Gestiona la lógica de la aplicación, incluyendo el manejo de los datos y el uso de localStorage.

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/usuario/encuesta-musical.git
   ```
2. Abre el archivo `index.html` en tu navegador para comenzar a usar la aplicación.

## Uso

### Agregar una Persona

1. Ingresa los datos de la persona encuestada en el formulario que aparece al cargar la página.
2. Especifica las canciones favoritas de la persona (al menos una es obligatoria).
3. Haz clic en "Agregar Persona" para guardar la información.

### Consultar una Persona

1. Para consultar los datos de una persona, ingresa su posición en el array (por ejemplo, la primera persona tiene la posición 0).
2. Haz clic en "Consultar" para ver los datos de esa persona.

## Almacenamiento Temporal

La aplicación utiliza localStorage para guardar los datos de las personas encuestadas. Esto significa que los registros se mantendrán guardados incluso si cierras el navegador o recargas la página. Sin embargo, ten en cuenta que localStorage tiene un límite de capacidad y los datos se borrarán si el usuario limpia la caché o los datos del navegador.

## Descripción del Código

El archivo `script.js` contiene la lógica principal de la aplicación:

```javascript
let personas = JSON.parse(localStorage.getItem("personas")) || [];

function agregarPersona() {
    // Captura de los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const correo = document.getElementById("correo").value;
    const ciudadResidencia = document.getElementById("ciudadResidencia").value;
    const ciudadOrigen = document.getElementById("ciudadOrigen").value;
    const cancion1 = document.getElementById("cancion1").value;
    const cancion2 = document.getElementById("cancion2").value;
    const cancion3 = document.getElementById("cancion3").value;

    // Validación de campos obligatorios
    if (!nombre || !cedula || !fechaNacimiento || !correo || !ciudadResidencia || !cancion1) {
        alert("Por favor, llena todos los campos obligatorios.");
        return;
    }

    // Creación de objeto persona
    const persona = {
        nombre,
        cedula,
        fechaNacimiento,
        correo,
        ciudadResidencia,
        ciudadOrigen,
        canciones: [
            cancion1,
            cancion2 || "N/A",
            cancion3 || "N/A"
        ]
    };

    // Agregar persona al array y guardarla en localStorage
    personas.push(persona);
    localStorage.setItem("personas", JSON.stringify(personas));

    // Limpiar formulario
    document.getElementById("personaForm").reset();
    alert("Persona agregada exitosamente.");
}

function consultarPersona() {
    const posicion = parseInt(document.getElementById("posicion").value);

    // Verificar si la posición es válida
    if (isNaN(posicion) || posicion < 0 || posicion >= personas.length) {
        document.getElementById("resultadoConsulta").innerText = "Posición inválida.";
        return;
    }

    const persona = personas[posicion];

    // Mostrar los datos de la persona consultada
    let resultado = `
        Nombre: ${persona.nombre}
        Cédula: ${persona.cedula}
        Fecha de Nacimiento: ${persona.fechaNacimiento}
        Correo: ${persona.correo}
        Ciudad de Residencia: ${persona.ciudadResidencia}
        Ciudad de Origen: ${persona.ciudadOrigen}
        Canciones Favoritas:
        1. ${persona.canciones[0]}
        2. ${persona.canciones[1]}
        3. ${persona.canciones[2]}
    `;

    document.getElementById("resultadoConsulta").innerText = resultado;
}

window.onload = function () {
    if (personas.length > 0) {
        alert("Se han cargado los datos almacenados previamente.");
    }
};
```

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## Contribuciones

Si deseas contribuir al proyecto, siéntete libre de hacer un fork, crear una rama, y enviar un pull request. Cualquier mejora o sugerencia es bienvenida.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo y modificarlo libremente.

## Contacto

Tu Nombre - [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

Enlace del Proyecto: [https://github.com/tuusuario/encuesta-musical](https://github.com/tuusuario/encuesta-musical)
