import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class DoUntil extends Instruccion {

    constructor(
        public expresion:string,
        public bloqueIns:Array<Instruccion>,
        linea:number,columna:number){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec = new nodo("DO-UNTIL")
        nodoDec.agregarHijo(this.expresion);
        this.bloqueIns.forEach(ins=>{
            nodoDec.agregarHijo_nodo(ins.getNodo());
        })
        return nodoDec;
    }

    public ejecutar():any {
        console.log("Encontre un DO UNTIL con EXPRESION:"+this.expresion+" lo encontre en la linea "+this.linea);
        try {
            for (const instru of this.bloqueIns) {
                instru.ejecutar()
            }
        } catch (error) {
            
        }
    }

}