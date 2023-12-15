class Gestion_publicacion extends GestionEntidad{
     //-----------------------------------------------------------------------------
    // formularios

    static async createForm_ADD(){

        // resetear el formulario
        // hemos hecho una modificación de manera que cargamos el contenido del formulario desde su html cada vez que lo preparamos para una accion
        // obviamente es dependiente de la entidad y por lo tanto no esta en la superclase
        this.recargarform();

        // rellenar titulo formulario
        // usamos className mientras no tenemos que utilizar clases de css puesto que borra todos los class del elemento
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_publicacion"; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');

        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');

        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');

        document.getElementById('fecha_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_fecha_publicacion()');

        document.getElementById('area_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_area_publicacion()');

        document.getElementById('texto_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_texto_publicacion()');

        document.getElementById('nuevo_imagen_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');
        document.getElementById('nuevo_imagen_publicacion').setAttribute('onchange','Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');
        document.getElementById("label_imagen_publicacion").style.display = 'none';
        document.getElementById("imagen_publicacion").style.display = 'none';
        document.getElementById("link_imagen_publicacion").style.display = 'none';

        
        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);
        document.getElementById('IU_form').append(botonadd);        

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    static createForm_EDIT(datostupla){
        
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_publicacion"; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit();');

        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion()');
        document.getElementById('id_publicacion').value = datostupla.id_publicacion;
        document.getElementById('id_publicacion').setAttribute("readonly","");

        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion()');
        document.getElementById('titulo_publicacion').value = datostupla.titulo_publicacion;

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion()');
        document.getElementById('autor_publicacion').value = datostupla.autor_publicacion;

        document.getElementById('fecha_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_fecha_publicacion()');
        document.getElementById('fecha_publicacion').value = datostupla.fecha_publicacion;

        document.getElementById('area_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_area_publicacion()');
        document.getElementById('area_publicacion').value = datostupla.area_publicacion;

        document.getElementById('texto_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_texto_publicacion()');
        document.getElementById('texto_publicacion').value = datostupla.texto_publicacion;

        document.getElementById('imagen_publicacion').value = datostupla.imagen_publicacion;
        document.getElementById('link_imagen_publicacion').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion/'+imagen_publicacion);
        document.getElementById('imagen_publicacion').setAttribute("readonly",true);

        document.getElementById('nuevo_imagen_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_nuevo_imagen_publicacion()');

        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_DELETE(datostupla){
        
        // resetear el formulario
        this.recargarform();

        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.DELETE();';

        document.getElementById('id_publicacion').value = datostupla.id_publicacion;
        document.getElementById('id_publicacion').setAttribute('readonly',true);

        document.getElementById('titulo_publicacion').value = datostupla.titulo_publicacion;
        document.getElementById('titulo_publicacion').setAttribute('readonly',true);

        document.getElementById('autor_publicacion').value = datostupla.autor_publicacion;
        document.getElementById('autor_publicacion').setAttribute('readonly',true);

        document.getElementById('fecha_publicacion').value = datostupla.fecha_publicacion;
        document.getElementById('fecha_publicacion').setAttribute('readonly',true);

        document.getElementById('area_publicacion').value = datostupla.area_publicacion;
        document.getElementById('area_publicacion').setAttribute('readonly',true);

        document.getElementById('texto_publicacion').value = datostupla.texto_publicacion;
        document.getElementById('texto_publicacion').setAttribute('readonly',true);

        document.getElementById('imagen_publicacion').value = datostupla.imagen_publicacion;
        document.getElementById('imagen_publicacion').setAttribute("readonly",true);
        document.getElementById("link_imagen_publicacion").href += datostupla.imagen_publicacion;

        document.getElementById("label_nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById("nuevo_imagen_publicacion").style.display = 'none';
        

        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);

        // para actualizar idioma 
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_SHOWCURRENT(datostupla){
        
        // reutilizo la creación del delete porque me implica pocas modificaciones
        this.createForm_DELETE(datostupla);
        
        // rellenar titulo del formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_publicacion";

        // eliminar boton delete del form DELETE
        document.getElementById('botondelete').remove();
        
        // se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick","DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);

        // para actualizar el idioma
        setLang();


    }

    static createForm_SEARCH(){

        // resetear el formulario
        this.recargarform();
        
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_publicacion";

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_publicacion.SEARCH();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_publicacion.comprobar_submit_SEARCH();');

        document.getElementById('id_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_id_publicacion_SEARCH()');

        document.getElementById('titulo_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_titulo_publicacion_SEARCH()');

        document.getElementById('autor_publicacion').setAttribute('onblur', 'Gestion_publicacion.comprobar_autor_publicacion_SEARCH()');

        document.getElementById('fecha_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_fecha_publicacion_SEARCH()');
        
        document.getElementById('area_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_area_publicacion_SEARCH()');

        document.getElementById('texto_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_texto_publicacion_SEARCH()');

        
        document.getElementById('imagen_publicacion').setAttribute('onblur','Gestion_publicacion.comprobar_imagen_publicacion_SEARCH()');

        document.getElementById("label_nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById("nuevo_imagen_publicacion").style.display = 'none';
        document.getElementById('link_imagen_publicacion').style.display = 'none';

        
        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);        

        // para actualizar idioma
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    //-----------------------------------------------------------------------------
    // submits

    static comprobar_submit(){

        let valor = this.comprobar_id_publicacion();
        let valor1 = this.comprobar_titulo_publicacion();
        let valor2 = this.comprobar_autor_publicacion();
        let valor3 = this.comprobar_fecha_publicacion();
        let valor4 = this.comprobar_area_publicacion();
        let valor5 = this.comprobar_texto_publicacion();
        let valor6 = this.comprobar_nuevo_imagen_publicacion();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 
        );

        return resultado;
        
    }

    static comprobar_submit_SEARCH(){

        let valor = this.comprobar_id_publicacion_SEARCH();
        let valor1 = this.comprobar_titulo_publicacion_SEARCH();
        let valor2 = this.comprobar_autor_publicacion_SEARCH();
        let valor3 = this.comprobar_fecha_publicacion_SEARCH();
        let valor4 = this.comprobar_area_publicacion_SEARCH();
        let valor5 = this.comprobar_texto_publicacion_SEARCH();
        let valor6 = this.comprobar_nuevo_imagen_publicacion_SEARCH();

        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor5 &&
            valor6 
        );

        return resultado;
    }

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']){
                //this.resetearformpublicacion();
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async EDIT(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async DELETE(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'publicacion', 'SEARCH')
        .then((respuesta) => {
            this.recargarform();
            let publicacion = new Gestion_publicacion('publicacion',respuesta['resource'],Array('id_publicacion','titulo_publicacion','autor_publicacion'));publicacion.mostrartabla();
            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }

    //-----------------------------------------------------------------------------
    //validaciones campos

    static comprobar_id_publicacion(){
        if (validacionesatomicas.validate_is_notnull('id_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion','id_publicacion_es_nulo_KO');
            return false;
        }
        if (validacionesatomicas.validate_min_size('id_publicacion',1)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_min_size');
            return false;
        }
        if (validacionesatomicas.validate_max_size('id_publicacion',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_max_size');
            return false;
        }
        if (!validacionesatomicas.validate_is_numeric('id_publicacion')){
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_not_numeric');
            return false;
        }
        DOM_class.mostrarexitovalor('id_publicacion');
        return true;
    }

    static comprobar_id_publicacion_SEARCH(){
        if (validacionesatomicas.validate_max_size('id_publicacion',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('id_publicacion','KO_id_publicacion_max_size');
            DOM_class.mostrarerrorvalor('id_publicacion');
            return false;
        }
        DOM_class.mostrarexitovalor('id_publicacion');
        return true;
    }

    static comprobar_titulo_publicacion(){
        if (validacionesatomicas.validate_is_notnull('titulo_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','titulo_publicacion_es_nulo_KO');
            return false;
        }
        if (validacionesatomicas.validate_min_size('titulo_publicacion',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_min_size');
            return false;
        }
        if (validacionesatomicas.validate_max_size('titulo_publicacion',80)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_max_size');
            return false;
        }
        if (!validacionesatomicas.validate_AlphabeticNotRestrictive('titulo_publicacion')){
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_bad_char');
            return false;
        }
        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;
    }

    static comprobar_titulo_publicacion_SEARCH(){
        if (validacionesatomicas.validate_is_notnull('titulo_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','titulo_publicacion_es_nulo_KO');
            return false;
        }
        if (validacionesatomicas.validate_max_size('titulo_publicacion',80)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('titulo_publicacion','KO_titulo_publicacion_max_size');
            DOM_class.mostrarerrorvalor('titulo_publicacion');
            return false;
        }
        DOM_class.mostrarexitovalor('titulo_publicacion');
        return true;
    }
    



    static comprobar_autor_publicacion(){
        if (validacionesatomicas.validate_is_notnull('autor_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','autor_publicacion_es_nulo_KO');
            return false;
        }
        if (validacionesatomicas.validate_min_size('autor_publicacion',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_max_size');
            return false;
        }
        if (validacionesatomicas.validate_max_size('autor_publicacion',40)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_max_size');
            return false;
        }
        if (validacionesatomicas.validate_AlphabeticNotRestrictive('autor_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_bad_char');
            return false;
        }
        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;
    }

    static comprobar_autor_publicacion_SEARCH(){
        if (validacionesatomicas.validate_max_size('autor_publicacion',40)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('autor_publicacion','KO_autor_publicacion_max_size');
            DOM_class.mostrarerrorvalor('autor_publicacion');
            return false;
        }
        DOM_class.mostrarexitovalor('autor_publicacion');
        return true;
    }
    
    static comprobar_fecha_publicacion(){
        if (validacionesatomicas.validate_is_notnull('fecha_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','fecha_publicacion_es_nulo_KO');
            return false;
        }
        if (validacionesatomicas.validate_min_size('fecha_publicacion',10)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_max_size');
            return false;
        }
        if (validacionesatomicas.validate_max_size('fecha_publicacion',10)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_max_size');
            return false;
        }
        if (validacionesatomicas.validate_GoodDate('fecha_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_bad_date');
            return false;
        }
        DOM_class.mostrarexitovalor('fecha_publicacion');
        return true;
    }

    static comprobar_fecha_publicacion_SEARCH(){
        if (validacionesatomicas.validate_max_size('fecha_publicacion',10)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('fecha_publicacion','KO_fecha_publicacion_max_size');
            DOM_class.mostrarerrorvalor('fecha_publicacion');
            return false;
        }
        DOM_class.mostrarexitovalor('fecha_publicacion');
        return true;
    }

    static comprobar_area_publicacion(){
        if (validacionesatomicas.validate_is_notnull('area_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion','area_publicacion_es_nulo_KO');
            return false;
        }
        if (validacionesatomicas.validate_min_size('area_publicacion',1)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_max_size');
            return false;
        }
        if (validacionesatomicas.validate_max_size('area_publicacion',6)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_max_size');
            return false;
        }
        if (validacionesatomicas.validate_is_numeric('area_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_not_numeric');
            return false;
        }
        DOM_class.mostrarexitovalor('area_publicacion');
        return true;
    }

    static comprobar_area_publicacion_SEARCH(){
        if (validacionesatomicas.validate_is_notnull('area_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion','area_publicacion_es_nulo_KO');
            return false;
        }
        if (validacionesatomicas.validate_max_size('area_publicacion',10)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('area_publicacion','KO_area_publicacion_max_size');
            DOM_class.mostrarerrorvalor('area_publicacion');
            return false;
        }
        DOM_class.mostrarexitovalor('area_publicacion');
        return true;
    }
    
    static comprobar_texto_publicacion(){
        if (validacionesatomicas.validate_is_notnull('texto_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','texto_publicacion_es_nulo_KO');
            return false;
        }
        if (validacionesatomicas.validate_min_size('texto_publicacion',30)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_max_size');
            return false;
        }
        if (validacionesatomicas.validate_max_size('texto_publicacion',8000)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('texto_publicacion','KO_texto_publicacion_max_size');
            return false;
        }
        DOM_class.mostrarexitovalor('texto_publicacion');
        return true;
    }

    static comprobar_nuevo_imagen_publicacion(){
        if (validacionesatomicas.validate_min_size('nuevo_imagen_publicacion',7)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion','KO_nuevo_imagen_publicacion_min_size');
            return false;
        }

        if (validacionesatomicas.validate_max_size('nuevo_imagen_publicacion',50)){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion','KO_nuevo_imagen_publicacion_max_size');
            return false;
        }
        if (validacionesatomicas.validate_AlphabeticRestrictive2('nuevo_imagen_publicacion')){
        }
        else{
            DOM_class.mostrardivmensajeserrordebajo('nuevo_imagen_publicacion','KO_nuevo_imagen_publicacion_bad_char');
            return false;
        }
        DOM_class.mostrarexitovalor('nuevo_imagen_publicacion');
        return true;

    }

    static comprobar_nuevo_imagen_publicacion_SEARCH(){

        if (validacionesatomicas.validate_max_size('nuevo_imagen_publicacion',50)){   
        }
        else{
            DOM_class.mostrardivmensajes('nuevo_imagen_publicacion','KO_nuevo_imagen_publicacion_max_size');
            DOM_class.mostrarerrorvalor('nuevo_imagen_publicacion');
            return false;
        }

        DOM_class.mostrarexitovalor('nuevo_imagen_publicacion');
        return true;
    }
 
    static recargarform(){

        document.getElementById("IU_form").innerHTML= '';

        document.getElementById("IU_form").innerHTML=`

        <label class="label_id_publicacion"></label>
        <input type='text' id='id_publicacion' name='id_publicacion'></input>
        <div id="div_error_id_publicacion" class="errorcampo"><a id="error_id_publicacion"></a></div>
        <br>

        <label class="label_titulo_publicacion"></label>
        <input type='text' id='titulo_publicacion' name='titulo_publicacion'></input>
        <div id="div_error_titulo_publicacion" class="errorcampo"><a id="error_titulo_publicacion"></a></div>
        <br>
        
        <label class="label_autor_publicacion"></label>
        <input type='text' id='autor_publicacion' name='autor_publicacion'></input>
        <div id="div_error_autor_publicacion" class="errorcampo"><a id="error_autor_publicacion"></a></div>
        <br>

        <label class="label_fecha_publicacion"></label>
        <input type='text' id='fecha_publicacion' name='fecha_publicacion'></input>
        <div id="div_error_fecha_publicacion" class="errorcampo"><a id="error_fecha_publicacion"></a></div>
        <br>

        <label class="label_area_publicacion"></label>
        <input type='text' id='area_publicacion' name='area_publicacion'></input>
        <div id="div_error_area_publicacion" class="errorcampo"><a id="error_area_publicacion"></a></div>
        <br>

        <label class="label_texto_publicacion"></label>
        <input type='text' id='texto_publicacion' name='texto_publicacion'></input>
        <div id="div_error_texto_publicacion" class="errorcampo"><a id="error_texto_publicacion"></a></div>
        <br>

        <br>
        <label id="label_imagen_publicacion" class="label_imagen_publicacion">Foto publicacion</label>
        <input type='text' id='imagen_publicacion' name='imagen_publicacion'></input>
        <a id="link_imagen_publicacion" href="http://193.147.87.202/ET2/filesuploaded/files_imagen_publicacion/"><img src="./iconos/FILE.png" /></a>
        <label id="label_nuevo_imagen_publicacion" class="label_nuevo_imagen_publicacion">Nueva imagen publicación</label>
        <input type='file' id='nuevo_imagen_publicacion' name='nuevo_imagen_publicacion'></input>
        <div id="div_error_nuevo_imagen_publicacion" class="errorcampo"><a id="error_nuevo_imagen_publicacion"></a></div>
        <br>
        
        `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            if (eval(document.getElementById('div_error_'+campos[i].id))){
                document.getElementById('div_error_'+campos[i].id).style.display = 'none';
            }
        }

        setLang();

       
    }
}
