
//DISCLAIMER: es posible que todo lo de las instancias de columna pete por el tema de los arrays, pero si pasa es solo cuestión de buscar una manera de que no pase (moi doado)


class columna{
    //nombreColumna: el nombre del atributo de la tabla (id_programa, imagen_programa,...etc.)
    //tipoHTML: el tipo en el formulario (text,textarea,radio,date,...etc.)
    //tipoValidacion: el tipo para hacer las validaciones ("normal" (usará la función base comprobarNormal),"fecha" (usará las comprobaciones de la fecha), "especificos" (no tendrá comprobaciones a mayores ya que lo hemos implementado como radio),"normalFecha" (solo tendrá que comprobar que el año no sea superior al actual (solo se le pasa un año, no una fecha completa)))
    //de cara a otras posibles tablas, habría que contemplar aquí más tipo pero dependería de la tabla
    //restricciones: serán siempre de tipo: valor min, valor max y caracteres válidos
    //operaciones: las operaciones de formulario que permite el atributo en cuestión
    //esArchivo: booleano que indica si es un archivo o no

    constructor(nombreColumna,tipoHTML,tipoValidacion,restricciones,operaciones,esArchivo){
        this.nombreColumna=nombreColumna;
        this.tipoHTML = tipoHTML;
        this.tipoValidacion = tipoValidacion;
        this.restricciones = restricciones;
        this.operaciones = operaciones;
        this.esArchivo = esArchivo;

    }

}

//por que da error en la llave del final no tengo npi
class Tabla {
    constructor(nombreTabla, columnas) {
        this.nombreTabla = nombreTabla;
        this.columnas = columnas;
    }
    
//     // generarHTMLTabla(tuplas) {
//     //     let html = "<table>";

//     //     // Agregar encabezados de tabla
//     //     html += "<tr>";
//     //     this.atributos.forEach(attr => {
//     //         html += `<th>${attr.nombre}</th>`;
//     //     });
//     //     html += "</tr>";

//     //     // Agregar filas de datos
//     //     tuplas.forEach(tupla => {
//     //         html += "<tr>";
//     //         this.atributos.forEach(attr => {
//     //             html += `<td>${tupla[attr.nombre]}</td>`;
//     //         });
//     //         html += "</tr>";
//     //     });

//     //     html += "</table>";
//     //     return html;
//     // }

//     // crearFormulario(tuplas) {
//     //     let formulario = document.createElement("form");
//     //     formulario.setAttribute("id", `formulario_${operacion}`);

//     //     this.atributos.forEach(attr => {
//     //         if (attr.operaciones.includes(operacion)) {
//     //             let label = document.createElement("label");
//     //             label.textContent = attr.nombre;
//     //             label.setAttribute("for", attr.nombre);

//     //             let input = document.createElement("input");
//     //             input.setAttribute("type", "text"); // Ajustar según el tipo
//     //             input.setAttribute("name", attr.nombre);
//     //             input.setAttribute("id", attr.nombre);

//     //             formulario.appendChild(label);
//     //             formulario.appendChild(input);
//     //         }
//     //     });

//     //     let submitButton = document.createElement("input");
//     //     submitButton.setAttribute("type", "submit");
//     //     submitButton.setAttribute("value", "Enviar");

//     //     formulario.appendChild(submitButton);

//     //     return formulario;
//     // }

//     // // Función para ejecutar la llamada a BACK
//     // llamadaBack(operacion, datos) {
//     //     // Aquí necesitarás ajustar la URL y la configuración según tu backend
//     //     let url = `http://tuapi.com/${this.nombre}/${operacion}`;

//     //     fetch(url, {
//     //         method: 'POST', // o 'GET', según la operación
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify(datos)
//     //     })
//     //         .then(response => response.json())
//     //         .then(data => {
//     //             console.log('Success:', data);
//     //         })
//     //         .catch((error) => {
//     //             console.error('Error:', error);
//     //         }
//     // }
    

 }

columnasPublicacion = Array(
    new columna('id_publicacion', 'text','normal',Array(1,6,/^\d+$/),Array('SEARCH','DELETE','SHOWCURRENT'),false),
    new columna('titulo_publicacion','text','normal',Array(6,80,/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT'),false ),
    new columna('autor_publicacion','text','normal',Array(6,40,/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT'),false ),
    new columna('fecha_publicacion','date','fecha','',Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('area_publicacion','text','normal',Array(1,6,/^\d+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT'),false),
    new columna('texto_publicacion','textarea','normal',Array(30,8000,/[\x00-\xFF]/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT'),false),
    new columna('imagen_publicacion','text','normal',Array(7,50, /^[A-Za-z:/\\]+\.(jpg|jpeg)$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT'),true)
);

def_tabla_publicacion = new tabla('publicacion',columnasPublicacion);


columnasPrograma = Array (
    new columna('id_programa','text','normal',Array(1,6, /^\d+$/),Array('SEARCH','DELETE','SHOWCURRENT'),false),
    new columna('nombre_programa','text','normal',Array(6,60, /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('acronimo_programa','text','normal',Array(3,20, /^[a-zA-Z]+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('nombre_original_programa','text','normal',Array(6,60,/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false ),
    new columna('autor_programa','text','normal',Array(6,50,/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false ),
    new columna('autor_original_programa','text','normal',Array(6,50,/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false ),
    
    new columna('ano_programa','text','normalFecha',Array(4,4, /^\d+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('ano_original_programa','text','normalFecha',Array(4,4, /^\d+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('requisitos_programa','textarea','normal',Array(6,300,  /^[A-Za-zÁÉÍÓÚÑáéíóúñ:.;,\s]+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('poblacion_desde_programa','text',Array(1,2, /^\d+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('poblacion_hasta_programa','text','normal',Array(1,2,/^\d+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    
    new columna('unidad_poblacion','radio','especificos','',Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('tipo_programa','radio','especificos','',Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('tiempo_aplicacion_programa','text','normal',Array(1,4,/^\d+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('descrip_interp_programa','textarea','normal',Array(100,5000,/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s.,:;\r]+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('fichero_programa','text','normal',Array(7,60,/^[A-Za-z:/\\]+\.(pdf|doc|docx)$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),true),
    new columna('enlace_programa','text','normal',Array(10,100,/^[A-Za-z:./]+$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('formato_programa','radio','especificos','',Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('modo_correccion_programa','radio','especificos','',Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('modo_aplicacion_programa','radio','especificos','',Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false),
    new columna('imagen_programa','text','normal',Array(7,60,/^[A-Za-z:/\\]+\.(jpg|jpeg)$/),Array('ADD','EDIT','SEARCH','DELETE','SHOWCURRENT' ),false)
    //qué hago con nuevo_imagen y compañía?????

    
);

def_tabla_programa = new tabla('programa',columnasPrograma);

//cuál se supone que es la "información necesaria para realizar la tabla de presentación de tuplas, los formularios y la llamada al back"????????


