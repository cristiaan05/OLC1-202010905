"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Llamada = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Llamada extends Instruccion_1.Instruccion {
    constructor(nombre, parametros, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.parametros = parametros;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("LLAMADA");
        nodoDec.agregarHijo(this.nombre);
        nodoDec.agregarHijo("PARAMETROS: \n" + this.parametros.toString());
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre una: LLAMADA: " + this.nombre + "lo encontre en la linea " + this.linea);
    }
}
exports.Llamada = Llamada;
