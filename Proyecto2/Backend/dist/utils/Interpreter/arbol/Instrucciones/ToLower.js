"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tolower = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Tolower extends Instruccion_1.Instruccion {
    constructor(declaracion, valor, linea, columna) {
        super(linea, columna);
        this.declaracion = declaracion;
        this.valor = valor;
    }
    getNodo() {
        var nodoD = new nodo_1.default("DECLARACION");
        nodoD.agregarHijo(this.declaracion);
        var nodoDec = new nodo_1.default("TO LOWER");
        nodoDec.agregarHijo(this.valor);
        nodoD.agregarHijo_nodo(nodoDec);
        return nodoD;
    }
    ejecutar() {
        console.log("Encontre un TO LOWER : " + this.valor + " lo encontre en la linea " + this.linea);
    }
}
exports.Tolower = Tolower;
