"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cast = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Cast extends Instruccion_1.Instruccion {
    constructor(variables, tipo, tipoN, valor, linea, columna) {
        super(linea, columna);
        this.variables = variables;
        this.tipo = tipo;
        this.tipoN = tipoN;
        this.valor = valor;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("CASTEO");
        nodoDec.agregarHijo(this.tipo);
        this.variables.forEach(ins => {
            console.log(ins);
            nodoDec.agregarHijo(ins);
        });
        nodoDec.agregarHijo(this.tipoN);
        nodoDec.agregarHijo(this.valor);
        console.log();
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un casteo para:-- NOMBRE:" + this.tipo + " del tipo de dato: " + this.tipoN + " con valor: " + this.valor + " al tipo: " + this.tipoN + " lo encontre en la linea " + this.linea);
    }
}
exports.Cast = Cast;
