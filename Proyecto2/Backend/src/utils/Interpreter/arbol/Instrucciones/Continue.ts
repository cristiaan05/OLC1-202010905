import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Continue extends Instruccion {

    constructor(
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("CONTINUE")
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Encontre un:-- CONTINUE: lo encontre en la linea "+this.linea);
    }
}