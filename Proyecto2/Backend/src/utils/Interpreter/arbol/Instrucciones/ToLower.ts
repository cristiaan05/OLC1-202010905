import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
import { Declaracion } from './Declaration';
export class Tolower extends Instruccion {

    constructor(
        public declaracion:string,
        public valor:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoD=new nodo("DECLARACION");
        nodoD.agregarHijo(this.declaracion)
        var nodoDec = new nodo("TO LOWER");
        nodoDec.agregarHijo(this.valor)
        nodoD.agregarHijo_nodo(nodoDec)
        return nodoD;
    }
    public ejecutar():any {
        console.log("Encontre un TO LOWER : "+this.valor+" lo encontre en la linea "+this.linea);
    }
}