"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoWhile = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class DoWhile extends Instruccion_1.Instruccion {
    constructor(expresion, bloqueIns, linea, columna) {
        super(linea, columna);
        this.expresion = expresion;
        this.bloqueIns = bloqueIns;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("DO-WHILE");
        nodoDec.agregarHijo(this.expresion);
        this.bloqueIns.forEach(ins => {
            nodoDec.agregarHijo_nodo(ins.getNodo());
        });
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un DO While con EXPRESION:" + this.expresion + " lo encontre en la linea " + this.linea);
        try {
            for (const instru of this.bloqueIns) {
                instru.ejecutar();
            }
        }
        catch (error) {
        }
    }
}
exports.DoWhile = DoWhile;
