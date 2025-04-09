import Cl_multimedia from "./Cl_multimedia.js";
export default class Cl_mFotografia extends Cl_multimedia {
  constructor( { codigo, costoBase, tipo } ) {
    super(codigo, costoBase);
    this.tipo = tipo;
  }

  set tipo(tipo) {
    this._tipo = tipo.toUpperCase();
  }
  get tipo() {
    return this._tipo;
  }

  descuento() {
    if (this.tipo === "D") return this.costoBase * 0.18;
    return 0;
  }
  incremento() {
    if (this.tipo === "I") return this.costoBase * 0.13;
    return 0;
  }
  precio() {
    if (this.tipo === "D") return this.costoBase - this.descuento();
    else if (this.tipo === "I") return this.costoBase + this.incremento();
  }
}
