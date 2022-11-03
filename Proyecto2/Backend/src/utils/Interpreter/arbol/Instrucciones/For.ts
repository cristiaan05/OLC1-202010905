import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class For extends Instruccion {

    constructor(
        public inicializacion:Array<Instruccion>,
        public condicion:string,
        public actulizacion:Array<Instruccion>,
        public bloqueIns:Array<Instruccion>,
        linea:number,columna:number){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec = new nodo("FOR")
        this.inicializacion.forEach(ins=>{
            nodoDec.agregarHijo_nodo(ins.getNodo());
        })

        nodoDec.agregarHijo(this.condicion);

        this.actulizacion.forEach(ins=>{
            nodoDec.agregarHijo_nodo(ins.getNodo())
        })

        this.bloqueIns.forEach(ins=>{
            nodoDec.agregarHijo_nodo(ins.getNodo());
        })
        return nodoDec;
    }

    public ejecutar():any {
        console.log("Encontre un FOR con CONDICION"+this.condicion.toString()+" lo encontre en la linea "+this.linea);
        // console.log("INICIALIZACION: "+this.in)
        // console.log("ACTUALIZACION: "+this.actulizacion.toString())
        for (const instru of this.inicializacion) {
            try {
                instru.ejecutar()
            } catch (error) {
                        
            }
        }
        for (const instru of this.actulizacion) {
            try {
                instru.ejecutar()
            } catch (error) {
                        
            }
        }
        for (const instru of this.bloqueIns) {
            try {
                instru.ejecutar()
            } catch (error) {
                        
            }
        }
    }

}