class validacionesatomicas{

    constructor(){

    }

    //static validate_is_notnull(id){
    //    const inputID = document.getElementById(id).value;
    //    if (inputID && inputID !== '' && inputID.trim()) {
    //        return true
    //    }
    //    return false;
    //}
    static validate_is_notnull(id){
        var element = document.getElementById(id);
        return (element !== null && element.value !== null && element.value.trim() !== '');
    }

    static validate_is_numeric(id){
        const inputID = document.getElementById(id).value;

        if (inputID && inputID !== '') {
        const regex = /^\d+$/;
        return regex.test(inputID);
        }

        return false;
    }

    static validate_min_size(id, minvalue){
        if (document.getElementById(id).value.length < minvalue) {
            return false;
        }
        return true;
    }

    static validate_max_size(id, maxvalue){
        if (document.getElementById(id).value.length > maxvalue) {
            return false;
        }
        return true;
    }

    static validate_AlphabeticNotRestrictive(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID !== '') {
            const regex = /^[A-Za-záéíóúÁÉÍÓÚñ\s]*$/;
            return regex.test(inputID);
        }

        return false;
    }
    static validate_AlphabeticRestrictive(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID !== '') {
            const regex = /^[A-Za-z]+$/;
            return regex.test(inputID);
        }

        return false;
    }

    static validate_AlphabeticRestrictive2(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID !== '') {
            const regex = /^[A-Za-z:/\\]+.(jpg|jpeg)$/;
            return regex.test(inputID);
        }
        return false;
    }

    static validate_AlphabeticRestrictive3(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID !== '') {
            const regex = /^[A-Za-z:/\\]+.(pdf|doc|docx)$/;
            return regex.test(inputID);
        }
        return false;
    }

    static validate_AlphabeticRestrictivePoint(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID !== '') {
            const regex = /^[A-Za-z].+$/;
            return regex.test(inputID);
        }

        return false;
    }

    static validate_AlphabeticNotRestrictive_Punt(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID !== '') {
            const regex = /^[A-Za-záéíóúñ\s.\r,;:'"¿?¡!]+$/;
            const f = regex.test(inputID);
            return regex.test(inputID);
        }

        return false;
    }

    static validate_AlphabeticRestrictive_Punt(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID.value !== '') {
            const regex = /^[A-Za-z:./]*$/;
            return regex.test(inputID);
        }

        return false;
    }

    static validate_YearLessThanCurrent(id) {
        const inputID = document.getElementById(id).value;
        if (inputID && inputID !== '') {
        const regex = /^\d{4}$/;
        return regex.test(inputID) && parseInt(inputID) <= 2023;
        }
        return false;
}

    static validate_YearOrMonth(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID !== '') {
            return (inputID == 'MESES' || inputID == 'AÑOS');
        }

        return false;
    }

    static validate_EvaluationOrInterventionOrBoth(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID !== '') {
            return (inputID == 'EVALUACIÓN' || inputID == 'INTERVENCIÓN' ||inputID == 'EVALUACIÓN E INTERVENCIÓN');
        }

        return false;
    }

    static validate_PaperElectronicOrBoth(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID !== '') {
            return (inputID == 'PAPEL' || inputID == 'ELECTRÓNICO' ||  inputID == 'PAPEL Y ELECTRÓNICO');
        }

        return false;
    }

    static validate_ColectiveIndividualOrBoth(id){
        const inputID = document.getElementById(id).value;
    
        if (inputID && inputID !== '') {
            return (inputID == 'COLECTIVO' || inputID == 'INDIVIDUAL' || inputID == 'INDIVIDUAL Y COLECTIVO');
        }

        return false;
    }

    static validate_size(id, maxsize) {
        const inputId = document.getElementById(id);
        return inputId.size <= maxsize;
    }
    
    // Función para verificar la extensión del archivo
    static validate_ExtensionFile(id) {
        const inputId = document.getElementById(id);
        const extensionesPermitidas = ['pdf', 'doc', 'docx', 'PDF', 'DOC', 'DOCX'];
        const name = inputId.name.toLowerCase();
        const extension = name.substring(name.lastIndexOf('.') + 1);
    
        return extensionesPermitidas.includes(extension);
    }
    
    // Función para verificar la extensión del archivo de imagen
    static validate_ExtensionImage(id) {
        const inputId = document.getElementById(id);
        const extensionesPermitidas = ['jpg', 'jpeg', 'JPG', 'JPEG'];
        const name = inputId.name.toLowerCase();
        const extension = name.substring(name.lastIndexOf('.') + 1);
    
        return extensionesPermitidas.includes(extension);
    }

    static getZamara(ano, mes) {
        return 5;
    }

    static validate_GoodDate(id) {
        // Expresión regular para el formato dd/mm/aaaa
        const formatoFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    
        // Obtener el valor del campo de entrada
        const fechaInput = document.getElementById(id).value;
    
        // Verificar si la fecha sigue el formato
        if (!formatoFecha.test(fechaInput)) {
            return false; // Formato inválido
        }
    
        // Obtener día, mes y año introducidos
        const [dia, mes, ano] = fechaInput.split('/');
    
        // Verificar que cada parte sea un número
        if (!/^\d+$/.test(dia) || !/^\d+$/.test(mes) || !/^\d+$/.test(ano)) {
            return false;
        }
    
        // Convertir las partes a números
        const numDia = parseInt(dia);
        const numMes = parseInt(mes);
        const numAno = parseInt(ano);
    
        // Verificar mes (debe estar entre 1 y 12)
        if (numMes < 1 || numMes > 12) {
            return false; // Mes inválido
        }
    
        // Verificar día (debe estar entre 1 y 31 según el mes)
        if (numDia < 1 || numDia > 31) {
            return false; // Día no correcto
        }
        if (numAno < 999) {
            return false;
        }
        // Si pasa todas las verificaciones, la fecha es válida
        return true;
    }
    

} 