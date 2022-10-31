"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataType = exports.tipoString = void 0;
class Type {
    constructor(tipo) {
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
}
exports.default = Type;
function tipoString(tipo) {
    if (tipo == "int") {
        return "int";
    }
    else if (tipo == "1") {
        return "string";
    }
    else if (tipo == "double") {
        return "double";
    }
    else if (tipo == "3") {
        return "boolean";
    }
    else if (tipo == "4") {
        return "char";
    }
    else if (tipo == "5") {
        return "id";
    }
    else if (tipo == "6") {
        return "indefinido";
    }
    return "";
}
exports.tipoString = tipoString;
var DataType;
(function (DataType) {
    DataType[DataType["ENTERO"] = 0] = "ENTERO";
    DataType[DataType["STRING"] = 1] = "STRING";
    DataType[DataType["CARACTER"] = 2] = "CARACTER";
    DataType[DataType["BOOLEAN"] = 3] = "BOOLEAN";
    DataType[DataType["DOUBLE"] = 4] = "DOUBLE";
    DataType[DataType["IDENTIFICADOR"] = 5] = "IDENTIFICADOR";
    DataType[DataType["INDEFINIDO"] = 6] = "INDEFINIDO";
})(DataType = exports.DataType || (exports.DataType = {}));
