"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class nodo {
    constructor(valor) {
        this.valor = valor;
        this.hijos = new Array();
    }
    setHijos(hijos) {
        this.hijos = hijos;
    }
    getValor() {
        return this.valor;
    }
    getHijos() {
        return this.hijos;
    }
    agregarHijo(valor) {
        this.hijos.push(new nodo(valor));
    }
    agregarHijos(hijos) {
        for (let hijo of hijos) {
            this.hijos.push(hijo);
        }
    }
    agregarHijo_nodo(hijo) {
        this.hijos.push(hijo);
    }
    agregarPrimerHijo(valor) {
        this.hijos.unshift(new nodo(valor));
    }
    agregarPrimerHijo_nodo(hijo) {
        this.hijos.unshift(hijo);
    }
}
exports.default = nodo;
