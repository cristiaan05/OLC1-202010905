"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Return = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Return extends Instruccion_1.Instruccion {
    constructor(expresion, linea, columna) {
        super(linea, columna);
        this.expresion = expresion;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("RETURN");
        if (this.expresion != null) {
            nodoDec.agregarHijo(this.expresion);
        }
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un: RETURN con expresion: " + this.expresion + "  lo encontre en la linea " + this.linea);
    }
}
exports.Return = Return;
