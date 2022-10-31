export default class Type {
    private tipo: DataType;

    constructor(tipo: DataType) {
        this.tipo = tipo;
    }
    public getTipo(): DataType {
        return this.tipo;
    }
    public setTipo(tipo: DataType): void {
        this.tipo = tipo;
    }
}

export function tipoString(tipo: string): string {
    if (tipo == "int") {
        return "int"
    } else if (tipo == "1") {
        return "string"
    } else if (tipo == "double") {
        return "double"
    } else if (tipo == "3") {
        return "boolean"
    } else if (tipo == "4") {
        return "char"
    } else if (tipo == "5") {
        return "id"
    } else if (tipo == "6") {
        return "indefinido"
    }
    return ""
}

export enum DataType {
    ENTERO,
    STRING,
    CARACTER,
    BOOLEAN,
    DOUBLE,
    IDENTIFICADOR,
    INDEFINIDO
}