"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incremento = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
class Incremento extends Instruccion_1.Instruccion {
    constructor(nombre, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
    }
    ejecutar() {
        console.log("Se incremento la variable:" + this.nombre + " lo encontre en la linea " + this.linea);
    }
}
exports.Incremento = Incremento;
