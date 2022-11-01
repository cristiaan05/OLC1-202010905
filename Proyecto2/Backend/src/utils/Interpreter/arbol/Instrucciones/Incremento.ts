import { Instruccion } from '../Abstract/Instruccion';
export class Incremento extends Instruccion {

    constructor(
        public nombre:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public ejecutar():any {
        console.log("Se incremento la variable:"+this.nombre+" lo encontre en la linea "+this.linea);
    }
}