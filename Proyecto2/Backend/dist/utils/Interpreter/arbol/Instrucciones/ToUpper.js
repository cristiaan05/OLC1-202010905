"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToUpper = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class ToUpper extends Instruccion_1.Instruccion {
    constructor(declaracion, valor, linea, columna, declaasig) {
        super(linea, columna);
        this.declaracion = declaracion;
        this.valor = valor;
        this.declaasig = declaasig;
    }
    getNodo() {
        if (this.declaracion == "null") {
            var nodoDec = new nodo_1.default("TO UPPER");
            nodoDec.agregarHijo(this.valor);
            return nodoDec;
        }
        else {
            var nodoD = new nodo_1.default("");
            if (this.declaasig == "de" && this.declaasig != undefined) {
                nodoD = new nodo_1.default("DECLARACION");
                nodoD.agregarHijo(this.declaracion);
                var nodoDec = new nodo_1.default("TO UPPER");
                nodoDec.agregarHijo(this.valor);
                nodoD.agregarHijo_nodo(nodoDec);
            }
            else if (this.declaasig == "asig" && this.declaasig != undefined) {
                nodoD = new nodo_1.default("ASIGNACION");
                nodoD.agregarHijo(this.declaracion);
                var nodoDec = new nodo_1.default("TO UPPER");
                nodoDec.agregarHijo(this.valor);
                nodoD.agregarHijo_nodo(nodoDec);
            }
            return nodoD;
        }
    }
    ejecutar() {
        console.log("Encontre un TO UPPER : " + this.valor + " lo encontre en la linea " + this.linea);
    }
}
exports.ToUpper = ToUpper;
