import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class AVector extends Instruccion {

    constructor(
        public nombre:string,
        public expresion:Array<Instruccion>,
        linea:number,columna:number){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec = new nodo("AVECTOR")
        console.log()
        return nodoDec;
    }
    
    public ejecutar():any {
        console.log("Accedi a  un vector:-- NOMBRE:"+this.nombre+" lo encontre en la linea "+this.linea);
        for (const instru of this.expresion) {
            try {
                instru.ejecutar()
            } catch (error) {
                
            }
        }
    }
}