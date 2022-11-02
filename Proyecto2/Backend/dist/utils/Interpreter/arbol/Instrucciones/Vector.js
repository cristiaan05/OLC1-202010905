"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Vector extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.tipo = tipo;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("VECTOR");
        console.log();
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un vector:-- NOMBRE:" + this.nombre + " del tipo de dato: " + this.tipo + " lo encontre en la linea " + this.linea);
    }
}
exports.Vector = Vector;
