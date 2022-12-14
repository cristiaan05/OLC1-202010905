"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Println = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Println extends Instruccion_1.Instruccion {
    constructor(nombre, valor, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.valor = valor;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("PRINTLN");
        nodoDec.agregarHijo(this.valor);
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre una impresion de una linea : " + this.nombre + "IMPRIMIR: " + this.valor + " lo encontre en la linea " + this.linea);
    }
}
exports.Println = Println;
