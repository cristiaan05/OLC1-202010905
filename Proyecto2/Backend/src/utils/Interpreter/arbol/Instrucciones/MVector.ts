import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class MVector extends Instruccion {

    constructor(
        public nombre:string,
        public expresionV:Array<Instruccion>,
        public expresion:Array<Instruccion>,
        linea:number,columna:number){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec = new nodo("MVECTOR")
        nodoDec.agregarHijo(this.nombre);
        this.expresionV.forEach(ins=>{
            nodoDec.agregarHijo_nodo(ins.getNodo())
        })
        this.expresion.forEach(ins=>{
            nodoDec.agregarHijo_nodo(ins.getNodo())
        })
        return nodoDec;
    }
    
    public ejecutar():any {
        console.log("Modifique a  un vector:-- NOMBRE:"+this.nombre+" lo encontre en la linea "+this.linea);
        for (const instru of this.expresion) {
            try {
                console.log(instru)
                instru.ejecutar()
            } catch (error) {
            }
        }
    }
}