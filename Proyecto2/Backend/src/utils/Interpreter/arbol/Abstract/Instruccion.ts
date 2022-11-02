import Nodo from '../Ast/nodo';
import Tipo from '../Symbol/Type';
//import { Env } from "../Symbol/Env";

export abstract class Instruccion {
    //public tipo: string;
    public linea: number;
    public columna: number;

    constructor(linea: number, columna: number) {
        //this.tipo = tipo;
        this.linea = linea;
        this.columna = columna+1;
    }

    //public abstract interpretar(arbol: Arbol, tabla: tablaSimbolo): any;
    public abstract getNodo():Nodo;
    public abstract ejecutar():any;
}