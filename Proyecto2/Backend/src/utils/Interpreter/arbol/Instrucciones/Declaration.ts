import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
import Tipo, { DataType, tipoString } from '../Symbol/Type';
//import { Env } from "../Symbol/Env";

export class Declaracion extends Instruccion {

    constructor(
        public nombre:string[],
        public tipo:string,
        public ListInstruccion:any,
        linea:number,columna:number){
        super(linea,columna);
    }

    public getNodo() {
        var nodoDec = new nodo("DECLARACION");
        //var tipoStr = tipoString(this.tipo);
        
        nodoDec.agregarHijo(this.tipo)
        //tipoStr != null?nodoDec.agregarHijo(tipoStr):tipoStr;

        this.nombre.forEach(id => {
            nodoDec.agregarHijo(id);
        });
        if (this.ListInstruccion!="n") {
            if(this.ListInstruccion instanceof Array<Instruccion>){
                this.ListInstruccion.forEach(ins => {
                    try {
                        nodoDec.agregarHijo_nodo(ins.getNodo())   
                    } catch (error) {
                        
                    }
                });
            }else{
                nodoDec.agregarHijo(this.ListInstruccion)
            }
        }

        return nodoDec;
    }



    public ejecutar():any {
        console.log("Encontre una declaracion:--  TIPO:"+this.tipo+" NOMBRE:"+this.nombre+" lo encontre en la linea "+this.linea);

        //metodo para guardar la variable, tabla de simbolos

    }
}
