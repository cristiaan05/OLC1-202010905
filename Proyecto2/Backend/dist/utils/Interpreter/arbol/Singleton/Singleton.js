"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() {
        this.error = "";
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    /**
   * Agrega un error a la lista.
   *
   * @remarks
   * Recibe un objeto {tipo,descripcion, linea, columna} el cual es almacenado con un formato <tr> para presentar como una table en html
   *
   */
    add_error(data) {
        this.error +=
            "<tr>" +
                "<td>" + data.titulo + "</td>" +
                "<td>" + data.descripcion + "</td>" +
                "<td>" + data.linea + "</td>" +
                "<td>" + data.columna + "</td>" +
                "</tr>";
    }
    /**
     *
     * @returns un string con el codigo con el formato html para reportar
     */
    get_error() {
        return `
        <table border=1 style="width: 75%;margin: 0 auto;" cellpadding ="5">
            <tr>
                <th>Tipo error</th>
                <th>Descripcion</th>
                <th>Linea</th>
                <th>Columna</th>
            </tr>${this.error}
        </table>`;
    }
}
exports.Singleton = Singleton;
