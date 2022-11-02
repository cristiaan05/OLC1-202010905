import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Println extends Instruccion {

    constructor(
        public nombre:string,
        public valor:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("PRINTLN");
        nodoDec.agregarHijo(this.valor);
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Encontre una impresion de una linea : "+this.nombre+"IMPRIMIR: "+this.valor+" lo encontre en la linea "+this.linea);
    }
}