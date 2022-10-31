"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instruccion = void 0;
//import { Env } from "../Symbol/Env";
class Instruccion {
    constructor(tipo, linea, columna) {
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna + 1;
    }
}
exports.Instruccion = Instruccion;
