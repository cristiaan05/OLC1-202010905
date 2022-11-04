"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typeof = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Typeof extends Instruccion_1.Instruccion {
    constructor(
    //public variables: string[],
    valor, linea, columna) {
        super(linea, columna);
        this.valor = valor;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("TYPE OF");
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
            nodoDec.agregarHijo(this.valor);
        }
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un TYPEOF : " + this.valor + " lo encontre en la linea " + this.linea);
    }
}
exports.Typeof = Typeof;
