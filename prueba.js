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
        vendido: true
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
        vendido: true
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
        let resultado = null;
        autos.forEach(function (elemento) {
            switch (elemento.patente) {
                case patenteIng:
                    resultado = elemento;
                    break;
                case !patenteIng:
                    resultado = null;
                    break;
            }
        })
        return resultado;
    },

    venderAuto: function (patenteIng) {
        let buscarPatente = this.buscarAuto(patenteIng);
        buscarPatente.vendido = true;
        return buscarPatente;
    },

    autosParaLaVenta: function () {
        let filtrado = this.autos.filter(function (elemento) {
            return elemento.vendido == false;
        });
        return filtrado;
    },

    autosNuevos: function () {
        let autosSinVender = this.autosParaLaVenta();
        let autos0km = autosSinVender.filter(function (elemento) {
            return elemento.km == 0;
        });
        return autos0km;
    },

    listaDeVentas: function () {
        let precios = [];
        for (let i = 0; i < this.autos.length; i++) {
            switch ((autos[i]).vendido) {
                case true:
                    precios.push(autos[i].precio);
                    break;
                default:
                    precios.push(0);
            }
        }
        return precios;
    },

    totalDeVentas: function () {
        let precios = this.listaDeVentas();
        let total = precios.reduce(function (acumulador, valor) {
            return acumulador + valor;
        });
        return total;
    },

    puedeComprar: function (auto, persona) {
        if (persona.capacidadDePagoEnCuotas > auto.precio / auto.cuotas && auto.precio < persona.capacidadDePagoTotal) {
            return true;
        } else {
            return false;
        }
    },

    autosQuePuedeComprar: function (persona) {
        let autosParaLaVenta = this.autosParaLaVenta();
        let puedeComprar = [];
        for (let i = 0; i < autosParaLaVenta.length; i++) {
            if (this.puedeComprar(autosParaLaVenta[i], persona) == true) {
                puedeComprar.push(autosParaLaVenta[i]);
            }
        }
        return puedeComprar;
    }

}



console.log(concesionaria.totalDeVentas());

module.exports = autos;