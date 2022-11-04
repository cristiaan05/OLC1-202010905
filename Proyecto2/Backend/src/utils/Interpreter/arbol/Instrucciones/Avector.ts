import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class AVector extends Instruccion {

    constructor(
        public nombre:string,
        public expresion:any,
        linea:number,columna:number){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec = new nodo("AVECTOR")
        nodoDec.agregarHijo("Nombre: "+this.nombre);
        if(this.expresion instanceof Array<Instruccion>){
            this.expresion.forEach(ins => {
                try {
                    nodoDec.agregarHijo_nodo(ins.getNodo())   
                } catch (error) {
                    
                }
            });
        }else{
            nodoDec.agregarHijo("Pos: "+this.expresion)
        }
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