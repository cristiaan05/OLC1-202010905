import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class CaseSwitch extends Instruccion {

    constructor(
        public nombre:string,
        public expresion:string|undefined,
        public bloqueIns:Array<Instruccion>,
        linea:number,columna:number){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec=new nodo("");
        if (this.nombre.toLowerCase()=="case") {
            nodoDec = new nodo("CASE")
            if(this.expresion!=undefined)nodoDec.agregarHijo(this.expresion)
            this.bloqueIns.forEach(ins=>{
                nodoDec.agregarHijo_nodo(ins.getNodo())
            })
        }else if (this.nombre.toLowerCase()=="default") {
            nodoDec = new nodo("DEFAULT")
            if(this.expresion!=undefined)nodoDec.agregarHijo(this.expresion)
            this.bloqueIns.forEach(ins=>{
                nodoDec.agregarHijo_nodo(ins.getNodo())
            })
        }
        return nodoDec;
    }

    public ejecutar():any {
        console.log("Encontre un CASE:"+this.nombre+" lo encontre en la linea "+this.linea);
        if (this.bloqueIns!=undefined) {
            try {
                for (const instru of this.bloqueIns) {
                    instru.ejecutar()
                }
            } catch (error) {
                
            }
        }
    }

}