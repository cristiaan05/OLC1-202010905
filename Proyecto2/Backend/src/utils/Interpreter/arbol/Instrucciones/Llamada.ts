import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Llamada extends Instruccion {

    constructor(
        public nombre:string,
        public parametros:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("LLAMADA");
        nodoDec.agregarHijo(this.nombre);
        nodoDec.agregarHijo("PARAMETROS: \n"+this.parametros.toString());
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Encontre una: LLAMADA: "+this.nombre+"lo encontre en la linea "+this.linea);
    }
}