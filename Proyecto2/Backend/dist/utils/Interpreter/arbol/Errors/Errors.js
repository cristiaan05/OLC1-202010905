"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
class Errors {
    constructor(titulo, descripcion, linea, columna) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.linea = linea;
        this.columna = columna;
    }
}
exports.Errors = Errors;
