"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Nodo {
    constructor(valor, tipo) {
        this.id = 0;
        this.valor = valor;
        this.tipo = tipo;
        this.hijos = new Array();
    }
    getValor() {
        return this.valor;
    }
    getTipo() {
        this.tipo;
    }
    agregarHijo(hijo) {
        this.hijos.push(new Nodo(hijo, ""));
    }
    agregarHijo_nodo(hijo) {
        this.hijos.push(hijo);
    }
    getHijos() {
        return this.hijos;
    }
}
exports.default = Nodo;
//exportar la clase y poder importarla en otras clases 
//module.exports= Nodo;
