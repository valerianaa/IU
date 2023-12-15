var def_test = Array(
    //Definición tests "id_programa"
    Array("programa","id_programa",1,'Tamaño < 1',false,'El tamaño del ID del programa debe ser superior a un dígito.'),
    Array("programa","id_programa",2,'Tamaño > 6',false,'El tamaño del ID del programa no puede ser superior a seis dígitos.'),
    Array("programa","id_programa",3,'Incluye caracteres no numéricos',false, 'El ID del programa debe contener exclusivamente caracteres numéricos.'),
    Array("programa","id_programa",4,'Formato válido',true,'Éxito.'),

    //Definición tests "nombre_programa"
    Array("programa","nombre_programa",5,'Tamaño = 0',false,'El nombre del programa no puede ser una cadena nula.'),
    Array("programa","nombre_programa",6,'Tamaño < 6',false,'El nombre del programa no puede ser inferior a seis caracteres.'),
    Array("programa","nombre_programa",7,'Tamaño > 60',false,'El nombre del programa no puede ser superior a sesenta caracteres.'),
    Array("programa","nombre_programa",8,'Cadena de espacios',false,'El nombre del programa no puede ser una cadena de espacios.'),
    Array("programa","nombre_programa",9,'Incluye caracteres no alfabéticos',false,'El nombre del programa no puede contener caracteres numéricos y/o especiales. Sólo puede contener caracteres alfabéticos'),
    Array("programa","nombre_programa",10,'Alfabéticos con acentos, ñ o espacios',true ,'Éxito.'),

    //Definición tests "acronimo_programa"
    Array("programa","acronimo_programa",11,"Tamaño = 0",false,'El acrónimo del programa no puede ser una cadena nula.'),
    Array("programa","acronimo_programa",12,'Tamaño < 3',false,'El acrónimo del programa no puede ser inferior a tres caracteres.'),
    Array("programa","acronimo_programa",13,'Tamaño > 20',false,'El acrónimo del programa no puede ser superior a veinte caracteres.'),
    Array("programa","acronimo_programa",14,'Inclye caracteres no alfabéticos, acentos o espacios',false,'El acrónimo del programa no puede contener caracteres no alfabéticos, acentos o espacios.'),
    Array("programa","acronimo_programa",15,'Alfabéticos sin acentos, ni espacios',false,'Éxito.'),

    //Definición tests "nombre_original_programa"
    Array("programa","nombre_original_programa",16,'Tamaño = 0',false,'El nombre original del programa no puede ser una cadena nula.'),
    Array("programa","nombre_original_programa",17,'Tamaño < 6',false,'El nombre oroginal del programa no puede ser inferior a seis caracteres.'),
    Array("programa","nombre_original_programa",18,'Tamaño > 60',false,'El nombre original del programa no puede ser superior a sesenta caracteres.'),
    Array("programa","nombre_original_programa",19,'Cadena de espacios',false,'El nombre original del programa no puede ser una cadena de espacios.'),
    Array("programa","nombre_original_programa",20,'Incluye caracteres no alfabéticos',false,'El nombre original del programa no puede contener caracteres numéricos y/o especiales. Sólo puede contener caracteres alfabéticos'),
    Array("programa","nombre_original_programa",21,'Alfabéticos con acentos,ñ o espacios',true,'Éxito.'),

    //Definición tests "autor_programa"
    Array("programa","autor_programa",22,'Tamaño = 0',false,'El nombre del autor del programa no puede ser una cadena nula.'),
    Array("programa","autor_programa",23,'Tamaño < 6',false,'El nombre del autor del programa no puede ser inferior a seis caracteres.'),
    Array("programa","autor_programa",24,'Tamaño > 50',false,'El nombre del autor del programa no puede ser superior a cincuenta caracteres.'),
    Array("programa","autor_programa",25,'Cadena de espacios',false,'El nombre del autor del programa no puede ser una cadena de espacios.'),
    Array("programa","autor_programa",26,'Incluye caracteres no alfabéticos',false,'El nombre del autor del programa no puede contener caracteres numéricos y/o especiales. Sólo puede contener caracteres alfabéticos'),
    Array("programa","autor_programa",27,'Alfabéticos con acentos, ñ o espacios',true,'Éxito.'),

    //Definición tests "autor_original_programa"
    Array("programa","autor_original_programa",28,'Tamaño = 0',false,'El nombre del autor original del programa no puede ser una cadena nula.'),
    Array("programa","autor_original_programa",29,'Tamaño < 6',false,'El nombre del autor original del programa no puede ser inferior a seis caracteres.'),
    Array("programa","autor_original_programa",30,'Tamaño > 50',false,'El nombre del autor original del programa no puede ser superior a cincuenta caracteres.'),
    Array("programa","autor_original_programa",31,'Cadena de espacios',false,'El nombre del autor original del programa no puede ser una cadena de espacios.'),
    Array("programa","autor_original_programa",32,'Incluye caracteres no alfabéticos',false,'El nombre del autor original del programa no puede contener caracteres numéricos y/o especiales. Sólo puede contener caracteres alfabéticos'),
    Array("programa","autor_original_programa",33,'Alfabéticos con acentos, ñ o espacios',true , 'Éxito.'),

    //Definición tests "ano_programa"
    Array("programa","ano_programa",34,'Tamaño = 0',false,'El año del programa no puede ser una cadena vacía.'),
    Array("programa","ano_programa",35,'Tamaño != 4',false,'El año del programa debe de ser de cuatro dígitos.'),
    Array("programa","ano_programa",36,'dato_entrada > ano_actual',false,'El año del programa debe de ser inferior o igual al año actual (2023).'),
    Array("programa","ano_programa",37,'Incluye valores no numéricos',false,'El año del programa debe de estar exclusivamnte compuesto de dígitos.'),
    Array("programa","ano_programa",38,'Formato válido',true,'Éxito.'),

    //Definición tests "ano_original_programa"
    Array("programa","ano_original_programa",39,'Tamaño = 0',false,'El año original del programa no puede ser una cadena vacía.'),
    Array("programa","ano_original_programa",40,'Tamaño != 4',false,'El año original del programa debe de ser de cuatro dígitos.'),
    Array("programa","ano_original_programa",41,'dato_entrada > ano_actual',false,'El año originaldel programa debe de ser inferior o igual al año actual (2023).'),
    Array("programa","ano_original_programa",42,'Incluye valores no numéricos',false,'El año original del programa debe de estar exclusivamnte compuesto de dígitos.'),
    Array("programa","ano_original_programa",43,'Formato válido',true,'Éxito.'),

    //Definición tests "requisitos_programa"
    Array("programa","requisitos_programa",44,'Tamaño = 0',false,'Los requisitos del programa no puede ser una cadena nula.'),
    Array("programa","requisitos_programa",45,'Tamaño < 6',false,'Los requisitos del programa no puede ser inferior a seis caracteres.'),
    Array("programa","requisitos_programa",46,'Tamaño > 300',false,'Los requisitos del programa no puede ser superior a trescientos caracteres.'),
    Array("programa","requisitos_programa",47,'Cadena de espacios',false,'Los requisitos del programa no puede ser una cadena de espacios.'),
    Array("programa","requisitos_programa",48,'Incluye caracteres no alfabéticos, excluyendo signos de puntuación',false,'Los requisitos del programa no puede contener caracteres numéricos y/o especiales. Sólo puede contener caracteres alfabéticos o signos de puntuación'),
    Array("programa","requisitos_programa",49,'Alfabéticos con acentos, ñ, espacios o signos de puntuación',true,'Éxito.'),

    //Definición tests población_desde_programa
    Array("programa","poblacion_desde_programa",50,'Tamaño < 1',false,'Este campo no puede ser inferior a un dígito.'),
    Array("programa","poblacion_desde_programa",51,'Tamaño > 2',false,'Este campo no puede ser superior a dos dígitos.'),
    Array("programa","poblacion_desde_programa",52,'No numéricos',false,'Este campo no puede contener caracteres no numéricos.'),
    Array("programa","poblacion_desde_programa",53,'Formato válido',true,'Éxito.'),

    //Definición tests poblacion_hasta_programa
    Array("programa","poblacion_hasta_programa",54,'Tamaño < 1',false,'Este campo no puede ser inferior a un dígito.'),
    Array("programa","poblacion_hasta_programa",55,'Tamaño > 2',false,'Este campo no puede ser superior a dos dígitos.'),
    Array("programa","poblacion_hasta_programa",56,'No numéricos',false,'Este campo no puede contener caracteres no numéricos.'),
    Array("programa","poblacion_hasta_programa",57,'Formato válido',true,'Éxito.'),

    //Definición tests "unidad_poblacion"
    Array("programa","unidad_poblacion",58,'Tamaño = 0',false,'El tamaño de la unidad de población del programa no puede ser una cadena nula.'),
    Array("programa","unidad_poblacion",59,'No alfabéticos o minúsculas', false,'La unidad de población no puede contener caracteres no alfabéticos o alfabéticos en minúscula.'),
    Array("programa","unidad_poblacion",60,'Alfabéticos distintos de MESES o AÑOS',false,'Las opciones válidas son MESES o AÑOS.'),
    Array("programa","unidad_poblacion",61,'Formato válido',true,'Éxito.'),

    //Definición tests "tipo_programa"
    Array("programa","tipo_programa",62,'Tamaño = 0',false,'El tipo de programa no puede ser una cadena nula.'),
    Array("programa","tipo_programa",63,'No alfabéticos o minúsculas',false,'El tipo de programa no puede contener caracteres no alfabéticos o alfabéticos en minúscula.'),
    Array("programa","tipo_programa",64,'Alfabéticos distintos de EVALUACIÓN, INTEVENCIÓN o EVALUACIÓN E INTERVENCIÓN',false,'Las opciones válidas son EVALUACIÓN, INTERVENCIÓN, EVALUACIÓN E INTERVENCIÓN.'),
    Array("programa","tipo_programa",65,'Formato válido',true,'Éxito.'),

    //Definición tests tiempo_aplicacion_programa
    Array("programa","tiempo_aplicacion_programa",66,'Tamaño < 1',false,'Este campo no puede ser inferior a un dígito.'),
    Array("programa","tiempo_aplicacion_programa",67,'Tamaño > 4',false,'Este campo no puede ser superior a dos dígitos.'),
    Array("programa","tiempo_aplicacion_programa",68,'No numéricos',false,'Este campo no puede contener caracteres no numéricos.'),
    Array("programa","tiempo_aplicacion_programa",69,'Formato válido',true,'Éxito.'),
    
    //Definición tests "descrip_interp_programa"
    Array("programa","descrip_interp_programa",70,'Tamaño = 0',false,'La descripción del programa no puede ser una cadena nula.'),
    Array("programa","descrip_interp_programa",71,'Tamaño < 100',false,'La descripción del programa no puede ser inferior a cien caracteres.'),
    Array("programa","descrip_interp_programa",72,'Tamaño > 5000',false,'La descripción del programa no puede ser superior a cinco mil caracteres.'),
    Array("programa","descrip_interp_programa",73,'Cadena de espacios',false,'La descripción del programa no puede ser una cadena de espacios.'),
    Array("programa","descrip_interp_programa",74,'Incluye caracteres no alfabéticos, excluyendo signos de puntuación y retornos de carro',false,'Los requisitos del programa no puede contener caracteres numéricos y/o especiales. Sólo puede contener caracteres alfabéticos, retornos de carro o signos de puntuación'),
    Array("programa","descrip_interp_programa",75,'Alfabéticos con acentos, ñ, espacios, signos de puntuación o retornos de carro',true,'Éxito.'),

    //Definición tests "fichero_programa"
    Array("programa","fichero_programa",76,'Tamaño = 0',false,'El fichero del programa no puede ser una cadena nula.'),
    Array("programa","fichero_programa",77,'Tamaño < 7',false,'El fichero del programa no puede ser inferior a seis caracteres.'),
    Array("programa","fichero_programa",78,'Tamaño > 60',false,'El fichero del programa no puede ser superior a sesenta caracteres.'),
    Array("programa","fichero_programa",79,'Incluye caracteres no alfabéticos, acentos, ñ o espacios',false,'El fichero del programa no puede contener caracteres numéricos y/o especiales, acentos, ñ o espacios. Sólo puede contener caracteres alfabéticos sin acentos (excluyendo la ñ)'),
    Array("programa","fichero_programa",80,'Alfabéticos sin acentos, ñ o espacios',true,'Éxito.'),

    //Definición tests "enlace_programa"
    Array("programa","enlace_programa",81,'Tamaño = 0',false,'El enlace del programa no puede ser una cadena nula.'),
    Array("programa","enlace_programa",82,'Tamaño < 10',false,'El enlace del programa no puede ser inferior a seis caracteres.'),
    Array("programa","enlace_programa",83,'Tamaño > 100',false,'El enlace del programa no puede ser superior a sesenta caracteres.'),
    Array("programa","enlace_programa",84,'Incluye caracteres no alfabéticos, acentos, ñ o espacios',false,'El enlace del programa no puede contener caracteres numéricos y/o especiales, acentos, ñ o espacios. Sólo puede contener caracteres alfabéticos sin acentos (excluyendo la ñ) y los símbolos :, / o .'),
    Array("programa","enlace_programa",85,'Alfabéticos o : / . sin acentos, ñ o espacios',true,'Éxito.'),

    //Definición tests "formato_programa"
    Array("programa","formato_programa",86,'Tamaño = 0',false,'El tamaño del formato del programa no puede ser una cadena nula.'),
    Array("programa","formato_programa",87,'No alfabéticos o minúsculas',false,'El formato no puede contener caracteres no alfabéticos o alfabéticos en minúscula.'),
    Array("programa","formato_programa",88,'Alfabéticos distintos de ELECTRÓNICO, PAPEL o PAPEL Y ELECTRÓNICO',false,'Las opciones válidas son ELECTRÓNICO, PAPEL o PAPEL Y ELECTRÓNICO.'),
    Array("programa","formato_programa",89,'Formato válido',true,'Éxito.'),

    //Definición tests "modo_correccion_programa"
    Array("programa","modo_correccion_programa",90,'Tamaño = 0',false,'El mddo de corrección del programa no puede ser una cadena nula.'),
    Array("programa","modo_correccion_programa",91,'No alfabéticos o minúsculas',false,'El modo de corrección no puede contener caracteres no alfabéticos o alfabéticos en minúscula.'),
    Array("programa","modo_correccion_programa",92,'Alfabéticos distintos de ELECTRÓNICO, PAPEL o PAPEL Y ELECTRÓNICO',false,'Las opciones válidas son ELECTRÓNICO, PAPEL o PAPEL Y ELECTRÓNICO.'),
    Array("programa","modo_correccion_programa",93,'Formato válido',true,'Éxito.'),

    //Definción "modo_aplicacion_programa"
    Array("programa","modo_aplicacion_programa",94,'Tamaño = 0',false,'El modo de aplicación del programa no puede ser una cadena nula.'),
    Array("programa","modo_aplicacion_programa",95,'No alfabéticos o minúsculas',false,'El modo de aplicación no puede contener caracteres no alfabéticos o alfabéticos en minúscula.'),
    Array("programa","modo_aplicacion_programa",96,'Alfabéticos distintos de INDIVIDUAL, COLECTIVO o INDIVIDUAL Y COLECTIVO',false,'Las opciones válidas son INDIVIDUAL, COLECTIVO o INDIVIDUAL Y COLECTIVO.'),
    Array("programa","modo_aplicacion_programa",97,'Formato válido',true,'Éxito.'),

    //Definción tests "imagen_programa"
    Array("programa","imagen_programa",98,'Tamaño = 0',false,'La imágen del programa no puede ser una cadena nula.'),
    Array("programa","imagen_programa",99,'Tamaño < 7',false,'La imágen del programa no puede ser inferior a seis caracteres.'),
    Array("programa","imagen_programa",100,'Tamaño > 60',false,'La imágen del programa no puede ser superior a sesenta caracteres.'),
    Array("programa","imagen_programa",101,'Incluye caracteres no alfabéticos, acentos, ñ o espacios',false,'La imágen del programa no puede contener caracteres numéricos y/o especiales, acentos, ñ o espacios. Sólo puede contener caracteres alfabéticos sin acentos (excluyendo la ñ)'),
    Array("programa","imagen_programa",102,'Alfabéticos sin acentos, ñ o espacios',true,'Éxito.'),

);