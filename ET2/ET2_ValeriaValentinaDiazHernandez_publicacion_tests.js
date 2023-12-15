var def_test = Array(
Array("publicacion","id_publicacion",1,"Tamaño < 1",false,"El id de la publicación debe tener algún dígito."),
Array("publicacion","id_publicacion",2,"Tamaño > 6",false,"El id de la publicación no puede tener más de 6 dígitos."),
Array("publicacion","id_publicacion",3,"Incluye caracteres no numéricos",false,"El id de la publicación contiene caracteres no permitido (Sólo dígitos)."),
Array("publicacion","id_publicacion",4,"Sólo dígitos",true,"Éxito"),

Array("publicacion","titulo_publicacion",5,"Tamaño==0",false,"El título de la publicación debe tener algún caracter."),
Array("publicacion","titulo_publicacion",6,"Tamaño < 6",false,"El titulo de la publicación no puede tener menos de 6 caracteres."),
Array("publicacion","titulo_publicacion",7,"Tamaño > 80",false,"El titulo de la publicación no puede tener más de 60 caracteres"),
Array("publicacion","titulo_publicacion",8,"Cadena de sólo espacios",false,"El título de la publicación no puede estar conformado sólo por espacios"),
Array("publicacion","titulo_publicacion",9,"Contiene caracteres no alfabéticos",false,"El título de la publicación contiene caracteres no permitidos (Alfabéticos con acentos, ñ y espacios.)"),
Array("publicacion","titulo_publicacion",10,"Alfabéticos con acentos, ñ y espacios",true,"Éxito."),

Array("publicacion","autor_publicacion",11,"Tamaño==0",false,"El autor de la publicación debe tener algún caracter."),
Array("publicacion","autor_publicacion",12,"Tamaño < 6",false,"El autor de la publicación no puede tener menos de 6 caracteres"),
Array("publicacion","autor_publicacion",13,"Tamaño > 50",false,"El autor de la publicación no puede tener más de 40 caracteres"),
Array("publicacion","autor_publicacion",14,"Cadena de sólo espacios",false,"El autor de la publicación no puede estar conformado sólo por espacios"),
Array("publicacion","autor_publicacion",15,"Contiene caracteres no alfabéticos",false,"El autor de la publicación contiene caracteres no permitidos (Alfabéticos con acentos, ñ y espacios.)"),
Array("publicacion","autor_publicacion",16,"Alfabéticos, con acentos, ñ  o espacios.",true,"Éxito."),

Array("publicacion","fecha_publicacion",17,"Tamaño==0",false,"La fecha de la publicación debe tener algún valor."),
Array("publicacion","fecha_publicacion",18,"Formato distinto a dd/mm/aaaa",false,"El formato de la fecha de la publicación debe ser dd/mm/aaaa y el año no puede ser superior al actual"),
Array("publicacion","fecha_publicacion",19,"Día, mes y año válidos",false,"El día, mes y año de la publicación deben ser válidos, consulta un calendario."),
Array("publicacion","fecha_publicacion",20,"Formato correcto dd/mm/aaaa",true,"Éxito"),

Array("publicacion","area_publicacion",21,"Tamaño < 1",false,"El área de la publicación debe tener algún dígito."),
Array("publicacion","area_publicacion",22,"Tamaño > 6",false,"El área de la publicación no puede tener más de 6 caracteres."),
Array("publicacion","area_publicacion",23,"Incluye caracteres no numéricos",false,"El área de la publicación contiene caracteres no permitido (Sólo dígitos)."),
Array("publicacion","area_publicacion",24,"Sólo dígitos",true,"Éxito"),

Array("publicacion","texto_publicacion",25,"Tamaño < 1",false,"El texto de la publicación debe tener algún dígito."),
Array("publicacion","texto_publicacion",26,"Tamaño < 30",false,"El texto de la publicación no puede tener menos de 30 caracteres."),
Array("publicacion","texto_publicacion",27,"Tamaño > 8000",false,"El texto de la publicación no puede tener más de 8000 caracteres."),
Array("publicacion","texto_publicacion",28,"Caracteres ASCII",true,"Éxito"),

Array("publicacion","imagen_publicacion",29,"Tamaño==0",false,"La imagen de la publicación debe tener algún caracter."),
Array("publicacion","imagen_publicacion",30,"Tamaño < 7",false,"La imagen de la publicación no puede tener menos de 6 caracteres"),
Array("publicacion","imagen_publicacion",31,"Tamaño > 50",false,"La imagen de la publicación no puede tener más de 50 caracteres"),
Array("publicacion","imagen_publicacion",32,"Formato no .jpg ni .jpeg",false,"La imagen de la publicación debe tener formato .jpg ó .jpeg."),
Array("publicacion","imagen_publicacion",33,">20000 bytes",false,"La imagen del programa es demasiado grande. Recuerda que el máximo son 20000 bytes."),
Array("publicacion","imagen_publicacion",34,"No alfabéticos o con espacios o con ñ o con acentos",false,"Formato no válido, recuerda que el link solo puede tener caracteres alfabéticos sin acentos ni ñ ni espacio."),
Array("publicacion","imagen_publicacion",35,"Alfabéticos sin acentos ni ñ ni espacios",true,"Éxito"),

);