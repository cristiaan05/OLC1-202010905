"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
//import Arbol from "../utils/Interpreter/arbol/Ast/Arbol";
const nodo_1 = __importDefault(require("../utils/Interpreter/arbol/Ast/nodo"));
const fs = require("fs");
var grafo = '';
const parse = (req, res) => {
    let parser = require('../../dist/utils/Interpreter/Arbol/analizador');
    //const env= new Env(null);
    const peticion = fs.readFileSync("src/entrada.txt");
    //const peticion = req.body.peticion;
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
    var instrucciones = new nodo_1.default("INSTRUCCIONES");
    for (const instruccion of ast) {
        try {
            instruccion.ejecutar();
            instrucciones.agregarHijo_nodo(instruccion.getNodo());
        }
        catch (error) {
            // if (error instanceof Issue) {
            //     singleton.add_errores(error)                
            // }
        }
    }
    grafo = '';
    grafo = getDot(instrucciones);
    console.log(grafo);
    res.json({
        "salida": grafo
    });
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
    var c = 0;
    var dot = "";
    function getDot(raiz) {
        dot = "";
        dot += "digraph grph {\n";
        dot += "graph [label=\"ARB0L AST\", splines=polyline, nodesep=0.8]\n";
        dot += "node [margin=0 fontcolor=black width=0.5 shape=box style=filled]\n";
        dot += "edge[dir=\"forward\"]\n";
        dot += "nodo0[label=\"" + raiz.getValor().replace("\"", "\\\"") + "\"];\n";
        c = 1;
        recorrerAST("nodo0", raiz);
        dot += "}";
        return dot;
    }
    function recorrerAST(padre, nPadre) {
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
};
exports.parse = parse;
/*
export const ast = (req: Request, res: Response): void => {
    fs.writeFile("salida.dot", grafo, function (err: any) {
        if (err) {
            return console.log(err)
        }
    })
    console.log("El archivo fue creado correctamente")
    exec('dot -Tpng salida.dot -o salida.png ')
    res.send({ "mensaje": "si lo genero" })
}*/ 
