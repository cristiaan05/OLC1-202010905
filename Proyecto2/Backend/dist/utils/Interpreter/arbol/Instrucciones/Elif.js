"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elif = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Elif extends Instruccion_1.Instruccion {
    constructor(bloqueIns, condicional, linea, columna) {
        super(linea, columna);
        this.bloqueIns = bloqueIns;
        this.condicional = condicional;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("ELIF");
        this.bloqueIns.forEach(ins => {
            nodoDec.agregarHijo_nodo(ins.getNodo());
        });
        nodoDec.agregarHijo(this.condicional);
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un elif con:-- CONDICION:" + this.condicional + " lo encontre en la linea " + this.linea);
        console.log("----INSTRUCCIONES ELIF---");
        for (const instru of this.bloqueIns) {
            try {
                instru.ejecutar();
            }
            catch (error) {
            }
        }
    }
}
exports.Elif = Elif;
