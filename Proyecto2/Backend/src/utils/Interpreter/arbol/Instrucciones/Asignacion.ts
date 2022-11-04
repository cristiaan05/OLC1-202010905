import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Asignacion extends Instruccion {

    constructor(
        public nombre:string[],
        public valor:any,
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("ASIGNACION")
        this.nombre.forEach(id => {
            nodoDec.agregarHijo(id);
        });
        if(this.valor instanceof Array<Instruccion>){
            this.valor.forEach(ins => {
                try {
                    nodoDec.agregarHijo_nodo(ins.getNodo())   
                } catch (error) {
                    
                }
            });
        }else{
            nodoDec.agregarHijo(this.valor)
        }
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Encontre una asignacion:-- NOMBRE:"+this.nombre+" lo encontre en la linea "+this.linea);
    }
}