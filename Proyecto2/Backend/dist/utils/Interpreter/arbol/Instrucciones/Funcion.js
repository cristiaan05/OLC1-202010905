"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class Funcion extends Instruccion_1.Instruccion {
    constructor(nombre, parametros, tipo, bloqueIns, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.parametros = parametros;
        this.tipo = tipo;
        this.bloqueIns = bloqueIns;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("FUNCION");
        nodoDec.agregarHijo("Nombre Funcion: \n" + this.nombre);
        // this.parametros.forEach(ins=>{
        //console.log(ins)
        nodoDec.agregarHijo("PARAMETROS: \n" + this.parametros.toString());
        // })
        nodoDec.agregarHijo("Tipo Funcion: \n" + this.tipo);
        if (this.bloqueIns != undefined) {
            this.bloqueIns.forEach(ins => {
                nodoDec.agregarHijo_nodo(ins.getNodo());
            });
            // nodoDec.agregarHijo_nodo(no);
        }
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre una funcion: " + this.nombre + "de tipo: " + this.tipo + " lo encontre en la linea " + this.linea);
        console.log("----INSTRUCCIONES FUNCION---");
        if (this.bloqueIns != undefined) {
            for (const instru of this.bloqueIns) {
                try {
                    instru.ejecutar();
                }
                catch (error) {
                }
            }
        }
    }
}
exports.Funcion = Funcion;
