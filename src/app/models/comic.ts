export class Comic{
    public titulo:string;
    public imagen:string;
    public descripcion:string;

    //CREAMOS UN CONSTRUCTOR PARA RECIBIR
    //LOS PARAMETROS DEL PRODUCTO
    constructor(name: string,imagen:string,descripcion:string){
        this.titulo = name;
        this.imagen = imagen;
        this.descripcion = descripcion
    }
}