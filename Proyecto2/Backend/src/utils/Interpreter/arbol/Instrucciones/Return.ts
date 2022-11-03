import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Return  extends Instruccion {

    constructor(public expresion:string|null,
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("RETURN")
        if (this.expresion!=null) {
            nodoDec.agregarHijo(this.expresion);
        }
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Encontre un: RETURN con expresion: "+this.expresion+"  lo encontre en la linea "+this.linea);
    }
}