import { Instruccion } from '../Abstract/Instruccion';
export class Decremento extends Instruccion {

    constructor(
        public nombre:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public ejecutar():any {
        console.log("Se decremento la variable:"+this.nombre+" lo encontre en la linea "+this.linea);
    }
}