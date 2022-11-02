import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Print extends Instruccion {

    constructor(
        public nombre:string,
        public valor:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("PRINT");
        nodoDec.agregarHijo(this.valor)
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Encontre una impresion : "+this.nombre+"IMPRIMIR: "+this.valor+" lo encontre en la linea "+this.linea);
    }
}