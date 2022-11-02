"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cast = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Cast extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, tipoN, valor, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.tipo = tipo;
        this.tipoN = tipoN;
        this.valor = valor;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("CASTEO");
        console.log();
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un casteo para:-- NOMBRE:" + this.nombre + " del tipo de dato: " + this.tipo + " con valor: " + this.valor + " al tipo: " + this.tipoN + " lo encontre en la linea " + this.linea);
    }
}
exports.Cast = Cast;
