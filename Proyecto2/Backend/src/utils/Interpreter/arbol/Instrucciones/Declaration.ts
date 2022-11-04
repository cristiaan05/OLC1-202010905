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


        // for (const instru of this.ListInstruccion) {
        //     //console.log("HELLLO PUTOS")
        //     //console.log("INSTRU: "+instru)
        //     nodoDec.agregarHijo(instru.toString());
        // }
        //nodoDec.agregarHijo_nodo(this.expresion.getNodo());
        return nodoDec;
    }


    // public getNodo() {
    //     var nodoDec = new Nodo("DECLARACION","");
    //     var tipoStr = tipoString(this.tipo);
    //     if(tipoStr!=null){
    //         nodoDec.agregarHijo(tipoStr);
    //     }
    //     //tipoStr != null?nodoDec.agregarHijo(tipoStr.toString()):tipoStr;
    //     this.id.forEach(id => {
    //         nodoDec.agregarHijo(id);
    //         console.log("-id"+id)
    //     });
    //     nodoDec.agregarHijo_nodo(this.valor.getNodo());
    //     console.log("NODO"+nodoDec)
    //     return nodoDec;
    // }
    
    //public interpretar(arbol: Arbol, tabla: tablaSimbolo) {
    /* public interpretar() {
       // tabla.setValor(this.id, new Simbolo(this.tipo, this.id, this.valor.interpretar(arbol, tabla)));
        //tabla.setValor(this.id, new Simbolo(this.tipo, this.id));
        console.log("Encontre una declaracion, tipo:"+this.tipo+" nombre:"+this.id+" lo encontre en la linea "+this.linea);
        return null;
    }*/

    public ejecutar():any {
        console.log("Encontre una declaracion:--  TIPO:"+this.tipo+" NOMBRE:"+this.nombre+" EXPRESION: "+this.ListInstruccion+" lo encontre en la linea "+this.linea);
        // for (const instruccion of this.ListInstruccion) {
        //     try {
        //         //console.log(instruccion)
        //         instruccion.ejecutar()
        //     } catch (error) {
        //         // console.log(error);
        //     }
            
        // }
        //metodo para guardar la variable, tabla de simbolos


        //Env.guardar_variable(this.id[0],this.tipo.toString());
        // for (const elemento  of this.id) {
        //     try {
        //         //codigo analisis semantico
        //         const expresion= this.valor.ejecutar(Env);

        //         if (expresion.tipo == this.tipo) {
        //             Env.guardar_variable(elemento,expresion.tipo)
                    
        //         } else {
        //             console.log("error")
        //         }
        //     } catch (error) {
        //         // console.log(error);
                
        //     }
        // }

        //guardar un metodo asi        
        //Env.guardar_funcion(this.nombre,this);


        //implementacion semantica
        //validar
    
    }

    // public ejecutar(Env: Env): any {
    //     console.log("Encontre una declaracion, tipo:" + this.tipo + " nombre:" + this.id + " lo encontre en la linea " + this.linea);
    //     //metodo para guardar la variable, tabla de simbolos


    //     Env.guardar_variable(this.id, this.tipo.toString());

    // }
}


