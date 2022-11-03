import { Response, Request } from "express";
//import { Env } from "../utils/Interpreter/arbol/Symbol/Env";
import { Instruccion } from "../utils/Interpreter/arbol/Abstract/Instruccion";
//import Arbol from "../utils/Interpreter/arbol/Ast/Arbol";
import nodo from "../utils/Interpreter/arbol/Ast/nodo";
const fs = require("fs");


export const parse = (req: Request , res: Response): void => {
    let parser = require('../../dist/utils/Interpreter/Arbol/analizador');
    //const env= new Env(null);
    const peticion = fs.readFileSync("src/entrada.txt");
    //const peticion = req.body;
    console.log("---" + peticion.toString());
    //var raiz=new Arbol();
    const ast = parser.parse(peticion.toString());
    //parser.parserError = function(msg:any, hash:any) { throw 'Unexpected "'+hash.token+'" on line '+hash.line; }
    //console.log(raiz.recorrer_arbolito3(ast))
    

    // for (const elemento  of ast) {
    //     try {            
    //             const res = elemento.ejecutar();
    //             //let grafo = getDot(ast);
            
    //     } catch (error) {
    //         console.log(error);
    //         // if (error instanceof Issue) {
    //         //     singleton.add_errores(error)                
    //         // }
            
    //     }
    // }

    var instrucciones = new nodo("INSTRUCCIONES");
        for(const instruccion of ast) {
            try {
                instruccion.ejecutar();
                instrucciones.agregarHijo_nodo(instruccion.getNodo());
            } catch (error) {
                // if (error instanceof Issue) {
                //     singleton.add_errores(error)                
                // }
                
            }
        }

        var grafo = '';
        grafo = getDot(instrucciones);
        console.log(grafo)
        res.json({
            "salida":grafo
        })
    /*  try {
        let ast = new Three(parser.parse(peticion.toString()));
        var tabla = new SymbolTable();
        ast.settablaGlobal(tabla);
        for (let i of ast.getinstrucciones()) {
            if (i instanceof Errores) {
                listaErrores.push(i);
                ast.actualizaConsola((<Errores>i).returnError());
            }
            var resultador = i instanceof Instruccion ? i.interpretar(ast, tabla) : new Errores("ERROR SEMANTICO", "no se puede ejecutar la instruccion", 0, 0);
            if (resultador instanceof Errores) {
                listaErrores.push(resultador);
                ast.actualizaConsola((<Errores>resultador).returnError());
            }
        }
        res.json({ consola: ast.getconsola(), errores: listaErrores, simbolos: [] });
    } catch (err) {
        console.log(err)
        res.json({ consola: '', error: err, errores: listaErrores, simbolos: [] });
    }

    res.json({ consola: "ok" });
*/

    /*
        try {
            let ast = new Three(parser.parse(peticion));
            var tabla = new SymbolTable();
            ast.settablaGlobal(tabla);
            for (let i of ast.getinstrucciones()) {
                if (i instanceof Errores) {
                   // listaErrores.push(i);
                    //ast.actualizaConsola((<Errores>i).returnError());
                }
                var resultador = i instanceof Instruccion ? i.interpretar(ast, tabla) : new Errores("ERROR SEMANTICO", "no se puede ejecutar la instruccion", 0, 0);
                if (resultador instanceof Errores) {
                    listaErrores.push(resultador);
                    ast.actualizaConsola((<Errores>resultador).returnError());
                }
            }
            res.json({ consola: ast.getconsola(), errores: listaErrores, simbolos: [] });
        } catch (err) {
            console.log(err)
            res.json({ consola: '', error: err, errores: listaErrores, simbolos: [] });
        }*/


        /*
        try {
            const env= new Env(null);
            let parser = require('../../dist/utils/Interpreter/Arbol/analizador');
            const peticion = req.body.entrada;
            //const peticion = fs.readFileSync("src/entrada.txt");
            console.log("---" + peticion.toString());
            const ast = parser.parse(peticion.toString());
            res.json({
                "hola": ast
            })
            for (const instruccion of ast) {
                try {
                    instruccion.ejecutar(env);
                } catch (error) {
                    console.log(error);
                    
                }
            }
        
            
            
        } catch (error) {
            console.log(error);
            
        }*/
        var c=0;
        var dot="";
        function getDot(raiz:nodo)
        {
            dot = "";
            dot += "digraph grph {\n";
            dot += "nodo0[label=\"" + raiz.getValor().replace("\"", "\\\"") + "\"];\n";
            c = 1;
            recorrerAST("nodo0",raiz);
            dot += "}";
            return dot;
        }
        
        function recorrerAST(padre:String, nPadre:nodo)
        {
            //console.log("aqui"+padre)
            for(let hijo of nPadre.getHijos())

            {              
                var nombreHijo = "nodo" + c;
                var primerquite=hijo.getValor().replace("\"","  ")
                dot += nombreHijo + "[label=\"" + primerquite.replace("\"", " ") + "\"];\n";
                dot += padre + "->" + nombreHijo + ";\n";
                c++;
                recorrerAST(nombreHijo,hijo);
            }
        }
}