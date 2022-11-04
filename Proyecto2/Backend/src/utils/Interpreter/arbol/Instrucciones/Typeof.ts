import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Typeof extends Instruccion {

    constructor(
        //public variables: string[],
        public valor: any,
        linea: number, columna: number) {
        super(linea, columna);
    }
    public getNodo() {
            var nodoDec = new nodo("TYPE OF");
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
            return nodoDec

    }
    public ejecutar(): any {
        console.log("Encontre un TYPEOF : " + this.valor + " lo encontre en la linea " + this.linea);
    }
}