import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Tolower extends Instruccion {

    constructor(
       // public declaracion: string,
        public valor: string,
        linea: number, columna: number) {
        super(linea, columna);
    }
    public getNodo() {
            var nodoDec = new nodo("TO LOWER");
            //console.log(this.valor)
            nodoDec.agregarHijo(this.valor)
            return nodoDec

    }
    public ejecutar(): any {
        console.log("Encontre un TO LOWER : " + this.valor + " lo encontre en la linea " + this.linea);
    }
}