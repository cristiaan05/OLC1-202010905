import { Instruccion } from '../Abstract/Instruccion';
import Nodo from '../Ast/Nodo';
import Tipo, { DataType, tipoString } from '../Symbol/Type';
//import { Env } from "../Symbol/Env";

export class Declaracion extends Instruccion {

    constructor(public nombre:string,public tipo:string,linea:number,columna:number){
        super(tipo,linea,columna);
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
        console.log("Encontre una declaracion:--  TIPO:"+this.tipo+" NOMBRE:"+this.nombre+" lo encontre en la linea "+this.linea);
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


