"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pop = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Pop extends Instruccion_1.Instruccion {
    constructor(variables, linea, columna) {
        super(linea, columna);
        this.variables = variables;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("POP");
        nodoDec.agregarHijo("Array: " + this.variables);
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un POP : " + this.variables + " lo encontre en la linea " + this.linea);
    }
}
exports.Pop = Pop;
