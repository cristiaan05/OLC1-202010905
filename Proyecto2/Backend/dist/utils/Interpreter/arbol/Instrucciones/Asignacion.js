"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignacion = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
class Asignacion extends Instruccion_1.Instruccion {
    constructor(nombre, valor, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.valor = valor;
    }
    ejecutar() {
        console.log("Encontre una asignacion:-- NOMBRE:" + this.nombre + " lo encontre en la linea " + this.linea);
    }
}
exports.Asignacion = Asignacion;
