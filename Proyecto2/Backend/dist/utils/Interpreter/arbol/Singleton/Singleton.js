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
        if (data.titulo != undefined) {
            this.error +=
                "<tr>" +
                    "<td>" + data.titulo + "</td>" +
                    "<td>" + data.descripcion + "</td>" +
                    "<td>" + data.linea + "</td>" +
                    "<td>" + data.columna + "</td>" +
                    "</tr>";
        }
    }
    /**
     *
     * @returns un string con el codigo con el formato html para reportar
     */
    get_error() {
        var inicio = `
        <!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
                crossorigin="anonymous"></script>
            <title>REPORTE DE ERRORES LEXICOS</title>
        </head>
        <style>
            body {
                background-color: #eab5f7;
            }
        
            h3 {
                position: relative;
                padding-left: 40%;
                padding-top: 20px;
            }
        
            h5 {
                position: relative;
                padding-left: 8%;
                padding-top: 20px;
            }
        
            #tabla {
                width: 80%;
                margin: 20px;
                padding-left: 100px;
                left: 125px;
                position: relative;
            }
        </style>
        
        <body>
            <h3>TABLA DE ERRORES</h3>
            <h5>CRISTIAN FERNANDO HERNANDEZ TELLO</h5>
            <h5>202010905</h5>
            <table id="tabla" class="table table-striped">`;
        var final = `
                </tbody>
                </table>
                </body>   
            </html>`;
        return inicio + `
        <thead class="table-dark">
            <tr>
                <th scope="col">TIPO</th>
                <th scope="col">DESCRIPCION</th>
                <th scope="col">FILA</th>
                <th scope="col">COLUMNA</th>
            </tr>
        </thead>${this.error}` + final;
    }
}
exports.Singleton = Singleton;
