import { Instruccion } from '../Abstract/Instruccion';
export class AVector extends Instruccion {

    constructor(
        public nombre:string,
        public expresion:Array<Instruccion>,
        linea:number,columna:number){
        super(linea,columna);
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