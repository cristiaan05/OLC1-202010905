import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Pop extends Instruccion {

    constructor(
        public variables: string,
        linea: number, columna: number) {
        super(linea, columna);
    }
    public getNodo() {
            var nodoDec = new nodo("POP");
            nodoDec.agregarHijo("Array: "+this.variables)
            return nodoDec
    }

    public ejecutar(): any {
        console.log("Encontre un POP : " + this.variables + " lo encontre en la linea " + this.linea);
    }
}