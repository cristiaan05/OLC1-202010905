import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Asignacion extends Instruccion {

    constructor(
        public nombre:string,
        public valor:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("ASIGNACION")
        console.log()
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Encontre una asignacion:-- NOMBRE:"+this.nombre+" lo encontre en la linea "+this.linea);
    }
}