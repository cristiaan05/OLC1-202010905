import { Instruccion } from '../Abstract/Instruccion';
export class Asignacion extends Instruccion {

    constructor(
        public nombre:string,
        public valor:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public ejecutar():any {
        console.log("Encontre una asignacion:-- NOMBRE:"+this.nombre+" lo encontre en la linea "+this.linea);
    }
}