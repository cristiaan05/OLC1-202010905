"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Push = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Push extends Instruccion_1.Instruccion {
    constructor(variables, valor, linea, columna) {
        super(linea, columna);
        this.variables = variables;
        this.valor = valor;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("PUSH");
        nodoDec.agregarHijo("Array: " + this.variables);
        if (this.valor instanceof (Array)) {
            this.valor.forEach(ins => {
                try {
                    nodoDec.agregarHijo_nodo(ins.getNodo());
                }
                catch (error) {
                }
            });
        }
        else {
            nodoDec.agregarHijo("push: " + this.valor);
        }
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un PUSH : " + this.variables + " lo encontre en la linea " + this.linea);
    }
}
exports.Push = Push;
