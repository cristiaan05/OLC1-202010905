"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
//import { Env } from "../Symbol/Env";
class Declaracion extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, ListInstruccion, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.tipo = tipo;
        this.ListInstruccion = ListInstruccion;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("DECLARACION");
        //var tipoStr = tipoString(this.tipo);
        nodoDec.agregarHijo(this.tipo);
        //tipoStr != null?nodoDec.agregarHijo(tipoStr):tipoStr;
        this.nombre.forEach(id => {
            nodoDec.agregarHijo(id);
        });
        if (this.ListInstruccion != "n") {
            if (this.ListInstruccion instanceof (Array)) {
                this.ListInstruccion.forEach(ins => {
                    try {
                        nodoDec.agregarHijo_nodo(ins.getNodo());
                    }
                    catch (error) {
                    }
                });
            }
            else {
                nodoDec.agregarHijo(this.ListInstruccion);
            }
        }
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre una declaracion:--  TIPO:" + this.tipo + " NOMBRE:" + this.nombre + " lo encontre en la linea " + this.linea);
        //metodo para guardar la variable, tabla de simbolos
    }
}
exports.Declaracion = Declaracion;
