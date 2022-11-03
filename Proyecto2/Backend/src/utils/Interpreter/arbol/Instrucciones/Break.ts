import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Break extends Instruccion {

    constructor(
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("BREAK")
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Encontre un:-- BREAK: lo encontre en la linea "+this.linea);
    }
}