"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseSwitch = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class CaseSwitch extends Instruccion_1.Instruccion {
    constructor(nombre, expresion, bloqueIns, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.expresion = expresion;
        this.bloqueIns = bloqueIns;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("");
        if (this.nombre.toLowerCase() == "case") {
            nodoDec = new nodo_1.default("CASE");
            if (this.expresion != undefined)
                nodoDec.agregarHijo(this.expresion);
            this.bloqueIns.forEach(ins => {
                nodoDec.agregarHijo_nodo(ins.getNodo());
            });
        }
        else if (this.nombre.toLowerCase() == "default") {
            nodoDec = new nodo_1.default("DEFAULT");
            if (this.expresion != undefined)
                nodoDec.agregarHijo(this.expresion);
            this.bloqueIns.forEach(ins => {
                nodoDec.agregarHijo_nodo(ins.getNodo());
            });
        }
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un CASE:" + this.nombre + " lo encontre en la linea " + this.linea);
        if (this.bloqueIns != undefined) {
            try {
                for (const instru of this.bloqueIns) {
                    instru.ejecutar();
                }
            }
            catch (error) {
            }
        }
    }
}
exports.CaseSwitch = CaseSwitch;
