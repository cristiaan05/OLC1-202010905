"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
const nodo_1 = __importDefault(require("../Ast/nodo"));
class If extends Instruccion_1.Instruccion {
    constructor(bloqueIns, condicional, linea, columna, bloqueElif, bloqueElse) {
        super(linea, columna);
        this.bloqueIns = bloqueIns;
        this.condicional = condicional;
        this.bloqueElif = bloqueElif;
        this.bloqueElse = bloqueElse;
    }
    getNodo() {
        var nodoDec = new nodo_1.default("IF");
        this.bloqueIns.forEach(ins => {
            nodoDec.agregarHijo_nodo(ins.getNodo());
        });
        nodoDec.agregarHijo(this.condicional);
        if (this.bloqueElse != undefined) {
            var nodoE = new nodo_1.default("ELSE");
            this.bloqueElse.forEach(ins => {
                nodoE.agregarHijo_nodo(ins.getNodo());
            });
            nodoDec.agregarHijo_nodo(nodoE);
        }
        if (this.bloqueElif != undefined) {
            for (const i of this.bloqueElif) {
                nodoDec.agregarHijo_nodo(i.getNodo());
            }
        }
        return nodoDec;
    }
    ejecutar() {
        console.log("Encontre un if con:-- CONDICION:" + this.condicional + " lo encontre en la linea " + this.linea);
        console.log("----INSTRUCCIONES IF---");
        for (const instru of this.bloqueIns) {
            try {
                instru.ejecutar();
            }
            catch (error) {
            }
        }
        if (this.bloqueElse != undefined) {
            console.log("---INSTRUCCIONES ELSE---");
            for (const instru of this.bloqueElse) {
                try {
                    instru.ejecutar();
                }
                catch (error) {
                }
            }
        }
        if (this.bloqueElif != undefined) {
            for (const instru of this.bloqueElif) {
                try {
                    instru.ejecutar();
                }
                catch (error) {
                }
            }
        }
    }
}
exports.If = If;
