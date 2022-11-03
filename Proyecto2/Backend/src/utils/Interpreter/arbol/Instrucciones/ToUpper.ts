import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
import { Declaracion } from './Declaration';
export class ToUpper extends Instruccion {

    constructor(
        public declaracion: string,
        public valor: string,
        linea: number, columna: number,
        public declaasig:string|undefined) {
        super(linea, columna);
    }
    public getNodo() {
        if (this.declaracion == "null") {
            var nodoDec = new nodo("TO UPPER");
            nodoDec.agregarHijo(this.valor)
            return nodoDec
        } else {
            var nodoD=new nodo("");
            if (this.declaasig=="de" && this.declaasig!=undefined) {
                nodoD= new nodo("DECLARACION");
                nodoD.agregarHijo(this.declaracion)
                var nodoDec = new nodo("TO UPPER");
                nodoDec.agregarHijo(this.valor)
                nodoD.agregarHijo_nodo(nodoDec)
            }else if (this.declaasig=="asig" && this.declaasig!=undefined) {
                nodoD = new nodo("ASIGNACION");
                nodoD.agregarHijo(this.declaracion)
                var nodoDec = new nodo("TO UPPER");
                nodoDec.agregarHijo(this.valor)
                nodoD.agregarHijo_nodo(nodoDec)
            }
            return nodoD;
        }
    }
    public ejecutar(): any {
        console.log("Encontre un TO UPPER : " + this.valor + " lo encontre en la linea " + this.linea);
    }
}