"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const Nodo_1 = __importDefault(require("../Ast/Nodo"));
const Type_1 = require("../Symbol/Type");
//import { Env } from "../Symbol/Env";
class Declaracion extends Instruccion_1.Instruccion {
    constructor(id, tipo, valor, linea, columna) {
        super(tipo, linea, columna);
        this.id = id;
        this.tipo = tipo;
        this.valor = valor;
    }
    getNodo() {
        var nodoDec = new Nodo_1.default("DECLARACION", "");
        var tipoStr = (0, Type_1.tipoString)(this.tipo);
        if (tipoStr != null) {
            nodoDec.agregarHijo(tipoStr);
        }
        //tipoStr != null?nodoDec.agregarHijo(tipoStr.toString()):tipoStr;
        this.id.forEach(id => {
            nodoDec.agregarHijo(id);
            console.log("-id" + id);
        });
        nodoDec.agregarHijo_nodo(this.valor.getNodo());
        console.log("NODO" + nodoDec);
        return nodoDec;
    }
    //public interpretar(arbol: Arbol, tabla: tablaSimbolo) {
    /* public interpretar() {
       // tabla.setValor(this.id, new Simbolo(this.tipo, this.id, this.valor.interpretar(arbol, tabla)));
        //tabla.setValor(this.id, new Simbolo(this.tipo, this.id));
        console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.id+" lo encontre en la linea "+this.linea);
        return null;
    }*/
    ejecutar() {
        console.log("Encontre una declaracion, tipo:" + this.tipo + " nombre:" + this.id + " lo encontre en la linea " + this.linea);
        //metodo para guardar la variable, tabla de simbolos
        //Env.guardar_variable(this.id[0],this.tipo.toString());
        // for (const elemento  of this.id) {
        //     try {
        //         //codigo analisis semantico
        //         const expresion= this.valor.ejecutar(Env);
        //         if (expresion.tipo == this.tipo) {
        //             Env.guardar_variable(elemento,expresion.tipo)
        //         } else {
        //             console.log("error")
        //         }
        //     } catch (error) {
        //         // console.log(error);
        //     }
        // }
        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);
        //implementacion semantica
        //validar
    }
}
exports.Declaracion = Declaracion;
