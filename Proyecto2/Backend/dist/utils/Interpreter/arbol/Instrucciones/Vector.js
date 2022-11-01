"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
class Vector extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.tipo = tipo;
    }
    ejecutar() {
        console.log("Encontre un vector:-- NOMBRE:" + this.nombre + " del tipo de dato: " + this.tipo + " lo encontre en la linea " + this.linea);
    }
}
exports.Vector = Vector;
