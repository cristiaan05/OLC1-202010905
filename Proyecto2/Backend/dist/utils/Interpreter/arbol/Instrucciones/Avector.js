"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVector = void 0;
const Instruccion_1 = require("../Abstract/Instruccion");
class AVector extends Instruccion_1.Instruccion {
    constructor(nombre, expresion, linea, columna) {
        super(linea, columna);
        this.nombre = nombre;
        this.expresion = expresion;
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
