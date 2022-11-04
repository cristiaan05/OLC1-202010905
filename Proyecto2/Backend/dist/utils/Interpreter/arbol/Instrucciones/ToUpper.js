"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToUpper = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class ToUpper extends Instruccion_1.Instruccion {
    constructor(
    // public declaracion: string,
    valor, linea, columna) {
        super(linea, columna);
        this.valor = valor;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("TO UPPER");
        nodoDec.agregarHijo(this.valor);
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un TO UPPER : " + this.valor + " lo encontre en la linea " + this.linea);
    }
}
exports.ToUpper = ToUpper;
