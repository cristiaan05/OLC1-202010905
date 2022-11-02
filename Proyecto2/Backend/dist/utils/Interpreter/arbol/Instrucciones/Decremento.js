"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decremento = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Decremento extends Instruccion_1.Instruccion {
    constructor(nombre, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("DECREMENTO");
        console.log();
        return nodoDec;
    }
    ejecutar() {
        console.log("Se decremento la variable:" + this.nombre + " lo encontre en la linea " + this.linea);
    }
}
exports.Decremento = Decremento;
