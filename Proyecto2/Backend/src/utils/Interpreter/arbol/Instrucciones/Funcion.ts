import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Funcion extends Instruccion {

    constructor(
        public nombre:string,
        public parametros:string,
        public tipo:string,
        public bloqueIns:Array<Instruccion>| undefined,
        linea:number,columna:number
        ){
        super(linea,columna);
    }
    
    public getNodo() {
        var nodoDec = new nodo("FUNCION")
        nodoDec.agregarHijo("Nombre Funcion: \n"+this.nombre);
       // this.parametros.forEach(ins=>{
            //console.log(ins)
            nodoDec.agregarHijo("PARAMETROS: \n"+this.parametros.toString());
       // })
        nodoDec.agregarHijo("Tipo Funcion: \n"+this.tipo);

        if (this.bloqueIns!=undefined) {
            this.bloqueIns.forEach(ins=>{
                nodoDec.agregarHijo_nodo(ins.getNodo());
            })
           // nodoDec.agregarHijo_nodo(no);
        }
        return nodoDec;
    }

    public ejecutar():any {
        console.log("Encontre una funcion: "+this.nombre+"de tipo: "+this.tipo+" lo encontre en la linea "+this.linea);
        console.log("----INSTRUCCIONES FUNCION---")
        if (this.bloqueIns!=undefined) {
            for (const instru of this.bloqueIns) {
                try {
                    instru.ejecutar()
                } catch (error) {
                    
                }
            }
        }
    }

}