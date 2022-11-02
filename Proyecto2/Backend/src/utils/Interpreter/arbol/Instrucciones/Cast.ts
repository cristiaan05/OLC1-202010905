import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Cast extends Instruccion {

    constructor(
        public nombre:string,
        public tipo:string,
        public tipoN:string,
        public valor:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("CASTEO")
        console.log()
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Encontre un casteo para:-- NOMBRE:"+this.nombre+" del tipo de dato: "+this.tipo+" con valor: "+this.valor+" al tipo: "+this.tipoN+" lo encontre en la linea "+this.linea);
    }
}