import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Cast extends Instruccion {

    constructor(
        public variables:string[],
        public tipo:string,
        public tipoN:string,
        public valor:string,
        linea:number,columna:number){
        super(linea,columna);
    }
    public getNodo() {
        var nodoDec = new nodo("CASTEO")
            nodoDec.agregarHijo(this.tipo)   
            this.variables.forEach(ins=>{
                console.log(ins)
                nodoDec.agregarHijo(ins)
            })

        nodoDec.agregarHijo(this.tipoN)
        nodoDec.agregarHijo(this.valor);
        console.log()
        return nodoDec;
    }
    public ejecutar():any {
        console.log("Encontre un casteo para:-- NOMBRE:"+this.tipo+" del tipo de dato: "+this.tipoN+" con valor: "+this.valor+" al tipo: "+this.tipoN+" lo encontre en la linea "+this.linea);
    }
}