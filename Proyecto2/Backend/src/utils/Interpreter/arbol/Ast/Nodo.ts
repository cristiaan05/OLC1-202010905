
export default class  Nodo{
    public id;
    public hijos:Array<Nodo>;
    public valor;
    public tipo;
    constructor(valor:string,tipo:string){
        this.id=0;
        this.valor=valor;
        this.tipo=tipo;
        this.hijos=new Array<Nodo>();

    }
    getValor(){
        return this.valor;
    }
    getTipo(){
        this.tipo;
    }

    agregarHijo(hijo:string){
        this.hijos.push(new Nodo(hijo,""));
    }

    public agregarHijo_nodo(hijo:Nodo) {
        this.hijos.push(hijo);
    }
    public getHijos():Array<Nodo>
    {
        return this.hijos;
    }

}




//exportar la clase y poder importarla en otras clases 
//module.exports= Nodo;