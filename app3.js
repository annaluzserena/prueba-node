var nombreHermana = ["Anna", "Maitena", "Emma"]

function hermanas(hermana) {
    if (hermana == "Anna") {
        return "Genia total";
    } else if (hermana == "Maitena") {
        return "Malísima";
    } else if (hermana == "Emma") {
        return "Malísima";
    }
}

function registrarse(nombre = "Visitante", apellido = "Anónimo") {       // registrarse en el sitio web (no requiere ningún otro dato)
    return "Bienvenid@" + " " + nombre + " " + apellido;
}

function puedeManejar(edad) {
    if (edad < 16) {
        return "No puede manejar";
    } else if (edad == 16) {                      // para el sitio de licencias de conducir, faltan datos
        return "Puede manejar motos";
    } else {
        return "Puede manejar cuaquier vehículo tamaño chico a mediano";
    }
}

var estudiantes = [{
    nombre: "Maitena Serena",
    edad: 14,
    curso: "Administración empresarial",
},
{
    nombre: "Emma Serena",
    edad: 13,                                        // para Digital House, estudiantes que están cursando (algunos ya egresaron y otros se fueron, ver más abajo)
    curso: "Ilustración digital",
},
{
    nombre: "Anna Luz Serena",
    edad: 17,
    curso: "Hacking ético",
}]

let recursantes = estudiantes.shift();

estudiantes.unshift({
    nombre: "Manuel Serena",
    edad: 48,
    curso: "Diseño gráfico",
})

let egresados = estudiantes.pop();


var asientosDisponibles = ["M5", "H4", "A8", "B1", "M7"];     // asientos del cine La Plata, falta función que transfiera los que se venden a esta var
asientosDisponibles.slice(2, 3);

var asientosVendidos = ["K7", "E3", "A2", "G5"];

function asientos(asientoSolicitado, asientosDisponibles) {
    if (asientosDisponibles.indexOf(asientoSolicitado) != -1) {
        return "El asiento solicitado se encuentra disponible, ¿Desea comprarlo?";
    } else {
        return "Lo sentimos, el asiento solicitado no se encuentra disponible, pero todavían quedan los asientos: " + asientosDisponibles.join(" ");
    }

}

asientosVendidos = asientosVendidos + "," + asientosDisponibles.splice(4, 1);

const mailPrincipal = "annaluzserena@protonmail.com";  // mail personal más seguro, mandar correos importantes a este
const mailSecundario = "annaluzserena04@gmail.com";  // mail para suscribirme a páginas que mandan publicidades, spam o correo basura, no mandar nada acá

let objetoLiteral = { nombre: "Carla", pais: "Argentina" };
let datosConvertidos = JSON.stringify(objetoLiteral);

var cualquiera = "Anna Luz";
cualquiera.replace("Anna", "La");

let frase = "Hola!, soy Carli";

let licenciada = frase.slice(-6);



function contarHasta(n) {
    let arrayNumero = [0];
    for (let i = 1; i <= n; i++) {
        arrayNumero = arrayNumero + " " + i;
    }
    return arrayNumero;
}


let stringEspacios = "   Soy Anna   ".trim();
let reemplazar = stringEspacios.replace("Anna", "Emma");

let elDoble = num => num * 2;

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

// let bicicletaConRodadoGrande = bicicletaA.rodado < bicicletaB.rodado ? bicicletaB : bicicletaA;
// console.log("La bicicleta con mayor rodado es la "+ bicicletaConRodadoGrande.marca );

function numeroMasGrande(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function primerCallback(num1, num2, callback) {
    return "El número más grande es " + callback(num1, num2);
}

let estudiantess = [
    { nombre: 'John', promedio: 8.5, aprobado: true },
    { nombre: 'Jane', promedio: 7, aprobado: true },
    { nombre: 'June', promedio: 3, aprobado: false },
]

let aprobados = estudiantess.filter(function (indice) {
    return estudiantess[estudiantess.indexOf(indice)].aprobado === true;
})

let desaprobados = estudiantess.filter(function (indice) {
    return estudiantess[estudiantess.indexOf(indice)].aprobado === false;
})

console.log(desaprobados);




