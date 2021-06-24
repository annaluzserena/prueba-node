let autos = [
    {
        marca: "Ford",
        modelo: "Fiesta",
        color: "Azul",
        anio: 2019,
        km: 200,
        precio: 150000,
        cuotas: 12,
        patente: "APL123",
        vendido: false
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        color: "Blanco",
        anio: 2019,
        km: 0,
        precio: 100000,
        cuotas: 14,
        patente: "JJK116",
        vendido: false
    }
]

function completarAuto(marca, modelo, color, anio, km, precio, cuotas, patente, vendido) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.km = km;
    this.precio = precio;
    this.cuotas = cuotas;
    this.patente = patente;
    this.vendido = vendido;
} // no sirvió pero puede ser útil para registrar nuevos autos, intenté usarla en buscarAuto
// función constructora


let concesionaria = {
    autos: autos,

    buscarAuto: function (patenteIng) {
        let resultado = undefined;
        autos.filter(function (elemento) {
            switch (elemento.patente) {
                case patenteIng:
                    return elemento;
                    break;
                default:
                    resultado = null;
            }
        })
        return resultado;
    },

}

console.log(concesionaria.buscarAuto("JJK116"));

module.exports = autos;