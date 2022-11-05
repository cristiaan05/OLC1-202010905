"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MVector = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class MVector extends Instruccion_1.Instruccion {
    constructor(nombre, expresionV, expresion, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.expresionV = expresionV;
        this.expresion = expresion;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("MVECTOR");
        nodoDec.agregarHijo(this.nombre);
        this.expresionV.forEach(ins => {
            nodoDec.agregarHijo_nodo(ins.getNodo());
        });
        this.expresion.forEach(ins => {
            nodoDec.agregarHijo_nodo(ins.getNodo());
        });
        return nodoDec;
    }
    ejecutar() {
        console.log("Modifique a  un vector:-- NOMBRE:" + this.nombre + " lo encontre en la linea " + this.linea);
        for (const instru of this.expresion) {
            try {
                console.log(instru);
                instru.ejecutar();
            }
            catch (error) {
            }
        }
    }
}
exports.MVector = MVector;
