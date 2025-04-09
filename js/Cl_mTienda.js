import Cl_mFotografia from "./Cl_mFotografia.js";
import Cl_mVideo from "./Cl_mVideo.js";

export default class Cl_mTienda {
    constructor() {
        this.acumMontoTotalFoto = 0;
        this.acumMontoTotalVideo = 0;
        this.cntVentaDigital = 0;
        this.acumDigitales = 0;
    }

    procesarMultimedia(pro) {
        if (pro instanceof Cl_mFotografia) {
            this.acumMontoTotalFoto += pro.precio();
            if (pro.tipo === "D") {
                this.cntVentaDigital += 1;
                this.acumDigitales += pro.precio();
            }
        }
        if (pro instanceof Cl_mVideo) {
            this.acumMontoTotalVideo += pro.precio();
        }
    }

    totalVendidoFoto() {
        return this.acumMontoTotalFoto;
    }

    totalVendidoVideo() {
        return this.acumMontoTotalVideo;
    }

    promedioDigital() {
        return this.cntVentaDigital > 0
            ? this.acumDigitales / this.cntVentaDigital
            : 0;
    }
    total(){
        return this.totalVendidoFoto() + this.totalVendidoVideo();
    }
}