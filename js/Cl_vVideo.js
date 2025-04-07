export default class vVideo {
    constructor() {
        this.inCodigo = document.getElementById("videoForm_inCodigo");
        this.inCostoBase = document.getElementById("videoForm_inCostoBase");
        this.inFormato = document.getElementById("videoForm_inFormato");
        this.btProcesarVideo = document.getElementById("videoForm_btProcesarVideo");
    }

    get codigo(){
        return this.inCodigo.value;
    }
    get costoBase(){
        return +this.inCostoBase.value;
    }
    get formato(){
        return this.inFormato.value;
    }
}