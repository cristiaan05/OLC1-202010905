import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Switch extends Instruccion {

    constructor(
        public expresion:string,
        public cases:Array<Instruccion>,
        linea:number,columna:number){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec = new nodo("SWTICH")
        nodoDec.agregarHijo(this.expresion);
        this.cases.forEach(ins=>{
            nodoDec.agregarHijo_nodo(ins.getNodo());
        })
        return nodoDec;
    }

    public ejecutar():any {
        console.log("Encontre un switch con:-- CONDICION:"+this.expresion+" lo encontre en la linea "+this.linea);
        try {
            for (const instru of this.cases) {
                instru.ejecutar()
            }
        } catch (error) {
            
        }
    }

}