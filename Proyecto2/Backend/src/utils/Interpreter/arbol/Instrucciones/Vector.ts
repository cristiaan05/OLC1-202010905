import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Vector extends Instruccion {

    constructor(
        public nombre:string,
        public tipo:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec = new nodo("VECTOR")
        console.log()
        return nodoDec;
    }

    public ejecutar():any {
        
        console.log("Encontre un vector:-- NOMBRE:"+this.nombre+" del tipo de dato: "+this.tipo+" lo encontre en la linea "+this.linea);
    }
}