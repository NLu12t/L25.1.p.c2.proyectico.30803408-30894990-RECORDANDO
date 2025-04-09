export default class Cl_controlador {
    constructor( modelo, vista ) {
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarFotografia() {
        const fotografia = this.vista.procesarFotografia();
        this.modelo.procesarMultimedia(fotografia);

        this.vista.reporte1(
            fotografia.descuento ? fotografia.descuento() : 0,
            fotografia.incremento ? fotografia.incremento() : 0,
            fotografia.precio()
        );
        this.procesarMultimedia();
    }
    procesarVideo() {
        const video = this.vista.procesarVideo();
        this.modelo.procesarMultimedia(video);

        this.vista.reporte2(
            video.incremento ? video.incremento() : 0,
            video.precio()
        );
        this.procesarMultimedia();
    }

    procesarMultimedia() {
        this.vista.reporte(
            this.modelo.totalVendidoFoto(),
            this.modelo.totalVendidoVideo(),
            this.modelo.promedioDigital(),
            this.modelo.total(),
            this.modelo.cntVentaDigital,
            this.modelo.acumDigitales
        );
    }
}