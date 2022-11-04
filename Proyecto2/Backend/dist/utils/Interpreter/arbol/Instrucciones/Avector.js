"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVector = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class AVector extends Instruccion_1.Instruccion {
    constructor(nombre, expresion, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.expresion = expresion;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("AVECTOR");
        nodoDec.agregarHijo("Nombre: " + this.nombre);
        if (this.expresion instanceof (Array)) {
            this.expresion.forEach(ins => {
                try {
                    nodoDec.agregarHijo_nodo(ins.getNodo());
                }
                catch (error) {
                }
            });
        }
        else {
            nodoDec.agregarHijo("Pos: " + this.expresion);
        }
        return nodoDec;
    }
    ejecutar() {
        console.log("Accedi a  un vector:-- NOMBRE:" + this.nombre + " lo encontre en la linea " + this.linea);
        for (const instru of this.expresion) {
            try {
                instru.ejecutar();
            }
            catch (error) {
            }
        }
    }
}
exports.AVector = AVector;
