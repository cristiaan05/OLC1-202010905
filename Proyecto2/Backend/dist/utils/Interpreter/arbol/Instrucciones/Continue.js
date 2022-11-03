"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Continue = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Continue extends Instruccion_1.Instruccion {
    constructor(linea, columna) {
        super(linea, columna);
    }
    getNodo() {
        var nodoDec = new nodo_1.default("CONTINUE");
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un:-- CONTINUE: lo encontre en la linea " + this.linea);
    }
}
exports.Continue = Continue;
