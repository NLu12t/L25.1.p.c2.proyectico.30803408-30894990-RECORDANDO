export default class Cl_vFotografia {
    constructor(){
        this.inCodigo = document.getElementById("fotoForm_inCodigo");
        this.inCostoBase = document.getElementById("fotoForm_inCostoBase");
        this.inTipo = document.getElementById("fotoForm_inTipo");
        this.btProcesarFoto = document.getElementById("fotoForm_btProcesarFoto");
    }

    get codigo(){
        return this.inCodigo.value;
    }
    get costoBase(){
        return +this.inCostoBase.value;
    }
    get tipo(){
        return this.inTipo.value;
    }
}