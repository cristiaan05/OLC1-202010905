import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Incremento extends Instruccion {

    constructor(
        public nombre:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("INCREMENTO")
        console.log()
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Se incremento la variable:"+this.nombre+" lo encontre en la linea "+this.linea);
    }
}