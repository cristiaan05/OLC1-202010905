import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Round extends Instruccion {

    constructor(
       // public variables: string[],
        public valor: string,
        linea: number, columna: number) {
        super(linea, columna);
    }
    public getNodo() {
            var nodoDec = new nodo("ROUND");
            nodoDec.agregarHijo(this.valor)
            return nodoDec
    }
    public ejecutar(): any {
        console.log("Encontre un ROUND : " + this.valor + " lo encontre en la linea " + this.linea);
    }
}