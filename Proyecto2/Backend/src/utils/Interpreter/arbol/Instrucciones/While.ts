import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class While extends Instruccion {

    constructor(
        public expresion:string,
        public bloqueIns:Array<Instruccion>,
        linea:number,columna:number){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec = new nodo("WHILE")
        nodoDec.agregarHijo(this.expresion);
        this.bloqueIns.forEach(ins=>{
            nodoDec.agregarHijo_nodo(ins.getNodo());
        })
        return nodoDec;
    }

    public ejecutar():any {
        console.log("Encontre un while con EXPRESION:"+this.expresion+" lo encontre en la linea "+this.linea);
        try {
            for (const instru of this.bloqueIns) {
                instru.ejecutar()
            }
        } catch (error) {
            
        }
    }

}