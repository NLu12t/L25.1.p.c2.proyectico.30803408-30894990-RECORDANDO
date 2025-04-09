import Cl_multimedia from "./Cl_multimedia.js";

export default class Cl_mVideo extends Cl_multimedia {
  constructor({ codigo, costoBase, formato}) {
    super(codigo, costoBase);
    this.formato = formato;
  }

  set formato(formato) {
    this._formato = formato.toUpperCase();
  }
  get formato() {
    return this._formato;
  }

  incremento(){
   if( this.formato === "SI") return this.costoBase * 0.20;
   return 0;
  }

  precio(){
    return this.costoBase + this.incremento();
  }
}
