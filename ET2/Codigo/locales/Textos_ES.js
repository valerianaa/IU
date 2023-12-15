let textos_ES={

    // mensajes BACK
    // ---------------------------------
    'SQL_OK':'',
    'SQL_KO':'',

    //'ATRIBUTO_es_nulo_KO':'', significa que un atributo necesario no se ha enviado

    // para programa:

    'id_programa_es_nulo_KO':'El ID del programa no puede ser nulo.',
    'nombre_programa_es_nulo_KO':'El nombre del programa no puede ser nulo.',
    'acronimo_programa_es_nulo_KO':'El acrónimo del programa no puede ser nulo.',
    'nombre_original_programa_es_nulo_KO':'El nombre original del programa no puede ser nulo.',
    'autor_programa_es_nulo_KO':'El autor del programa no puede ser nulo.',
    'autor_original_programa_es_nulo_KO':'El autor original del programa no puede ser nulo.',
    'ano_programa_es_nulo_KO':'El año del programa no puede ser nulo.',
    'ano_original_programa_es_nulo_KO':'El año original del programa no puede ser nulo.',
    'requisitos_programa_es_nulo_KO':'Los requisitos del programa no pueden ser nulos.',
    'poblacion_desde_programa_es_nulo_KO':'La población desde el programa no puede ser nula.',
    'poblacion_hasta_programa_es_nulo_KO':'La población hasta el programa no puede ser nula.',
    'unidad_poblacion_es_nulo_KO':'La unidad de población no puede ser nula.',
    'tipo_programa_es_nulo_KO':'El tipo de programa no puede ser nulo.',
    'tiempo_aplicacion_programa_es_nulo_KO':'El tiempo de aplicación del programa no puede ser nulo.',
    'descrip_interp_programa_es_nulo_KO':'La descripción e interpretación del programa no puede ser nul.',
    'fichero_programa_es_nulo_KO':'El fichero del programa no puede ser nulo.',
    'nuevo_fichero_programa_es_nulo_KO':'El nuevo fichero del programa no puede ser nulo.',
    'enlace_programa_es_nulo_KO':'El enlace del programa no puede ser nulo.',
    'formato_programa_es_nulo_KO':'El formato del programa no puede ser nulo.',
    'modo_correccion_programa_es_nulo_KO':'El modo de corrección del programa no puede ser nulo.',
    'modo_aplicacion_programa_es_nulo_KO':'El modo de aplicación del programa no puede ser nulo.',
    'imagen_programa_es_nulo_KO':'La imágen del programa no puede ser nula.',
    'nuevo_imagen_programa_es_nulo_KO':'La nueva imágen del programa no puede ser nula.',

    //'ERROR_UPLOAD_ATRIBUTO_KO':'', significa que un atributo de tipo file no cumple condiciones de extension o tamaño, viene descrito en el resource

    // para programa:

    'ERROR_UPLOAD_fichero_programa_max_tam_KO':'El tamaño del fichero del programa es demasiado grande. Debe contener como máximo 20000 bytes (aproximadamente 19,5KB).',
    'ERROR_UPLOAD_fichero_programa_bad_extension_KO':'La extensión del fichero del programa no está permitida. Recuerda que las extensiones deben ser pdf, doc o docx.',
    'ERROR_UPLOAD_imagen_programa_max_tam_KO':'El tamaño de la imágen del programa es demasiado grande. Debe contener como máximo 20000 bytes (aproximadamente 19,5KB).',
    'ERROR_UPLOAD_imagen_programa_bad_extension_KO':'La extensión de la imágen del programa no está permitida. Recuerda que las extensiones deben ser jpg o jpeg.',

    // para publicación:

    'ERROR_UPLOAD_imagen_programa_max_tam_KO':'El tamaño de la imágen de la publicación es demasiado grande. Debe contener como máximo 20000 bytes (aproximadamente 19,5KB)',
    'ERROR_UPLOAD_imagen_programa_bad_extension_KO':'La extensión de la imágen de la publicación no está permitida. Recuerda que las extensiones deben ser jpg o jpeg.',

    'controlador_invalido':'',
    'action_invalido':'',

    // mensajes de la entidad programa
    // ---------------------------------

    // atributos programa (usados en el titulo de la tabla de presentación de datos)

    'id_programa':'ID del programa',
    'nombre_programa':'Nombre del programa',
    'acronimo_programa':'Acrónimo del programa',
    'nombre_original_programa':'Nombre original del programa',
    'autor_programa':'Autor del programa',
    'autor_original_programa':'Autor original del programa',
    'ano_programa':'Año del programa',
    'ano_original_programa':'Año original del programa',
    'requisitos_programa':'Requisitos del programa',
    'poblacion_desde_programa':'Población desde el programa',
    'poblacion_hasta_programa':'Población desde el progama',
    'unidad_poblacion':'Unidad de población',
    'tipo_programa':'Tipo de programa',
    'tiempo_aplicacion_programa':'Tiempo de aplicación del programa en minutos',
    'descrip_interp_programa':'Descripción e interpretación del programa',
    'fichero_programa':'Fichero del programa',
    'enlace_programa':'Enlace del programa',
    'formato_programa':'Formato del programa',
    'modo_correccion_programa':'Modo de corrección del programa',
    'modo_aplicacion_programa':'Modo de aplicación del programa',
    'imagen_programa':'Imágen del programa',
    
    // label atributos programa
    
    'label_id_programa':'Introduzca el ID del programa',
    'label_nombre_programa':'Introduzca el nombre del programa',
    'label_acronimo_programa':'Introduzca el acrónimo del programa',
    'label_nombre_original_programa':'Introduzca el nombre original del programa',
    'label_autor_programa':'Introduzca el autor del programa',
    'label_autor_original_programa':'Introduzca el autor original del programa',
    'label_ano_programa':'Introduzca el año del programa',
    'label_ano_original_programa':'Introduzca el año original del programa',
    'label_requisitos_programa':'Introduzca los requisitos del programa',
    'label_poblacion_desde_programa':'Introduzca la población desde el programa',
    'label_poblacion_hasta_programa':'Introduzca la población desde el progama',
    'label_unidad_poblacion':'Introduzca la unidad de población',
    'label_tipo_programa':'Introduzca el tipo de programa',
    'label_tiempo_aplicacion_programa':'Introduzca el tiempo de aplicación del programa en minutos',
    'label_descrip_interp_programa':'Introduzca la descripción e interpretación del programa',
    'label_fichero_programa':'Introduzca el fichero del programa',
    'label_nuevo_fichero_programa':'Introduzca el nuevo fichero del programa',
    'label_enlace_programa':'Introduzca el enlace del programa',
    'label_formato_programa':'Introduzca el formato del programa',
    'label_modo_correccion_programa':'Introduzca el modo de corrección del programa',
    'label_modo_aplicacion_programa':'Introduzca el modo de aplicación del programa',
    'label_imagen_programa':'Introduzca la imágen del programa',
    'label_nuevo_imagen_programa':'Introduzca la nueva imágen del programa',

    // titulo general pagina programa
    
    'titulo_pagina_programa':'Gestión de programas',

    // titulos formularios acciones

    "titulo_form_ADD_programa":"Incorporar un programa",
    "titulo_form_EDIT_programa":"Modicar programa",
    "titulo_form_DELETE_programa":"Borrar un programa",
    "titulo_form_SEARCH_programa":"Buscar un programa",
    "titulo_form_SHOWCURRENT_programa":"Ver detalles de un programa",
   
    // errores de formato de programa en front

    // id_programa
    "KO_id_programa_min_size":"El ID del programa es demasiado corto. Debe de ser superior a 1 caracter.",
    "KO_id_programa_max_size":"El ID del programa es demasiado largo. Debe ser inferior a 6 caracteres.",
    "KO_id_programa_not_numeric":"El ID del programa debe contener exclusivamente caracteres numéricos.",

    // nombre_programa
    "KO_nombre_programa_min_size":"El nombre del programa es demasiado corto. Debe de ser superior a 6 caracter.",
    "KO_nombre_programa_max_size":"El nombre del programa es demasiado largo. Debe de ser inferior a 60 caracteres.",
    "KO_nombre_programa_bad_char":"El nombre del programa sólo puede contener alfabéticos con acentos, ñ y espacios.",

    // acronimo_programa
    "KO_acronimo_programa_min_size":"El acrónimo del programa es demasiado corto. Debe contener como mínimo 3 caracteres.",
    "KO_acronimo_programa_max_size":"El acrónimo del programa es demasiado largo. Debe contener como máximo 20 caracteres.",
    "KO_acronimo_programa_bad_char":"El acrónimo del programa sólo puede contener alfabéticos, sin acentos, ni espacios.",

    // nombre_original_programa
    "KO_nombre_original_programa_min_size":"El nombre original del programa es demasiado corto. Debe contener como mínimo 6 caracteres.",
    "KO_nombre_original_programa_max_size":"El nombre original del programa es demasiado largo. Debe contener como máximo 60 caracteres.",
    "KO_nombre_original_programa_bad_char":"El nombre original del programa sólo puede contener alfabéticos, con acentos, ñ y espacios.",

    // autor_programa
    "KO_autor_programa_min_size":"El autor del programa es demasiado corto. Debe contener como mínimo 6 caracteres.",
    "KO_autor_programa_max_size":"El autor del programa es demasiado largo. Debe contener como máximo 50 caracteres.",
    "KO_autor_programa_bad_char":"El autor del programa sólo puede contener alfabéticos, con acentos, ñ y espacios.",

    // autor_original_programa
    "KO_autor_original_programa_min_size":"El autor original del programa es demasiado corto. Debe contener como mínimo 6 caracteres.",
    "KO_autor_original_programa_max_size":"El autor original del programa es demasiado largo. Debe contener como máximo 50 caracteres.",
    "KO_autor_original_programa_bad_char":"El autor original del programa sólo puede contener alfabéticos, con acentos, ñ y espacios.",

    // ano_programa
    "KO_ano_programa_bad_size":"El año del programa debe de ser sólo de cuatro cifras (formato MM/DD/AAAA).",
    "KO_ano_programa_not_numeric":"El año del programa debe contener exclusivamente caracteres numéricos.",
    "KO_ano_programa_bad_date":"El año del programa no puede ser superior al año actual.",

    // ano_original_programa
    "KO_ano_original_programa_bad_size":"El año original del programa debe de ser sólo de cuatro cifras (formato MM/DD/AAAA).",
    "KO_ano_original_programa_not_numeric":"El año original del programa debe contener exclusivamente caracteres numéricos.",
    "KO_ano_original_programa_bad_date":"El año original del programa no puede ser superior al año actual.",

    // requisitos_programa
    "KO_requisitos_programa_min_size":"Los requisitos del programa son demasiado cortos. Debe contener como mínimo 6 caracteres.",
    "KO_requisitos_programa_max_size":"Los requisitos del programa son demasiado largos. Debe contener como máximo 300 caracteres.",
    "KO_requisitos_programa_bad_char":"Los requisitos del programa sólo pueden contener alfabéticos, con acentos, ñ, espacios y signos de puntuación.",

    // poblacion_desde_programa
    "KO_poblacion_desde_programa_min_size":"La población desde programa es demasiado corta. Debe contener como mínimo 1 caracter.",
    "KO_poblacion_desde_programa_max_size":"La población desde programa es demasiado larga. Debe contener como máximo 2 caracteres.",
    "KO_poblacion_desde_programa_not_numeric":"La población desde programa debe contener exclusivamente caracteres numéricos.",

    // poblacion_hasta_programa
    "KO_poblacion_hasta_programa_min_size":"La población hasta programa es demasiado corta. Debe contener como mínimo 1 caracter.",
    "KO_poblacion_hasta_programa_max_size":"La población hasta programa es demasiado larga. Debe contener como máximo 2 caracteres.",
    "KO_poblacion_hasta_programa_not_numeric":"La población hasta programa debe contener exclusivamente caracteres numéricos.",

    // unidad_poblacion
    "KO_unidad_poblacion_bad_type":"La unidad de población sólo puede contener los valores MESES o AÑOS.",

    // tipo_programa
    "KO_tipo_programa_bad_type":"El tipo de programa sólo puede contener los valores EVALUACIÓN, INTERVENCIÓN o EVALUACIÓN E INTERVENCIÓN.",

    // tiempo_aplicacion_programa
    "KO_tiempo_aplicacion_programa_min_size":"El tiempo de aplicación del programa es demasiado cortos. Debe contener como mínimo 1 caracter.",
    "KO_tiempo_aplicacion_programa_max_size":"El tiempo de aplicación del programa es demasiado largos. Debe contener como máximo 4 caracteres.",
    "KO_tiempo_aplicacion_programa_not_numeric":"El tiempo de aplicación del programa debe contener exclusivamente caracteres numéricos.",

    //descrip_interp_programa
    "KO_descrip_interp_programa_min_size":"La descripción e interpretación del programa es demasiado corta. Debe contener como mínimo 100 caracteres.",
    "KO_descrip_interp_programa_max_size":"La descripción e interpretación del programa es demasiado larga. Debe contener como máximo 5000 caracteres.",
    "KO_descrip_interp_programa_bad_char":"La descripción e interpretación del programa sólo pueden contener alfabéticos, con acentos, ñ, espacios, signos de puntuación y retornos de carro.",

    // fichero_programa
    "KO_fichero_programa_min_size":"El nombre del fichero del programa es demasiado corto. Debe contener como mínimo 7 caracter.",
    "KO_fichero_programa_max_size":"El nombre del fichero del programa es demasiado largo. Debe contener como máximo 60 caracteres.",
    "KO_fichero_programa_bad_char":"El nombre del fichero del programa debe contener exclusivamente caracteres alfabéticos. Sin acentos, ni ñ, ni espacions.",

    "KO_nuevo_fichero_programa_min_size":"El nombre del nuevo fichero del programa es demasiado corto. Debe contener como mínimo 7 caracter.",
    "KO_nuevo_fichero_programa_max_size":"El nombre del nuevo fichero del programa es demasiado largo. Debe contener como máximo 60 caracteres.",
    "KO_nuevo_fichero_programa_bad_char":"El nombre del nuevo fichero del programa debe contener exclusivamente caracteres alfabéticos. Sin acentos, ni ñ, ni espacions.",

    // enlace_programa
    "KO_enlace_programa_min_size":"El enlace del programa es demasiado corto. Debe contener como mínimo 10 caracter.",
    "KO_enlace_programa_max_size":"El enlace del programa es demasiado largo. Debe contener como máximo 100 caracteres.",
    "KO_enlace_programa_bad_char":"El nombre del enlace del programa debe contener exclusivamente caracteres alfabéticos, con comas, puntos y barras (/). Sin acentos, ni ñ, ni espacios.",

    // formato_programa
    "KO_formato_programa_bad_type":"El formato del programa sólo puede contener los valores PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO.",

    // modo_correccion_programa
    "KO_modo_correccion_programa_bad_type":"El modo de corrección del programa sólo puede contener los valores PAPEL, ELECTRÓNICO o PAPEL Y ELECTRÓNICO.",

    // modo_aplicacion_programa
    "KO_modo_aplicacion_programa_bad_type":"El modo de aplicación del programa sólo puede contener los valores INDIVIDUAL, COLECTIVO o INDIVIDUAL Y COLECTIVO.",

    // imagen_programa
    "KO_imagen_programa_min_size":"El nombre de la imágen del programa es demasiado corto. Debe contener como mínimo 7 caracter.",
    "KO_imagen_programa_max_size":"El nombre de la imágen del programa es demasiado largo. Debe contener como máximo 60 caracteres.",
    "KO_imagen_programa_bad_char":"El nombre de la imágen del programa debe contener exclusivamente caracteres alfabéticos. Sin acentos, ni ñ, ni espacions.",

    "KO_nuevo_imagen_programa_min_size":"El nombre de la nueva imágen del programa es demasiado corto. Debe contener como mínimo 7 caracter.",
    "KO_nuevo_imagen_programa_max_size":"El nombre de la nueva imágen del programa es demasiado largo. Debe contener como máximo 60 caracteres.",
    "KO_nuevo_imagen_programa_bad_char":"El nombre de la nueva imágen del programa debe contener exclusivamente caracteres alfabéticos. Sin acentos, ni ñ, ni espacions.",
    

// mensajes de la entidad programa
    // ---------------------------------

    // atributos publicacion (usados en el titulo de la tabla de presentación de datos)

    'id_publicacion':'ID de la publicación',
    'titulo_publicacion':'Título de la publicación',
    'autor_publicacion':'Autor de la publicación',
    'fecha_publicacion':'Fecha de la publicación',
    'area_publicacion':'Area de la publicación',
    'texto_publicacion':'Texto de la publicación',
    'imagen_publicacion':'Imagen de la publicación',

    // label atributos publicacion

    'label_id_publicacion':'Introduzca el ID de la publicación',
    'label_titulo_publicacion':'Introduzca el título de la publicación',
    'label_autor_publicacion':'Introduzca el autor de la publicación',
    'label_fecha_publicacion':'Introduzca la fecha de la publicación',
    'label_area_publicacion':'Introduzca el área de la publicación',
    'label_texto_publicacion':'Introduzca el texto de la publicación',
    'label_imagen_publicacion':'Introduzca la imagen de la publicación',

    // titulo general pagina publicación

    'titulo_pagina_publicacion':'Gestión de publicación',

    // titulos formularios acciones

    "titulo_form_ADD_publicacion":"Incorporar una publicación",
    "titulo_form_EDIT_publicacion":"Modicar una publicación",
    "titulo_form_DELETE_publicacion":"Borrar una publicación",
    "titulo_form_SEARCH_publicacion":"Buscar una publicación",
    "titulo_form_SHOWCURRENT_publicacion":"Ver detalles de una publicación",

    // para publicación

    'id_programa_es_nulo_KO':'El ID de la publicación no puede ser nulo.',
    'titulo_programa_es_nulo_KO':'El título de la publicación no puede ser nulo.',
    'autor_programa_es_nulo_KO':'El autor de la publicación no puede ser nulo.',
    'fecha_programa_es_nulo_KO':'La fecha de la publicación no puede ser nula.',
    'area_programa_es_nulo_KO':'El área de la publicación no puede ser nula.',
    'texto_programa_es_nulo_KO':'El texto de la publicación no puede ser nulo.',
    'imagen_programa_es_nulo_KO':'La imagen de la publicación no puede ser nula.',
   
    // errores de formato de programa en front

    // id_publicacion
    "KO_id_publicacion_min_size":"El ID de la publicación es demasiado corto. Debe de ser superior a 1 caracter.",
    "KO_id_publicacion_max_size":"El ID de la publicación es demasiado largo. Debe ser inferior a 6 caracteres.",
    "KO_id_publicacion_not_numeric":"El ID de la publicación debe contener exclusivamente caracteres numéricos.",

    // titulo_publicacion
    "KO_titulo_publicacion_min_size":"El título de la publicación es demasiado corto. Debe de ser superior a 6 caracter.",
    "KO_titulo_publicacion_max_size":"El título de la publicación es demasiado largo. Debe de ser inferior a 80 caracteres.",
    "KO_titulo_publicacion_bad_char":"El título de la publicación sólo puede contener alfabéticos con acentos, ñ y espacios.",

    // autor_publicacion
    "KO_autor_publicacion_min_size":"El autor de la publicación es demasiado corto. Debe contener como mínimo 6 caracteres.",
    "KO_autor_publicacion_max_size":"El autor de la publicación es demasiado largo. Debe contener como máximo 40 caracteres.",
    "KO_autor_publicacion_bad_char":"El autor de la publicación sólo puede contener alfabéticos, con acentos, ñ y espacios.",

    // fecha_publicacion
    "KO_fecha_publicacion_min_size":"La fecha de la programa es demasiado corta. Debe contener como mínimo 10 caracteres.",
    "KO_fecha_publicacion_max_size":"La fecha de la publicación es demasiado larga. Debe contener como máximo 10 caracteres.",
    "KO_fecha_publicacion_bad_date":"La fecha de la publicación debe tener el formato dd/mm/aaaa.",

    // area_publicacion
    "KO_area_publicacion_min_size":"El área de publicación es demasiado corta. Debe contener como mínimo 1 caracteres.",
    "KO_area_publicacion_max_size":"El área de publicación es demasiado larga. Debe contener como máximo 6 caracteres.",
    "KO_area_publicacion_bad_char":"El área de publicación sólo puede contener números.",

    // texto_publicacion
    "KO_texto_publicacion_min_size":"El texto de publicación es demasiado corto. Debe contener como mínimo 30 caracteres.",
    "KO_texto_publicacion_max_size":"El texto de publicación es demasiado largo. Debe contener como máximo 8000 caracteres.",
 
    // imagen_publicacion
    "KO_imagen_publicacion_min_size":"La imagen de publicación es demasiado corta. Debe tener entre 7 y 50 caracteres.",
    "KO_imagen_publicacion_max_size":"La imagen de publicación es demasiado larga. Debe tener entre 7 y 50 caracteres.",
    "KO_imagen_publicacion_bad_char":"La imagen de publicación solo puede estar conformada por caracteres alfabéticos sin acentos, ni ñ ni espacios.",

};

