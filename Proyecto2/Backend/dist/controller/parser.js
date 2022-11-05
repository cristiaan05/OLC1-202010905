"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.archivoG = exports.ast = exports.parse = void 0;
//import Arbol from "../utils/Interpreter/arbol/Ast/Arbol";
const nodo_1 = __importDefault(require("../utils/Interpreter/arbol/Ast/nodo"));
const child_process_1 = require("child_process");
const Singleton_1 = require("../utils/Interpreter/arbol/Singleton/Singleton");
const fs = require("fs");
var grafo = '';
const parse = (req, res) => {
    let parser = require('../../dist/utils/Interpreter/Arbol/analizador');
    const s = Singleton_1.Singleton.getInstance();
    //const env= new Env(null);
    //const peticion = fs.readFileSync("src/entrada.txt");
    const peticion = req.body.peticion;
    console.log("---" + peticion.toString());
    const ast = parser.parse(peticion.toString());
    var instrucciones = new nodo_1.default("INSTRUCCIONES");
    for (const instruccion of ast) {
        try {
            instruccion.ejecutar();
            instrucciones.agregarHijo_nodo(instruccion.getNodo());
        }
        catch (error) {
            s.add_error(error);
        }
    }
    var c = 0;
    var dot = "";
    createFile("tablita.HTML", s.get_error());
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
    function createFile(nameFile, data) {
        fs.writeFile(nameFile, data, () => {
            console.log('Se genero el archivo: ' + nameFile);
        });
    }
    grafo = '';
    grafo = getDot(instrucciones);
    console.log(grafo);
    res.json({
        "salida": grafo
    });
};
exports.parse = parse;
const ast = (req, res) => {
    fs.writeFile("salida.dot", grafo, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    console.log("El archivo fue creado correctamente");
    (0, child_process_1.exec)('dot -Tpng salida.dot -o salida.png ');
    res.send({ "mensaje": "si lo genero" });
};
exports.ast = ast;
const archivoG = (req, res) => {
    let name = req.body.nombre;
    let texto = req.body.texto;
    fs.writeFile(name, texto, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    console.log("El archivo fue creado correctamente");
    //exec('dot -Tpng salida.dot -o salida.png ')
    //res.send({ "mensaje": "ARCHIVO CREADO" })
    res.download('../../codigo.olc', function (err) {
        if (err) {
            console.log(err);
        }
    });
};
exports.archivoG = archivoG;
// export const down = (req: Request, res: Response): void => {
//     let name=req.body.nombre;
//     let texto=req.body.texto;
//     fs.writeFile(name, texto, function (err: any) {
//         if (err) {
//             return console.log(err)
//         }
//     })
//     console.log("El archivo fue creado correctamente")
//     //exec('dot -Tpng salida.dot -o salida.png ')
//     res.send({ "mensaje": "ARCHIVO CREADO" })
// }
