import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class If extends Instruccion {

    constructor(
        public bloqueIns:Array<Instruccion>,
        public condicional:string,
        linea:number,columna:number,
        public bloqueElif: Array<Instruccion>| undefined,
        public bloqueElse:Array<Instruccion>| undefined
        ){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec = new nodo("IF")
        this.bloqueIns.forEach(ins=>{
            nodoDec.agregarHijo_nodo(ins.getNodo());
        })
        nodoDec.agregarHijo(this.condicional);

        if (this.bloqueElse!=undefined) {
            var nodoE = new nodo("ELSE")
            this.bloqueElse.forEach(ins=>{
                nodoE.agregarHijo_nodo(ins.getNodo());
            })
            nodoDec.agregarHijo_nodo(nodoE);
        }
        if (this.bloqueElif!=undefined) {
            for (const i of this.bloqueElif) {
                nodoDec.agregarHijo_nodo(i.getNodo())
            }
        }
        return nodoDec;
    }

    public ejecutar():any {
        console.log("Encontre un if con:-- CONDICION:"+this.condicional+" lo encontre en la linea "+this.linea);
        console.log("----INSTRUCCIONES IF---")
        for (const instru of this.bloqueIns) {
            try {
                instru.ejecutar();
            } catch (error) {
                
            }
        }
        if (this.bloqueElse!=undefined) {
            console.log("---INSTRUCCIONES ELSE---")
            for (const instru of this.bloqueElse) {
                try {
                    instru.ejecutar()
                } catch (error) {
                    
                }
            }
        }
        if (this.bloqueElif!=undefined) {
            for (const instru of this.bloqueElif) {
                try {
                    instru.ejecutar()
                } catch (error) {
                            
                }
            }

        }

    }

}