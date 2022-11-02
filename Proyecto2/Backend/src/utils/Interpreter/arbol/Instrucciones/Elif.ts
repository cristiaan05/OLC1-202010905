import { Instruccion } from '../Abstract/Instruccion';
import nodo from '../Ast/nodo';
export class Elif extends Instruccion {

    constructor(
        public bloqueIns: Array<Instruccion>,
        public condicional: string,
        linea: number, columna: number) {
        super(linea, columna);
    }

    public getNodo() {
        var nodoDec = new nodo("ELIF")
        this.bloqueIns.forEach(ins => {
            nodoDec.agregarHijo_nodo(ins.getNodo());
        })
        nodoDec.agregarHijo(this.condicional);
        return nodoDec;
    }

    public ejecutar(): any {
        console.log("Encontre un elif con:-- CONDICION:" + this.condicional + " lo encontre en la linea " + this.linea);
        console.log("----INSTRUCCIONES ELIF---")
        for (const instru of this.bloqueIns) {
            try {
                instru.ejecutar();
            } catch (error) {

            }
        }
    }

}
