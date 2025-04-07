import Cl_mFotografia from "./Cl_mFotografia.js";
import Cl_vFotografia from "./Cl_vFotografia.js";

import Cl_mVideo from "./Cl_mVideo.js";
import Cl_vVideo from "./Cl_vVideo.js";

export default class Cl_vTienda {
    constructor() {
        this.controlador = null;

        this.vFoto = new Cl_vFotografia();
        this.vVideo = new Cl_vVideo();

        this.tablaFoto = document.getElementById("tablaFoto");
        this.tablaVideo = document.getElementById("tablaVideo");
        this.salida = document.getElementById("salida");

        this.vFoto.btProcesarFoto.onclick = () => this.controlador.procesarFotografia();
        this.vVideo.btProcesarVideo.onclick = () => this.controlador.procesarVideo();
    }

    procesarFotografia() {
        return new Cl_mFotografia({
            codigo: this.vFoto.codigo,
            costoBase: this.vFoto.costoBase,
            tipo: this.vFoto.tipo,
        });
    }

    procesarVideo() {
        return new Cl_mVideo({
            codigo: this.vVideo.codigo,
            costoBase: this.vVideo.costoBase,
            formato: this.vVideo.formato,
        });
    }

    reporte( totalVendidoFoto, totalVendidoVideo, promedioDigital, total, cntVentaDigital, acumDigitales) {
        this.salida.innerHTML = `
            <br>Total de Video: $  ${totalVendidoVideo}
            <br>Total de Fotografía: $  ${totalVendidoFoto}
            <br>
            <br>Total vendido: $  ${total}
            <br>Nº fotos digitales: ${cntVentaDigital}
            <br>Subtotal fotos digitales: $  ${acumDigitales.toFixed(2)}
            <br>Promedio ventas digitales: $  ${promedioDigital.toFixed(2)}
        `;
    }
    reporte1(descuento, incremento, precio) {
        this.tablaFoto.innerHTML += `
        <tr>
            <td>${this.vFoto.codigo}</td>
            <td>$  ${this.vFoto.costoBase}</td>
            <td>${this.vFoto.tipo.toUpperCase()}</td>
            <td>$  ${descuento.toFixed(2)}</td>
            <td>$  ${incremento.toFixed(2)}</td>
            <td>$  ${precio.toFixed(2)}</td>
        </tr>`;
    }

    reporte2(incremento, precio) {
        this.tablaVideo.innerHTML += `
        <tr>
            <td>${this.vVideo.codigo}</td>
            <td>$  ${this.vVideo.costoBase}</td>
            <td>${this.vVideo.formato.toUpperCase()}</td>
            <td>$  ${incremento.toFixed(2)}</td>
            <td>$  ${precio.toFixed(2)}</td>
        </tr>`;
    }

}