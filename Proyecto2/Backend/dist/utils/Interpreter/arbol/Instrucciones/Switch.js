"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Switch extends Instruccion_1.Instruccion {
    constructor(expresion, cases, linea, columna) {
        super(linea, columna);
        this.expresion = expresion;
        this.cases = cases;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("SWTICH");
        nodoDec.agregarHijo(this.expresion);
        this.cases.forEach(ins => {
            nodoDec.agregarHijo_nodo(ins.getNodo());
        });
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un switch con:-- CONDICION:" + this.expresion + " lo encontre en la linea " + this.linea);
        try {
            for (const instru of this.cases) {
                instru.ejecutar();
            }
        }
        catch (error) {
        }
    }
}
exports.Switch = Switch;
