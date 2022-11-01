"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decremento = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
class Decremento extends Instruccion_1.Instruccion {
    constructor(nombre, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
    }
    ejecutar() {
        console.log("Se decremento la variable:" + this.nombre + " lo encontre en la linea " + this.linea);
    }
}
exports.Decremento = Decremento;
