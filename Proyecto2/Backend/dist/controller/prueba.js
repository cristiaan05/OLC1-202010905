"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiController = void 0;
let parser = require('../../dist/utils/Interpreter/arbol/analizador');
class ApiController {
    funcion1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ msg: "hola mundo!" });
            }
            catch (error) {
                res.status(400).send({ msg: "error en funcion" });
            }
        });
    }
    funcion2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ msg: "hola mundo " + req.body.nombre });
            }
            catch (error) {
                res.status(400).send({ msg: "error en funcion" });
            }
        });
    }
    funcion3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ msg: "hola mundo " + req.params.nombre });
            }
            catch (error) {
                res.status(400).send({ msg: "error en funcion" });
            }
        });
    }
    funcion4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ msg: "hola mundo " + req.headers.nombre });
            }
            catch (error) {
                res.status(400).send({ msg: "error en funcion" });
            }
        });
    }
    parser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ msg: "hola mundo " + req.headers.nombre });
            }
            catch (error) {
                res.status(400).send({ msg: "error en funcion" });
            }
        });
    }
}
exports.apiController = new ApiController();
