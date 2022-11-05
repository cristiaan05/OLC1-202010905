import { Response, Request } from "express";
//import { Env } from "../utils/Interpreter/arbol/Symbol/Env";
import { Instruccion } from "../utils/Interpreter/arbol/Abstract/Instruccion";
//import Arbol from "../utils/Interpreter/arbol/Ast/Arbol";
import nodo from "../utils/Interpreter/arbol/Ast/nodo";
import { exec } from "child_process";
import { Singleton } from "../utils/Interpreter/arbol/Singleton/Singleton";
const fs = require("fs");


var grafo='';
export const parse = (req: Request, res: Response) => {
    let parser = require('../../dist/utils/Interpreter/Arbol/analizador');
    const s = Singleton.getInstance();
    //const env= new Env(null);
    //const peticion = fs.readFileSync("src/entrada.txt");
    const peticion = req.body.peticion;
    console.log("---" + peticion.toString());
    const ast = parser.parse(peticion.toString());

    var instrucciones = new nodo("INSTRUCCIONES");
    for (const instruccion of ast) {
        
        try {
            instruccion.ejecutar();
            instrucciones.agregarHijo_nodo(instruccion.getNodo());
        } catch (error) {
                s.add_error(error)                

        }
    }

    var c = 0;
    var dot = "";
    createFile("tablita.HTML",s.get_error());

    function getDot(raiz: nodo) {
        dot = "";
        dot += "digraph grph {\n";
        dot+="graph [label=\"ARB0L AST\", splines=polyline, nodesep=0.8]\n";
        dot+="node [margin=0 fontcolor=black width=0.5 shape=box style=filled]\n";
        dot+="edge[dir=\"forward\"]\n";
        dot += "nodo0[label=\"" + raiz.getValor().replace("\"", "\\\"") + "\"];\n";
        c = 1;
        recorrerAST("nodo0", raiz);
        dot += "}";
        return dot;
    }

    function recorrerAST(padre: String, nPadre: nodo) {
        //console.log("aqui"+padre)
        for (let hijo of nPadre.getHijos()) {
            var nombreHijo = "nodo" + c;
            //var primerquite = hijo.getValor().replace("\"", "  ")
            dot += nombreHijo + "[label=\"" + hijo.getValor() + "\"];\n";
            dot += padre + "->" + nombreHijo + ";\n";
            c++;
            recorrerAST(nombreHijo, hijo);
        }
    }

    function createFile(nameFile: string, data: string) {
        fs.writeFile(nameFile, data, () => {
            console.log('Se genero el archivo: ' + nameFile );
        }) 
    }

    grafo = '';
    grafo = getDot(instrucciones);
    //console.log(grafo)
    res.json({
        "salida": grafo
    })
}


export const ast = (req: Request, res: Response): void => {
    fs.writeFile("salida.dot", grafo, function (err: any) {
        if (err) {
            return console.log(err)
        }
    })
    console.log("El archivo fue creado correctamente")
    exec('dot -Tpng salida.dot -o salida.png ')
    res.send({ "mensaje": "si lo genero" })
}


export const archivoG = (req: Request, res: Response): void => {
    let name=req.body.nombre;
    let texto=req.body.texto;
    fs.writeFile(name, texto, function (err: any) {
        if (err) {
            return console.log(err)
        }
    })
    console.log("El archivo fue creado correctamente")
    //exec('dot -Tpng salida.dot -o salida.png ')
    res.send({ "mensaje": "ARCHIVO CREADO" })

}



export const down = (req: Request, res: Response,next:any): void => {

    //exec('dot -Tpng salida.dot -o salida.png ')
    res.download(`D:/6TO SEMESTRE/LAB COMPI/OLC1-202010905/Proyecto2/Backend/salida.png`,function(err){
        if (err) {
            next(err)
        }
    })
}

export const downA = (req: Request, res: Response,next:any): void => {

    //exec('dot -Tpng salida.dot -o salida.png ')
    res.download(`D:/6TO SEMESTRE/LAB COMPI/OLC1-202010905/Proyecto2/Backend/codigo.olc`,function(err){
        if (err) {
            next(err)
        }
    })
}


