"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cast = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
class Cast extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, tipoN, valor, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.tipo = tipo;
        this.tipoN = tipoN;
        this.valor = valor;
    }
    ejecutar() {
        console.log("Encontre un casteo para:-- NOMBRE:" + this.nombre + " del tipo de dato: " + this.tipo + " con valor: " + this.valor + " al tipo: " + this.tipoN + " lo encontre en la linea " + this.linea);
    }
}
exports.Cast = Cast;
