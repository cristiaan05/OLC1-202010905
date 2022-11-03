"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.For = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class For extends Instruccion_1.Instruccion {
    constructor(inicializacion, condicion, actulizacion, bloqueIns, linea, columna) {
        super(linea, columna);
        this.inicializacion = inicializacion;
        this.condicion = condicion;
        this.actulizacion = actulizacion;
        this.bloqueIns = bloqueIns;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("FOR");
        this.inicializacion.forEach(ins => {
            nodoDec.agregarHijo_nodo(ins.getNodo());
        });
        nodoDec.agregarHijo(this.condicion);
        this.actulizacion.forEach(ins => {
            nodoDec.agregarHijo_nodo(ins.getNodo());
        });
        this.bloqueIns.forEach(ins => {
            nodoDec.agregarHijo_nodo(ins.getNodo());
        });
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un FOR con CONDICION" + this.condicion.toString() + " lo encontre en la linea " + this.linea);
        // console.log("INICIALIZACION: "+this.in)
        // console.log("ACTUALIZACION: "+this.actulizacion.toString())
        for (const instru of this.inicializacion) {
            try {
                instru.ejecutar();
            }
            catch (error) {
            }
        }
        for (const instru of this.actulizacion) {
            try {
                instru.ejecutar();
            }
            catch (error) {
            }
        }
        for (const instru of this.bloqueIns) {
            try {
                instru.ejecutar();
            }
            catch (error) {
            }
        }
    }
}
exports.For = For;
